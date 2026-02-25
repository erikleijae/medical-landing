(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_6ee831._.js", {

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
"[project]/src/components/interactive-starburst.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "InteractiveStarburst": (()=>InteractiveStarburst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function round3(value) {
    return Math.round(value * 1000) / 1000;
}
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
const QUESTIONS = {
    es: [
        "¿Qué diagnóstico diferencial considerar en cefalea súbita?",
        "¿Interpretación inicial de gasometría arterial en disnea?",
        "¿Manejo de hipertensión severa asintomática vs urgencia hipertensiva?",
        "¿Cuándo iniciar antibiótico en IVU complicada y qué esquema?",
        "¿Algoritmo de dolor abdominal agudo: laboratorios e imagen inicial?",
        "¿Criterios de gravedad en asma y manejo en urgencias?",
        "¿Evaluación inicial de síncope: riesgo y estudios?",
        "¿Abordaje de fiebre sin foco: red flags y pruebas?",
        "¿Manejo de anticoagulación perioperatoria en DOACs?",
        "¿Interpretación de pruebas tiroideas (TSH/T4) en distintos escenarios?",
        "¿Tratamiento inicial de insuficiencia cardiaca descompensada?",
        "¿Cribado y manejo de enfermedad renal crónica en primer nivel?"
    ],
    en: [
        "What differential diagnosis to consider in sudden headache?",
        "Initial interpretation of arterial blood gas in dyspnea?",
        "Management of asymptomatic severe hypertension vs hypertensive urgency?",
        "When to start antibiotics in complicated UTI and which regimen?",
        "Acute abdominal pain algorithm: initial labs and imaging?",
        "Severity criteria in asthma and emergency management?",
        "Initial evaluation of syncope: risk and studies?",
        "Approach to fever without source: red flags and tests?",
        "Management of perioperative anticoagulation in DOACs?",
        "Interpretation of thyroid tests (TSH/T4) in different scenarios?",
        "Initial treatment of decompensated heart failure?",
        "Screening and management of chronic kidney disease in primary care?"
    ],
    pt: [
        "Que diagnóstico diferencial considerar em cefaleia súbita?",
        "Interpretação inicial de gasometria arterial em dispneia?",
        "Manejo de hipertensão grave assintomática vs urgência hipertensiva?",
        "Quando iniciar antibiótico em ITU complicada e qual esquema?",
        "Algoritmo de dor abdominal aguda: laboratórios e imagem inicial?",
        "Critérios de gravidade em asma e manejo na emergência?",
        "Avaliação inicial de síncope: risco e estudos?",
        "Abordagem de febre sem foco: red flags e exames?",
        "Manejo de anticoagulação perioperatória em DOACs?",
        "Interpretação de testes tireoidianos (TSH/T4) em diferentes cenários?",
        "Tratamento inicial de insuficiência cardíaca descompensada?",
        "Rastreamento e manejo de doença renal crônica na atenção primária?"
    ]
};
function InteractiveStarburst({ className, lang = "es", ambientMotion = false }) {
    _s();
    const rays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InteractiveStarburst.useMemo[rays]": ()=>{
            const questions = QUESTIONS[lang];
            const major = [
                0,
                8,
                16,
                24,
                32,
                40,
                48,
                56,
                64,
                72,
                80,
                88,
                96,
                104,
                112,
                120,
                132,
                144,
                156,
                168,
                180,
                192,
                204,
                216,
                228,
                240,
                252,
                264,
                276,
                288,
                300,
                312,
                324,
                336,
                348
            ];
            const minor = [
                4,
                18,
                36,
                52,
                68,
                92,
                116,
                138,
                162,
                186,
                214,
                238,
                262,
                286,
                314,
                338
            ];
            const majorRays = major.map({
                "InteractiveStarburst.useMemo[rays].majorRays": (deg, idx)=>({
                        id: `ray-major-${deg}`,
                        deg,
                        len: 210 + idx * 13 % 34,
                        stroke: "rgba(255,255,255,0.075)",
                        strokeWidth: 2,
                        question: questions[idx % questions.length] ?? questions[0] ?? ""
                    })
            }["InteractiveStarburst.useMemo[rays].majorRays"]);
            const minorRays = minor.map({
                "InteractiveStarburst.useMemo[rays].minorRays": (deg, idx)=>({
                        id: `ray-minor-${deg}`,
                        deg,
                        len: 240 + idx * 17 % 64,
                        stroke: "rgba(255,255,255,0.045)",
                        strokeWidth: 1,
                        question: questions[(idx + majorRays.length) % questions.length] ?? questions[0] ?? ""
                    })
            }["InteractiveStarburst.useMemo[rays].minorRays"]);
            return [
                ...majorRays,
                ...minorRays
            ];
        }
    }["InteractiveStarburst.useMemo[rays]"], [
        lang
    ]);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InteractiveStarburst.useMemo[points]": ()=>{
            const cx = 600;
            const cy = 320;
            return rays.map({
                "InteractiveStarburst.useMemo[points]": (ray, idx)=>{
                    const rad = ray.deg * Math.PI / 180;
                    const len = ray.len;
                    const x = cx + Math.sin(rad) * len;
                    const y = cy - Math.cos(rad) * len;
                    const size = idx % 7 === 0 ? 8 : idx % 3 === 0 ? 7 : 6;
                    const fill = idx % 5 === 0 ? "rgba(191,219,254,0.96)" : "rgba(255,255,255,0.74)";
                    return {
                        id: ray.id,
                        x: round3(x - size / 2),
                        y: round3(y - size / 2),
                        w: size,
                        h: size,
                        fill,
                        question: ray.question
                    };
                }
            }["InteractiveStarburst.useMemo[points]"]);
        }
    }["InteractiveStarburst.useMemo[points]"], [
        rays
    ]);
    const [activePointId, setActivePointId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        pointerId: null,
        startX: 0,
        startY: 0,
        startOffsetX: 0,
        startOffsetY: 0,
        moved: false
    });
    const onPointerDown = (e)=>{
        if (e.button !== 0) return;
        dragRef.current.pointerId = e.pointerId;
        dragRef.current.startX = e.clientX;
        dragRef.current.startY = e.clientY;
        dragRef.current.startOffsetX = offset.x;
        dragRef.current.startOffsetY = offset.y;
        dragRef.current.moved = false;
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e)=>{
        if (dragRef.current.pointerId !== e.pointerId) return;
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        if (Math.abs(dx) + Math.abs(dy) > 3) dragRef.current.moved = true;
        const nextX = clamp(dragRef.current.startOffsetX + dx, -70, 70);
        const nextY = clamp(dragRef.current.startOffsetY + dy, -40, 40);
        setOffset({
            x: nextX,
            y: nextY
        });
    };
    const onPointerUp = (e)=>{
        if (dragRef.current.pointerId !== e.pointerId) return;
        dragRef.current.pointerId = null;
        setDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch  {
        // noop
        }
    };
    const onPointerCancel = (e)=>{
        if (dragRef.current.pointerId !== e.pointerId) return;
        dragRef.current.pointerId = null;
        setDragging(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: joinClassNames("relative h-full w-full", dragging ? "cursor-grabbing" : "cursor-grab", className),
        role: "application",
        "aria-label": "Mapa interactivo de preguntas clínicas",
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerUp,
        onPointerCancel: onPointerCancel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("dc_motion will-change-transform", ambientMotion ? "dc_starburst_drift" : null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion will-change-transform",
                        style: {
                            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dc_motion dc_starburst_spin origin-center transform-gpu will-change-transform",
                            style: {
                                transformOrigin: "50% 50%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 1200 640",
                                className: "h-[620px] w-[1160px] select-none md:h-[760px] md:w-[1400px] lg:h-[820px] lg:w-[1520px]",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.62",
                                            transform: "translate(600 360)",
                                            children: rays.map((ray)=>{
                                                const isActive = ray.id === activePointId;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: 0,
                                                        y1: 0,
                                                        x2: 0,
                                                        y2: -ray.len,
                                                        transform: `rotate(${ray.deg})`,
                                                        stroke: isActive ? "rgba(255,255,255,0.26)" : ray.stroke,
                                                        strokeWidth: isActive ? Math.max(ray.strokeWidth, 2) : ray.strokeWidth,
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 29
                                                    }, this)
                                                }, ray.id, false, {
                                                    fileName: "[project]/src/components/interactive-starburst.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 27
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                            lineNumber: 234,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.96",
                                            children: [
                                                points.filter((p)=>p.id !== activePointId).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PointGroup, {
                                                        p: p,
                                                        idx: idx,
                                                        isActive: false,
                                                        setActivePointId: setActivePointId
                                                    }, p.id, false, {
                                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 27
                                                    }, this)),
                                                points.filter((p)=>p.id === activePointId).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PointGroup, {
                                                        p: p,
                                                        idx: idx,
                                                        isActive: true,
                                                        setActivePointId: setActivePointId
                                                    }, p.id, false, {
                                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 27
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/interactive-starburst.tsx",
                                    lineNumber: 233,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive-starburst.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive-starburst.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive-starburst.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive-starburst.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive-starburst.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/interactive-starburst.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/interactive-starburst.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(InteractiveStarburst, "ClX9eHcV2paobAsKKvb0icbN/K4=");
_c = InteractiveStarburst;
function PointGroup({ p, idx, isActive, setActivePointId }) {
    const hit = 22;
    const hitX = round3(p.x - (hit - p.w) / 2);
    const hitY = round3(p.y - (hit - p.h) / 2);
    const rectX = round3(p.x);
    const rectY = round3(p.y);
    // Calculate active card position (centered above point)
    const foSize = 400;
    const foX = p.x - foSize / 2 + p.w / 2;
    const foY = p.y - foSize / 2 + p.h / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: hitX,
                y: hitY,
                width: hit,
                height: hit,
                fill: "transparent",
                pointerEvents: "all",
                role: "button",
                "aria-label": p.question,
                tabIndex: -1,
                style: {
                    cursor: "pointer"
                },
                onPointerDown: (e)=>{
                    e.stopPropagation();
                },
                onClick: (e)=>{
                    e.stopPropagation();
                    setActivePointId(p.id);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/interactive-starburst.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: rectX,
                y: rectY,
                width: p.w,
                height: p.h,
                fill: p.fill,
                rx: 1,
                ry: 1,
                className: joinClassNames("dc_motion", "outline-none", "transition-[opacity] duration-200", isActive ? "opacity-100" : "opacity-72", "animate-dc-twinkle"),
                style: {
                    animationDelay: `${idx * 140}ms`,
                    cursor: "pointer",
                    filter: isActive ? "drop-shadow(0 0 12px rgba(255,255,255,0.45)) drop-shadow(0 0 30px rgba(191,219,254,0.22))" : "drop-shadow(0 0 10px rgba(255,255,255,0.10))"
                },
                tabIndex: 0,
                role: "button",
                "aria-label": p.question,
                onPointerDown: (e)=>{
                    e.stopPropagation();
                },
                onFocus: ()=>setActivePointId(p.id),
                onClick: (e)=>{
                    e.stopPropagation();
                    setActivePointId(p.id);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActivePointId(p.id);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/interactive-starburst.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: round3(rectX - 3),
                        y: round3(rectY - 3),
                        width: p.w + 6,
                        height: p.h + 6,
                        fill: "transparent",
                        stroke: "rgba(255,255,255,0.45)",
                        strokeWidth: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive-starburst.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                        x: foX,
                        y: foY,
                        width: foSize,
                        height: foSize,
                        className: "overflow-visible pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center animate-[dc-spin_60s_linear_infinite_reverse]",
                            style: {
                                animationPlayState: isActive ? "paused" : "running"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-end -translate-y-[50px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-white/20 rounded-xl px-5 py-4 text-center shadow-[0_0_60px_rgba(255,255,255,0.25)] max-w-[320px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-black leading-snug",
                                            children: p.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white mt-[-1px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive-starburst.tsx",
                                lineNumber: 398,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive-starburst.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive-starburst.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive-starburst.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
_c1 = PointGroup;
var _c, _c1;
__turbopack_refresh__.register(_c, "InteractiveStarburst");
__turbopack_refresh__.register(_c1, "PointGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/deepclinic-fx-frame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicFxFrame": (()=>DeepClinicFxFrame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function DeepClinicFxFrame({ accent, children, className, style, variant = "ui", tilt = true, spotlight = true, scanlines = true, shimmer = true, cursor = true }) {
    const spotlightOpacity = variant === "video" ? 0.55 : variant === "visual" ? 0.7 : 0.75;
    const scanlinesOpacity = variant === "video" ? 0.10 : variant === "visual" ? 0.12 : 0.14;
    const shimmerOpacity = variant === "video" ? 0.65 : 0.8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: joinClassNames("relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl transform-gpu", className),
        style: {
            contain: "paint",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: [
                    spotlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute -inset-[22%] mix-blend-screen blur-[14px]",
                        style: {
                            opacity: spotlightOpacity,
                            background: `radial-gradient(40% 55% at 30% 30%, rgba(255,255,255,0.10), ${accent}, transparent 70%)`,
                            animation: "dc_spotlight_sweep 12.5s ease-in-out infinite",
                            willChange: "transform"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : null,
                    spotlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute -inset-[26%] mix-blend-screen blur-[22px]",
                        style: {
                            opacity: variant === "video" ? 0.28 : 0.34,
                            background: `radial-gradient(35% 45% at 70% 60%, rgba(255,255,255,0.06), ${accent}, transparent 72%)`,
                            animation: "dc_spotlight_sweep 16.8s ease-in-out infinite",
                            animationDelay: "-5.2s",
                            willChange: "transform"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this) : null,
                    scanlines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0 mix-blend-overlay",
                        style: {
                            opacity: scanlinesOpacity,
                            backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 5px)",
                            animation: "dc_scanlines 9s linear infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this) : null,
                    shimmer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0",
                        style: {
                            opacity: shimmerOpacity,
                            backgroundImage: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 60%)",
                            backgroundSize: "200% 100%",
                            animation: "dc_shimmer 11.2s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null,
                    cursor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion absolute inset-0 mix-blend-screen",
                        style: {
                            opacity: variant === "video" ? 0.32 : 0.38,
                            background: `radial-gradient(110px 110px at 20% 20%, rgba(255,255,255,0.18), ${accent}, transparent 72%)`,
                            animation: "dc_ui_cursor 7.8s ease-in-out infinite",
                            willChange: "transform, opacity"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: joinClassNames(tilt ? "dc_motion relative" : "relative"),
                style: tilt ? {
                    transformStyle: "preserve-3d",
                    animation: "dc_ui_tilt 12s ease-in-out infinite",
                    willChange: "transform"
                } : undefined,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deepclinic-fx-frame.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = DeepClinicFxFrame;
var _c;
__turbopack_refresh__.register(_c, "DeepClinicFxFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/deepclinic-whatsapp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicWhatsApp": (()=>DeepClinicWhatsApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
/* Assets */ const WHATSAPP_VIDEO = "/video/day_disconect.mp4";
const CONTENT = {
    es: {
        title: "DeepClinic Asistente Clínico en WhatsApp",
        description: "Tu equipo clínico opera desde WhatsApp: organiza, prioriza y da seguimiento sin perder contexto.",
        cta: "Ver Agentes",
        footer: ""
    },
    en: {
        title: "DeepClinic Clinical Assistant on WhatsApp",
        description: "Run your clinical operations from WhatsApp: organize, prioritize, and follow up with full context.",
        cta: "View Agents",
        footer: ""
    },
    pt: {
        title: "DeepClinic Assistente Clínico no WhatsApp",
        description: "Sua operação clínica roda no WhatsApp: organiza, prioriza e acompanha sem perder contexto.",
        cta: "Ver Agentes",
        footer: ""
    }
};
const STEPS = {
    es: [
        {
            id: "01",
            title: "Entra por WhatsApp",
            caption: "Para el paciente no cambia nada.",
            bullets: [
                "El paciente escribe como siempre",
                "Tú ves todo en una bandeja única",
                "Sin apps nuevas, sin fricción"
            ]
        },
        {
            id: "02",
            title: "Organiza y prioriza",
            caption: "DeepClinic etiqueta, agrupa y te deja solo lo crítico.",
            bullets: [
                "Categoriza por tema (consulta, citas, administración)",
                "Detecta urgencias y pendientes",
                "Ordena por prioridad clínica"
            ]
        },
        {
            id: "03",
            title: "Responde con contexto",
            caption: "Resumen + siguientes pasos listos.",
            bullets: [
                "Resume la conversación y el motivo",
                "Plantillas para respuestas frecuentes",
                "Seguimiento automático cuando lo necesites"
            ]
        }
    ],
    en: [
        {
            id: "01",
            title: "WhatsApp in",
            caption: "No change for patients.",
            bullets: [
                "Patients message as usual",
                "You get one unified inbox",
                "No new apps, no friction"
            ]
        },
        {
            id: "02",
            title: "Organize & prioritize",
            caption: "DeepClinic tags, groups and escalates what's critical.",
            bullets: [
                "Auto-categorize by topic",
                "Detect urgency & pending tasks",
                "Sort by clinical priority"
            ]
        },
        {
            id: "03",
            title: "Reply with context",
            caption: "Summary + next steps, ready to send.",
            bullets: [
                "Conversation summary",
                "Templates for frequent replies",
                "Automated follow-up"
            ]
        }
    ],
    pt: [
        {
            id: "01",
            title: "Entra pelo WhatsApp",
            caption: "Para o paciente, nada muda.",
            bullets: [
                "O paciente escreve normalmente",
                "Você vê tudo em uma bandeja",
                "Sem fricção"
            ]
        },
        {
            id: "02",
            title: "Organiza e prioriza",
            caption: "DeepClinic etiqueta, agrupa e destaca o crítico.",
            bullets: [
                "Categoriza automaticamente",
                "Detecta urgências e pendências",
                "Ordena por prioridade"
            ]
        },
        {
            id: "03",
            title: "Responde com contexto",
            caption: "Resumo + próximos passos prontos.",
            bullets: [
                "Resumo da conversa",
                "Modelos de resposta",
                "Follow-up automático"
            ]
        }
    ]
};
function WhatsAppVisual({ activeStep, videoRef }) {
    const PhoneFrame = ({ children })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[520px] rounded-[44px] bg-white/20 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.30)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto w-full overflow-hidden rounded-[36px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.18)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-3 h-5 w-[110px] -translate-x-1/2 rounded-full bg-black/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-6 top-4 text-[11px] font-semibold text-black/55",
                        children: "9:41"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-6 top-4 text-[11px] font-semibold text-black/40",
                        children: "●●●"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    className: "h-full w-full object-cover",
                    src: WHATSAPP_VIDEO,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    preload: "auto"
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#ECE6FF]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/55 via-white/15 to-white/0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneFrame, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-7 pb-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-semibold",
                                        style: {
                                            color: "#2B1670"
                                        },
                                        children: "Categoría"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-3xl border border-black/5 bg-white p-5",
                                        children: [
                                            {
                                                label: "Pregunta médica",
                                                tone: "rgba(124,58,237,0.18)",
                                                glyph: "✚",
                                                active: true
                                            },
                                            {
                                                label: "Citas",
                                                tone: "rgba(59,130,246,0.16)",
                                                glyph: "▦",
                                                active: false
                                            },
                                            {
                                                label: "Facturación",
                                                tone: "rgba(34,197,94,0.16)",
                                                glyph: "$",
                                                active: false
                                            },
                                            {
                                                label: "Administración",
                                                tone: "rgba(99,102,241,0.16)",
                                                glyph: "☰",
                                                active: false
                                            },
                                            {
                                                label: "Desconocido",
                                                tone: "rgba(148,163,184,0.18)",
                                                glyph: "?",
                                                active: false
                                            }
                                        ].map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 py-3 " + (idx === 0 ? "pt-0" : ""),
                                                style: idx === 0 ? undefined : {
                                                    borderTop: "1px solid rgba(15,23,42,0.06)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-8 w-8 items-center justify-center rounded-xl border border-black/5 text-[12px] font-semibold",
                                                        style: {
                                                            background: row.tone,
                                                            color: "#2B1670"
                                                        },
                                                        children: row.glyph
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1 text-[12.5px] font-medium text-black/75",
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    row.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] font-semibold",
                                                        style: {
                                                            color: "#6D28D9"
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, row.label, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-20 rounded-full bg-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#ECE6FF]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/55 via-white/15 to-white/0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneFrame, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-7 pb-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] font-semibold text-black/75",
                                                children: "Javier Velázquez"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-medium text-black/45",
                                                children: "En línea"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: [
                                            {
                                                label: "Por revisar",
                                                tone: "rgba(34,197,94,0.16)",
                                                ink: "rgba(15,23,42,0.70)"
                                            },
                                            {
                                                label: "Médico",
                                                tone: "rgba(124,58,237,0.14)",
                                                ink: "rgba(15,23,42,0.70)"
                                            },
                                            {
                                                label: "MT AP",
                                                tone: "rgba(59,130,246,0.14)",
                                                ink: "rgba(15,23,42,0.70)"
                                            }
                                        ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full border border-black/5 px-3 py-1 text-[10px] font-semibold",
                                                style: {
                                                    background: chip.tone,
                                                    color: chip.ink
                                                },
                                                children: chip.label
                                            }, chip.label, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: [
                                            {
                                                date: "2 - 4 Oct 2024",
                                                rows: [
                                                    "Cita agendada para el Miércoles 2 de Mayo"
                                                ]
                                            },
                                            {
                                                date: "2 - 4 Oct 2024",
                                                rows: [
                                                    "Seguimiento de síntomas",
                                                    "No ha presentado problemas digestivos",
                                                    "Apetito normal"
                                                ]
                                            }
                                        ].map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-3xl border border-black/5 bg-white px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-semibold text-black/35",
                                                                children: card.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-semibold",
                                                                style: {
                                                                    color: "#6D28D9"
                                                                },
                                                                children: "Ver"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 space-y-1 text-[11px] leading-snug text-black/75",
                                                        children: card.rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-[6px] h-1.5 w-1.5 rounded-full",
                                                                        style: {
                                                                            background: "rgba(124,58,237,0.35)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0",
                                                                        children: r
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, r, true, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px flex-1 bg-black/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold text-black/25",
                                                        children: "Mensajes nuevos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px flex-1 bg-black/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 rounded-3xl border border-black/5 bg-white px-4 py-3 text-[11px] text-black/70",
                                                children: "Hola Dr, tengo mucho dolor de cabeza en este momento"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35"
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c = WhatsAppVisual;
function DeepClinicWhatsApp({ lang = "es" }) {
    _s();
    const t = CONTENT[lang];
    const accent = "rgba(34,197,94,0.22)";
    const steps = STEPS[lang];
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const flowLabel = lang === "es" ? "Flujo" : lang === "pt" ? "Fluxo" : "Flow";
    const detailLabel = lang === "es" ? "Detalle" : lang === "pt" ? "Detalhe" : "Detail";
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeepClinicWhatsApp.useMemo[reducedMotion]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
        }
    }["DeepClinicWhatsApp.useMemo[reducedMotion]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicWhatsApp.useEffect": ()=>{
            if (reducedMotion) return;
            const el = sectionRef.current;
            if (!el) return;
            const id = window.setInterval({
                "DeepClinicWhatsApp.useEffect.id": ()=>{
                    if (document.hidden) return;
                    if (el.getAttribute("data-dc-active") !== "true") return;
                    setActiveStep({
                        "DeepClinicWhatsApp.useEffect.id": (prev)=>(prev + 1) % steps.length
                    }["DeepClinicWhatsApp.useEffect.id"]);
                }
            }["DeepClinicWhatsApp.useEffect.id"], 5200);
            return ({
                "DeepClinicWhatsApp.useEffect": ()=>window.clearInterval(id)
            })["DeepClinicWhatsApp.useEffect"];
        }
    }["DeepClinicWhatsApp.useEffect"], [
        reducedMotion,
        steps.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicWhatsApp.useEffect": ()=>{
            const v = videoRef.current;
            if (!v) return;
            if (activeStep === 0) {
                if (v.autoplay && v.paused) {
                    void v.play().catch({
                        "DeepClinicWhatsApp.useEffect": ()=>{}
                    }["DeepClinicWhatsApp.useEffect"]);
                }
            } else {
                if (!v.paused) v.pause();
            }
        }
    }["DeepClinicWhatsApp.useEffect"], [
        activeStep
    ]);
    const painPoints = lang === "es" ? [
        "Mensajes sin orden",
        "Triage manual",
        "Seguimiento perdido"
    ] : lang === "pt" ? [
        "Mensagens sem ordem",
        "Triagem manual",
        "Follow-up perdido"
    ] : [
        "Unstructured messages",
        "Manual triage",
        "Lost follow-up"
    ];
    const metrics = lang === "es" ? [
        {
            label: "Tiempo",
            value: "3 h/día",
            note: "ahorro"
        },
        {
            label: "Cobertura",
            value: "24/7",
            note: "asistencia"
        },
        {
            label: "Respuesta",
            value: "-40%",
            note: "fricción"
        }
    ] : lang === "pt" ? [
        {
            label: "Tempo",
            value: "3 h/dia",
            note: "economia"
        },
        {
            label: "Cobertura",
            value: "24/7",
            note: "assistência"
        },
        {
            label: "Resposta",
            value: "-40%",
            note: "atrito"
        }
    ] : [
        {
            label: "Time",
            value: "3 h/day",
            note: "saved"
        },
        {
            label: "Coverage",
            value: "24/7",
            note: "assist"
        },
        {
            label: "Response",
            value: "-40%",
            note: "friction"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative z-10 w-full min-h-[100svh] snap-start flex items-start px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:min-h-[74svh] md:p-12 lg:min-h-[78svh] lg:p-14 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                            children: t.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                        children: flowLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-white/10",
                                                    children: steps.map((s, i)=>{
                                                        const isActive = i === activeStep;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveStep(i),
                                                            className: "w-full px-4 py-3 text-left transition-colors duration-300 " + (isActive ? "bg-white/[0.04]" : "bg-transparent"),
                                                            "aria-current": isActive ? "step" : undefined,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold tracking-[0.18em]",
                                                                        style: {
                                                                            background: isActive ? accent : "rgba(255,255,255,0.04)"
                                                                        },
                                                                        children: s.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0 flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[13px] font-semibold tracking-tight " + (isActive ? "text-white" : "text-white/75"),
                                                                                children: s.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-[12px] leading-relaxed text-white/55",
                                                                                children: s.caption
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                                lineNumber: 396,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 h-2 w-2 rounded-full",
                                                                        style: {
                                                                            background: "rgba(255,255,255,0.22)",
                                                                            boxShadow: `0 0 14px ${accent}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 h-2 w-2 rounded-full bg-white/10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, s.id, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                        children: detailLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12.5px] font-semibold tracking-tight text-white/85",
                                                            children: steps[activeStep]?.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[12px] leading-relaxed text-white/55",
                                                            children: steps[activeStep]?.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 grid gap-2",
                                                            children: (steps[activeStep]?.bullets ?? []).slice(0, 3).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-2 text-[12px] text-white/70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-[7px] h-1.5 w-1.5 rounded-full",
                                                                            style: {
                                                                                background: "rgba(255,255,255,0.22)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0",
                                                                            children: b
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, b, true, {
                                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-wrap gap-2",
                                            children: painPoints.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full",
                                                            style: {
                                                                background: "rgba(255,255,255,0.24)",
                                                                boxShadow: `0 0 18px ${accent}`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 23
                                                        }, this),
                                                        p
                                                    ]
                                                }, p, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid grid-cols-3 gap-2",
                                            children: metrics.slice(0, 3).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[16px] font-semibold tracking-tight text-white/90",
                                                            children: m.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, m.label, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/desk`,
                                                className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                                children: [
                                                    t.cta,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        "aria-hidden": true,
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                        accent: accent,
                                        variant: "video",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppVisual, {
                                            activeStep: activeStep,
                                            videoRef: videoRef
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        t.footer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 flex flex-col items-center gap-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-white/50",
                                children: t.footer
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 473,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 472,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 349,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
_s(DeepClinicWhatsApp, "z8oS2ySt2SQU9UYrj2Qp88U4zo8=");
_c1 = DeepClinicWhatsApp;
var _c, _c1;
__turbopack_refresh__.register(_c, "WhatsAppVisual");
__turbopack_refresh__.register(_c1, "DeepClinicWhatsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/deepclinic-history.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicHistory": (()=>DeepClinicHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const CONTENT = {
    es: {
        title: "DeepClinic Historial Clínico Universal",
        description: "Encuentra lo crítico en segundos. Diagnósticos, tratamientos y seguimiento en un solo lugar, seguro y siempre disponible.",
        cta: "Ver detalle"
    },
    en: {
        title: "DeepClinic Unified Health Record",
        description: "Find critical information in seconds. Diagnoses, treatments, and follow-up in one secure, always-available record.",
        cta: "View details"
    },
    pt: {
        title: "DeepClinic Prontuário Clínico Universal",
        description: "Encontre o que importa em segundos. Diagnósticos, tratamentos e acompanhamento em um único prontuário seguro e sempre disponível.",
        cta: "Ver detalhes"
    }
};
function DeepClinicHistory({ lang = "es" }) {
    const t = CONTENT[lang];
    const accent = "rgba(56,189,248,0.22)";
    const painPoints = lang === "es" ? [
        "Datos aislados",
        "Búsqueda lenta",
        "Sin trazabilidad"
    ] : lang === "pt" ? [
        "Dados isolados",
        "Busca lenta",
        "Sem rastreabilidade"
    ] : [
        "Siloed data",
        "Slow search",
        "No traceability"
    ];
    const metrics = lang === "es" ? [
        {
            label: "Fuentes",
            value: "1"
        },
        {
            label: "Línea",
            value: "30D"
        },
        {
            label: "Tiempo",
            value: "5 s"
        }
    ] : lang === "pt" ? [
        {
            label: "Fontes",
            value: "1"
        },
        {
            label: "Linha",
            value: "30D"
        },
        {
            label: "Tempo",
            value: "5 s"
        }
    ] : [
        {
            label: "Sources",
            value: "1"
        },
        {
            label: "Timeline",
            value: "30D"
        },
        {
            label: "Time",
            value: "5 s"
        }
    ];
    const ui = lang === "es" ? {
        uhr: "HISTORIAL CLÍNICO UNIVERSAL",
        patient: "Paciente",
        secure: "Seguro",
        timeline: "LÍNEA DE TIEMPO",
        last30: "Últimos 30 días",
        dx: "DIAGNÓSTICOS",
        active: "Activos",
        meds: "MEDICACIÓN",
        today: "HOY",
        consult: "Consulta",
        labs: "Labs",
        imaging: "Imagen",
        er: "Urgencias"
    } : lang === "pt" ? {
        uhr: "PRONTUÁRIO CLÍNICO UNIVERSAL",
        patient: "Paciente",
        secure: "Seguro",
        timeline: "LINHA DO TEMPO",
        last30: "Últimos 30 dias",
        dx: "DIAGNÓSTICOS",
        active: "Ativos",
        meds: "MEDICAÇÃO",
        today: "HOJE",
        consult: "Consulta",
        labs: "Exames",
        imaging: "Imagem",
        er: "Emergência"
    } : {
        uhr: "UNIFIED HEALTH RECORD",
        patient: "Patient",
        secure: "Secure",
        timeline: "TIMELINE",
        last30: "Last 30 days",
        dx: "DIAGNOSES",
        active: "Active",
        meds: "MEDICATIONS",
        today: "TODAY",
        consult: "Visit",
        labs: "Labs",
        imaging: "Imaging",
        er: "Emergency"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 order-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                    accent: accent,
                                    variant: "ui",
                                    shimmer: false,
                                    className: "relative mx-auto w-full max-w-[640px] xl:max-w-[720px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-7 md:p-8",
                                        style: {
                                            transform: "translateZ(18px)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dc_motion pointer-events-none absolute inset-x-0 top-0 h-14 opacity-0",
                                                style: {
                                                    background: "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                                                    animation: "dc_scan_y 7.8s ease-in-out infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden rounded-2xl border border-white/10 bg-black/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pointer-events-none absolute inset-0 opacity-70",
                                                        style: {
                                                            background: "radial-gradient(80% 70% at 30% 20%, rgba(56,189,248,0.14), transparent 62%), radial-gradient(60% 60% at 70% 60%, rgba(255,255,255,0.05), transparent 64%)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03]",
                                                                        style: {
                                                                            boxShadow: "0 0 28px rgba(56,189,248,0.18)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[11px] font-semibold tracking-[0.14em] text-white/80",
                                                                                children: ui.uhr
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 145,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-[10px] font-medium text-white/45",
                                                                                children: [
                                                                                    ui.patient,
                                                                                    ": M. González • ID DC-1024"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 148,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/65",
                                                                        children: ui.secure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "dc_motion h-2 w-2 rounded-full",
                                                                        style: {
                                                                            background: "rgba(56,189,248,0.65)",
                                                                            boxShadow: "0 0 16px rgba(56,189,248,0.35)",
                                                                            animation: "dc_soft_pulse 3.2s ease-in-out infinite"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative px-5 pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2",
                                                                children: [
                                                                    {
                                                                        label: lang === "es" ? "Resumen" : lang === "pt" ? "Resumo" : "Summary",
                                                                        active: true
                                                                    },
                                                                    {
                                                                        label: lang === "es" ? "Exámenes" : lang === "pt" ? "Exames" : "Labs",
                                                                        active: false
                                                                    },
                                                                    {
                                                                        label: lang === "es" ? "Imágenes" : lang === "pt" ? "Imagens" : "Imaging",
                                                                        active: false
                                                                    },
                                                                    {
                                                                        label: lang === "es" ? "Medic." : lang === "pt" ? "Medicação" : "Meds",
                                                                        active: false
                                                                    }
                                                                ].map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: tab.active ? "relative overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-center text-[10px] font-semibold text-white/85" : "rounded-full border border-white/10 bg-black/30 px-3 py-2 text-center text-[10px] font-medium text-white/55",
                                                                        style: tab.active ? {
                                                                            boxShadow: "0 0 26px rgba(56,189,248,0.14)"
                                                                        } : undefined,
                                                                        children: [
                                                                            tab.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "dc_motion pointer-events-none absolute inset-y-0 left-0 w-16 opacity-0",
                                                                                style: {
                                                                                    background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                                                                                    animation: "dc_scan_x 6.8s ease-in-out infinite",
                                                                                    animationDelay: `${-0.4 - i * 0.6}s`
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 182,
                                                                                columnNumber: 33
                                                                            }, this) : null,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: tab.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, tab.label, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 grid gap-4 sm:grid-cols-[0.42fr_0.58fr] pb-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-white/10 bg-black/35 p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                        children: ui.timeline
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 200,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] font-medium text-white/45",
                                                                                        children: ui.last30
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 201,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 199,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-4 relative pl-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "pointer-events-none absolute left-1.5 top-0 h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-white/0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    [
                                                                                        {
                                                                                            date: ui.today,
                                                                                            tag: ui.consult,
                                                                                            tone: "rgba(56,189,248,0.55)",
                                                                                            delay: "-0.2s"
                                                                                        },
                                                                                        {
                                                                                            date: "-3D",
                                                                                            tag: ui.labs,
                                                                                            tone: "rgba(16,185,129,0.55)",
                                                                                            delay: "-0.9s"
                                                                                        },
                                                                                        {
                                                                                            date: "-12D",
                                                                                            tag: ui.imaging,
                                                                                            tone: "rgba(168,85,247,0.55)",
                                                                                            delay: "-1.6s"
                                                                                        },
                                                                                        {
                                                                                            date: "-28D",
                                                                                            tag: ui.er,
                                                                                            tone: "rgba(245,158,11,0.55)",
                                                                                            delay: "-2.3s"
                                                                                        }
                                                                                    ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "relative pb-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "dc_motion absolute -left-[5px] top-0 h-3 w-3 rounded-full border border-white/10",
                                                                                                    style: {
                                                                                                        background: row.tone,
                                                                                                        boxShadow: `0 0 18px ${row.tone}`,
                                                                                                        animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                                                                                        animationDelay: row.delay
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 212,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center justify-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "text-[10px] font-semibold text-white/65",
                                                                                                            children: row.date
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                            lineNumber: 222,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-white/60",
                                                                                                            children: row.tag
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                            lineNumber: 223,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 221,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "mt-2 h-px w-full bg-white/10"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 227,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, row.date, true, {
                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                            lineNumber: 211,
                                                                                            columnNumber: 33
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: ui.dx
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 236,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/50",
                                                                                                children: ui.active
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 237,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 235,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3 space-y-2",
                                                                                        children: [
                                                                                            {
                                                                                                label: "Hipertensión (I10)",
                                                                                                tone: "rgba(59,130,246,0.55)"
                                                                                            },
                                                                                            {
                                                                                                label: "Diabetes tipo 2 (E11)",
                                                                                                tone: "rgba(16,185,129,0.55)"
                                                                                            }
                                                                                        ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "h-2 w-2 rounded-full",
                                                                                                        style: {
                                                                                                            background: d.tone,
                                                                                                            boxShadow: `0 0 16px ${d.tone}`
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 245,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-[11px] font-medium text-white/70",
                                                                                                        children: d.label
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 246,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dc_motion ml-auto h-6 w-10 rounded-lg border border-white/10",
                                                                                                        style: {
                                                                                                            background: "rgba(255,255,255,0.04)",
                                                                                                            animation: "dc_bar_breathe 4.8s ease-in-out infinite",
                                                                                                            animationDelay: `${-0.6 - i * 0.7}s`
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 247,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, d.label, true, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 244,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 239,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid gap-3 md:grid-cols-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: "LABS"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 258,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-3 space-y-2",
                                                                                                children: [
                                                                                                    {
                                                                                                        k: "HbA1c",
                                                                                                        v: "6.9%",
                                                                                                        s: "Control"
                                                                                                    },
                                                                                                    {
                                                                                                        k: "LDL",
                                                                                                        v: "92",
                                                                                                        s: "mg/dL"
                                                                                                    },
                                                                                                    {
                                                                                                        k: "Cr",
                                                                                                        v: "0.9",
                                                                                                        s: "mg/dL"
                                                                                                    }
                                                                                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[11px] font-medium text-white/65",
                                                                                                                children: r.k
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 266,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[11px] font-semibold text-white/80",
                                                                                                                children: r.v
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 267,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[10px] font-medium text-white/40",
                                                                                                                children: r.s
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 268,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, r.k, true, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 265,
                                                                                                        columnNumber: 37
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 259,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 257,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: ui.meds
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 275,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-3 space-y-2",
                                                                                                children: [
                                                                                                    {
                                                                                                        k: "Metformina",
                                                                                                        v: "850 mg",
                                                                                                        s: "BID"
                                                                                                    },
                                                                                                    {
                                                                                                        k: "Losartán",
                                                                                                        v: "50 mg",
                                                                                                        s: "QD"
                                                                                                    },
                                                                                                    {
                                                                                                        k: "Atorvastatina",
                                                                                                        v: "20 mg",
                                                                                                        s: "HS"
                                                                                                    }
                                                                                                ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dc_motion h-2 w-2 rounded-full",
                                                                                                                style: {
                                                                                                                    background: "rgba(16,185,129,0.55)",
                                                                                                                    boxShadow: "0 0 16px rgba(16,185,129,0.28)",
                                                                                                                    animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                                                                                                    animationDelay: `${-0.2 - i * 0.6}s`
                                                                                                                }
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 283,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "min-w-0",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-[11px] font-medium text-white/70",
                                                                                                                        children: r.k
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                        lineNumber: 293,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-[10px] font-medium text-white/40",
                                                                                                                        children: [
                                                                                                                            r.v,
                                                                                                                            " • ",
                                                                                                                            r.s
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                        lineNumber: 294,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 292,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, r.k, true, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 282,
                                                                                                        columnNumber: 37
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 276,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 274,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 256,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-xl order-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                        children: t.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                        children: t.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4 sm:grid-cols-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                        children: lang === "es" ? "Dolor" : lang === "pt" ? "Dor" : "Pain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex flex-wrap gap-2",
                                                        children: painPoints.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/75",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "h-1.5 w-1.5 rounded-full",
                                                                        style: {
                                                                            background: "rgba(255,255,255,0.24)",
                                                                            boxShadow: `0 0 18px ${accent}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    p
                                                                ]
                                                            }, p, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                        children: lang === "es" ? "Impacto" : lang === "pt" ? "Impacto" : "Impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                                        children: metrics.slice(0, 3).map((m, mi)=>{
                                                            const barSets = [
                                                                [
                                                                    24,
                                                                    52,
                                                                    34,
                                                                    74,
                                                                    42
                                                                ],
                                                                [
                                                                    38,
                                                                    28,
                                                                    66,
                                                                    44,
                                                                    58
                                                                ],
                                                                [
                                                                    30,
                                                                    60,
                                                                    40,
                                                                    54,
                                                                    36
                                                                ]
                                                            ];
                                                            const bars = barSets[mi % barSets.length];
                                                            const raw = String(m.value);
                                                            const space = raw.indexOf(" ");
                                                            const main = space === -1 ? raw : raw.slice(0, space);
                                                            const unit = space === -1 ? "" : raw.slice(space + 1);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 sm:px-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pointer-events-none absolute inset-0 opacity-70",
                                                                        style: {
                                                                            background: `radial-gradient(80% 90% at 30% 25%, ${accent}, transparent 62%)`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex min-w-0 items-baseline gap-2 whitespace-nowrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "tabular-nums text-[20px] font-semibold leading-none tracking-tight text-white/90 sm:text-[22px] md:text-[24px] lg:text-[28px]",
                                                                                style: {
                                                                                    textShadow: `0 0 28px ${accent}`
                                                                                },
                                                                                children: main
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 367,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            unit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-semibold tracking-tight text-white/70 sm:text-[11px]",
                                                                                children: unit
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 373,
                                                                                columnNumber: 39
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 flex h-[22px] items-end gap-1.5",
                                                                        children: [
                                                                            bars.map((h, bi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "dc_motion w-1.5 origin-bottom rounded-full",
                                                                                    style: {
                                                                                        height: `${h}%`,
                                                                                        background: `linear-gradient(180deg, rgba(255,255,255,0.12), ${accent})`,
                                                                                        boxShadow: `0 0 14px ${accent}`,
                                                                                        animation: "dc_metric_bar 2.8s ease-in-out infinite",
                                                                                        animationDelay: `${-0.25 - (mi * 0.4 + bi * 0.12)}s`,
                                                                                        willChange: "transform, opacity"
                                                                                    }
                                                                                }, bi, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                    lineNumber: 378,
                                                                                    columnNumber: 33
                                                                                }, this)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-auto h-px w-6 bg-white/10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 truncate text-[8px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-[9px]",
                                                                        children: m.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-80",
                                                                        style: {
                                                                            background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, m.label, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/platform`,
                                            className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                            children: [
                                                t.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    "aria-hidden": true,
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-history.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-history.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-history.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-history.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-history.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c = DeepClinicHistory;
var _c;
__turbopack_refresh__.register(_c, "DeepClinicHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/deepclinic-triage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicTriage": (()=>DeepClinicTriage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const CONTENT = {
    es: {
        title: "DeepClinic Comando de Triaje",
        description: "Llega a consulta con el caso listo. Anamnesis automática por voz y texto, clasificación y resumen clínico en minutos.",
        cta: "Ver detalle",
        chat: "Hola, para preparar su consulta, ¿podría decirme qué síntomas ha sentido hoy?",
        voice: "Voz Detectada",
        summary: "Resumen Preliminar",
        priority: "Prioridad Media"
    },
    en: {
        title: "DeepClinic Triage Command",
        description: "Walk into the visit with the case prepared. Automated voice/text intake, triage, and a clean clinical summary in minutes.",
        cta: "View details",
        chat: "Hello, to prepare for your consultation, could you tell me what symptoms you have felt today?",
        voice: "Voice Detected",
        summary: "Preliminary Summary",
        priority: "Medium Priority"
    },
    pt: {
        title: "DeepClinic Comando de Triagem",
        description: "Entre na consulta com o caso pronto. Intake por voz/texto, triagem e resumo clínico claro em minutos.",
        cta: "Ver detalhes",
        chat: "Olá, para preparar sua consulta, poderia me dizer quais sintomas sentiu hoje?",
        voice: "Voz Detectada",
        summary: "Resumo Preliminar",
        priority: "Prioridade Média"
    }
};
function DeepClinicTriage({ lang = "es" }) {
    _s();
    const t = CONTENT[lang];
    const accent = "rgba(16,185,129,0.22)";
    const painPoints = lang === "es" ? [
        "Caso incompleto",
        "Triage manual",
        "Notas dispersas"
    ] : lang === "pt" ? [
        "Caso incompleto",
        "Triagem manual",
        "Notas dispersas"
    ] : [
        "Incomplete case",
        "Manual triage",
        "Scattered notes"
    ];
    const metrics = lang === "es" ? [
        {
            label: "Canales",
            value: "2"
        },
        {
            label: "Salida",
            value: "1"
        },
        {
            label: "Tiempo",
            value: "5 min"
        }
    ] : lang === "pt" ? [
        {
            label: "Canais",
            value: "2"
        },
        {
            label: "Saída",
            value: "1"
        },
        {
            label: "Tempo",
            value: "5 min"
        }
    ] : [
        {
            label: "Channels",
            value: "2"
        },
        {
            label: "Output",
            value: "1"
        },
        {
            label: "Time",
            value: "5 min"
        }
    ];
    const voiceBars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeepClinicTriage.useMemo[voiceBars]": ()=>{
            return Array.from({
                length: 12
            }, {
                "DeepClinicTriage.useMemo[voiceBars]": (_, i)=>{
                    const x = Math.sin((i + 1) * 999) * 10000;
                    const r = x - Math.floor(x);
                    return 20 + Math.round(r * 80);
                }
            }["DeepClinicTriage.useMemo[voiceBars]"]);
        }
    }["DeepClinicTriage.useMemo[voiceBars]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                            children: t.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 grid gap-4 sm:grid-cols-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                            children: lang === "es" ? "Dolor" : lang === "pt" ? "Dor" : "Pain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex flex-wrap gap-2",
                                                            children: painPoints.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/75",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-1.5 w-1.5 rounded-full",
                                                                            style: {
                                                                                background: "rgba(255,255,255,0.24)",
                                                                                boxShadow: `0 0 18px ${accent}`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        p
                                                                    ]
                                                                }, p, true, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                            children: lang === "es" ? "Impacto" : lang === "pt" ? "Impacto" : "Impact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                                            children: metrics.slice(0, 3).map((m, mi)=>{
                                                                const barSets = [
                                                                    [
                                                                        24,
                                                                        52,
                                                                        34,
                                                                        74,
                                                                        42
                                                                    ],
                                                                    [
                                                                        38,
                                                                        28,
                                                                        66,
                                                                        44,
                                                                        58
                                                                    ],
                                                                    [
                                                                        30,
                                                                        60,
                                                                        40,
                                                                        54,
                                                                        36
                                                                    ]
                                                                ];
                                                                const bars = barSets[mi % barSets.length];
                                                                const raw = String(m.value);
                                                                const space = raw.indexOf(" ");
                                                                const main = space === -1 ? raw : raw.slice(0, space);
                                                                const unit = space === -1 ? "" : raw.slice(space + 1);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 sm:px-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-0 opacity-70",
                                                                            style: {
                                                                                background: `radial-gradient(80% 90% at 30% 25%, ${accent}, transparent 62%)`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex min-w-0 items-baseline gap-2 whitespace-nowrap",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "tabular-nums text-[20px] font-semibold leading-none tracking-tight text-white/90 sm:text-[22px] md:text-[24px] lg:text-[28px]",
                                                                                    style: {
                                                                                        textShadow: `0 0 28px ${accent}`
                                                                                    },
                                                                                    children: main
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 147,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                unit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] font-semibold tracking-tight text-white/70 sm:text-[11px]",
                                                                                    children: unit
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 153,
                                                                                    columnNumber: 39
                                                                                }, this) : null
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 flex h-[22px] items-end gap-1.5",
                                                                            children: [
                                                                                bars.map((h, bi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "dc_motion w-1.5 origin-bottom rounded-full",
                                                                                        style: {
                                                                                            height: `${h}%`,
                                                                                            background: `linear-gradient(180deg, rgba(255,255,255,0.12), ${accent})`,
                                                                                            boxShadow: `0 0 14px ${accent}`,
                                                                                            animation: "dc_metric_bar 2.8s ease-in-out infinite",
                                                                                            animationDelay: `${-0.25 - (mi * 0.4 + bi * 0.12)}s`,
                                                                                            willChange: "transform, opacity"
                                                                                        }
                                                                                    }, bi, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 33
                                                                                    }, this)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "ml-auto h-px w-6 bg-white/10"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 171,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-2 truncate text-[8px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-[9px]",
                                                                            children: m.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 174,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-80",
                                                                            style: {
                                                                                background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, m.label, true, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/booking`,
                                                className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                                children: [
                                                    t.cta,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        "aria-hidden": true,
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                        accent: accent,
                                        variant: "ui",
                                        className: "relative mx-auto w-full max-w-[640px] xl:max-w-[720px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-7 md:p-8",
                                            style: {
                                                transform: "translateZ(18px)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "h-4 w-4",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-2xl rounded-tl-none bg-white/10 p-3 text-xs text-white/80",
                                                                    children: t.chat
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-end gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 rounded-2xl rounded-tr-none bg-emerald-500/10 px-4 py-3 border border-emerald-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] uppercase tracking-wider text-emerald-400 mr-2",
                                                                    children: t.voice
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-[2px] h-4",
                                                                    children: [
                                                                        ...Array(12)
                                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "dc_motion w-[3px] origin-bottom rounded-full bg-emerald-400/60",
                                                                            style: {
                                                                                height: `${voiceBars[i] ?? 20}%`,
                                                                                animation: `dc_wave 1.4s ease-in-out infinite ${(i * 0.08).toFixed(2)}s`
                                                                            }
                                                                        }, i, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold uppercase text-white/40",
                                                                        children: t.summary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded bg-yellow-500/20 px-2 py-0.5 text-[9px] font-bold uppercase text-yellow-200",
                                                                        children: t.priority
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-3/4 rounded-full bg-white/20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-full rounded-full bg-white/10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-5/6 rounded-full bg-white/10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-triage.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-triage.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-triage.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(DeepClinicTriage, "khOwuoUhe4u9d3Z5NX4sYkeDxFE=");
_c = DeepClinicTriage;
var _c;
__turbopack_refresh__.register(_c, "DeepClinicTriage");
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
"[project]/src/components/deepclinic-perf-controller.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicPerfController": (()=>DeepClinicPerfController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
function DeepClinicPerfController({ rootSelector = "main.dc_perf" }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeepClinicPerfController.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
            const saveData = navigator.connection?.saveData ?? false;
            const root = document.querySelector(rootSelector);
            if (!root) return;
            const shouldPreload = !prefersReducedMotion && !saveData;
            let preloadCancel = null;
            if (shouldPreload) {
                const startPreload = {
                    "DeepClinicPerfController.useEffect.startPreload": ()=>{
                        const videos = Array.from(root.querySelectorAll("video"));
                        const urls = new Map();
                        for (const video of videos){
                            video.preload = "auto";
                            const direct = video.getAttribute("src");
                            if (direct) urls.set(direct, null);
                            const sources = Array.from(video.querySelectorAll("source"));
                            for (const source of sources){
                                const src = source.getAttribute("src");
                                if (!src) continue;
                                urls.set(src, source.getAttribute("type"));
                            }
                            try {
                                video.load();
                            } catch  {
                            // ignore
                            }
                        }
                        const head = document.head;
                        for (const [href, type] of urls.entries()){
                            if (!href) continue;
                            const safeHref = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(href) : href;
                            if (head.querySelector(`link[rel="preload"][as="video"][href="${safeHref}"]`)) continue;
                            const link = document.createElement("link");
                            link.rel = "preload";
                            link.as = "video";
                            link.href = href;
                            if (type) link.type = type;
                            head.appendChild(link);
                        }
                    }
                }["DeepClinicPerfController.useEffect.startPreload"];
                if ("requestIdleCallback" in window) {
                    const id = window.requestIdleCallback(startPreload, {
                        timeout: 600
                    });
                    preloadCancel = ({
                        "DeepClinicPerfController.useEffect": ()=>window.cancelIdleCallback?.(id)
                    })["DeepClinicPerfController.useEffect"];
                } else {
                    const id = setTimeout(startPreload, 250);
                    preloadCancel = ({
                        "DeepClinicPerfController.useEffect": ()=>clearTimeout(id)
                    })["DeepClinicPerfController.useEffect"];
                }
            }
            let sections = [];
            try {
                sections = Array.from(root.querySelectorAll(":scope > section"));
            } catch  {
                sections = Array.from(root.children).filter({
                    "DeepClinicPerfController.useEffect": (el)=>el instanceof HTMLElement && el.tagName === "SECTION"
                }["DeepClinicPerfController.useEffect"]).map({
                    "DeepClinicPerfController.useEffect": (el)=>el
                }["DeepClinicPerfController.useEffect"]);
            }
            if (!sections.length) return;
            const setActive = {
                "DeepClinicPerfController.useEffect.setActive": (el, active)=>{
                    if (active) el.setAttribute("data-dc-active", "true");
                    else el.removeAttribute("data-dc-active");
                }
            }["DeepClinicPerfController.useEffect.setActive"];
            const setHidden = {
                "DeepClinicPerfController.useEffect.setHidden": (hidden)=>{
                    if (hidden) root.setAttribute("data-dc-hidden", "true");
                    else root.removeAttribute("data-dc-hidden");
                }
            }["DeepClinicPerfController.useEffect.setHidden"];
            const syncVideos = {
                "DeepClinicPerfController.useEffect.syncVideos": ()=>{
                    const hidden = document.hidden;
                    for (const section of sections){
                        const isActive = section.getAttribute("data-dc-active") === "true";
                        const videos = Array.from(section.querySelectorAll("video"));
                        for (const video of videos){
                            if (hidden) {
                                if (!video.paused) video.pause();
                                continue;
                            }
                            if (isActive) {
                                if (video.autoplay && video.paused) {
                                    void video.play().catch({
                                        "DeepClinicPerfController.useEffect.syncVideos": ()=>{}
                                    }["DeepClinicPerfController.useEffect.syncVideos"]);
                                }
                            } else {
                                if (!video.paused) video.pause();
                            }
                        }
                    }
                }
            }["DeepClinicPerfController.useEffect.syncVideos"];
            for (const section of sections)setActive(section, false);
            const initial = sections.reduce({
                "DeepClinicPerfController.useEffect.initial": (best, el)=>{
                    const bestDist = best ? Math.abs(best.offsetTop - root.scrollTop) : Number.POSITIVE_INFINITY;
                    const dist = Math.abs(el.offsetTop - root.scrollTop);
                    return dist < bestDist ? el : best;
                }
            }["DeepClinicPerfController.useEffect.initial"], null);
            if (initial) setActive(initial, true);
            let currentActive = initial;
            const ratios = new Map();
            if (initial) ratios.set(initial, 1);
            const setExclusiveActive = {
                "DeepClinicPerfController.useEffect.setExclusiveActive": (next)=>{
                    if (next === currentActive) return;
                    if (currentActive) setActive(currentActive, false);
                    if (next) setActive(next, true);
                    currentActive = next;
                    syncVideos();
                }
            }["DeepClinicPerfController.useEffect.setExclusiveActive"];
            setHidden(document.hidden);
            const onVisibilityChange = {
                "DeepClinicPerfController.useEffect.onVisibilityChange": ()=>{
                    setHidden(document.hidden);
                    syncVideos();
                }
            }["DeepClinicPerfController.useEffect.onVisibilityChange"];
            document.addEventListener("visibilitychange", onVisibilityChange);
            const observer = new IntersectionObserver({
                "DeepClinicPerfController.useEffect": (entries)=>{
                    for (const entry of entries){
                        const el = entry.target;
                        if (!entry.isIntersecting) ratios.delete(el);
                        else ratios.set(el, entry.intersectionRatio ?? 0);
                    }
                    let best = null;
                    for (const [el, ratio] of ratios.entries()){
                        if (!best || ratio > best.ratio) best = {
                            el,
                            ratio
                        };
                    }
                    if (best) setExclusiveActive(best.el);
                    else if (currentActive) {
                        const stillInDom = root.contains(currentActive);
                        if (!stillInDom) setExclusiveActive(null);
                    }
                }
            }["DeepClinicPerfController.useEffect"], {
                root,
                rootMargin: "-15% 0px -15% 0px",
                threshold: 0.18
            });
            for (const section of sections)observer.observe(section);
            syncVideos();
            return ({
                "DeepClinicPerfController.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", onVisibilityChange);
                    observer.disconnect();
                    if (preloadCancel) preloadCancel();
                }
            })["DeepClinicPerfController.useEffect"];
        }
    }["DeepClinicPerfController.useEffect"], [
        rootSelector
    ]);
    return null;
}
_s(DeepClinicPerfController, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DeepClinicPerfController;
var _c;
__turbopack_refresh__.register(_c, "DeepClinicPerfController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/es/deepclinic/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_6ee831._.js.map