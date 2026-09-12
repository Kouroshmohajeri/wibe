import type { Metadata } from "next";

import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos de WiBe, producto de JUST SMILE 23 S.L.",
  alternates: {
    canonical: "https://wibeonline.es/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <TopStrip />
      <Header />

      <main className="flex-1 bg-[#f6f9fc]">
        <article className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <div className="text-[#2fae60] font-extrabold text-[13px] tracking-wider uppercase mb-3">
              Protección de datos
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2d55] mb-4">
              Política de Privacidad
            </h1>

            <p className="text-sm text-[#5b7290] mb-10">
              Última actualización: 12 de septiembre de 2026
            </p>

            <div className="space-y-10 text-[15px] leading-7 text-[#425a73]">
              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  1. Responsable del tratamiento
                </h2>

                <p>
                  El responsable del tratamiento de los datos personales
                  tratados a través de este sitio web y de los servicios
                  comercializados bajo la marca WiBe es:
                </p>

                <div className="mt-4 rounded-2xl bg-[#f6f9fc] p-5 space-y-1">
                  <p>
                    <strong>JUST SMILE 23 S.L.</strong>
                  </p>
                  <p>NIF: B44687077</p>
                  <p>
                    Calle Doctor Zamenhoff 6P, 7 PTA. 2, 08020 Barcelona, España
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:adm@jsmile.es"
                      className="text-[#2fae60] font-semibold hover:underline"
                    >
                      adm@jsmile.es
                    </a>
                  </p>
                  <p>
                    Marca/producto: <strong>WiBe</strong>
                  </p>
                  <p>
                    Sitio web: <strong>https://wibeonline.es</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  2. Ámbito de esta política
                </h2>

                <p>
                  Esta Política de Privacidad informa sobre cómo JUST SMILE 23
                  S.L. trata los datos personales de las personas que visitan
                  wibeonline.es, solicitan información, comprueban la cobertura,
                  contactan con WiBe o contratan productos y servicios
                  comercializados bajo la marca WiBe.
                </p>

                <p className="mt-3">
                  El tratamiento de datos personales se realizará de conformidad
                  con el Reglamento (UE) 2016/679, de 27 de abril de 2016
                  (RGPD), la Ley Orgánica 3/2018, de 5 de diciembre, de
                  Protección de Datos Personales y garantía de los derechos
                  digitales (LOPDGDD), y demás normativa aplicable.
                </p>

                <p className="mt-3">
                  Cuando resulte aplicable por la naturaleza de los servicios
                  comercializados, también se tendrá en cuenta la normativa
                  específica en materia de comunicaciones electrónicas y
                  telecomunicaciones.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  3. Datos que podemos tratar
                </h2>

                <p>
                  Dependiendo de la relación que mantenga con WiBe, podemos
                  tratar las siguientes categorías de datos:
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>
                    <strong>Datos identificativos:</strong> nombre y apellidos
                    y, cuando sea necesario, documento identificativo.
                  </li>
                  <li>
                    <strong>Datos de contacto:</strong> teléfono, correo
                    electrónico y dirección postal.
                  </li>
                  <li>
                    <strong>Datos relacionados con la instalación:</strong>{" "}
                    dirección en la que se solicita o presta el servicio y datos
                    necesarios para comprobar la cobertura.
                  </li>
                  <li>
                    <strong>Datos contractuales:</strong> servicios, tarifas,
                    líneas, promociones, altas, bajas, modificaciones y demás
                    información relacionada con la relación contractual.
                  </li>
                  <li>
                    <strong>Datos de facturación y pago:</strong> facturas,
                    importes, estado de los pagos y datos necesarios para
                    gestionar cobros, devoluciones o reclamaciones.
                  </li>
                  <li>
                    <strong>Datos técnicos:</strong> información necesaria para
                    gestionar incidencias, instalaciones, soporte y
                    funcionamiento de los servicios.
                  </li>
                  <li>
                    <strong>Datos de comunicaciones:</strong> información
                    proporcionada cuando contacta con WiBe por teléfono, correo
                    electrónico, WhatsApp u otros canales habilitados.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  4. Finalidades del tratamiento
                </h2>

                <p>Los datos personales podrán utilizarse para:</p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Atender consultas y solicitudes de información.</li>
                  <li>
                    Comprobar la disponibilidad o cobertura de los servicios.
                  </li>
                  <li>Gestionar solicitudes de contratación.</li>
                  <li>Gestionar altas, bajas y modificaciones de servicios.</li>
                  <li>
                    Gestionar instalaciones y operaciones relacionadas con la
                    prestación del servicio.
                  </li>
                  <li>Proporcionar atención al cliente y soporte.</li>
                  <li>Gestionar facturación y pagos.</li>
                  <li>Gestionar reclamaciones e incidencias.</li>
                  <li>Prevenir fraude, abusos y usos no autorizados.</li>
                  <li>
                    Mantener la seguridad de nuestros sistemas y servicios.
                  </li>
                  <li>Cumplir las obligaciones legales aplicables.</li>
                  <li>
                    Enviar comunicaciones comerciales cuando exista una base
                    jurídica que lo permita.
                  </li>
                  <li>
                    Mejorar nuestros productos, servicios y procesos de
                    atención.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  5. Bases jurídicas
                </h2>

                <p>
                  Las bases jurídicas utilizadas dependerán de la finalidad
                  concreta del tratamiento.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>
                    <strong>Ejecución de un contrato:</strong> para gestionar la
                    contratación y prestación de los servicios.
                  </li>
                  <li>
                    <strong>Consentimiento:</strong> cuando sea necesario para
                    una finalidad concreta y el consentimiento sea la base
                    jurídica aplicable.
                  </li>
                  <li>
                    <strong>Cumplimiento de obligaciones legales:</strong>{" "}
                    cuando el tratamiento sea necesario para cumplir una
                    obligación legal.
                  </li>
                  <li>
                    <strong>Interés legítimo:</strong> cuando exista un interés
                    legítimo de JUST SMILE 23 S.L. y no prevalezcan sobre él los
                    derechos y libertades de la persona afectada.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  6. Comunicaciones comerciales
                </h2>

                <p>
                  JUST SMILE 23 S.L. podrá enviar comunicaciones comerciales
                  relacionadas con WiBe cuando exista una base jurídica que lo
                  permita.
                </p>

                <p className="mt-3">
                  Cuando sea necesario obtener consentimiento para el envío de
                  comunicaciones comerciales, este será solicitado de forma
                  específica.
                </p>

                <p className="mt-3">
                  El usuario podrá oponerse en cualquier momento al envío de
                  comunicaciones comerciales o retirar el consentimiento
                  prestado, sin que ello afecte a la licitud de los tratamientos
                  realizados con anterioridad.
                </p>

                <p className="mt-3">
                  Las comunicaciones comerciales mediante correo electrónico,
                  SMS, llamadas telefónicas, WhatsApp u otros medios
                  electrónicos se realizarán respetando los requisitos
                  establecidos por la normativa aplicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  7. Prestación de servicios de telecomunicaciones
                </h2>

                <p>
                  Cuando WiBe comercialice servicios de fibra, móvil u otros
                  servicios de comunicaciones electrónicas, determinados datos
                  personales y técnicos podrán ser necesarios para gestionar la
                  contratación, activación, instalación, mantenimiento,
                  facturación, soporte y seguridad de dichos servicios.
                </p>

                <p className="mt-3">
                  Cuando determinados elementos técnicos de la prestación del
                  servicio sean gestionados por operadores, proveedores de red u
                  otros colaboradores, estos podrán tratar los datos necesarios
                  para ejecutar las funciones que les correspondan.
                </p>

                <p className="mt-3">
                  Los datos relativos al tráfico, localización o utilización de
                  servicios de comunicaciones electrónicas, cuando sean
                  tratados, estarán sujetos a las garantías y limitaciones
                  establecidas por la normativa aplicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  8. Proveedores y destinatarios
                </h2>

                <p>
                  Para desarrollar nuestra actividad, JUST SMILE 23 S.L. puede
                  contar con proveedores y colaboradores que traten determinados
                  datos personales por nuestra cuenta o en el marco de la
                  prestación de los servicios.
                </p>

                <p className="mt-3">
                  Estos pueden incluir, dependiendo de los servicios utilizados:
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Proveedores de telecomunicaciones y redes.</li>
                  <li>Proveedores de instalación y mantenimiento.</li>
                  <li>Proveedores de atención al cliente.</li>
                  <li>Proveedores tecnológicos y de alojamiento.</li>
                  <li>Proveedores de facturación y pago.</li>
                  <li>Proveedores de herramientas de comunicación.</li>
                  <li>Proveedores de seguridad y prevención del fraude.</li>
                  <li>Asesores profesionales.</li>
                </ul>

                <p className="mt-3">
                  Cuando un proveedor actúe como encargado del tratamiento, se
                  establecerán las garantías contractuales exigidas por la
                  normativa de protección de datos.
                </p>

                <p className="mt-3">
                  También podremos comunicar datos a autoridades, organismos
                  públicos, jueces, tribunales u otros destinatarios cuando
                  exista una obligación legal o un requerimiento válido.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  9. Transferencias internacionales
                </h2>

                <p>
                  Procuraremos que los datos personales se traten dentro del
                  Espacio Económico Europeo.
                </p>

                <p className="mt-3">
                  Cuando alguno de nuestros proveedores implique una
                  transferencia internacional de datos, esta se realizará
                  utilizando los mecanismos y garantías reconocidos por la
                  normativa aplicable, como decisiones de adecuación, cláusulas
                  contractuales tipo u otros mecanismos válidos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  10. Conservación de los datos
                </h2>

                <p>
                  Los datos personales se conservarán durante el tiempo
                  necesario para cumplir las finalidades para las que fueron
                  recogidos.
                </p>

                <p className="mt-3">
                  Una vez finalizada la relación con WiBe, determinados datos
                  podrán conservarse durante los períodos necesarios para
                  cumplir obligaciones legales, atender posibles
                  responsabilidades, gestionar reclamaciones o defender los
                  derechos e intereses legítimos de JUST SMILE 23 S.L.
                </p>

                <p className="mt-3">
                  Los datos que estén sujetos a períodos de conservación
                  específicos por la normativa de telecomunicaciones, fiscal,
                  contable o de otra naturaleza se conservarán durante los
                  períodos legalmente establecidos.
                </p>

                <p className="mt-3">
                  Cuando los datos dejen de ser necesarios, serán eliminados,
                  anonimizados o bloqueados cuando legalmente corresponda.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  11. Seguridad
                </h2>

                <p>
                  JUST SMILE 23 S.L. aplica medidas técnicas y organizativas
                  apropiadas para proteger los datos personales frente a
                  pérdida, destrucción, alteración, acceso no autorizado o
                  divulgación indebida.
                </p>

                <p className="mt-3">
                  Las medidas de seguridad se adaptan al riesgo asociado a cada
                  tratamiento y a la naturaleza de los datos tratados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  12. Derechos de los usuarios
                </h2>

                <p>
                  Puede ejercer, cuando resulten aplicables, los siguientes
                  derechos:
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Acceso a sus datos personales.</li>
                  <li>Rectificación de datos inexactos.</li>
                  <li>Supresión de sus datos.</li>
                  <li>Limitación del tratamiento.</li>
                  <li>Oposición al tratamiento.</li>
                  <li>Portabilidad de sus datos.</li>
                  <li>
                    Retirada del consentimiento cuando el tratamiento se base en
                    el consentimiento.
                  </li>
                </ul>

                <p className="mt-4">
                  Para ejercer sus derechos puede escribir a:
                </p>

                <div className="mt-3 rounded-2xl bg-[#eef6f1] p-5">
                  <p className="font-bold text-[#0b2d55]">JUST SMILE 23 S.L.</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:adm@jsmile.es"
                      className="text-[#2fae60] font-semibold hover:underline"
                    >
                      adm@jsmile.es
                    </a>
                  </p>
                  <p>
                    Calle Doctor Zamenhoff 6P, 7 PTA. 2, 08020 Barcelona, España
                  </p>
                </div>

                <p className="mt-4">
                  La solicitud deberá permitir identificar al solicitante y
                  especificar el derecho que desea ejercer. El ejercicio de
                  estos derechos será gratuito, salvo que resulte aplicable
                  alguna de las excepciones previstas legalmente.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  13. Reclamaciones ante la autoridad de protección de datos
                </h2>

                <p>
                  Si considera que el tratamiento de sus datos personales
                  infringe la normativa aplicable, puede contactar con nosotros
                  para intentar resolver la situación.
                </p>

                <p className="mt-3">
                  Asimismo, tiene derecho a presentar una reclamación ante la
                  Agencia Española de Protección de Datos (AEPD), especialmente
                  cuando considere que no ha obtenido una respuesta adecuada al
                  ejercicio de sus derechos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  14. Cookies
                </h2>

                <p>
                  El sitio web de WiBe puede utilizar cookies y tecnologías
                  similares.
                </p>

                <p className="mt-3">
                  El uso de estas tecnologías se regula en nuestra{" "}
                  <a
                    href="/politica-cookies"
                    className="text-[#2fae60] font-semibold hover:underline"
                  >
                    Política de Cookies
                  </a>
                  , donde se informa sobre las cookies utilizadas, sus
                  finalidades y, cuando corresponda, las opciones disponibles
                  para aceptarlas, rechazarlas o configurarlas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  15. Redes sociales
                </h2>

                <p>
                  WiBe puede disponer de perfiles en redes sociales. El
                  tratamiento de datos que se produzca cuando un usuario
                  interactúe con dichos perfiles estará sujeto también a las
                  condiciones y políticas de privacidad de cada plataforma.
                </p>

                <p className="mt-3">
                  El perfil oficial de WiBe en Instagram es{" "}
                  <a
                    href="https://www.instagram.com/wibeonline/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2fae60] font-semibold hover:underline"
                  >
                    @wibeonline
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#0b2d55] mb-3">
                  16. Actualizaciones de esta política
                </h2>

                <p>
                  JUST SMILE 23 S.L. podrá actualizar esta Política de
                  Privacidad cuando resulte necesario para reflejar cambios en
                  nuestros servicios, tratamientos de datos, obligaciones
                  legales o requisitos regulatorios.
                </p>

                <p className="mt-3">
                  La versión vigente será la publicada en esta página. Se
                  recomienda revisar periódicamente esta Política de Privacidad
                  para conocer cualquier modificación.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
