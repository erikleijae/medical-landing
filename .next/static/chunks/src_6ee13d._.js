(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_6ee13d._.js", {

"[project]/apps/landing/src/components/locale-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LocaleSelector": (()=>LocaleSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const STORAGE_KEY = "copiloto-locale-preferences";
const COUNTRY_OPTIONS = [
    {
        code: "ag",
        label: "Antigua y Barbuda",
        defaultLanguage: "en"
    },
    {
        code: "ar",
        label: "Argentina",
        defaultLanguage: "es"
    },
    {
        code: "bs",
        label: "Bahamas",
        defaultLanguage: "en"
    },
    {
        code: "bb",
        label: "Barbados",
        defaultLanguage: "en"
    },
    {
        code: "bz",
        label: "Belice",
        defaultLanguage: "en"
    },
    {
        code: "bo",
        label: "Bolivia",
        defaultLanguage: "es"
    },
    {
        code: "br",
        label: "Brasil",
        defaultLanguage: "pt"
    },
    {
        code: "ca",
        label: "Canadá",
        defaultLanguage: "en"
    },
    {
        code: "cl",
        label: "Chile",
        defaultLanguage: "es"
    },
    {
        code: "co",
        label: "Colombia",
        defaultLanguage: "es"
    },
    {
        code: "cr",
        label: "Costa Rica",
        defaultLanguage: "es"
    },
    {
        code: "cu",
        label: "Cuba",
        defaultLanguage: "es"
    },
    {
        code: "dm",
        label: "Dominica",
        defaultLanguage: "en"
    },
    {
        code: "do",
        label: "República Dominicana",
        defaultLanguage: "es"
    },
    {
        code: "ec",
        label: "Ecuador",
        defaultLanguage: "es"
    },
    {
        code: "sv",
        label: "El Salvador",
        defaultLanguage: "es"
    },
    {
        code: "gd",
        label: "Granada",
        defaultLanguage: "en"
    },
    {
        code: "gt",
        label: "Guatemala",
        defaultLanguage: "es"
    },
    {
        code: "gy",
        label: "Guyana",
        defaultLanguage: "en"
    },
    {
        code: "ht",
        label: "Haití",
        defaultLanguage: "es"
    },
    {
        code: "hn",
        label: "Honduras",
        defaultLanguage: "es"
    },
    {
        code: "jm",
        label: "Jamaica",
        defaultLanguage: "en"
    },
    {
        code: "mx",
        label: "México",
        defaultLanguage: "es"
    },
    {
        code: "ni",
        label: "Nicaragua",
        defaultLanguage: "es"
    },
    {
        code: "pa",
        label: "Panamá",
        defaultLanguage: "es"
    },
    {
        code: "py",
        label: "Paraguay",
        defaultLanguage: "es"
    },
    {
        code: "pe",
        label: "Perú",
        defaultLanguage: "es"
    },
    {
        code: "kn",
        label: "San Cristóbal y Nieves",
        defaultLanguage: "en"
    },
    {
        code: "lc",
        label: "Santa Lucía",
        defaultLanguage: "en"
    },
    {
        code: "vc",
        label: "San Vicente y las Granadinas",
        defaultLanguage: "en"
    },
    {
        code: "sr",
        label: "Surinam",
        defaultLanguage: "en"
    },
    {
        code: "tt",
        label: "Trinidad y Tobago",
        defaultLanguage: "en"
    },
    {
        code: "us",
        label: "Estados Unidos",
        defaultLanguage: "en"
    },
    {
        code: "uy",
        label: "Uruguay",
        defaultLanguage: "es"
    },
    {
        code: "ve",
        label: "Venezuela",
        defaultLanguage: "es"
    }
];
const LANGUAGE_OPTIONS = [
    {
        code: "en",
        label: "English"
    },
    {
        code: "es",
        label: "Español"
    },
    {
        code: "pt",
        label: "Português"
    }
];
const DEFAULT_COUNTRY = "sv";
const DEFAULT_LANGUAGE = "es";
function getDefaultCountryForLanguage(language) {
    const preferredCode = language === "es" ? "sv" : language === "pt" ? "br" : language === "en" ? "us" : null;
    if (preferredCode) {
        const preferred = COUNTRY_OPTIONS.find((country)=>country.code === preferredCode);
        if (preferred) return preferred.code;
    }
    const fallback = COUNTRY_OPTIONS.find((country)=>country.defaultLanguage === language);
    if (fallback) return fallback.code;
    return DEFAULT_COUNTRY;
}
function detectLanguageFromNavigator() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const nav = (window.navigator.language || "").toLowerCase();
    if (nav.startsWith("pt")) return "pt";
    if (nav.startsWith("en")) return "en";
    return "es";
}
function detectLanguageFromPathname(pathname) {
    if (!pathname) return null;
    if (pathname.startsWith("/en")) return "en";
    if (pathname.startsWith("/pt")) return "pt";
    if (pathname.startsWith("/es")) return "es";
    return null;
}
function readStoredPreference() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || !parsed.languageCode) return null;
        const language = parsed.languageCode;
        if (language !== "es" && language !== "en" && language !== "pt") {
            return null;
        }
        const hasValidCountry = parsed.countryCode && COUNTRY_OPTIONS.some((country)=>country.code === parsed.countryCode);
        const countryCode = hasValidCountry ? parsed.countryCode : getDefaultCountryForLanguage(language);
        return {
            countryCode,
            languageCode: language
        };
    } catch  {
        return null;
    }
}
function persistPreference(preference) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
    } catch  {
    // ignore
    }
}
function LocaleSelector() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_COUNTRY);
    const [languageCode, setLanguageCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LANGUAGE);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocaleSelector.useEffect": ()=>{
            const languageFromPath = detectLanguageFromPathname(pathname ?? null);
            const stored = readStoredPreference();
            const navigatorLanguage = detectLanguageFromNavigator();
            const effectiveLanguage = languageFromPath ?? stored?.languageCode ?? navigatorLanguage ?? DEFAULT_LANGUAGE;
            const effectiveCountry = stored?.countryCode ?? getDefaultCountryForLanguage(effectiveLanguage);
            setLanguageCode(effectiveLanguage);
            setCountryCode(effectiveCountry);
            persistPreference({
                countryCode: effectiveCountry,
                languageCode: effectiveLanguage
            });
            setInitialized(true);
        }
    }["LocaleSelector.useEffect"], [
        pathname
    ]);
    const selectedCountry = COUNTRY_OPTIONS.find((country)=>country.code === countryCode) ?? COUNTRY_OPTIONS[0];
    const selectedLanguage = LANGUAGE_OPTIONS.find((language)=>language.code === languageCode) ?? LANGUAGE_OPTIONS[0];
    const displayLabel = `${selectedCountry.label} (${selectedLanguage.label})`;
    const handleApply = ()=>{
        if (!initialized) return;
        const preference = {
            countryCode,
            languageCode
        };
        persistPreference(preference);
        const language = preference.languageCode;
        const currentPath = pathname || "/";
        const segments = currentPath.split("/");
        let restSegments = segments.slice(1);
        if (restSegments[0] === "es" || restSegments[0] === "en" || restSegments[0] === "pt") {
            restSegments = restSegments.slice(1);
        }
        const restPath = restSegments.length > 0 ? `/${restSegments.join("/")}` : "";
        const targetPath = `/${language}${restPath}` || "/";
        if (targetPath !== currentPath) {
            router.push(targetPath);
        }
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 flex items-center justify-center text-[11px] text-slate-500 sm:justify-start sm:text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(true),
                className: "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] text-slate-700 shadow-sm transition hover:bg-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        children: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: displayLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-3xl bg-white p-6 text-sm text-slate-800 shadow-2xl sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            children: "🌐"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold",
                                            children: "Elige país e idioma"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false),
                                    className: "rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700",
                                    "aria-label": "Cerrar selector de idioma",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-6 text-[13px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium uppercase tracking-wide text-slate-500",
                                            children: "País"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/70",
                                                value: countryCode,
                                                onChange: (event)=>{
                                                    const value = event.target.value;
                                                    const exists = COUNTRY_OPTIONS.some((country)=>country.code === value);
                                                    if (exists) {
                                                        setCountryCode(value);
                                                    }
                                                },
                                                children: COUNTRY_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.code,
                                                        children: option.label
                                                    }, option.code, false, {
                                                        fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium uppercase tracking-wide text-slate-500",
                                            children: "Idioma"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                            children: LANGUAGE_OPTIONS.map((option)=>{
                                                const isActive = option.code === languageCode;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setLanguageCode(option.code),
                                                    className: `rounded-full border px-3 py-1.5 text-xs transition ${isActive ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"}`,
                                                    children: option.label
                                                }, option.code, false, {
                                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleApply,
                                        className: "inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white",
                                        children: "Actualizar preferencias"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/landing/src/components/locale-selector.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_s(LocaleSelector, "VbYgXVkrdK5pIPsg5DBSOVPJZoE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LocaleSelector;
var _c;
__turbopack_refresh__.register(_c, "LocaleSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/landing/src/app/es/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_6ee13d._.js.map