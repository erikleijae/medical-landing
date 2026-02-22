import Link from "next/link";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Actualizaciones</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Noticias y artículos de DeepClinic Copilot
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos reconstruyendo la sección de noticias para reflejar la nueva marca DeepClinic Copilot. Muy pronto
          encontrarás aquí casos de uso, colaboraciones con organizaciones de la salud y novedades del producto.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Mientras tanto, si quieres saber cómo se está utilizando la IA clínica en organizaciones similares a la tuya,
          puedes ponerte en contacto con nuestro equipo.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Hablar con un especialista
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/es/customer-stories" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Ver historias de clientes
          </Link>
        </div>
      </div>
    </main>
  );
}
