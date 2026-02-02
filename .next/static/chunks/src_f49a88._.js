(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f49a88._.js", {

"[project]/src/components/hero-video.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HeroVideo": (()=>HeroVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const BUTTON_LABEL = {
    es: "Descubre cómo funciona",
    en: "See how it works",
    pt: "Descubra como funciona"
};
function HeroVideo() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es";
    const buttonLabel = BUTTON_LABEL[locale] ?? BUTTON_LABEL.es;
    if (isPlaying) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-3xl border border-slate-200 bg-black/90",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        className: "h-full w-full rounded-3xl",
                        src: "https://www.youtube.com/embed/rZnbL_LZSm0?autoplay=1&rel=0",
                        title: "Copiloto Médico - Cómo funciona",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero-video.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero-video.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero-video.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero-video.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setIsPlaying(true),
            className: "group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5ff7c] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-3xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(15,23,42,0.12)] group-hover:border-slate-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: "/tandem-hero-thumb-16-9_esp.mp4",
                            className: "h-full w-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100",
                            muted: true,
                            loop: true,
                            autoPlay: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-44 w-44 items-center justify-center rounded-full border-[4px] border-[#d5ff7c] bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.2),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#c9f46c] group-hover:bg-white group-hover:shadow-[0_24px_72px_rgba(15,23,42,0.25)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-colors duration-300 group-hover:bg-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5 shrink-0",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 5v14l11-7z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero-video.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero-video.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        buttonLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero-video.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero-video.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero-video.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero-video.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero-video.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero-video.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(HeroVideo, "uMIlB3ttqDf1xwZ5zypHDIOBrsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = HeroVideo;
var _c;
__turbopack_refresh__.register(_c, "HeroVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
const REDUCTION_PERCENTAGE = 0.3; // 30 % menos tiempo por consulta con Copiloto Médico
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
function BenefitsSimulator({ variant = "full", language = "es" }) {
    _s();
    const [consultationsPerDay, setConsultationsPerDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [consultationMinutes, setConsultationMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [pricePerConsultation, setPricePerConsultation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(800);
    const [isDetailsOpen, setIsDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isEnglish = language === "en";
    const isPortuguese = language === "pt";
    const locale = isEnglish ? "en-US" : isPortuguese ? "pt-BR" : "es-MX";
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
    const containerClasses = variant === "compact" ? "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.12)]" : "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d5ff7c] opacity-60 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 108,
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
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsDetailsOpen(true),
                                className: "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm hover:border-slate-300 hover:bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isEnglish ? "How do we calculate this?" : isPortuguese ? "Como calculamos?" : "¿Cómo lo calculamos?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-900",
                                children: isEnglish ? "Visits you take per day" : isPortuguese ? "Consultas que você realiza por dia" : "Consultas que realizas al día"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-slate-500",
                                children: isEnglish ? "Use an approximate average of the patients you see on a typical workday." : isPortuguese ? "Use uma média aproximada de pacientes que você atende em um dia típico." : "Usa un promedio aproximado de pacientes que atiendes en una jornada típica."
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-4 gap-2 text-xs",
                                children: CONSULTATIONS_PER_DAY_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setConsultationsPerDay(option.value),
                                        className: `rounded-full border px-2.5 py-1.5 font-medium transition ${consultationsPerDay === option.value ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"}
              `,
                                        children: isEnglish ? option.labelEn : option.labelEs
                                    }, option.value, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 148,
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
                                className: "mt-4 w-full rounded-full border border-slate-200 px-5 py-3 text-base font-medium text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-900",
                                children: isEnglish ? "Average length of each visit" : isPortuguese ? "Duração média de cada consulta" : "Duración media de cada consulta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-slate-500",
                                children: isEnglish ? "Choose how much time you usually spend per visit." : isPortuguese ? "Escolha quanto tempo você costuma dedicar por consulta." : "Elige el tiempo que sueles dedicar por consulta."
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-4 gap-2 text-xs",
                                children: CONSULTATION_DURATION_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setConsultationMinutes(option.value),
                                        className: `rounded-full border px-2.5 py-1.5 font-medium transition ${consultationMinutes === option.value ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"}
              `,
                                        children: isEnglish ? option.labelEn : option.labelEs
                                    }, option.value, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-slate-900",
                                    children: isEnglish ? "Price charged per visit" : isPortuguese ? "Preço cobrado por consulta" : "Precio cobrado por consulta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-slate-500",
                                    children: isEnglish ? "In US dollars (USD)." : isPortuguese ? "Na sua moeda local." : "En tu moneda local."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400",
                                            children: isEnglish ? "$" : isPortuguese ? "R$" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 229,
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
                                            className: "w-full rounded-full border border-slate-200 pl-8 pr-4 py-3 text-base font-medium text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 212,
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
                                        lineNumber: 249,
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
                                        lineNumber: 256,
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
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300",
                                        children: isEnglish ? "Extra visits per day" : isPortuguese ? "Consultas extras por dia" : "Consultas extra al día"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-2xl md:text-3xl font-semibold tracking-tight",
                                        children: formatNumber(extraConsultationsPerDay, locale)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[11px] text-slate-400",
                                        children: isEnglish ? "With the time you free up thanks to Copiloto Médico." : isPortuguese ? "Com o tempo liberado pelo Copiloto Médico." : "Con el tiempo liberado por Copiloto Médico."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300",
                                        children: isEnglish ? "Extra income per month" : isPortuguese ? "Renda extra no mês" : "Ingresos extra al mes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 289,
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
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-100",
                                        children: isEnglish ? "Monthly estimate based on your extra visits." : isPortuguese ? "Estimativa mensal com base nas suas consultas extras." : "Estimación mensual basada en tus consultas extra."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benefits-simulator.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benefits-simulator.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benefits-simulator.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 109,
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
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-semibold text-slate-900",
                            children: isEnglish ? "How we calculate the benefit" : isPortuguese ? "Como calculamos o benefício" : "Cómo calculamos el beneficio"
                        }, void 0, false, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-slate-500",
                            children: isEnglish ? "We use your own numbers and assume Copiloto Médico reduces each visit by up to 30% (max ~9 minutes per visit)." : isPortuguese ? "Usamos os seus próprios números e assumimos que o Copiloto Médico reduz em até 30% o tempo de cada consulta (máx. ~9 minutos por consulta)." : "Usamos tus propias cifras y asumimos que Copiloto Médico reduce hasta un 30% el tiempo de cada consulta (máx. ~9 minutos por consulta)."
                        }, void 0, false, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-2 text-xs text-slate-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: isEnglish ? "We start from three inputs:" : isPortuguese ? "Partimos de três dados:" : "Partimos de tres datos:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc space-y-1 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Number of visits you take on a typical day." : isPortuguese ? "Consultas que você realiza em um dia normal." : "Consultas que realizas en un día normal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Average length of each visit, in minutes." : isPortuguese ? "Duração média de cada consulta, em minutos." : "Duración media de cada consulta, en minutos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "Price you charge per visit." : isPortuguese ? "Preço cobrado por cada consulta." : "Precio cobrado por cada consulta."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2",
                                    children: isEnglish ? "With that, we estimate your total consultation time and apply the effect of Copiloto Médico:" : isPortuguese ? "Com isso estimamos o tempo total de consulta e aplicamos o efeito do Copiloto Médico:" : "Con eso estimamos el tiempo total de consulta y aplicamos el efecto de Copiloto Médico:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 367,
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
                                                            lineNumber: 379,
                                                            columnNumber: 42
                                                        }, this),
                                                        " el tiempo de cada consulta (máx. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "9 min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 379,
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
                                                            lineNumber: 384,
                                                            columnNumber: 40
                                                        }, this),
                                                        " o tempo de cada consulta (máx. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "9 min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 92
                                                        }, this),
                                                        " por consulta)."
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEnglish ? "We calculate hours saved per day and per month, or the extra visits you could take." : isPortuguese ? "Calculamos as horas economizadas por dia e por mês, ou as consultas extras possíveis." : "Calculamos las horas ahorradas al día y al mes, o las consultas extra posibles."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                            lineNumber: 388,
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
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this),
                                                !isEnglish && language === "es" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Ingresos extra mensuales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benefits-simulator.tsx",
                                                            lineNumber: 403,
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
                                                            lineNumber: 409,
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
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] text-slate-400",
                                    children: isEnglish ? "This simulator is indicative only; real results may vary depending on your specialty and consultation volume." : isPortuguese ? "Este simulador é apenas indicativo; os resultados reais podem variar de acordo com a sua especialidade e volume de consultas." : "Este simulador es orientativo; los resultados reales pueden variar según tu especialidad y volumen de consultas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benefits-simulator.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/benefits-simulator.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/benefits-simulator.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/benefits-simulator.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/benefits-simulator.tsx",
        lineNumber: 107,
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
"[project]/src/components/language-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LanguageSwitcher": (()=>LanguageSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const LANGUAGES = [
    {
        code: "es",
        label: "ES",
        href: "/",
        flag: "🇲🇽"
    },
    {
        code: "en",
        label: "English",
        href: "/en",
        flag: "🇺🇸"
    },
    {
        code: "pt",
        label: "PT",
        href: "/pt",
        flag: "🇧🇷"
    }
];
function LanguageSwitcher({ locale }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const current = LANGUAGES.find((lang)=>lang.code === locale) ?? LANGUAGES[0];
    const others = LANGUAGES.filter((lang)=>lang.code !== current.code);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((prev)=>!prev),
                className: "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-2 text-base",
                        "aria-hidden": true,
                        children: current.flag
                    }, void 0, false, {
                        fileName: "[project]/src/components/language-switcher.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: current.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/language-switcher.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/language-switcher.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 flex w-32 flex-col gap-1 rounded-2xl bg-slate-50 p-2 shadow-lg",
                children: [
                    current,
                    ...others
                ].map((lang)=>{
                    const isActive = lang.code === current.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: lang.href,
                        "aria-current": isActive ? "page" : undefined,
                        onClick: ()=>setOpen(false),
                        className: `inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium ${isActive ? "bg-white text-slate-900" : "text-slate-700 hover:bg-white/80"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 text-base",
                                "aria-hidden": true,
                                children: lang.flag
                            }, void 0, false, {
                                fileName: "[project]/src/components/language-switcher.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/language-switcher.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/src/components/language-switcher.tsx",
                        lineNumber: 39,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/language-switcher.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/language-switcher.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = LanguageSwitcher;
var _c;
__turbopack_refresh__.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/consultations-counter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConsultationsCounter": (()=>ConsultationsCounter),
    "HoursSavedCounter": (()=>HoursSavedCounter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature();
"use client";
;
;
const DOCTOR_IMAGES = [
    "/doctors/67b19236e3a3611ed6065a9b_01%20animation%20img.avif",
    "/doctors/67b19235807867cccd9a5006_03%20animation%20img.avif",
    "/doctors/67b19235d44d8582c04e31fd_05%20animation%20img.avif",
    "/doctors/67b192356ced5afd78c13178_09%20animation%20img.avif",
    "/doctors/67b19235c56540b2db753a22_10%20animation%20img.avif",
    "/doctors/67b19235a4b91a892ffe97a7_17%20animation%20img.avif",
    "/doctors/67b19235feae33bb5666a86a_21%20animation%20img.avif",
    "/doctors/67b19235a4b91a892ffe97a4_28%20animation%20img.avif"
];
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}
function clampNumber(n, min, max) {
    return Math.min(max, Math.max(min, n));
}
function writeStoredCounter(key, stored) {
    try {
        localStorage.setItem(key, JSON.stringify(stored));
    } catch  {}
}
function resolveNumberLocale(locale) {
    if (!locale) return undefined;
    if (locale.includes("-")) return locale;
    if (locale === "es") {
        const browserLocale = typeof navigator !== "undefined" ? navigator.language : "";
        if (browserLocale.startsWith("es-") && browserLocale !== "es-MX") return browserLocale;
        return "es-MX";
    }
    if (locale === "en") return "en-US";
    if (locale === "pt") return "pt-BR";
    return locale;
}
function formatWithSpaceGrouping(formatter, value) {
    try {
        const parts = formatter.formatToParts(value);
        return parts.map((part)=>{
            if (part.type === "group") return " ";
            return part.value;
        }).join("");
    } catch  {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}
let consultationsStore = null;
let mosaicRevealStore = null;
function getMosaicRevealStore() {
    if (mosaicRevealStore) return mosaicRevealStore;
    const store = {
        step: 0,
        subscribers: new Set(),
        emit (step) {
            store.step = step;
            store.subscribers.forEach((fn)=>fn(step));
        },
        increment () {
            store.emit(clampNumber(store.step + 1, 0, 4));
        },
        decrement () {
            store.emit(clampNumber(store.step - 1, 0, 4));
        },
        reset () {
            store.emit(0);
        },
        subscribe (fn) {
            store.subscribers.add(fn);
            fn(store.step);
            return ()=>{
                store.subscribers.delete(fn);
            };
        }
    };
    mosaicRevealStore = store;
    return store;
}
function getConsultationsStore(initialMinValue) {
    if (consultationsStore) return consultationsStore;
    const storageKey = "copiloto:landing:consultationsCounter";
    const intervalMs = 500;
    const store = {
        value: Math.max(0, initialMinValue),
        subscribers: new Set(),
        started: false,
        isAnimating: false,
        raf: null,
        intervalId: null,
        lastPersistAt: 0,
        subscriberCount: 0,
        minValue: initialMinValue,
        emit (value) {
            store.value = value;
            store.subscribers.forEach((fn)=>fn(value));
        },
        stop () {
            if (store.raf != null) {
                cancelAnimationFrame(store.raf);
                store.raf = null;
            }
            if (store.intervalId != null) {
                clearInterval(store.intervalId);
                store.intervalId = null;
            }
            store.started = false;
            const now = Date.now();
            writeStoredCounter(storageKey, {
                value: store.value,
                updatedAt: now
            });
            if ("TURBOPACK compile-time truthy", 1) {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            }
        },
        start (minValue) {
            store.minValue = Math.max(store.minValue, minValue);
            if (store.started) return;
            store.started = true;
            const baseline = Math.max(store.minValue, store.value);
            store.isAnimating = false;
            store.emit(baseline);
            store.raf = null;
            store.intervalId = window.setInterval(()=>{
                if (store.isAnimating) return;
                const next = store.value + 1;
                store.emit(next);
                const now = Date.now();
                if (now - store.lastPersistAt > 3000) {
                    store.lastPersistAt = now;
                    writeStoredCounter(storageKey, {
                        value: next,
                        updatedAt: now
                    });
                }
            }, intervalMs);
            window.addEventListener("beforeunload", handleBeforeUnload);
        },
        subscribe (fn) {
            store.subscribers.add(fn);
            store.subscriberCount += 1;
            fn(store.value);
            return ()=>{
                store.subscribers.delete(fn);
                store.subscriberCount = Math.max(0, store.subscriberCount - 1);
                if (store.subscriberCount === 0) store.stop();
            };
        }
    };
    function handleBeforeUnload() {
        const now = Date.now();
        writeStoredCounter(storageKey, {
            value: store.value,
            updatedAt: now
        });
    }
    consultationsStore = store;
    return store;
}
function useInViewOnce(threshold = 0.35) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInViewOnce.useEffect": ()=>{
            const el = ref.current;
            if (!el || typeof IntersectionObserver === "undefined") {
                setInView(true);
                return;
            }
            const observer = new IntersectionObserver({
                "useInViewOnce.useEffect": (entries)=>{
                    setInView(entries.some({
                        "useInViewOnce.useEffect": (entry)=>entry.isIntersecting
                    }["useInViewOnce.useEffect"]));
                }
            }["useInViewOnce.useEffect"], {
                threshold
            });
            observer.observe(el);
            return ({
                "useInViewOnce.useEffect": ()=>observer.disconnect()
            })["useInViewOnce.useEffect"];
        }
    }["useInViewOnce.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInViewOnce, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function useConsultationsValue(minValue) {
    _s1();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConsultationsValue.useMemo[store]": ()=>getConsultationsStore(minValue)
    }["useConsultationsValue.useMemo[store]"], [
        minValue
    ]);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useConsultationsValue.useState": ()=>store.value
    }["useConsultationsValue.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConsultationsValue.useEffect": ()=>{
            store.start(minValue);
            return store.subscribe(setValue);
        }
    }["useConsultationsValue.useEffect"], [
        minValue,
        store
    ]);
    return value;
}
_s1(useConsultationsValue, "Y1lfCn/DZwSfKvSNrnUlc6StnoM=");
function useMosaicRevealStep() {
    _s2();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMosaicRevealStep.useMemo[store]": ()=>getMosaicRevealStore()
    }["useMosaicRevealStep.useMemo[store]"], []);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMosaicRevealStep.useState": ()=>store.step
    }["useMosaicRevealStep.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMosaicRevealStep.useEffect": ()=>store.subscribe(setStep)
    }["useMosaicRevealStep.useEffect"], [
        store
    ]);
    return {
        step,
        increment: store.increment,
        decrement: store.decrement,
        reset: store.reset
    };
}
_s2(useMosaicRevealStep, "DJ5rIVDwHBwV3/PQsok+dW2/HJY=");
function MetricMosaic({ revealStep, extraDoctors }) {
    const circle = "relative overflow-hidden rounded-full ring-4 ring-white shadow-sm";
    const isHoursMode = extraDoctors !== undefined;
    const slots = isHoursMode ? [
        {
            key: "h-0",
            src: DOCTOR_IMAGES[0],
            className: "col-start-4 col-span-2 row-start-1 -translate-y-2 sm:-translate-y-3",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "h-1",
            src: DOCTOR_IMAGES[1],
            className: "col-start-7 col-span-2 row-start-1 translate-y-1 sm:translate-y-2",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "h-2",
            src: DOCTOR_IMAGES[2],
            className: "col-start-10 col-span-2 row-start-1 -translate-y-1",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "h-3",
            src: DOCTOR_IMAGES[3],
            className: "col-start-5 col-span-2 row-start-2 translate-y-1",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "h-4",
            src: DOCTOR_IMAGES[4],
            className: "col-start-2 col-span-2 row-start-3 -translate-y-1",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        },
        {
            key: "h-5",
            src: DOCTOR_IMAGES[5],
            className: "col-start-7 col-span-2 row-start-3 translate-y-1",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        },
        {
            key: "h-6",
            src: DOCTOR_IMAGES[6],
            className: "col-start-10 col-span-2 row-start-3 -translate-y-1",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        },
        {
            key: "h-7",
            src: DOCTOR_IMAGES[7],
            className: "col-start-6 col-span-2 row-start-4 translate-y-1",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        }
    ] : [
        {
            key: "c-0",
            src: DOCTOR_IMAGES[0],
            className: "col-start-4 col-span-2 row-start-1 -translate-y-2 sm:-translate-y-3",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "c-1",
            src: DOCTOR_IMAGES[1],
            className: "col-start-7 col-span-2 row-start-1 translate-y-2 sm:translate-y-3",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "c-2",
            src: DOCTOR_IMAGES[2],
            className: "col-start-10 col-span-2 row-start-1 -translate-y-1 sm:-translate-y-2",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "c-3",
            src: DOCTOR_IMAGES[3],
            className: "col-start-5 col-span-2 row-start-2",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "c-4",
            src: DOCTOR_IMAGES[4],
            className: "col-start-8 col-span-2 row-start-2",
            size: "h-16 w-16 sm:h-20 sm:w-20"
        },
        {
            key: "c-5",
            src: DOCTOR_IMAGES[5],
            className: "col-start-3 col-span-2 row-start-3",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        },
        {
            key: "c-6",
            src: DOCTOR_IMAGES[6],
            className: "col-start-6 col-span-2 row-start-3",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        },
        {
            key: "c-7",
            src: DOCTOR_IMAGES[7],
            className: "col-start-9 col-span-2 row-start-4 -translate-y-1",
            size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]"
        }
    ];
    const baseVisibleCount = isHoursMode ? 4 : Math.min(5, slots.length);
    const revealCount = isHoursMode ? clampNumber(baseVisibleCount + (extraDoctors ?? 0), baseVisibleCount, slots.length) : clampNumber(baseVisibleCount + revealStep * 2, baseVisibleCount, slots.length);
    const slotClass = (visible)=>"transition-all duration-500 ease-out " + (visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98]");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto h-[320px] w-full max-w-[600px] sm:h-[360px] md:h-[440px] md:max-w-[720px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full w-full grid-cols-12 grid-rows-4 items-center justify-items-center gap-y-8",
            children: slots.map((slot, idx)=>{
                const visible = idx < revealCount;
                const sizes = slot.size.includes("h-16") ? "(min-width: 640px) 80px, 64px" : "(min-width: 640px) 84px, 72px";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: slot.className,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: circle + " " + slot.size + " " + slotClass(visible),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slot.src,
                            alt: "",
                            fill: true,
                            className: "object-cover",
                            sizes: sizes
                        }, void 0, false, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 403,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 402,
                        columnNumber: 15
                    }, this)
                }, slot.key, false, {
                    fileName: "[project]/src/components/consultations-counter.tsx",
                    lineNumber: 401,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/consultations-counter.tsx",
            lineNumber: 396,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
_c = MetricMosaic;
function MetricSection({ id, nextId, prevId, title, fromValue, toValue, formatValue, subtitle }) {
    _s3();
    const { ref, inView } = useInViewOnce(0.55);
    const lockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchStartYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { step: revealStep, increment, decrement, reset } = useMosaicRevealStep();
    const settledAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [numberPulse, setNumberPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exitStep, setExitStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isHoursSection = Boolean(prevId) && !nextId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetricSection.useEffect": ()=>{
            if (!inView) return;
            settledAtRef.current = Date.now() + 500;
            if (isHoursSection) setExitStep(0);
        }
    }["MetricSection.useEffect"], [
        inView,
        isHoursSection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetricSection.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            setNumberPulse(true);
            const t = window.setTimeout({
                "MetricSection.useEffect.t": ()=>setNumberPulse(false)
            }["MetricSection.useEffect.t"], 240);
            return ({
                "MetricSection.useEffect": ()=>window.clearTimeout(t)
            })["MetricSection.useEffect"];
        }
    }["MetricSection.useEffect"], [
        revealStep
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetricSection.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            if (!nextId && !prevId) return;
            const isActive = {
                "MetricSection.useEffect.isActive": ()=>{
                    const el = ref.current;
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    const viewportH = window.innerHeight || 1;
                    const center = (rect.top + rect.bottom) / 2;
                    return Math.abs(center - viewportH / 2) < viewportH * 0.45;
                }
            }["MetricSection.useEffect.isActive"];
            const jumpTo = {
                "MetricSection.useEffect.jumpTo": (targetId)=>{
                    if (!targetId) return;
                    const now = Date.now();
                    if (now - lockRef.current < 650) return;
                    lockRef.current = now;
                    const target = document.getElementById(targetId);
                    target?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }["MetricSection.useEffect.jumpTo"];
            const onWheel = {
                "MetricSection.useEffect.onWheel": (e)=>{
                    if (!isActive()) return;
                    if (Math.abs(e.deltaY) < 2) return;
                    const now = Date.now();
                    if (now < settledAtRef.current) return;
                    if (now - lockRef.current < 450) {
                        e.preventDefault();
                        return;
                    }
                    if (e.deltaY > 0 && nextId) {
                        if (revealStep < 4) {
                            e.preventDefault();
                            lockRef.current = now;
                            increment();
                            if (revealStep === 3) {
                                window.setTimeout({
                                    "MetricSection.useEffect.onWheel": ()=>jumpTo(nextId)
                                }["MetricSection.useEffect.onWheel"], 80);
                            }
                            return;
                        }
                        e.preventDefault();
                        jumpTo(nextId);
                    }
                    if (e.deltaY > 0 && isHoursSection) {
                        if (exitStep < 4) {
                            e.preventDefault();
                            lockRef.current = now;
                            const next = clampNumber(exitStep + 1, 0, 4);
                            setExitStep(next);
                            if (next === 4) {
                                window.setTimeout({
                                    "MetricSection.useEffect.onWheel": ()=>{
                                        window.scrollBy({
                                            top: Math.round(window.innerHeight * 0.85),
                                            behavior: "smooth"
                                        });
                                    }
                                }["MetricSection.useEffect.onWheel"], 80);
                            }
                        }
                        return;
                    }
                    if (e.deltaY < 0 && prevId) {
                        if (!nextId) {
                            e.preventDefault();
                            lockRef.current = now;
                            reset();
                            window.setTimeout({
                                "MetricSection.useEffect.onWheel": ()=>jumpTo(prevId)
                            }["MetricSection.useEffect.onWheel"], 80);
                            return;
                        }
                        if (revealStep > 0) {
                            e.preventDefault();
                            lockRef.current = now;
                            decrement();
                            return;
                        }
                        e.preventDefault();
                        jumpTo(prevId);
                    }
                }
            }["MetricSection.useEffect.onWheel"];
            window.addEventListener("wheel", onWheel, {
                passive: false
            });
            return ({
                "MetricSection.useEffect": ()=>window.removeEventListener("wheel", onWheel)
            })["MetricSection.useEffect"];
        }
    }["MetricSection.useEffect"], [
        decrement,
        exitStep,
        increment,
        isHoursSection,
        nextId,
        prevId,
        ref,
        reset,
        revealStep
    ]);
    const jumpTo = (targetId)=>{
        if (!targetId) return;
        const now = Date.now();
        if (now - lockRef.current < 650) return;
        lockRef.current = now;
        const target = document.getElementById(targetId);
        target?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: ref,
        className: "relative scroll-mt-24 overflow-hidden transition-colors duration-700 " + (isHoursSection ? "bg-[#fbfff5]" : "bg-white"),
        onTouchMove: (e)=>{
            if (!isHoursSection) return;
            if (!inView) return;
            if (exitStep >= 4) return;
            e.preventDefault();
        },
        onTouchStart: (e)=>{
            touchStartYRef.current = e.touches[0]?.clientY ?? null;
        },
        onTouchEnd: (e)=>{
            const startY = touchStartYRef.current;
            touchStartYRef.current = null;
            if (!inView) return;
            if (startY == null) return;
            const endY = e.changedTouches[0]?.clientY;
            if (typeof endY !== "number") return;
            const delta = startY - endY;
            if (Math.abs(delta) < 24) return;
            const now = Date.now();
            if (now < settledAtRef.current) return;
            if (now - lockRef.current < 450) return;
            if (delta > 0) {
                if (nextId && revealStep < 4) {
                    lockRef.current = now;
                    increment();
                    if (revealStep === 3) {
                        window.setTimeout(()=>jumpTo(nextId), 80);
                    }
                    return;
                }
                if (isHoursSection) {
                    const next = clampNumber(exitStep + 1, 0, 4);
                    lockRef.current = now;
                    setExitStep(next);
                    if (next === 4) {
                        window.setTimeout(()=>{
                            window.scrollBy({
                                top: Math.round(window.innerHeight * 0.85),
                                behavior: "smooth"
                            });
                        }, 80);
                    }
                    return;
                }
                jumpTo(nextId);
            } else {
                if (prevId && !nextId) {
                    lockRef.current = now;
                    reset();
                    window.setTimeout(()=>jumpTo(prevId), 80);
                    return;
                }
                if (prevId && revealStep > 0) {
                    lockRef.current = now;
                    decrement();
                    return;
                }
                jumpTo(prevId);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 transition-opacity duration-700 " + (inView ? "opacity-100" : "opacity-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 " + (isHoursSection ? "bg-gradient-to-b from-[#fbfff5] via-white to-white" : "bg-gradient-to-b from-white via-white to-[#fbfff5]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/8 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consultations-counter.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 transition-[opacity,transform,filter] duration-700 ease-out md:px-8 lg:px-0 " + (inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-extrabold uppercase tracking-[0.32em] text-slate-900",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 sm:h-[620px] sm:w-[620px] " + (inView ? "opacity-90" : "opacity-0"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full bg-[#d5ff7c]/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/28"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/36"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/consultations-counter.tsx",
                                            lineNumber: 640,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 block whitespace-nowrap font-display font-normal leading-none tracking-[-0.05em] text-slate-900 transition-[filter,opacity,transform] duration-300 sm:tracking-[-0.06em] " + (numberPulse ? "opacity-90 blur-[1px]" : "opacity-100 blur-0"),
                                            style: {
                                                fontVariantNumeric: "tabular-nums",
                                                fontSize: "clamp(72px, 16vw, 160px)"
                                            },
                                            children: (()=>{
                                                const progress = easeOutCubic(clampNumber(revealStep / 4, 0, 1));
                                                const computed = Math.round(fromValue + (toValue - fromValue) * progress);
                                                return formatValue(computed);
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/consultations-counter.tsx",
                                            lineNumber: 654,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 639,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-8 max-w-md text-[16px] leading-relaxed text-slate-600",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 669,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "justify-self-center md:justify-self-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMosaic, {
                                revealStep: revealStep,
                                extraDoctors: isHoursSection ? exitStep : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultations-counter.tsx",
                                lineNumber: 675,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consultations-counter.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/consultations-counter.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 541,
        columnNumber: 5
    }, this);
}
_s3(MetricSection, "y1uBZcJZqyjdVwq0/RI3sEQOQ8g=", false, function() {
    return [
        useInViewOnce,
        useMosaicRevealStep
    ];
});
_c1 = MetricSection;
function ConsultationsCounter({ locale, minValue = 181_567, title, subtitle }) {
    _s4();
    const resolvedLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsultationsCounter.useMemo[resolvedLocale]": ()=>resolveNumberLocale(locale)
    }["ConsultationsCounter.useMemo[resolvedLocale]"], [
        locale
    ]);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsultationsCounter.useMemo[numberFormatter]": ()=>{
            try {
                return new Intl.NumberFormat(resolvedLocale);
            } catch  {
                return new Intl.NumberFormat();
            }
        }
    }["ConsultationsCounter.useMemo[numberFormatter]"], [
        resolvedLocale
    ]);
    const consultations = useConsultationsValue(minValue);
    const formatValue = (value)=>formatWithSpaceGrouping(numberFormatter, value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSection, {
        id: "metric-consultations",
        nextId: "metric-hours",
        title: title,
        fromValue: consultations,
        toValue: consultations,
        formatValue: formatValue,
        subtitle: subtitle
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
}
_s4(ConsultationsCounter, "DdxMgeSWgqv4G9hfu5L6G6mie9Q=", false, function() {
    return [
        useConsultationsValue
    ];
});
_c2 = ConsultationsCounter;
function HoursSavedCounter({ locale, minValue = 181_567, title, subtitle }) {
    _s5();
    const resolvedLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HoursSavedCounter.useMemo[resolvedLocale]": ()=>resolveNumberLocale(locale)
    }["HoursSavedCounter.useMemo[resolvedLocale]"], [
        locale
    ]);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HoursSavedCounter.useMemo[numberFormatter]": ()=>{
            try {
                return new Intl.NumberFormat(resolvedLocale);
            } catch  {
                return new Intl.NumberFormat();
            }
        }
    }["HoursSavedCounter.useMemo[numberFormatter]"], [
        resolvedLocale
    ]);
    const consultations = useConsultationsValue(minValue);
    const hoursSaved = Math.floor(consultations * 12 / 60);
    const formatValue = (value)=>formatWithSpaceGrouping(numberFormatter, value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSection, {
        id: "metric-hours",
        prevId: "metric-consultations",
        title: title,
        fromValue: hoursSaved,
        toValue: hoursSaved,
        formatValue: formatValue,
        subtitle: subtitle
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 737,
        columnNumber: 5
    }, this);
}
_s5(HoursSavedCounter, "DdxMgeSWgqv4G9hfu5L6G6mie9Q=", false, function() {
    return [
        useConsultationsValue
    ];
});
_c3 = HoursSavedCounter;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "MetricMosaic");
__turbopack_refresh__.register(_c1, "MetricSection");
__turbopack_refresh__.register(_c2, "ConsultationsCounter");
__turbopack_refresh__.register(_c3, "HoursSavedCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/audience-tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AudienceTabs": (()=>AudienceTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const IMAGES = [
    "/doctors/67b19236e3a3611ed6065a9b_01%20animation%20img.avif",
    "/doctors/67b19235807867cccd9a5006_03%20animation%20img.avif",
    "/doctors/67b19235d44d8582c04e31fd_05%20animation%20img.avif",
    "/doctors/67b192356ced5afd78c13178_09%20animation%20img.avif",
    "/doctors/67b19235c56540b2db753a22_10%20animation%20img.avif",
    "/doctors/67b19235a4b91a892ffe97a7_17%20animation%20img.avif",
    "/doctors/67b19235feae33bb5666a86a_21%20animation%20img.avif",
    "/doctors/67b19235a4b91a892ffe97a4_28%20animation%20img.avif"
];
const HIGHLIGHTS = {
    clinicians: [
        2,
        6,
        9,
        13,
        17
    ],
    revenue: [
        1,
        5,
        10,
        14,
        18
    ],
    nurses: [
        3,
        7,
        11,
        15,
        19
    ]
};
const TAB_IMAGE_OFFSETS = {
    clinicians: 0,
    revenue: 3,
    nurses: 5
};
const COPY = {
    es: {
        clinicians: {
            label: "Hospitales y Médicos",
            title: "Hospitales y Médicos",
            body: "Documentación clínica más rápida y precisa. Los profesionales dedican más tiempo al paciente y menos al papeleo administrativo."
        },
        revenue: {
            label: "Ciclo de ingresos",
            title: "Ciclo de ingresos",
            body: "Estandarización de notas y captura de datos optimizada para reducir retrabajo, acelerar la facturación y maximizar ingresos."
        },
        nurses: {
            label: "Enfermería",
            title: "Enfermería",
            body: "Documentación diseñada para el flujo de trabajo de enfermería: eficiente, precisa y centrada en el cuidado del paciente."
        }
    },
    en: {
        clinicians: {
            label: "Hospitals & Doctors",
            title: "Hospitals & Doctors",
            body: "Faster, more accurate clinical documentation. Professionals spend more time with patients and less on administrative paperwork."
        },
        revenue: {
            label: "Revenue Cycle",
            title: "Revenue Cycle",
            body: "Standardized notes and optimized data capture to reduce rework, speed up billing, and maximize revenue."
        },
        nurses: {
            label: "Nurses",
            title: "Nurses",
            body: "Documentation designed for nursing workflows: efficient, accurate, and focused on patient care."
        }
    },
    pt: {
        clinicians: {
            label: "Hospitais e Médicos",
            title: "Hospitais e Médicos",
            body: "Documentação clínica mais rápida e precisa. Os profissionais dedicam mais tempo ao paciente e menos à burocracia administrativa."
        },
        revenue: {
            label: "Ciclo de receita",
            title: "Ciclo de receita",
            body: "Padronização de notas e captura de dados otimizada para reduzir retrabalho, acelerar faturamento e maximizar receita."
        },
        nurses: {
            label: "Enfermagem",
            title: "Enfermagem",
            body: "Documentação projetada para o fluxo de trabalho de enfermagem: eficiente, precisa e focada no cuidado ao paciente."
        }
    }
};
function AudienceTabs({ language = "es" }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("clinicians");
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AudienceTabs.useMemo[tiles]": ()=>{
            const highlightOrder = HIGHLIGHTS[active];
            const highlight = new Set(highlightOrder);
            const offset = TAB_IMAGE_OFFSETS[active] % IMAGES.length;
            const rotatedImages = [
                ...IMAGES.slice(offset),
                ...IMAGES.slice(0, offset)
            ];
            return Array.from({
                length: 20
            }, {
                "AudienceTabs.useMemo[tiles]": (_, idx)=>{
                    const isOn = highlight.has(idx);
                    const highlightPos = highlightOrder.indexOf(idx);
                    const src = isOn ? rotatedImages[highlightPos % rotatedImages.length] : rotatedImages[(idx * 3 + offset) % rotatedImages.length];
                    return {
                        idx,
                        src,
                        isOn
                    };
                }
            }["AudienceTabs.useMemo[tiles]"]);
        }
    }["AudienceTabs.useMemo[tiles]"], [
        active
    ]);
    const items = [
        "clinicians",
        "revenue",
        "nurses"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 py-32 md:px-8 md:py-36 lg:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-3",
                        children: tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square overflow-hidden rounded-2xl bg-slate-100 transition-opacity duration-300 " + (tile.isOn ? "opacity-100" : "opacity-15"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: tile.src,
                                    alt: "",
                                    fill: true,
                                    className: "object-cover",
                                    sizes: "(min-width: 768px) 110px, 70px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/audience-tabs.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, tile.idx, false, {
                                fileName: "[project]/src/components/audience-tabs.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/audience-tabs.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 pt-8 md:border-t-0 md:pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-slate-200",
                            children: items.map((key)=>{
                                const isActive = active === key;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActive(key),
                                    className: "flex w-full items-start justify-between gap-6 py-5 text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: (isActive ? "text-slate-900" : "text-slate-500") + " text-[18px] font-semibold",
                                                children: COPY[language][key].label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/audience-tabs.tsx",
                                                lineNumber: 142,
                                                columnNumber: 23
                                            }, this),
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[14px] leading-relaxed text-slate-700",
                                                children: COPY[language][key].body
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/audience-tabs.tsx",
                                                lineNumber: 146,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/audience-tabs.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this)
                                }, key, false, {
                                    fileName: "[project]/src/components/audience-tabs.tsx",
                                    lineNumber: 135,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/audience-tabs.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/audience-tabs.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/audience-tabs.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/audience-tabs.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/audience-tabs.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(AudienceTabs, "ZqpJLV3Qs5WGAZ78SYYTWTzRUYk=");
_c = AudienceTabs;
var _c;
__turbopack_refresh__.register(_c, "AudienceTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_f49a88._.js.map