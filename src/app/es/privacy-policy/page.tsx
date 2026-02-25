import type { Metadata } from "next";
import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export const metadata: Metadata = {
  title: "Política de privacidad | DeepClinic Copilot",
  description:
    "Conoce cómo DeepClinic Copilot recopila, utiliza y protege tus datos personales cuando visitas nuestro sitio web o interactúas con nosotros.",
  alternates: {
    canonical: "/es/privacy-policy",
  },
  openGraph: {
    type: "article",
    url: "/es/privacy-policy",
    title: "Política de privacidad | DeepClinic Copilot",
    description:
      "Consulta la política de privacidad de DeepClinic Copilot y cómo tratamos tus datos personales y de navegación.",
    siteName: "DeepClinic Copilot",
    locale: "es_MX",
    images: [
      {
        url: "/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp",
        width: 500,
        height: 500,
        alt: "DeepClinic Copilot, asistente clínico de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de privacidad | DeepClinic Copilot",
    description:
      "Conoce cómo DeepClinic Copilot recopila, utiliza y protege tus datos personales cuando visitas nuestro sitio web o interactúas con nosotros.",
    images: [
      "/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp",
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Legal</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              Política de privacidad
            </h1>
            <p className="mt-4 text-sm text-white/50">DeepClinic Copilot</p>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <section className="mt-12 space-y-6 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">Aviso de privacidad para México</h2>
              <p>
                Si te encuentras en los Estados Unidos Mexicanos, el tratamiento de tus datos personales se realiza conforme a
                la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normativa aplicable.
              </p>
              <p>
                Para los fines descritos en este aviso, DeepClinic Copilot AB (&quot;DeepClinic Copilot&quot;, &quot;nosotros&quot;) actúa como
                responsable del tratamiento de tus datos personales cuando visitas este sitio web o cuando contratas, usas o
                interactúas con nuestros servicios.
              </p>

              <h3 className="pt-4 text-[16px] font-semibold text-white">
                ¿Para qué fines utilizaremos tus datos personales?
              </h3>
              <p>
                Los datos personales que recabamos los utilizaremos para finalidades necesarias para la prestación del servicio
                que solicitas, tales como:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>Crear, administrar y proteger tu cuenta y el acceso a la plataforma.</li>
                <li>
                  will publish the updated version on this page and, where appropriate, notify you for example by email or the next
                  time you access the Website. Please review this page regularly to stay informed about how we process your personal
                  data.
                </li>
              </ul>
            </section>

            {/* 3. Third party links */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">3. Third party links</h2>
              <p>
                From time to time, the DeepClinic Copilot Website may include links to websites belonging to partner networks and
                other third parties. These websites and any services they provide operate under their own privacy policies. We are
                not responsible for the privacy practices of those websites or services. We encourage you to read their privacy
                policies before submitting any personal data or using their services.
              </p>
            </section>

            {/* 4. What personal data we collect about you */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">
                4. What personal data we collect about you
              </h2>
              <p>
                Depending on how you interact with the Website, we may collect, use, store and transfer different kinds of
                personal data about you, including:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold">Identity information:</span> for example your first and last name, username or
                  similar identifier, provided when you show interest in our application or apply for a role.
                </li>
                <li>
                  <span className="font-semibold">Contact information:</span> such as your email address and details of your
                  organisation when you ask to be contacted or apply for a job through the Website.
                </li>
                <li>
                  <span className="font-semibold">Technical information:</span> including information about your use of the
                  Website, such as traffic data, communication data and the resources that you access. This helps us improve the
                  performance and security of the Website.
                </li>
                <li>
                  <span className="font-semibold">Qualification and professional data:</span> for example your qualifications,
                  professional registrations, employment history and any cover letter or personal statement you submit.
                </li>
              </ul>
              <p>
                We may also create and use aggregated data (for example, statistical or demographic information). Aggregated data
                may be derived from your personal data but is not considered personal data in law as it does not directly or
                indirectly reveal your identity. If we combine or connect aggregated data with your personal data so that it can
                identify you, we treat the combined data as personal data and handle it in line with this Privacy Policy.
              </p>
            </section>

            {/* 5. How is your personal data collected? */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">
                5. How is your personal data collected?
              </h2>
              <p>
                Most of the personal data we process comes directly from you, for example when you fill in a contact form,
                subscribe to updates or apply for a position via the Website. In addition, we automatically collect certain
                technical data about your equipment, browsing actions and patterns by using cookies and similar technologies. For
                more information, please refer to our cookie policy.
              </p>
            </section>

            {/* 6. How we use your personal data */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">6. How we use your personal data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in
                the following circumstances:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold">With your consent:</span> where you have clearly agreed that we may process
                  your personal data for a specific purpose. You may withdraw your consent at any time.
                </li>
                <li>
                  <span className="font-semibold">Legitimate interests:</span> where processing is necessary for our legitimate
                  interests (or those of a third party) and your interests and fundamental rights do not override those interests,
                  for example to run our business, manage the Website and communicate with users and candidates.
                </li>
                <li>
                  <span className="font-semibold">Legal or regulatory obligations:</span> where we need to comply with a legal
                  or regulatory requirement.
                </li>
              </ul>
              <p>
                Depending on how you interact with us, DeepClinic Copilot may process your personal data in order to manage your
                queries, evaluate and manage job applications, administer and protect the Website, ensure compliance with
                regulatory obligations and improve our services.
              </p>
            </section>

            {/* 7. Storage of data */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">7. Storage of data</h2>
              <p>
                We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected,
                including for the purposes of satisfying any legal, accounting or reporting requirements. When the data is no
                longer needed, we will delete it or anonymise it, unless we are required by law to retain it for a longer period.
              </p>
              <p>
                In some circumstances we may anonymise your personal data (so that it can no longer be associated with you) for
                research or statistical purposes, in which case we may use this information indefinitely without further notice to
                you.
              </p>
            </section>

            {/* 8. Disclosures of your personal data */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">8. Disclosures of your personal data</h2>
              <p>
                Within DeepClinic Copilot, access to your personal data is limited to those people who need it to perform their
                duties. We may share your personal data with third-party service providers that act as data processors, such as
                providers of IT, hosting and support services. These providers are only allowed to process your personal data in
                accordance with our instructions and must protect it appropriately.
              </p>
              <p>
                We may also share your personal data when required to do so by law or when necessary to protect our rights or the
                rights of others, for example with regulators or public authorities.
              </p>
            </section>

            {/* 9. Data security */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">9. Data security</h2>
              <p>
                We are committed to protecting the confidentiality, integrity and availability of your personal data. We apply
                appropriate technical and organisational measures to help prevent your personal data from being accidentally lost,
                used or accessed in an unauthorised way, altered or disclosed.
              </p>
              <p>
                Where personal data is transferred outside your country, we take steps to ensure that an adequate level of
                protection is in place in accordance with applicable data protection laws.
              </p>
            </section>

            {/* 10. Your rights */}
            <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">10. Your rights</h2>
              <p>
                Depending on where you are located and subject to applicable law, you may have some or all of the following
                rights in relation to your personal data:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>to be informed about how we process your personal data;</li>
                <li>to access the personal data we hold about you;</li>
                <li>to request correction of inaccurate or incomplete personal data;</li>
                <li>to request erasure of your personal data in certain circumstances;</li>
                <li>to request restriction of processing in certain circumstances;</li>
                <li>to object to processing based on our legitimate interests;</li>
                <li>to request the transfer of your personal data to you or to a third party (data portability); and</li>
                <li>to lodge a complaint with a supervisory authority if you consider that our processing infringes applicable law.</li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please contact us using the contact details provided on this Website.
                We may need to request specific information from you to help us confirm your identity and ensure your right to
                access your personal data (or to exercise any of your other rights).
              </p>
            </section>

            <p className="mt-10 text-xs text-slate-500">Última actualización: 5 de octubre de 2025</p>
          </MotionReveal>
        </div>

        <footer id="recursos" className="border-t border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-16 text-xs text-slate-700 sm:text-[13px]">
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="text-left">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">DeepClinic Copilot</h3>
                <ul className="space-y-1.5">
                  <li>
                    <Link href="/es/product" className="hover:text-slate-900">
                      Producto
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/customer-stories" className="hover:text-slate-900">
                      Historias de clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/pricing" className="hover:text-slate-900">
                      Precio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/es/login"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900"
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/contact" className="hover:text-slate-900">
                      Solicitar demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/contact" className="hover:text-slate-900">
                      Contactar
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className="hover:text-slate-900">
                      Pruébalo gratis
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Recursos</h3>
                <ul className="space-y-1.5">
                  <li>
                    <Link href="/es/data-security" className="hover:text-slate-900">
                      Seguridad de datos
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/trust-center" className="hover:text-slate-900">
                      Centro de confianza
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/news" className="hover:text-slate-900">
                      Noticias
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://intercom-help.eu/tandem-eu/en/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900"
                    >
                      Help center ↗
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/customer-stories" className="hover:text-slate-900">
                      Historias de clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/about" className="hover:text-slate-900">
                      Acerca de nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/es/download/instructions-for-use"
                      className="hover:text-slate-900"
                    >
                      Instrucciones de uso ↗
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/download/product-label" className="hover:text-slate-900">
                      Etiqueta del producto ↗
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Legal</h3>
                <ul className="space-y-1.5">
                  <li>
                    <Link href="/es/terms-of-service" className="hover:text-slate-900">
                      Condiciones de servicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/privacy-policy" className="hover:text-slate-900">
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/cookie-policy" className="hover:text-slate-900">
                      Política de Cookies
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/accessibility-statement" className="hover:text-slate-900">
                      Declaración de accesibilidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
