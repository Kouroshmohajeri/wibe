import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | WiBe",
  description:
    "Información sobre el uso de cookies propias y de terceros en wibeonline.es.",
};

export default function PoliticaCookiesPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-20">
      <h1 className="text-3xl font-extrabold text-[#0b2d55] mb-6">
        Política de Cookies
      </h1>

      <p className="text-black/70 mb-6 leading-relaxed">
        En WiBe utilizamos cookies propias y de terceros para garantizar el
        correcto funcionamiento de la web, analizar el uso del sitio y, en su
        caso, mostrarte publicidad relacionada con tus preferencias. A
        continuación te explicamos qué tipos de cookies usamos y para qué.
      </p>

      <h2 className="text-xl font-bold text-[#0b2d55] mt-10 mb-3">
        ¿Qué es una cookie?
      </h2>
      <p className="text-black/70 mb-6 leading-relaxed">
        Una cookie es un pequeño archivo que se almacena en tu navegador cuando
        visitas una página web. Permite, entre otras cosas, recordar tus
        preferencias y reconocerte en visitas sucesivas.
      </p>

      <h2 className="text-xl font-bold text-[#0b2d55] mt-10 mb-3">
        Tipos de cookies que utilizamos
      </h2>

      <h3 className="font-bold text-[#0b2d55] mt-6 mb-2">Cookies necesarias</h3>
      <p className="text-black/70 mb-4 leading-relaxed">
        Imprescindibles para el funcionamiento básico de la web, como recordar
        tu elección de cookies. No requieren consentimiento y no se pueden
        desactivar.
      </p>

      <h3 className="font-bold text-[#0b2d55] mt-6 mb-2">Cookies analíticas</h3>
      <p className="text-black/70 mb-4 leading-relaxed">
        Nos permiten conocer cómo interactúan los usuarios con la web (páginas
        visitadas, tiempo de permanencia, etc.) para poder mejorarla. Solo se
        instalan si das tu consentimiento.
      </p>

      <h3 className="font-bold text-[#0b2d55] mt-6 mb-2">
        Cookies de marketing
      </h3>
      <p className="text-black/70 mb-4 leading-relaxed">
        Utilizadas para mostrarte publicidad relevante en función de tu
        navegación. Solo se instalan si das tu consentimiento.
      </p>

      <h2 className="text-xl font-bold text-[#0b2d55] mt-10 mb-3">
        ¿Cómo puedo cambiar mis preferencias?
      </h2>
      <p className="text-black/70 mb-6 leading-relaxed">
        Puedes aceptar, rechazar o configurar el uso de cookies en cualquier
        momento borrando los datos de navegación de tu navegador para que vuelva
        a aparecer el aviso de cookies, o contactando con nosotros en{" "}
        <span className="font-semibold">soporte@wibeonline.es</span>.
      </p>

      <p className="text-black/40 text-xs mt-14">
        Última actualización: agosto de 2026.
      </p>
    </main>
  );
}
