(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_94e5dc._.js", {

"[project]/src/components/benefits-simulator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BenefitsSimulator": (()=>BenefitsSimulator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const WORKING_DAYS_PER_MONTH = 20;
const REDUCTION_PERCENTAGE = 0.3; // 30 % menos tiempo por consulta con DeepClinic Copilot
const MAX_MINUTES_SAVED_PER_CONSULTATION = 9;
const CONSULTATIONS_PER_DAY_OPTIONS = [
    {
        labelEs: "10 consultas",
        labelEn: "10 visits",
        value: 10
    },
    {
        labelEs: "15 consultas",
        labelEn: "15 visits",
        value: 15
    },
    {
        labelEs: "20 consultas",
        labelEn: "20 visits",
        value: 20
    },
    {
        labelEs: "25 consultas",
        labelEn: "25 visits",
        value: 25
    }
];
const CONSULTATION_DURATION_OPTIONS = [
    {
        labelEs: "20 minutos",
        labelEn: "20 minutes",
        value: 20
    },
    {
        labelEs: "30 minutos",
        labelEn: "30 minutes",
        value: 30
    },
    {
        labelEs: "45 minutos",
        labelEn: "45 minutes",
        value: 45
    },
    {
        labelEs: "60 minutos",
        labelEn: "60 minutes",
        value: 60
    }
];
function formatNumber(amount, locale) {
    if (!Number.isFinite(amount)) return "-";
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.max(0, Math.round(amount)));
}
function formatHours(amount, locale) {
    if (!Number.isFinite(amount)) return "-";
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(Math.max(0, amount));
}
function BenefitsSimulator({ variant = "full", language = "es", theme = "light" }) {
    _s();
    const [consultationsPerDay, setConsultationsPerDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [consultationMinutes, setConsultationMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [pricePerConsultation, setPricePerConsultation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(800);
    const [isDetailsOpen, setIsDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isEnglish = language === "en";
    const isPortuguese = language === "pt";
    const locale = isEnglish ? "en-US" : isPortuguese ? "pt-BR" : "es-MX";
    const isDark = theme === "dark";
    const { hoursSavedPerDay, hoursSavedPerMonth, extraConsultationsPerDay, globalBenefit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BenefitsSimulator.useMemo": ()=>{
            if (consultationsPerDay == null || consultationMinutes == null || pricePerConsultation == null) {
                return {
                    hoursSavedPerDay: Number.NaN,
                    hoursSavedPerMonth: Number.NaN,
                    extraConsultationsPerDay: Number.NaN,
                    globalBenefit: Number.NaN
                };
            }
            const reduction = REDUCTION_PERCENTAGE;
            const baselineMinutesPerDay = consultationsPerDay * consultationMinutes;
            const minutesSavedPerConsultation = Math.min(consultationMinutes * reduction, MAX_MINUTES_SAVED_PER_CONSULTATION);
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
                globalBenefit: B1
            };
        }
    }["BenefitsSimulator.useMemo"], [
        consultationsPerDay,
        consultationMinutes,
        pricePerConsultation
    ]);
    const containerClasses = variant === "compact" ? `relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} p-4 shadow-[0_14px_36px_rgba(15,23,42,0.12)]` : `relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]`;
    const labelClass = isDark ? "text-white" : "text-slate-900";
    const subtextClass = isDark ? "text-white/50" : "text-slate-500";
    const borderClass = isDark ? "border-white/20" : "border-slate-200";
    const inputBgClass = isDark ? "bg-white/5 text-white" : "bg-white text-slate-900";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d5ff7c] opacity-60 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50",
                                children: isEnglish ? "Return simulator" : isPortuguese ? "Simulador de benefícios" : "Simulador de retorno"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsDetailsOpen(true),
                                className: `inline-flex items-center gap-1 rounded-full border ${isDark ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white"} px-3 py-1 text-[11px] font-medium shadow-sm`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isEnglish ? "How do we calculate this?" : isPortuguese ? "Como calculamos?" : "¿Cómo lo calculamos?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-medium ${labelClass}`,
                                children: isEnglish ? "Visits you take per day" : isPortuguese ? "Consultas que você realiza por dia" : "Consultas que realizas al día"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 text-xs ${subtextClass}`,
                                children: isEnglish ? "Use an approximate average of the patients you see on a typical workday." : isPortuguese ? "Use uma média aproximada de pacientes que você atende em um dia típico." : "Usa un promedio aproximado de pacientes que atiendes en una jornada típica."
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-4 gap-2 text-xs",
                                children: CONSULTATIONS_PER_DAY_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setConsultationsPerDay(option.value),
                                        className: `rounded-full border px-2.5 py-1.5 font-medium transition ${consultationsPerDay === option.value ? "border-slate-900 bg-slate-900 text-white" : `${borderClass} ${isDark ? "text-white hover:bg-white/10" : "bg-white text-slate-700 hover:border-slate-300"}`}
              `,
                                        children: isEnglish ? option.labelEn : option.labelEs
                                    }, option.value, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                value: consultationsPerDay ?? "",
                                autoComplete: "off",
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setConsultationsPerDay(value === "" ? null : Number(value));
                                },
                                className: `mt-4 w-full rounded-full border ${borderClass} px-5 py-3 text-base font-medium ${inputBgClass} shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15`
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-medium ${labelClass}`,
                                children: isEnglish ? "Average length of each visit" : isPortuguese ? "Duração média de cada consulta" : "Duración media de cada consulta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 text-xs ${subtextClass}`,
                                children: isEnglish ? "Choose how much time you usually spend per visit." : isPortuguese ? "Escolha quanto tempo você costuma dedicar por consulta." : "Elige el tiempo que sueles dedicar por consulta."
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-4 gap-2 text-xs",
                                children: CONSULTATION_DURATION_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setConsultationMinutes(option.value),
                                        className: `rounded-full border px-2.5 py-1.5 font-medium transition ${consultationMinutes === option.value ? "border-slate-900 bg-slate-900 text-white" : `${borderClass} ${isDark ? "text-white hover:bg-white/10" : "bg-white text-slate-700 hover:border-slate-300"}`}
              `,
                                        children: isEnglish ? option.labelEn : option.labelEs
                                    }, option.value, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium ${labelClass}`,
                                    children: isEnglish ? "Price charged per visit" : isPortuguese ? "Preço cobrado por consulta" : "Precio cobrado por consulta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-1 text-xs ${subtextClass}`,
                                    children: isEnglish ? "In US dollars (USD)." : isPortuguese ? "Na sua moeda local." : "En tu moneda local."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs ${isDark ? "text-white/40" : "text-slate-400"}`,
                                            children: isEnglish ? "$" : isPortuguese ? "R$" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            value: pricePerConsultation ?? "",
                                            autoComplete: "off",
                                            onChange: (e)=>{
                                                const value = e.target.value;
                                                setPricePerConsultation(value === "" ? null : Number(value));
                                            },
                                            className: `w-full rounded-full border ${borderClass} pl-8 pr-4 py-3 text-base font-medium ${inputBgClass} shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-4 rounded-2xl bg-slate-900/95 px-5 py-5 text-sm text-white shadow-lg ring-1 ring-slate-900/40 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300",
                                        children: isEnglish ? "Time saved per month" : isPortuguese ? "Tempo economizado no mês" : "Tiempo ahorrado al mes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-2xl md:text-3xl font-semibold tracking-tight",
                                        children: [
                                            formatHours(hoursSavedPerMonth, locale),
                                            " h"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[11px] text-slate-400",
                                        children: [
                                            isEnglish ? "≈ " : "≈ ",
                                            formatHours(hoursSavedPerDay, locale),
                                            isEnglish ? " h saved per day." : isPortuguese ? " h economizadas por dia." : " h ahorradas al día."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300",
                                        children: isEnglish ? "Extra visits per day" : isPortuguese ? "Consultas extras por dia" : "Consultas extra al día"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-2xl md:text-3xl font-semibold tracking-tight",
                                        children: formatNumber(extraConsultationsPerDay, locale)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[11px] text-slate-400",
                                        children: isEnglish ? "With the time you free up thanks to DeepClinic Copilot." : isPortuguese ? "Com o tempo liberado pelo DeepClinic Copilot." : "Con el tiempo liberado por DeepClinic Copilot."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300",
                                        children: isEnglish ? "Extra income per month" : isPortuguese ? "Renda extra no mês" : "Ingresos extra al mes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-[#d5ff7c]",
                                        children: [
                                            isEnglish ? "$ " : isPortuguese ? "R$ " : "",
                                            formatNumber(globalBenefit, locale)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-100",
                                        children: isEnglish ? "Monthly estimate based on your extra visits." : isPortuguese ? "Estimativa mensal com base nas suas consultas extras." : "Estimación mensual basada en tus consultas extra."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            isDetailsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsDetailsOpen(false),
                            className: "absolute right-3 top-3 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600",
                            "aria-label": isEnglish ? "Close" : isPortuguese ? "Fechar" : "Cerrar",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-semibold text-slate-900",
                            children: isEnglish ? "How we calculate the benefit" : isPortuguese ? "Como calculamos o benefício" : "Cómo calculamos el beneficio"
                        }, void 0, false, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-slate-500",
                            children: isEnglish ? "We use your own numbers and assume DeepClinic Copilot reduces each visit by up to 30% (max ~9 minutes per visit)." : isPortuguese ? "Usamos os seus próprios números e assumimos que o DeepClinic Copilot reduz em até 30% o tempo de cada consulta (máx. ~9 minutos por consulta)." : "Usamos tus propias cifras y asumimos que DeepClinic Copilot reduce hasta un 30% el tiempo de cada consulta (máx. ~9 minutos por consulta)."
                        }, void 0, false, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-2 text-xs text-slate-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: isEnglish ? "We start from three inputs:" : isPortuguese ? "Partimos de três dados:" : "Partimos de tres datos:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc space-y-1 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Number of visits you take on a typical day." : isPortuguese ? "Consultas que você realiza em um dia normal." : "Consultas que realizas en un día normal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Average length of each visit, in minutes." : isPortuguese ? "Duração média de cada consulta, em minutos." : "Duración media de cada consulta, en minutos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Price you charge per visit." : isPortuguese ? "Preço cobrado por cada consulta." : "Precio cobrado por cada consulta."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2",
                                    children: isEnglish ? "With that, we estimate your total consultation time and apply the effect of DeepClinic Copilot:" : isPortuguese ? "Com isso estimamos o tempo total de consulta e aplicamos o efeito do DeepClinic Copilot:" : "Con eso estimamos el tiempo total de consulta y aplicamos el efecto de DeepClinic Copilot:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc space-y-1 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                isEnglish && "We reduce the time of each visit by up to 30% (max ~9 minutes per visit).",
                                                !isEnglish && language === "es" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Reducimos hasta un ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "30%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 42
                                                        }, this),
                                                        " el tiempo de cada consulta (máx. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "9 min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 96
                                                        }, this),
                                                        " por consulta)."
                                                    ]
                                                }, void 0, true),
                                                !isEnglish && language === "pt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Reduzimos em até ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "30%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 40
                                                        }, this),
                                                        " o tempo de cada consulta (máx. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "9 min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 92
                                                        }, this),
                                                        " por consulta)."
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "We calculate hours saved per day and per month, or the extra visits you could take." : isPortuguese ? "Calculamos as horas economizadas por dia e por mês, ou as consultas extras possíveis." : "Calculamos las horas ahorradas al día y al mes, o las consultas extra posibles."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                isEnglish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "Monthly extra income = (extra visits per day) × ",
                                                        WORKING_DAYS_PER_MONTH,
                                                        " working days per month × price per visit."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this),
                                                !isEnglish && language === "es" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Ingresos extra mensuales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 23
                                                        }, this),
                                                        " = (consultas extra al día) × ",
                                                        WORKING_DAYS_PER_MONTH,
                                                        " días al mes × precio por consulta."
                                                    ]
                                                }, void 0, true),
                                                !isEnglish && language === "pt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Renda extra mensal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 23
                                                        }, this),
                                                        " = (consultas extras por dia) × ",
                                                        WORKING_DAYS_PER_MONTH,
                                                        " dias por mês × preço por consulta."
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] text-slate-400",
                                    children: isEnglish ? "This simulator is indicative only; real results may vary depending on your specialty and consultation volume." : isPortuguese ? "Este simulador é apenas indicativo; os resultados reais podem variar de acordo com a sua especialidade e volume de consultas." : "Este simulador es orientativo; los resultados reales pueden variar según tu especialidad y volumen de consultas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/benefits-simulator.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/benefits-simulator.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(BenefitsSimulator, "giATmYrtFDxnY23kyY9IGVNAYTU=");
_c = BenefitsSimulator;
var _c;
__turbopack_refresh__.register(_c, "BenefitsSimulator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/deepclinic-top-nav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicTopNav": (()=>DeepClinicTopNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const NAV_ITEMS = {
    es: [
        {
            label: "DEEPCLINIC",
            href: "/es/deepclinic"
        },
        {
            label: "API",
            href: "/es/platform"
        },
        {
            label: "EMPRESA",
            href: "/es/about"
        },
        {
            label: "SEGURIDAD",
            href: "/es/data-security"
        },
        {
            label: "PRECIOS",
            href: "/es/pricing"
        }
    ],
    en: [
        {
            label: "PRODUCT",
            href: "/en/product"
        },
        {
            label: "COMPANY",
            href: "/en/about"
        },
        {
            label: "SECURITY",
            href: "/en/data-security"
        },
        {
            label: "PRICING",
            href: "/en/pricing"
        }
    ],
    pt: [
        {
            label: "PRODUTO",
            href: "/pt/product"
        },
        {
            label: "EMPRESA",
            href: "/pt/about"
        },
        {
            label: "SEGURANÇA",
            href: "/pt/data-security"
        },
        {
            label: "PREÇOS",
            href: "/pt/pricing"
        }
    ]
};
const CTA_LABEL = {
    es: "PROBAR DEEPCLINIC",
    en: "TRY DEEPCLINIC",
    pt: "TESTAR DEEPCLINIC"
};
const PRODUCT_ITEMS = {
    es: [
        {
            label: "COPILOTO",
            href: "/es/product"
        },
        {
            label: "INGRESOS",
            href: "/es/revenue"
        },
        {
            label: "AGENTES",
            href: "/es/desk"
        },
        {
            label: "AGENDA",
            href: "/es/booking"
        },
        {
            label: "NÚCLEO",
            href: "/es/platform"
        },
        {
            label: "FAMILIA",
            href: "/es/health"
        },
        {
            label: "IMÁGENES",
            href: "/es/imaging"
        }
    ],
    en: [
        {
            label: "COPILOT",
            href: "/en/product"
        },
        // Fallback for missing pages
        {
            label: "REVENUE",
            href: "/en/product"
        },
        {
            label: "DESK",
            href: "/en/product"
        },
        {
            label: "BOOKING",
            href: "/en/product"
        },
        {
            label: "DEEPCLINIC AI",
            href: "/en/product"
        },
        {
            label: "PATIENTS",
            href: "/en/product"
        }
    ],
    pt: [
        {
            label: "COPILOTO",
            href: "/pt/product"
        },
        // Fallback for missing pages
        {
            label: "RECEITA",
            href: "/pt/product"
        },
        {
            label: "RECEPÇÃO",
            href: "/pt/product"
        },
        {
            label: "AGENDAMENTO",
            href: "/pt/product"
        },
        {
            label: "DEEPCLINIC IA",
            href: "/pt/product"
        },
        {
            label: "PACIENTES",
            href: "/pt/product"
        }
    ]
};
const LANG_HOME = {
    es: "/es/deepclinic",
    en: "/en",
    pt: "/pt"
};
const LANG_ROUTE_MAP = {
    "/deepclinic": {
        es: "/es/deepclinic",
        en: "/en",
        pt: "/pt"
    },
    "/product": {
        es: "/es/product",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/revenue": {
        es: "/es/revenue",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/desk": {
        es: "/es/desk",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/booking": {
        es: "/es/booking",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/platform": {
        es: "/es/platform",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/health": {
        es: "/es/health",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/imaging": {
        es: "/es/imaging",
        en: "/en/product",
        pt: "/pt/product"
    },
    "/about": {
        es: "/es/about",
        en: "/en/about",
        pt: "/pt/about"
    },
    "/data-security": {
        es: "/es/data-security",
        en: "/en/data-security",
        pt: "/pt/data-security"
    },
    "/pricing": {
        es: "/es/pricing",
        en: "/en/pricing",
        pt: "/pt/pricing"
    }
};
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function DeepClinicTopNav({ showProductsSubnav, lang = "es" }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? LANG_HOME[lang];
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeepClinicTopNav.useMemo[items]": ()=>NAV_ITEMS[lang]
    }["DeepClinicTopNav.useMemo[items]"], [
        lang
    ]);
    const productItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeepClinicTopNav.useMemo[productItems]": ()=>PRODUCT_ITEMS[lang]
    }["DeepClinicTopNav.useMemo[productItems]"], [
        lang
    ]);
    const ctaLabel = CTA_LABEL[lang];
    // Determine signup link based on lang. Assuming /en/signup and /pt/signup exist or handled by middleware/redirects.
    // Although root /signup exists, usually we want to preserve locale if possible.
    // Given previous files, links were /en/signup and /pt/signup.
    const signupHref = lang === "es" ? "/signup" : `/${lang}/signup`;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productsOpen, setProductsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuAriaLabel = lang === "es" ? open ? "Cerrar menú" : "Abrir menú" : lang === "pt" ? open ? "Fechar menu" : "Abrir menu" : open ? "Close menu" : "Open menu";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicTopNav.useEffect": ()=>{
            if (!open) return;
            const onKeyDown = {
                "DeepClinicTopNav.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") setOpen(false);
                }
            }["DeepClinicTopNav.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "DeepClinicTopNav.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["DeepClinicTopNav.useEffect"];
        }
    }["DeepClinicTopNav.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicTopNav.useEffect": ()=>{
            if (!langOpen) return;
            const onKeyDown = {
                "DeepClinicTopNav.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") setLangOpen(false);
                }
            }["DeepClinicTopNav.useEffect.onKeyDown"];
            const onPointerDown = {
                "DeepClinicTopNav.useEffect.onPointerDown": (e)=>{
                    const target = e.target;
                    if (!target) return;
                    if (target.closest?.("[data-dc-lang]") != null) return;
                    setLangOpen(false);
                }
            }["DeepClinicTopNav.useEffect.onPointerDown"];
            window.addEventListener("keydown", onKeyDown);
            window.addEventListener("pointerdown", onPointerDown);
            return ({
                "DeepClinicTopNav.useEffect": ()=>{
                    window.removeEventListener("keydown", onKeyDown);
                    window.removeEventListener("pointerdown", onPointerDown);
                }
            })["DeepClinicTopNav.useEffect"];
        }
    }["DeepClinicTopNav.useEffect"], [
        langOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicTopNav.useEffect": ()=>{
            if (!open) return;
            const prev = document.documentElement.style.overflow;
            document.documentElement.style.overflow = "hidden";
            return ({
                "DeepClinicTopNav.useEffect": ()=>{
                    document.documentElement.style.overflow = prev;
                }
            })["DeepClinicTopNav.useEffect"];
        }
    }["DeepClinicTopNav.useEffect"], [
        open
    ]);
    const handleNavClick = (e, label)=>{
        // Only toggle subnav if it is the "DEEPCLINIC" or "PRODUCT"/"PRODUTO" item
        if ((label === "DEEPCLINIC" || label === "PRODUCT" || label === "PRODUTO") && showProductsSubnav) {
            e.preventDefault();
            setProductsOpen((prev)=>!prev);
        } else {
            setProductsOpen(false);
        }
    };
    const getLangHref = (target)=>{
        if (target === lang) return pathname;
        const match = pathname.match(/^\/(es|en|pt)(\/.*)?$/);
        const rest = match?.[2] ?? pathname;
        const base = rest && rest.startsWith("/") ? rest : `/${rest}`;
        const key = base === "/" ? "" : base;
        if (key && LANG_ROUTE_MAP[key]?.[target]) return LANG_ROUTE_MAP[key]?.[target];
        if (!key) return LANG_HOME[target];
        return `/${target}${key}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-8 px-6 py-5 md:gap-10 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang === "es" ? "es/deepclinic" : lang}`,
                            className: "flex items-center gap-2 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-black",
                                children: "DC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center justify-start gap-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:flex",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `${(item.label === "DEEPCLINIC" || item.label === "PRODUCT" || item.label === "PRODUTO") && productsOpen ? "text-white" : ""}`,
                                    onClick: (e)=>handleNavClick(e, item.label),
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    "data-dc-lang": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setLangOpen((v)=>!v),
                                            "aria-expanded": langOpen,
                                            className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur sm:px-4",
                                            children: lang.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: joinClassNames("absolute right-0 top-full mt-3 w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur", "transition-[opacity,transform] duration-200", langOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1 p-2",
                                                children: [
                                                    {
                                                        id: "es",
                                                        label: "Español"
                                                    },
                                                    {
                                                        id: "en",
                                                        label: "English"
                                                    },
                                                    {
                                                        id: "pt",
                                                        label: "Português"
                                                    }
                                                ].map((opt)=>{
                                                    const active = opt.id === lang;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: getLangHref(opt.id),
                                                        onClick: ()=>setLangOpen(false),
                                                        className: "flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-medium " + (active ? "bg-white/[0.05] text-white" : "bg-transparent text-white/80"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-8 w-8 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-[11px] font-semibold uppercase text-white/80",
                                                                        children: opt.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[12px] font-semibold",
                                                                        children: opt.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 25
                                                            }, this),
                                                            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-semibold text-white/60",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 35
                                                            }, this) : null
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: signupHref,
                                    className: "inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 sm:px-5",
                                    children: ctaLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpen((v)=>!v),
                                    "aria-expanded": open,
                                    "aria-label": menuAriaLabel,
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 backdrop-blur md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 7h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 17h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                showProductsSubnav && productsOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block animate-fade-in-down",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 md:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center justify-start gap-6 py-3 text-[10px] font-medium uppercase tracking-[0.26em] text-white/40",
                                children: productItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "",
                                        children: item.label
                                    }, `subnav-${item.label}`, false, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 298,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 294,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("md:hidden", "fixed left-0 right-0 bottom-0 top-[72px]", "transition-opacity duration-300", open ? "opacity-100" : "pointer-events-none opacity-0"),
                    onClick: ()=>setOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("md:hidden", "absolute left-0 right-0 top-full", "z-30", "transition-[opacity,transform] duration-300", open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 md:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 p-3 text-[12px] font-medium uppercase tracking-[0.22em] text-white/75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2 pb-2",
                                        children: [
                                            {
                                                id: "es",
                                                label: "ES"
                                            },
                                            {
                                                id: "en",
                                                label: "EN"
                                            },
                                            {
                                                id: "pt",
                                                label: "PT"
                                            }
                                        ].map((opt)=>{
                                            const active = opt.id === lang;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: getLangHref(opt.id),
                                                onClick: ()=>setOpen(false),
                                                className: "inline-flex items-center justify-center rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] " + (active ? "border-white/25 bg-white/[0.08] text-white" : "border-white/10 bg-white/[0.04] text-white/80"),
                                                children: opt.label
                                            }, opt.id, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 342,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this),
                                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>setOpen(false),
                                            className: "rounded-xl px-3 py-3",
                                            children: item.label
                                        }, `mobile-${item.label}`, false, {
                                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(DeepClinicTopNav, "IT1SAsUburlIgMO++to4qxI6AS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DeepClinicTopNav;
var _c;
__turbopack_refresh__.register(_c, "DeepClinicTopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/grok-background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "GrokBackground": (()=>GrokBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GrokBackground({ variant = "default" }) {
    const isHero = variant === "hero";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 isolate overflow-hidden pointer-events-none select-none bg-black transform-gpu",
        style: {
            contain: "paint"
        },
        children: [
            isHero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute inset-0 opacity-40",
                style: {
                    animation: "dc_star_drift 52s ease-in-out infinite",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0",
                        style: {
                            backgroundImage: "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.65) 0, transparent 2px), radial-gradient(1px 1px at 28% 34%, rgba(255,255,255,0.35) 0, transparent 2px), radial-gradient(1px 1px at 44% 22%, rgba(255,255,255,0.55) 0, transparent 2px), radial-gradient(1px 1px at 61% 30%, rgba(255,255,255,0.42) 0, transparent 2px), radial-gradient(1px 1px at 76% 16%, rgba(255,255,255,0.62) 0, transparent 2px), radial-gradient(1px 1px at 83% 36%, rgba(255,255,255,0.30) 0, transparent 2px), radial-gradient(1px 1px at 18% 46%, rgba(255,255,255,0.28) 0, transparent 2px), radial-gradient(1px 1px at 36% 52%, rgba(255,255,255,0.34) 0, transparent 2px), radial-gradient(1px 1px at 52% 44%, rgba(255,255,255,0.26) 0, transparent 2px), radial-gradient(1px 1px at 68% 52%, rgba(255,255,255,0.30) 0, transparent 2px), radial-gradient(1px 1px at 91% 50%, rgba(255,255,255,0.24) 0, transparent 2px)",
                            animation: "dc_twinkle_soft 14s ease-in-out infinite",
                            animationDelay: "-6s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0 opacity-60",
                        style: {
                            backgroundImage: "radial-gradient(0.8px 0.8px at 8% 28%, rgba(255,255,255,0.28) 0, transparent 2px), radial-gradient(0.8px 0.8px at 22% 14%, rgba(255,255,255,0.22) 0, transparent 2px), radial-gradient(0.8px 0.8px at 33% 40%, rgba(255,255,255,0.18) 0, transparent 2px), radial-gradient(0.8px 0.8px at 49% 12%, rgba(255,255,255,0.20) 0, transparent 2px), radial-gradient(0.8px 0.8px at 57% 38%, rgba(255,255,255,0.16) 0, transparent 2px), radial-gradient(0.8px 0.8px at 71% 26%, rgba(255,255,255,0.18) 0, transparent 2px), radial-gradient(0.8px 0.8px at 88% 24%, rgba(255,255,255,0.22) 0, transparent 2px)",
                            animation: "dc_twinkle_soft 18s ease-in-out infinite",
                            animationDelay: "-11s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[-14%] right-[-12%] w-[92vw] h-[100vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/35 via-indigo-900/16 to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_light_drift 22s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            isHero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[-22%] right-[-28%] h-[140vh] w-[90vw] blur-[90px] mix-blend-screen",
                style: {
                    background: "radial-gradient(closest-side at 70% 50%, rgba(255,255,255,0.72), rgba(147,197,253,0.26), rgba(59,130,246,0.08), transparent 72%)",
                    animation: "dc_hero_beam 14s ease-in-out infinite",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[2%] right-[2%] w-[56vw] h-[56vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/18 via-blue-400/16 to-transparent blur-[120px] mix-blend-screen",
                style: {
                    animation: "dc_light_drift 16s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[14%] right-[10%] w-[52vw] h-[52vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-sky-400/12 to-transparent blur-[160px] mix-blend-screen",
                style: {
                    animation: "dc_drift_a 22s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[14%] left-[-18%] w-[82vw] h-[82vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/14 via-blue-900/10 to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_drift_b 28s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute -bottom-[28%] left-[-18%] w-[76vw] h-[76vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_drift_c 36s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-22%] left-[10%] w-[90vw] h-[55vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/14 via-black to-transparent blur-[140px]"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute inset-0 opacity-40 blur-[65px] mix-blend-screen",
                style: {
                    backgroundImage: "radial-gradient(55% 70% at 78% 48%, rgba(255,255,255,0.12), rgba(59,130,246,0.12), transparent 62%), radial-gradient(60% 80% at 62% 56%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(65% 85% at 34% 60%, rgba(56,189,248,0.08), transparent 64%)",
                    backgroundSize: "180% 180%",
                    backgroundPosition: "120% 50%",
                    animation: "dc_fog_flow 34s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30 mix-blend-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0 opacity-35",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                            backgroundSize: "260px 260px",
                            backgroundPosition: "120% 50%",
                            animation: "dc_fog_flow 26s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent blur-[60px] animate-spin-slow",
                        style: {
                            animationDuration: '30s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,rgba(0,0,0,0.0),rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.9)_92%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/grok-background.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = GrokBackground;
var _c;
__turbopack_refresh__.register(_c, "GrokBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/motion-reveal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MotionReveal": (()=>MotionReveal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function MotionReveal({ children, className, delayMs = 0, durationMs = 700, once = true, offsetY = 18 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const transitionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MotionReveal.useMemo[transitionStyle]": ()=>({
                transitionDuration: `${durationMs}ms`,
                transitionDelay: `${delayMs}ms`
            })
    }["MotionReveal.useMemo[transitionStyle]"], [
        delayMs,
        durationMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MotionReveal.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
            if (reduced) {
                setVisible(true);
                return;
            }
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "MotionReveal.useEffect": (entries)=>{
                    const entry = entries[0];
                    if (!entry) return;
                    if (entry.isIntersecting) {
                        setVisible(true);
                        if (once) observer.disconnect();
                    }
                }
            }["MotionReveal.useEffect"], {
                root: null,
                rootMargin: "-10% 0px -10% 0px",
                threshold: 0.12
            });
            observer.observe(el);
            return ({
                "MotionReveal.useEffect": ()=>observer.disconnect()
            })["MotionReveal.useEffect"];
        }
    }["MotionReveal.useEffect"], [
        once
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            ...transitionStyle,
            transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${offsetY}px, 0)`
        },
        className: joinClassNames("will-change-[opacity,transform,filter] transition-[opacity,transform,filter]", visible ? "opacity-100 blur-0" : "opacity-0 blur-[2px]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/motion-reveal.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(MotionReveal, "3unHS7PQLxbPPf8uSWobVBxm7Ko=");
_c = MotionReveal;
var _c;
__turbopack_refresh__.register(_c, "MotionReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/es/pricing/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_94e5dc._.js.map