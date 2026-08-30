import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No se ha recibido ningún archivo" },
        { status: 400 },
      );
    }

    const validTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Formato no soportado. Sube un PDF, JPG, PNG o WEBP." },
        { status: 400 },
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Analiza este documento. Primero determina si es una factura de telecomunicaciones española (fibra, internet y/o móvil) de un operador como Movistar, Vodafone, Orange, O2, Lowi, DIGI, Yoigo, MásMóvil, Jazztel, Pepephone, etc. Si NO es una factura de telecomunicaciones (por ejemplo: factura de luz, agua, gas, un ticket de compra, una foto sin relación, un documento en blanco, u otro tipo de documento), marca is_telecom_invoice como false y no rellenes el resto de campos con datos inventados. Si SÍ es una factura de telecomunicaciones, marca is_telecom_invoice como true y extrae los datos con el máximo detalle: lista CADA línea móvil por separado, con su número visible y los GB de esa línea concreta. Ignora completamente cualquier servicio de televisión. No inventes datos.",
            },
            {
              inlineData: {
                mimeType: file.type,
                data: bytes.toString("base64"),
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            is_telecom_invoice: {
              type: Type.BOOLEAN,
              description:
                "true solo si el documento es realmente una factura de fibra/internet/móvil de un operador de telecomunicaciones español",
            },
            detected_document_type: {
              type: Type.STRING,
              description:
                "Breve descripción de qué tipo de documento parece ser (ej: 'factura de electricidad', 'foto sin relación', 'factura de telefonía')",
            },
            provider: {
              type: Type.STRING,
              description:
                "Nombre del operador actual (ej: Movistar, Vodafone, Orange). Vacío si no aplica",
            },
            monthly_price: {
              type: Type.NUMBER,
              description:
                "Precio mensual total de la factura en euros. 0 si no aplica",
            },
            fiber_speed_mb: {
              type: Type.NUMBER,
              description:
                "Velocidad de fibra/internet en Mb. 0 si no tiene fibra o no aplica",
            },
            fiber_symmetric: {
              type: Type.BOOLEAN,
              description: "Si la fibra es simétrica",
            },
            mobile_lines: {
              type: Type.ARRAY,
              description:
                "Una entrada por CADA línea móvil individual. Vacío si no aplica",
              items: {
                type: Type.OBJECT,
                properties: {
                  number: { type: Type.STRING },
                  data_gb: { type: Type.NUMBER },
                },
                required: ["number", "data_gb"],
              },
            },
            has_permanence: {
              type: Type.BOOLEAN,
              description: "Si la factura menciona permanencia",
            },
          },
          required: [
            "is_telecom_invoice",
            "detected_document_type",
            "provider",
            "monthly_price",
            "fiber_speed_mb",
            "fiber_symmetric",
            "mobile_lines",
            "has_permanence",
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      return NextResponse.json(
        { error: "No se pudieron extraer datos de la factura" },
        { status: 422 },
      );
    }

    const data = JSON.parse(text);

    if (!data.is_telecom_invoice) {
      return NextResponse.json(
        {
          notTelecomInvoice: true,
          detectedType:
            data.detected_document_type || "un documento no identificado",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("extract-invoice error:", err);
    return NextResponse.json(
      { error: "Error al procesar la factura. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
