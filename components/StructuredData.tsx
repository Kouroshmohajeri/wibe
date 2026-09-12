export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WiBe",
    url: "https://wibeonline.es",
    logo: "https://wibeonline.es/assets/logo.webp",
    sameAs: ["https://www.instagram.com/wibeonline/"],
  };

  const offersSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "WiBe Fibra + Móvil",
    description:
      "Tarifas de fibra y móvil de WiBe, con precio claro y sin complicaciones.",
    brand: {
      "@type": "Brand",
      name: "WiBe",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Fibra 600 + 30GB",
        price: "29.90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
      {
        "@type": "Offer",
        name: "Fibra 600 + 60GB",
        price: "35",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
      {
        "@type": "Offer",
        name: "Fibra 600 + Móvil Ilimitado",
        price: "48",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
      {
        "@type": "Offer",
        name: "Fibra 1 Gb + 30GB",
        price: "35",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
      {
        "@type": "Offer",
        name: "Fibra 1 Gb + 60GB",
        price: "39",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
      {
        "@type": "Offer",
        name: "Fibra 1 Gb + Móvil Ilimitado",
        price: "52",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://wibeonline.es/planes#planes",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta la fibra y móvil de WiBe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las tarifas de fibra y móvil de WiBe empiezan desde 29.90€/mes, con fibra de 600 Mb y 30GB de móvil incluidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo compruebo la cobertura de WiBe en mi dirección?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes comprobar la cobertura disponible en tu dirección introduciendo tu teléfono o dirección en el formulario de la web, y un agente te confirmará la disponibilidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene permanencia la fibra y móvil de WiBe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las condiciones de permanencia dependen de la tarifa contratada. Consulta las condiciones concretas antes de contratar.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offersSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
