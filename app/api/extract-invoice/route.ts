import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not configured.");

      return NextResponse.json(
        { error: "El servicio de análisis no está configurado correctamente." },
        { status: 500 },
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No se ha recibido ningún archivo." },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "El archivo supera el límite máximo de 10 MB." },
        { status: 413 },
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
        {
          error:
            "Formato no soportado. Sube una factura en PDF, JPG, PNG o WEBP.",
        },
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
              text: `
Analiza cuidadosamente este documento y extrae ÚNICAMENTE información que aparezca realmente en él.

PRIMER PASO — IDENTIFICAR EL DOCUMENTO

Determina si el documento es realmente una factura de telecomunicaciones española que incluya fibra/internet y/o telefonía móvil.

Debe considerarse factura de telecomunicaciones si corresponde a servicios como:
- fibra óptica
- internet
- telefonía fija
- telefonía móvil

Puede ser de operadores como Movistar, Vodafone, Orange, O2, Lowi, DIGI, Yoigo, MásMóvil, Jazztel, Pepephone u otros.

NO consideres factura de telecomunicaciones:
- electricidad
- agua
- gas
- seguros
- compras
- tickets
- bancos
- nóminas
- documentos administrativos
- capturas o fotos sin información suficiente
- cualquier otro documento que no sea una factura de telecomunicaciones.

Si NO es una factura de telecomunicaciones:
- is_telecom_invoice = false
- describe el tipo de documento en detected_document_type
- no inventes ningún otro dato
- devuelve los campos numéricos con 0
- devuelve mobile_lines como []
- devuelve fiber_symmetric como false
- devuelve has_permanence como false

SEGUNDO PASO — PRECIO

Si es una factura de telecomunicaciones, identifica el importe que corresponde al coste recurrente del servicio contratado.

IMPORTANTE:
- No confundas el total de la factura con cargos extraordinarios.
- No incluyas pagos atrasados, recargos, penalizaciones, compras puntuales, financiación de dispositivos, roaming puntual u otros cargos extraordinarios como precio mensual habitual.
- Si la factura contiene varios conceptos, intenta identificar la cuota recurrente habitual de fibra + móvil.
- Si existe un descuento temporal, utiliza el importe que realmente se está cobrando en esta factura.
- Si no puedes determinar de forma fiable el precio mensual, devuelve 0 en monthly_price y marca price_uncertain = true.
- No inventes.

TERCER PASO — FIBRA / INTERNET

Identifica la velocidad comercial de fibra/internet contratada.

Ejemplos:
- 600 Mb → fiber_speed_mb = 600
- 1 Gb → fiber_speed_mb = 1000
- 1 Gbps → fiber_speed_mb = 1000
- 300 Mb → fiber_speed_mb = 300

IMPORTANTE:
- No confundas velocidad de descarga con datos móviles.
- No conviertas 1 Gb en 1 MB.
- 1 Gb de velocidad de fibra equivale a 1000 Mb para este campo.
- Si la velocidad no aparece claramente, devuelve 0.

Determina si la fibra es simétrica únicamente si el documento lo indica explícitamente o proporciona suficiente información para afirmarlo.

Si no se puede determinar:
fiber_symmetric = false
fiber_symmetric_uncertain = true

CUARTO PASO — LÍNEAS MÓVILES

Este punto es CRÍTICO.

Debes identificar CADA línea móvil INDIVIDUAL que aparezca en la factura.

Para cada línea:
- number = número de teléfono visible, si aparece
- data_gb = cantidad de GB asociada específicamente a ESA línea

NO agrupes varias líneas en una sola entrada.

Ejemplo:

Si la factura muestra:

612345678 — 30 GB
612345679 — 30 GB

debes devolver:

[
  { "number": "612345678", "data_gb": 30 },
  { "number": "612345679", "data_gb": 30 }
]

NO devuelvas:

[
  { "number": "", "data_gb": 60 }
]

Si la factura muestra:

612345678 — 60 GB

devuelve una sola línea con 60 GB.

Si aparece "datos compartidos", "bolsa de datos", "datos compartidos entre líneas" o una cantidad total que NO puede asignarse de forma individual a cada línea:

- NO repartas los GB entre las líneas.
- NO inventes una cantidad por línea.
- Usa data_gb = 0 para las líneas cuya cantidad individual no pueda determinarse.
- Marca mobile_data_uncertain = true.

Si una línea tiene datos ilimitados:
- utiliza data_gb = 999
- utiliza unlimited = true

Si el número de teléfono no aparece, deja number = "".
NO inventes números.

QUINTO PASO — TELEVISIÓN

IGNORA COMPLETAMENTE cualquier servicio de televisión.

No incluyas televisión en:
- monthly_price
- mobile_lines
- fiber_speed_mb
- ninguna decisión relacionada con las tarifas WiBe.

SEXTO PASO — PERMANENCIA

Indica si la factura menciona explícitamente permanencia o compromiso de permanencia.

No deduzcas permanencia simplemente porque exista un contrato.

SÉPTIMO PASO — FIABILIDAD

Es muy importante NO inventar información.

Si un dato no aparece claramente:
- utiliza 0, false, [] o "" según corresponda
- marca el campo de incertidumbre correspondiente

La extracción debe representar la factura, no una suposición.

No intentes elegir una tarifa WiBe.
No calcules qué plan de WiBe es mejor.
No compares precios con WiBe.

Tu trabajo es exclusivamente extraer correctamente los datos de la factura.
              `,
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
                "true únicamente si el documento es realmente una factura de telecomunicaciones.",
            },

            detected_document_type: {
              type: Type.STRING,
              description:
                "Tipo de documento detectado. Ejemplo: factura de telefonía, factura de electricidad, ticket, etc.",
            },

            provider: {
              type: Type.STRING,
              description:
                "Nombre del operador de telecomunicaciones que aparece en la factura. Vacío si no aplica.",
            },

            monthly_price: {
              type: Type.NUMBER,
              description:
                "Importe recurrente de la cuota de fibra + móvil realmente cobrada en esta factura, excluyendo cargos extraordinarios y televisión. 0 si no puede determinarse.",
            },

            price_uncertain: {
              type: Type.BOOLEAN,
              description:
                "true si no se puede determinar con suficiente confianza el precio mensual recurrente.",
            },

            fiber_speed_mb: {
              type: Type.NUMBER,
              description:
                "Velocidad comercial de fibra/internet expresada en Mb. Ejemplo: 600, 1000. 0 si no aparece.",
            },

            fiber_symmetric: {
              type: Type.BOOLEAN,
              description:
                "true únicamente cuando la factura indica explícitamente que la fibra es simétrica.",
            },

            fiber_symmetric_uncertain: {
              type: Type.BOOLEAN,
              description:
                "true cuando no hay información suficiente para determinar si la fibra es simétrica.",
            },

            mobile_lines: {
              type: Type.ARRAY,
              description:
                "Una entrada independiente para CADA línea móvil individual visible en la factura.",
              items: {
                type: Type.OBJECT,
                properties: {
                  number: {
                    type: Type.STRING,
                    description:
                      "Número de teléfono visible para esta línea. Vacío si no aparece.",
                  },

                  data_gb: {
                    type: Type.NUMBER,
                    description:
                      "GB asociados específicamente a esta línea. 0 si no se pueden determinar. 999 si son ilimitados.",
                  },

                  unlimited: {
                    type: Type.BOOLEAN,
                    description:
                      "true si esta línea tiene datos móviles ilimitados.",
                  },
                },
                required: ["number", "data_gb", "unlimited"],
              },
            },

            mobile_data_uncertain: {
              type: Type.BOOLEAN,
              description:
                "true si la factura utiliza datos compartidos o no permite determinar los GB individuales de las líneas.",
            },

            has_permanence: {
              type: Type.BOOLEAN,
              description:
                "true únicamente si la factura menciona explícitamente permanencia o compromiso de permanencia.",
            },
          },

          required: [
            "is_telecom_invoice",
            "detected_document_type",
            "provider",
            "monthly_price",
            "price_uncertain",
            "fiber_speed_mb",
            "fiber_symmetric",
            "fiber_symmetric_uncertain",
            "mobile_lines",
            "mobile_data_uncertain",
            "has_permanence",
          ],
        },
      },
    });

    const text = response.text;

    if (!text) {
      return NextResponse.json(
        { error: "No se pudieron extraer datos de la factura." },
        { status: 422 },
      );
    }

    let data: {
      is_telecom_invoice: boolean;
      detected_document_type: string;
      provider: string;
      monthly_price: number;
      price_uncertain: boolean;
      fiber_speed_mb: number;
      fiber_symmetric: boolean;
      fiber_symmetric_uncertain: boolean;
      mobile_lines: Array<{
        number: string;
        data_gb: number;
        unlimited: boolean;
      }>;
      mobile_data_uncertain: boolean;
      has_permanence: boolean;
    };

    try {
      data = JSON.parse(text);
    } catch {
      console.error("Invalid JSON returned by Gemini:", text);

      return NextResponse.json(
        { error: "La respuesta del análisis no tiene un formato válido." },
        { status: 422 },
      );
    }

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

    /*
     * Defensive normalization.
     *
     * The AI extracts the data, but the application remains responsible
     * for making sure the structure is safe and predictable before
     * compareOffers.ts receives it.
     */

    const normalizedMobileLines = Array.isArray(data.mobile_lines)
      ? data.mobile_lines.map((line) => ({
          number:
            typeof line.number === "string"
              ? line.number.replace(/\s+/g, "").trim()
              : "",

          data_gb:
            typeof line.data_gb === "number" &&
            Number.isFinite(line.data_gb) &&
            line.data_gb >= 0
              ? line.data_gb
              : 0,

          unlimited: line.unlimited === true,
        }))
      : [];

    const normalizedData = {
      ...data,

      provider: typeof data.provider === "string" ? data.provider.trim() : "",

      monthly_price:
        typeof data.monthly_price === "number" &&
        Number.isFinite(data.monthly_price) &&
        data.monthly_price >= 0
          ? data.monthly_price
          : 0,

      fiber_speed_mb:
        typeof data.fiber_speed_mb === "number" &&
        Number.isFinite(data.fiber_speed_mb) &&
        data.fiber_speed_mb >= 0
          ? data.fiber_speed_mb
          : 0,

      fiber_symmetric: data.fiber_symmetric === true,

      mobile_lines: normalizedMobileLines,
    };

    return NextResponse.json(normalizedData);
  } catch (err) {
    console.error("extract-invoice error:", err);

    return NextResponse.json(
      {
        error: "Error al procesar la factura. Inténtalo de nuevo.",
      },
      { status: 500 },
    );
  }
}
