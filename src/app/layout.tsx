import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://copilotomedico.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Copiloto Médico",
      url: siteUrl,
      description:
        "Copiloto Médico es un asistente clínico basado en IA que redacta automáticamente informes y documentación clínica para que los profesionales sanitarios puedan centrarse en sus pacientes.",
      logo: `${siteUrl}/680a970e6d5665751f6bfcb8_gaias.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Copiloto Médico",
      inLanguage: "es",
      description:
        "El asistente clínico de IA líder en America. Copiloto Médico redacta notas e informes clínicos después de cada consulta para ahorrar horas de trabajo administrativo.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "El asistente clínico de IA líder en America | Copiloto Médico",
    template: "%s | Copiloto Médico",
  },
  description:
    "Céntrate en la asistencia mientras Copiloto Médico escribe tus informes después de cada consulta. Aumenta la productividad de tu consulta con nuestro asistente clínico basado en IA.",
  keywords: [
    "asistente clínico IA",
    "escriba médico IA",
    "documentación clínica automática",
    "historia clínica con inteligencia artificial",
    "software para médicos",
    "productividad consulta médica",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "El asistente clínico de IA líder en America | Copiloto Médico",
    description:
      "Céntrate en la asistencia mientras Copiloto Médico escribe tus informes después de cada consulta. Aumenta la productividad de tu consulta con nuestro asistente clínico basado en IA.",
    siteName: "Copiloto Médico",
    locale: "es_MX",
    images: [
      {
        url: "/Captura de pantalla 2025-12-07 a la(s) 11.07.14 a.m..png",
        width: 1200,
        height: 630,
        alt: "Copiloto Médico, asistente clínico de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El asistente clínico de IA líder en America | Copiloto Médico",
    description:
      "Céntrate en la asistencia mientras Copiloto Médico escribe tus informes después de cada consulta. Aumenta la productividad de tu consulta con nuestro asistente clínico basado en IA.",
    images: [
      "/Captura de pantalla 2025-12-07 a la(s) 11.07.14 a.m..png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/Captura de pantalla 2025-12-07 a la(s) 11.07.14 a.m..png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`min-h-screen bg-white text-slate-900 antialiased ${inter.variable} ${playfair.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
