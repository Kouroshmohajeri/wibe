import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import TopStrip from "@/components/TopStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de WiBe, marca propiedad de JUST SMILE 23 S.L. Información sobre el titular del sitio web, condiciones de uso, propiedad intelectual y servicios.",
  alternates: {
    canonical: "https://wibeonline.es/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="bg-white text-[#12385d]">
        <article className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
          <header className="mb-12">
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#e85d3f] mb-3">
              Información legal
            </p>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0b2d55]">
              Aviso Legal
            </h1>

            <p className="mt-5 text-base md:text-lg leading-7 text-[#52677d]">
              Información legal sobre el titular del sitio web wibeonline.es y
              las condiciones de uso de los contenidos y servicios ofrecidos
              bajo la marca WiBe.
            </p>
          </header>

          <div className="space-y-10 text-[15px] md:text-base leading-7 text-[#40566d]">
            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                1. Titular del sitio web
              </h2>

              <p>
                De conformidad con la normativa aplicable, se informa de que el
                titular del sitio web{" "}
                <strong className="text-[#12385d]">wibeonline.es</strong> es:
              </p>

              <div className="mt-5 rounded-2xl bg-[#f5f8fb] p-5 space-y-1">
                <p>
                  <strong>Razón social:</strong> JUST SMILE 23 S.L.
                </p>
                <p>
                  <strong>NIF:</strong> B44687077
                </p>
                <p>
                  <strong>Domicilio social:</strong> Calle Doctor Zamenhoff 6P.
                  7 PTA. 2, 08020 Barcelona, Barcelona, España
                </p>
                <p>
                  <strong>Correo electrónico:</strong>{" "}
                  <a
                    href="mailto:adm@jsmile.es"
                    className="text-[#0b2d55] font-semibold underline underline-offset-2"
                  >
                    adm@jsmile.es
                  </a>
                </p>
              </div>

              <p className="mt-5">
                <strong className="text-[#12385d]">WiBe</strong> es una marca
                propiedad de JUST SMILE 23 S.L. Los productos y servicios
                ofrecidos bajo la marca WiBe se comercializan y prestan de
                acuerdo con las condiciones aplicables a cada servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                2. Objeto y ámbito de aplicación
              </h2>

              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web
                wibeonline.es, así como la información y contenidos disponibles
                a través del mismo.
              </p>

              <p className="mt-4">
                El acceso y navegación por el sitio web atribuyen la condición
                de usuario e implican la aceptación de las condiciones recogidas
                en este Aviso Legal, sin perjuicio de las condiciones
                particulares que puedan resultar aplicables a determinados
                productos o servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                3. Uso del sitio web
              </h2>

              <p>
                El usuario se compromete a utilizar el sitio web de forma
                diligente, lícita y conforme a la legislación vigente, la buena
                fe y el orden público.
              </p>

              <p className="mt-4">
                Queda prohibido utilizar el sitio web para fines ilícitos,
                fraudulentos o que puedan perjudicar los derechos o intereses de
                JUST SMILE 23 S.L., de otros usuarios o de terceros.
              </p>

              <p className="mt-4">
                Asimismo, el usuario deberá abstenerse de realizar actuaciones
                que puedan dañar, sobrecargar, inutilizar o impedir el normal
                funcionamiento del sitio web, sus sistemas o sus
                infraestructuras.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                4. Información sobre productos y servicios
              </h2>

              <p>
                La información publicada en wibeonline.es tiene carácter
                informativo y comercial. Las características, precios,
                condiciones y disponibilidad de los productos y servicios podrán
                estar sujetos a las condiciones particulares aplicables en cada
                momento.
              </p>

              <p className="mt-4">
                Antes de contratar un servicio, el usuario podrá consultar las
                condiciones específicas que resulten aplicables a la tarifa o
                producto seleccionado.
              </p>

              <p className="mt-4">
                La disponibilidad de determinados servicios puede depender de la
                cobertura, ubicación, disponibilidad técnica y otros factores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                5. Cobertura móvil
              </h2>

              <p>
                Los servicios móviles comercializados bajo la marca WiBe
                utilizan redes de operadores de telecomunicaciones
                colaboradores.
              </p>

              <p className="mt-4">
                La <strong className="text-[#12385d]">red de Orange</strong> se
                utiliza como cobertura por defecto. Cuando corresponda,
                determinadas líneas o servicios podrán utilizar también la{" "}
                <strong className="text-[#12385d]">red de Movistar</strong>, de
                acuerdo con las condiciones de la tarifa, la disponibilidad
                técnica y las condiciones aplicables al servicio contratado.
              </p>

              <p className="mt-4">
                La cobertura efectiva puede variar en función de la ubicación,
                condiciones de propagación, características del dispositivo,
                saturación de la red, elementos físicos y otros factores
                técnicos.
              </p>

              <p className="mt-4">
                La referencia a Orange o Movistar se realiza exclusivamente para
                informar sobre las redes utilizadas para la prestación de
                determinados servicios. WiBe no es Orange ni Movistar, ni
                implica por sí misma una relación societaria con dichas
                compañías.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                6. Propiedad intelectual e industrial
              </h2>

              <p>
                Todos los contenidos del sitio web, incluyendo, entre otros,
                textos, fotografías, imágenes, gráficos, logotipos, iconos,
                diseños, elementos audiovisuales, código fuente y estructura del
                sitio, están protegidos por la normativa aplicable en materia de
                propiedad intelectual e industrial.
              </p>

              <p className="mt-4">
                Los derechos sobre los elementos identificativos y contenidos de
                WiBe pertenecen a JUST SMILE 23 S.L. o, cuando corresponda, a
                sus respectivos titulares.
              </p>

              <p className="mt-4">
                Salvo que exista autorización previa o que la legislación lo
                permita, queda prohibida la reproducción, distribución,
                transformación, comunicación pública, extracción o explotación
                de los contenidos del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                7. Responsabilidad
              </h2>

              <p>
                JUST SMILE 23 S.L. realiza esfuerzos razonables para que la
                información publicada en el sitio web sea correcta y esté
                actualizada. No obstante, no garantiza que los contenidos estén
                permanentemente libres de errores, omisiones o imprecisiones.
              </p>

              <p className="mt-4">
                Asimismo, pueden producirse interrupciones temporales del
                servicio por tareas de mantenimiento, causas técnicas, problemas
                de conectividad, circunstancias ajenas al titular u otros
                motivos que no puedan razonablemente ser evitados.
              </p>

              <p className="mt-4">
                JUST SMILE 23 S.L. no será responsable de los daños que puedan
                derivarse de un uso indebido del sitio web por parte del usuario
                ni de circunstancias que estén fuera de su control razonable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                8. Enlaces a terceros
              </h2>

              <p>
                El sitio web puede contener enlaces a sitios web o servicios de
                terceros. Estos enlaces se facilitan con fines informativos o
                para facilitar el acceso a determinados servicios.
              </p>

              <p className="mt-4">
                JUST SMILE 23 S.L. no controla necesariamente los contenidos,
                políticas o prácticas de dichos sitios web y no asume
                responsabilidad por ellos.
              </p>

              <p className="mt-4">
                El uso de servicios de terceros, incluyendo redes sociales,
                estará sujeto a sus propias condiciones y políticas de
                privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                9. Protección de datos personales
              </h2>

              <p>
                El tratamiento de los datos personales de los usuarios se
                realizará de acuerdo con la normativa aplicable en materia de
                protección de datos.
              </p>

              <p className="mt-4">
                Para obtener información detallada sobre las categorías de datos
                tratados, las finalidades, bases jurídicas, conservación y
                derechos de los usuarios, puede consultarse nuestra{" "}
                <Link
                  href="/politica-privacidad"
                  className="text-[#0b2d55] font-semibold underline underline-offset-2"
                >
                  Política de Privacidad
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                10. Cookies
              </h2>

              <p>
                El sitio web puede utilizar cookies y tecnologías similares para
                diferentes finalidades, de acuerdo con la configuración elegida
                por el usuario y la normativa aplicable.
              </p>

              <p className="mt-4">
                Para obtener información sobre las cookies utilizadas y su
                gestión, puede consultarse nuestra{" "}
                <Link
                  href="/politica-cookies"
                  className="text-[#0b2d55] font-semibold underline underline-offset-2"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                11. Redes sociales
              </h2>

              <p>
                WiBe puede mantener perfiles en redes sociales y otras
                plataformas digitales. Las interacciones realizadas a través de
                dichas plataformas estarán sujetas también a las condiciones y
                políticas de privacidad de los respectivos proveedores.
              </p>

              <p className="mt-4">
                La cuenta oficial de WiBe en Instagram está disponible en{" "}
                <a
                  href="https://www.instagram.com/wibeonline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b2d55] font-semibold underline underline-offset-2"
                >
                  Instagram
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                12. Modificaciones
              </h2>

              <p>
                JUST SMILE 23 S.L. podrá modificar, actualizar o adaptar este
                Aviso Legal cuando resulte necesario, especialmente para
                adecuarlo a cambios legislativos, técnicos o en los servicios
                ofrecidos.
              </p>

              <p className="mt-4">
                La versión publicada en el sitio web será la aplicable en cada
                momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                13. Legislación aplicable
              </h2>

              <p>
                Este Aviso Legal se regirá por la legislación española, sin
                perjuicio de los derechos que correspondan a los consumidores y
                usuarios conforme a la normativa imperativa aplicable.
              </p>

              <p className="mt-4">
                Para cualquier cuestión relacionada con el sitio web, serán
                competentes los juzgados y tribunales que correspondan de
                conformidad con la legislación aplicable.
              </p>
            </section>

            <section className="border-t border-[#dbe5ee] pt-8">
              <p className="text-sm text-[#687b8e]">
                Última actualización: 2026
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
