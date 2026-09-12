import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import TopStrip from "@/components/TopStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones aplicables a los productos y servicios comercializados bajo la marca WiBe.",
  alternates: {
    canonical: "https://wibeonline.es/terminos-y-condiciones",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="bg-white text-[#12385d]">
        <article className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
          <header className="mb-12">
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#e85d3f] mb-3">
              Información contractual
            </p>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0b2d55]">
              Términos y Condiciones
            </h1>

            <p className="mt-5 text-base md:text-lg leading-7 text-[#52677d]">
              Condiciones aplicables a la solicitud, contratación y prestación
              de los productos y servicios comercializados bajo la marca WiBe.
            </p>
          </header>

          <div className="space-y-10 text-[15px] md:text-base leading-7 text-[#40566d]">
            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                1. Identificación del prestador
              </h2>

              <p>
                Los productos y servicios ofrecidos bajo la marca{" "}
                <strong className="text-[#12385d]">WiBe</strong> son
                comercializados por{" "}
                <strong className="text-[#12385d]">JUST SMILE 23 S.L.</strong>,
                sociedad con NIF B44687077 y domicilio social en Calle Doctor
                Zamenhoff 6P. 7 PTA. 2, 08020 Barcelona, Barcelona, España.
              </p>

              <p className="mt-4">
                WiBe es una marca propiedad de JUST SMILE 23 S.L. Las
                condiciones particulares de cada servicio podrán determinar,
                cuando corresponda, los operadores, proveedores o redes que
                intervienen en su prestación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                2. Objeto
              </h2>

              <p>
                Estos Términos y Condiciones regulan la contratación y uso de
                los productos y servicios comercializados bajo la marca WiBe a
                través de wibeonline.es y de los canales habilitados para ello.
              </p>

              <p className="mt-4">
                La contratación de un servicio implica la aceptación de estos
                Términos y Condiciones, junto con las condiciones particulares
                de la tarifa contratada y cualquier otra documentación
                contractual que resulte aplicable.
              </p>

              <p className="mt-4">
                En caso de existir condiciones específicas para una determinada
                tarifa o servicio, dichas condiciones prevalecerán respecto de
                la información general cuando exista contradicción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                3. Proceso de contratación
              </h2>

              <p>
                El usuario podrá solicitar información o iniciar la contratación
                de un servicio WiBe a través de los canales disponibles en cada
                momento.
              </p>

              <p className="mt-4">
                La solicitud estará sujeta a la comprobación de los datos
                necesarios, la disponibilidad técnica del servicio y, cuando
                corresponda, la verificación de identidad o de otros requisitos
                necesarios para formalizar la contratación.
              </p>

              <p className="mt-4">
                La contratación se considerará formalizada cuando el proceso
                haya sido completado y el cliente haya recibido la confirmación
                correspondiente, salvo que las condiciones particulares del
                servicio establezcan otro momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                4. Tarifas y precios
              </h2>

              <p>
                Los precios publicados en wibeonline.es serán los aplicables en
                el momento de la contratación, salvo error manifiesto o que se
                indique expresamente otra cosa.
              </p>

              <p className="mt-4">
                Las tarifas podrán incluir diferentes combinaciones de fibra,
                líneas móviles y datos móviles. Las características concretas de
                cada tarifa serán las indicadas en la oferta y en la
                documentación contractual correspondiente.
              </p>

              <p className="mt-4">
                Actualmente, las tarifas publicadas pueden incluir opciones de
                fibra de 600 Mb o 1 Gb y diferentes capacidades de datos
                móviles. Una tarifa que incluya la posibilidad de utilizar 60 GB
                podrá configurarse, cuando así se indique en la oferta, como una
                línea de 60 GB o como dos líneas de 30 GB.
              </p>

              <p className="mt-4">
                Las líneas móviles adicionales tendrán el precio indicado en la
                tarifa o en la oferta contratada. Actualmente, el precio
                publicado para una línea adicional es de{" "}
                <strong className="text-[#12385d]">3 € al mes</strong>.
              </p>

              <p className="mt-4">
                La instalación y activación del servicio tienen un coste de{" "}
                <strong className="text-[#12385d]">0 €</strong>, salvo que una
                oferta o condición particular indique expresamente lo contrario.
              </p>

              <p className="mt-4">
                Salvo que se indique expresamente lo contrario, los precios
                incluyen los impuestos legalmente aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                5. Fibra y servicio de internet
              </h2>

              <p>
                Las condiciones de velocidad indicadas en cada tarifa
                corresponden a las características comerciales del servicio
                contratado.
              </p>

              <p className="mt-4">
                La velocidad efectiva puede verse afectada por factores
                técnicos, equipamiento utilizado, configuración de la red,
                saturación, conexión mediante Wi-Fi y otras circunstancias
                ajenas al control directo de JUST SMILE 23 S.L.
              </p>

              <p className="mt-4">
                La disponibilidad de una determinada velocidad o modalidad de
                fibra estará sujeta a la cobertura y disponibilidad técnica en
                la dirección de instalación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                6. Servicio móvil y cobertura
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
                acuerdo con las condiciones de la tarifa, disponibilidad técnica
                y características del servicio contratado.
              </p>

              <p className="mt-4">
                La cobertura y calidad del servicio móvil pueden variar según la
                ubicación, condiciones de propagación, características del
                dispositivo, saturación de la red, obstáculos físicos y otros
                factores técnicos.
              </p>

              <p className="mt-4">
                La disponibilidad de cobertura en una ubicación concreta podrá
                comprobarse a través de los canales habilitados por WiBe antes
                de la contratación cuando dicho servicio esté disponible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                7. Instalación y activación
              </h2>

              <p>
                La instalación y activación de los servicios WiBe tienen un
                coste de <strong className="text-[#12385d]">0 €</strong>, salvo
                que una oferta o condición particular indique expresamente lo
                contrario.
              </p>

              <p className="mt-4">
                La activación e instalación estarán sujetas a la disponibilidad
                técnica y a las condiciones aplicables a la dirección indicada
                por el cliente.
              </p>

              <p className="mt-4">
                Cuando sea necesaria una instalación física, el cliente deberá
                facilitar el acceso al inmueble y a las zonas necesarias para
                realizar los trabajos.
              </p>

              <p className="mt-4">
                Los plazos comunicados para la activación o instalación son
                estimaciones y pueden verse afectados por circunstancias
                técnicas, disponibilidad de citas, permisos, terceros u otras
                causas justificadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                8. Equipos
              </h2>

              <p>
                Cuando el servicio requiera equipos proporcionados por WiBe o
                por proveedores colaboradores, su uso estará destinado a la
                prestación del servicio contratado.
              </p>

              <p className="mt-4">
                El cliente deberá utilizar los equipos de forma adecuada y
                seguir las instrucciones proporcionadas para su instalación y
                funcionamiento.
              </p>

              <p className="mt-4">
                Cuando corresponda devolver un equipo al finalizar el servicio,
                el cliente deberá hacerlo en las condiciones y dentro del plazo
                indicados en las condiciones particulares o en las instrucciones
                facilitadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                9. Facturación y pago
              </h2>

              <p>
                El cliente deberá abonar las cantidades correspondientes a los
                servicios contratados de acuerdo con la tarifa, periodicidad y
                método de pago acordados.
              </p>

              <p className="mt-4">
                La factura podrá incluir la cuota mensual del servicio, líneas
                adicionales, servicios adicionales y cualquier otro importe
                expresamente aceptado por el cliente.
              </p>

              <p className="mt-4">
                La fecha concreta de facturación será la indicada al cliente
                durante el proceso de contratación y/o en la documentación
                contractual correspondiente.
              </p>

              <p className="mt-4">
                En caso de impago, podrán aplicarse las medidas previstas en la
                normativa y en las condiciones contractuales, incluyendo, cuando
                corresponda, la suspensión o terminación del servicio conforme
                al procedimiento legalmente aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                10. Permanencia y baja
              </h2>

              <p>
                Los servicios WiBe están sujetos a un compromiso de permanencia
                de <strong className="text-[#12385d]">12 meses</strong> desde la
                activación del servicio, salvo que las condiciones particulares
                de una oferta indiquen expresamente otra cosa.
              </p>

              <p className="mt-4">
                Si el cliente solicita la baja o cancela el servicio antes de
                finalizar el período de permanencia de 12 meses, se aplicará una
                penalización por cancelación anticipada de{" "}
                <strong className="text-[#12385d]">150 €</strong>, de acuerdo
                con las condiciones aplicables al servicio contratado.
              </p>

              <p className="mt-4">
                Una vez finalizado el período de permanencia, el cliente podrá
                solicitar la baja del servicio sin la penalización asociada al
                compromiso de permanencia, sin perjuicio de cualquier importe
                que pudiera estar pendiente de pago.
              </p>

              <p className="mt-4">
                El cliente podrá solicitar la baja del servicio a través de los
                canales habilitados por WiBe, sin perjuicio de los requisitos y
                plazos que puedan resultar legalmente aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                11. Derecho de desistimiento
              </h2>

              <p>
                Cuando la contratación se realice a distancia o fuera de
                establecimiento mercantil y el cliente tenga la condición de
                consumidor, podrá existir un derecho legal de desistimiento en
                los términos y excepciones establecidos por la normativa
                aplicable.
              </p>

              <p className="mt-4">
                Cuando el cliente solicite que la prestación de un servicio
                comience antes de finalizar el plazo legal de desistimiento, se
                aplicarán las consecuencias previstas por la legislación
                vigente, incluyendo, cuando corresponda, el pago proporcional
                por los servicios efectivamente prestados.
              </p>

              <p className="mt-4">
                La información específica sobre el ejercicio del desistimiento,
                sus plazos y excepciones se facilitará al cliente cuando resulte
                aplicable a la contratación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                12. Uso adecuado de los servicios
              </h2>

              <p>
                El cliente deberá utilizar los servicios de acuerdo con la
                legislación vigente, estos Términos y Condiciones y las
                condiciones particulares de la tarifa contratada.
              </p>

              <p className="mt-4">
                No está permitido utilizar los servicios para actividades
                fraudulentas, ilícitas, abusivas o que puedan causar daños a la
                red, a otros usuarios o a terceros.
              </p>

              <p className="mt-4">
                El cliente será responsable del uso realizado desde sus líneas,
                dispositivos y credenciales, sin perjuicio de los derechos que
                le correspondan conforme a la legislación aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                13. Disponibilidad y mantenimiento
              </h2>

              <p>
                Los servicios pueden experimentar interrupciones o limitaciones
                temporales por trabajos de mantenimiento, averías, incidencias
                de terceros, causas de fuerza mayor u otras circunstancias
                técnicas.
              </p>

              <p className="mt-4">
                JUST SMILE 23 S.L. realizará esfuerzos razonables para resolver
                las incidencias y restablecer el servicio dentro de los plazos
                que resulten aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                14. Atención al cliente y reclamaciones
              </h2>

              <p>
                El cliente podrá contactar con WiBe a través de los canales de
                atención publicados en el sitio web para realizar consultas,
                comunicar incidencias o presentar reclamaciones.
              </p>

              <p className="mt-4">
                Las reclamaciones serán gestionadas de acuerdo con la normativa
                aplicable y con los procedimientos establecidos para el servicio
                contratado.
              </p>

              <p className="mt-4">
                Para cuestiones relacionadas con la protección de datos
                personales, el cliente puede consultar nuestra{" "}
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
                15. Protección de datos
              </h2>

              <p>
                El tratamiento de los datos personales necesarios para la
                contratación y prestación de los servicios se realizará de
                acuerdo con la normativa aplicable en materia de protección de
                datos.
              </p>

              <p className="mt-4">
                Puede consultarse toda la información relativa al tratamiento de
                datos personales en nuestra{" "}
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
                16. Modificación de las condiciones
              </h2>

              <p>
                Las condiciones aplicables a los servicios podrán actualizarse
                cuando sea necesario para reflejar cambios legales, técnicos,
                comerciales o en los servicios ofrecidos.
              </p>

              <p className="mt-4">
                Los cambios que afecten a contratos ya existentes se comunicarán
                al cliente cuando así lo exija la normativa aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#0b2d55] mb-4">
                17. Legislación aplicable y jurisdicción
              </h2>

              <p>
                Estos Términos y Condiciones se regirán por la legislación
                española, sin perjuicio de los derechos que correspondan a los
                consumidores y usuarios conforme a las normas imperativas que
                resulten aplicables.
              </p>

              <p className="mt-4">
                En caso de conflicto, serán competentes los juzgados y
                tribunales que correspondan conforme a la legislación aplicable.
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
