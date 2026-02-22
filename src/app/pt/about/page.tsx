import Link from "next/link";

export default function AboutPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Sobre nós</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">DeepClinic Copilot</h1>
        <p className="mt-4 text-sm text-slate-600">
          O DeepClinic Copilot é um assistente clínico com inteligência artificial desenhado para reduzir a carga
          administrativa e devolver tempo à relação entre profissionais de saúde e pacientes.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          A nossa equipa combina experiência em tecnologia, saúde e design de produto para criar ferramentas que se
          integram na prática clínica diária e respeitam os mais altos padrões de segurança e privacidade.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/pt/recruitment" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Juntar-se à equipa
          </Link>
        </div>
      </div>
    </main>
  );
}
