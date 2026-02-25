"use client";

import { useMemo, useState } from "react";

const WORKING_DAYS_PER_MONTH = 20;
const REDUCTION_PERCENTAGE = 0.3; // 30 % menos tiempo por consulta con DeepClinic Copilot
const MAX_MINUTES_SAVED_PER_CONSULTATION = 9;

type Language = "es" | "en" | "pt";

const CONSULTATIONS_PER_DAY_OPTIONS = [
  { labelEs: "10 consultas", labelEn: "10 visits", value: 10 },
  { labelEs: "15 consultas", labelEn: "15 visits", value: 15 },
  { labelEs: "20 consultas", labelEn: "20 visits", value: 20 },
  { labelEs: "25 consultas", labelEn: "25 visits", value: 25 },
];

const CONSULTATION_DURATION_OPTIONS = [
  { labelEs: "20 minutos", labelEn: "20 minutes", value: 20 },
  { labelEs: "30 minutos", labelEn: "30 minutes", value: 30 },
  { labelEs: "45 minutos", labelEn: "45 minutes", value: 45 },
  { labelEs: "60 minutos", labelEn: "60 minutes", value: 60 },
];

function formatNumber(amount: number, locale: string) {
  if (!Number.isFinite(amount)) return "-";

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(amount)));
}

function formatHours(amount: number, locale: string) {
  if (!Number.isFinite(amount)) return "-";

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.max(0, amount));
}

type BenefitsSimulatorProps = {
  variant?: "full" | "compact";
  language?: Language;
  theme?: "light" | "dark";
};

export function BenefitsSimulator({ variant = "full", language = "es", theme = "light" }: BenefitsSimulatorProps) {
  const [consultationsPerDay, setConsultationsPerDay] = useState<number | null>(10);
  const [consultationMinutes, setConsultationMinutes] = useState<number | null>(20);
  const [pricePerConsultation, setPricePerConsultation] = useState<number | null>(800);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const isEnglish = language === "en";
  const isPortuguese = language === "pt";
  const locale = isEnglish ? "en-US" : isPortuguese ? "pt-BR" : "es-MX";
  const isDark = theme === "dark";

  const {
    hoursSavedPerDay,
    hoursSavedPerMonth,
    extraConsultationsPerDay,
    globalBenefit,
  } = useMemo(() => {
    if (consultationsPerDay == null || consultationMinutes == null || pricePerConsultation == null) {
      return {
        hoursSavedPerDay: Number.NaN,
        hoursSavedPerMonth: Number.NaN,
        extraConsultationsPerDay: Number.NaN,
        globalBenefit: Number.NaN,
      };
    }

    const reduction = REDUCTION_PERCENTAGE;

    const baselineMinutesPerDay = consultationsPerDay * consultationMinutes;
    const minutesSavedPerConsultation = Math.min(
      consultationMinutes * reduction,
      MAX_MINUTES_SAVED_PER_CONSULTATION,
    );
    const minutesSavedPerDay = consultationsPerDay * minutesSavedPerConsultation;
    const hoursSavedDay = minutesSavedPerDay / 60;
    const hoursSavedMonth = hoursSavedDay * WORKING_DAYS_PER_MONTH;

    let extraConsultations = 0;
    if (consultationMinutes > 0) {
      const newConsultationMinutes = Math.max(1, consultationMinutes - minutesSavedPerConsultation);
      const maxConsultationsPerDay = baselineMinutesPerDay / newConsultationMinutes;
      extraConsultations = Math.max(0, maxConsultationsPerDay - consultationsPerDay);
    }

    const B1 = extraConsultations * WORKING_DAYS_PER_MONTH * pricePerConsultation;

    return {
      hoursSavedPerDay: hoursSavedDay,
      hoursSavedPerMonth: hoursSavedMonth,
      extraConsultationsPerDay: extraConsultations,
      globalBenefit: B1,
    };
  }, [consultationsPerDay, consultationMinutes, pricePerConsultation]);

  const containerClasses =
    variant === "compact"
      ? `relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} p-4 shadow-[0_14px_36px_rgba(15,23,42,0.12)]`
      : `relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]`;

  const labelClass = isDark ? "text-white" : "text-slate-900";
  const subtextClass = isDark ? "text-white/50" : "text-slate-500";
  const borderClass = isDark ? "border-white/20" : "border-slate-200";
  const inputBgClass = isDark ? "bg-white/5 text-white" : "bg-white text-slate-900";

  return (
    <div className={containerClasses}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d5ff7c] opacity-60 blur-3xl" />
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50">
            {isEnglish
              ? "Return simulator"
              : isPortuguese
                ? "Simulador de benefícios"
                : "Simulador de retorno"}
          </span>
          <button
            type="button"
            onClick={() => setIsDetailsOpen(true)}
            className={`inline-flex items-center gap-1 rounded-full border ${isDark ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white"} px-3 py-1 text-[11px] font-medium shadow-sm`}
          >
            <span>
              {isEnglish
                ? "How do we calculate this?"
                : isPortuguese
                  ? "Como calculamos?"
                  : "¿Cómo lo calculamos?"}
            </span>
          </button>
        </div>

        <div>
          <label className={`block text-sm font-medium ${labelClass}`}>
            {isEnglish
              ? "Visits you take per day"
              : isPortuguese
                ? "Consultas que você realiza por dia"
                : "Consultas que realizas al día"}
          </label>
          <p className={`mt-1 text-xs ${subtextClass}`}>
            {isEnglish
              ? "Use an approximate average of the patients you see on a typical workday."
              : isPortuguese
                ? "Use uma média aproximada de pacientes que você atende em um dia típico."
                : "Usa un promedio aproximado de pacientes que atiendes en una jornada típica."}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
            {CONSULTATIONS_PER_DAY_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setConsultationsPerDay(option.value)}
                className={`rounded-full border px-2.5 py-1.5 font-medium transition ${consultationsPerDay === option.value
                    ? "border-slate-900 bg-slate-900 text-white"
                    : `${borderClass} ${isDark ? "text-white hover:bg-white/10" : "bg-white text-slate-700 hover:border-slate-300"}`
                  }
              `}
              >
                {isEnglish ? option.labelEn : option.labelEs}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={1}
            value={consultationsPerDay ?? ""}
            autoComplete="off"
            onChange={(e) => {
              const value = e.target.value;
              setConsultationsPerDay(value === "" ? null : Number(value));
            }}
            className={`mt-4 w-full rounded-full border ${borderClass} px-5 py-3 text-base font-medium ${inputBgClass} shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium ${labelClass}`}>
            {isEnglish
              ? "Average length of each visit"
              : isPortuguese
                ? "Duração média de cada consulta"
                : "Duración media de cada consulta"}
          </label>
          <p className={`mt-1 text-xs ${subtextClass}`}>
            {isEnglish
              ? "Choose how much time you usually spend per visit."
              : isPortuguese
                ? "Escolha quanto tempo você costuma dedicar por consulta."
                : "Elige el tiempo que sueles dedicar por consulta."}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
            {CONSULTATION_DURATION_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setConsultationMinutes(option.value)}
                className={`rounded-full border px-2.5 py-1.5 font-medium transition ${consultationMinutes === option.value
                    ? "border-slate-900 bg-slate-900 text-white"
                    : `${borderClass} ${isDark ? "text-white hover:bg-white/10" : "bg-white text-slate-700 hover:border-slate-300"}`
                  }
              `}
              >
                {isEnglish ? option.labelEn : option.labelEs}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={`block text-sm font-medium ${labelClass}`}>
              {isEnglish
                ? "Price charged per visit"
                : isPortuguese
                  ? "Preço cobrado por consulta"
                  : "Precio cobrado por consulta"}
            </label>
            <p className={`mt-1 text-xs ${subtextClass}`}>
              {isEnglish
                ? "In US dollars (USD)."
                : isPortuguese
                  ? "Na sua moeda local."
                  : "En tu moneda local."}
            </p>
            <div className="relative mt-3">
              <span className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
                {isEnglish ? "$" : isPortuguese ? "R$" : ""}
              </span>
              <input
                type="number"
                min={0}
                value={pricePerConsultation ?? ""}
                autoComplete="off"
                onChange={(e) => {
                  const value = e.target.value;
                  setPricePerConsultation(value === "" ? null : Number(value));
                }}
                className={`w-full rounded-full border ${borderClass} pl-8 pr-4 py-3 text-base font-medium ${inputBgClass} shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15`}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 rounded-2xl bg-slate-900/95 px-5 py-5 text-sm text-white shadow-lg ring-1 ring-slate-900/40 sm:grid-cols-3">
          <div>
            <p className="text-xs text-slate-300">
              {isEnglish
                ? "Time saved per month"
                : isPortuguese
                  ? "Tempo economizado no mês"
                  : "Tiempo ahorrado al mes"}
            </p>
            <p className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
              {formatHours(hoursSavedPerMonth, locale)} h
            </p>
            <p className="mt-0.5 text-[11px] text-slate-400">
              {isEnglish ? "≈ " : "≈ "}
              {formatHours(hoursSavedPerDay, locale)}
              {isEnglish
                ? " h saved per day."
                : isPortuguese
                  ? " h economizadas por dia."
                  : " h ahorradas al día."}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-300">
              {isEnglish
                ? "Extra visits per day"
                : isPortuguese
                  ? "Consultas extras por dia"
                  : "Consultas extra al día"}
            </p>
            <p className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
              {formatNumber(extraConsultationsPerDay, locale)}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-400">
              {isEnglish
                ? "With the time you free up thanks to DeepClinic Copilot."
                : isPortuguese
                  ? "Com o tempo liberado pelo DeepClinic Copilot."
                  : "Con el tiempo liberado por DeepClinic Copilot."}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-300">
              {isEnglish
                ? "Extra income per month"
                : isPortuguese
                  ? "Renda extra no mês"
                  : "Ingresos extra al mes"}
            </p>
            <p className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-[#d5ff7c]">
              {isEnglish ? "$ " : isPortuguese ? "R$ " : ""}
              {formatNumber(globalBenefit, locale)}
            </p>
            <p className="mt-1 inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-100">
              {isEnglish
                ? "Monthly estimate based on your extra visits."
                : isPortuguese
                  ? "Estimativa mensal com base nas suas consultas extras."
                  : "Estimación mensual basada en tus consultas extra."}
            </p>
          </div>
        </div>
      </div>

      {isDetailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label={isEnglish ? "Close" : isPortuguese ? "Fechar" : "Cerrar"}
            >
              ×
            </button>
            <h2 className="text-base font-semibold text-slate-900">
              {isEnglish
                ? "How we calculate the benefit"
                : isPortuguese
                  ? "Como calculamos o benefício"
                  : "Cómo calculamos el beneficio"}
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              {isEnglish
                ? "We use your own numbers and assume DeepClinic Copilot reduces each visit by up to 30% (max ~9 minutes per visit)."
                : isPortuguese
                  ? "Usamos os seus próprios números e assumimos que o DeepClinic Copilot reduz em até 30% o tempo de cada consulta (máx. ~9 minutos por consulta)."
                  : "Usamos tus propias cifras y asumimos que DeepClinic Copilot reduce hasta un 30% el tiempo de cada consulta (máx. ~9 minutos por consulta)."}
            </p>
            <div className="mt-3 space-y-2 text-xs text-slate-600">
              <p>
                {isEnglish
                  ? "We start from three inputs:"
                  : isPortuguese
                    ? "Partimos de três dados:"
                    : "Partimos de tres datos:"}
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>
                  {isEnglish
                    ? "Number of visits you take on a typical day."
                    : isPortuguese
                      ? "Consultas que você realiza em um dia normal."
                      : "Consultas que realizas en un día normal."}
                </li>
                <li>
                  {isEnglish
                    ? "Average length of each visit, in minutes."
                    : isPortuguese
                      ? "Duração média de cada consulta, em minutos."
                      : "Duración media de cada consulta, en minutos."}
                </li>
                <li>
                  {isEnglish
                    ? "Price you charge per visit."
                    : isPortuguese
                      ? "Preço cobrado por cada consulta."
                      : "Precio cobrado por cada consulta."}
                </li>
              </ul>
              <p className="mt-2">
                {isEnglish
                  ? "With that, we estimate your total consultation time and apply the effect of DeepClinic Copilot:"
                  : isPortuguese
                    ? "Com isso estimamos o tempo total de consulta e aplicamos o efeito do DeepClinic Copilot:"
                    : "Con eso estimamos el tiempo total de consulta y aplicamos el efecto de DeepClinic Copilot:"}
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>
                  {isEnglish && "We reduce the time of each visit by up to 30% (max ~9 minutes per visit)."}
                  {!isEnglish && language === "es" && (
                    <>
                      Reducimos hasta un <strong>30%</strong> el tiempo de cada consulta (máx. <strong>9 min</strong> por consulta).
                    </>
                  )}
                  {!isEnglish && language === "pt" && (
                    <>
                      Reduzimos em até <strong>30%</strong> o tempo de cada consulta (máx. <strong>9 min</strong> por consulta).
                    </>
                  )}
                </li>
                <li>
                  {isEnglish
                    ? "We calculate hours saved per day and per month, or the extra visits you could take."
                    : isPortuguese
                      ? "Calculamos as horas economizadas por dia e por mês, ou as consultas extras possíveis."
                      : "Calculamos las horas ahorradas al día y al mes, o las consultas extra posibles."}
                </li>
                <li>
                  {isEnglish && (
                    <strong>
                      Monthly extra income = (extra visits per day) × {WORKING_DAYS_PER_MONTH} working days per month × price per visit.
                    </strong>
                  )}
                  {!isEnglish && language === "es" && (
                    <>
                      <strong>Ingresos extra mensuales</strong> = (consultas extra al día) × {WORKING_DAYS_PER_MONTH} días al mes × precio por
                      consulta.
                    </>
                  )}
                  {!isEnglish && language === "pt" && (
                    <>
                      <strong>Renda extra mensal</strong> = (consultas extras por dia) × {WORKING_DAYS_PER_MONTH} dias por mês × preço por
                      consulta.
                    </>
                  )}
                </li>
              </ul>
              <p className="mt-2 text-[10px] text-slate-400">
                {isEnglish
                  ? "This simulator is indicative only; real results may vary depending on your specialty and consultation volume."
                  : isPortuguese
                    ? "Este simulador é apenas indicativo; os resultados reais podem variar de acordo com a sua especialidade e volume de consultas."
                    : "Este simulador es orientativo; los resultados reales pueden variar según tu especialidad y volumen de consultas."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
