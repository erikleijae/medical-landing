module.exports = {

"[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MotionReveal": (()=>MotionReveal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function MotionReveal({ children, className, delayMs = 0, durationMs = 700, once = true, offsetY = 18 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const transitionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            transitionDuration: `${durationMs}ms`,
            transitionDelay: `${delayMs}ms`
        }), [
        delayMs,
        durationMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const reduced = undefined;
        const el = undefined;
        const observer = undefined;
    }, [
        once
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/src/components/deepclinic-top-nav.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicTopNav": (()=>DeepClinicTopNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
        en: "/en/deepclinic",
        pt: "/pt/deepclinic"
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() ?? LANG_HOME[lang];
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>NAV_ITEMS[lang], [
        lang
    ]);
    const productItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>PRODUCT_ITEMS[lang], [
        lang
    ]);
    const ctaLabel = CTA_LABEL[lang];
    // Determine signup link based on lang. Assuming /en/signup and /pt/signup exist or handled by middleware/redirects.
    // Although root /signup exists, usually we want to preserve locale if possible.
    // Given previous files, links were /en/signup and /pt/signup.
    const signupHref = lang === "es" ? "/signup" : `/${lang}/signup`;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productsOpen, setProductsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuAriaLabel = lang === "es" ? open ? "Cerrar menú" : "Abrir menú" : lang === "pt" ? open ? "Fechar menu" : "Abrir menu" : open ? "Close menu" : "Open menu";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKeyDown = (e)=>{
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!langOpen) return;
        const onKeyDown = (e)=>{
            if (e.key === "Escape") setLangOpen(false);
        };
        const onPointerDown = (e)=>{
            const target = e.target;
            if (!target) return;
            if (target.closest?.("[data-dc-lang]") != null) return;
            setLangOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("pointerdown", onPointerDown);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("pointerdown", onPointerDown);
        };
    }, [
        langOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        return ()=>{
            document.documentElement.style.overflow = prev;
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-8 px-6 py-5 md:gap-10 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: LANG_HOME[lang],
                            className: "flex items-center gap-2 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center justify-start gap-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:flex",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    "data-dc-lang": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: joinClassNames("absolute right-0 top-full mt-3 w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur", "transition-[opacity,transform] duration-200", langOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: getLangHref(opt.id),
                                                        onClick: ()=>setLangOpen(false),
                                                        className: "flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-medium " + (active ? "bg-white/[0.05] text-white" : "bg-transparent text-white/80"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-8 w-8 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-[11px] font-semibold uppercase text-white/80",
                                                                        children: opt.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: signupHref,
                                    className: "inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 sm:px-5",
                                    children: ctaLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpen((v)=>!v),
                                    "aria-expanded": open,
                                    "aria-label": menuAriaLabel,
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 backdrop-blur md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 7h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                showProductsSubnav && productsOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block animate-fade-in-down",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 md:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center justify-start gap-6 py-3 text-[10px] font-medium uppercase tracking-[0.26em] text-white/40",
                                children: productItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("md:hidden", "fixed left-0 right-0 bottom-0 top-[72px]", "transition-opacity duration-300", open ? "opacity-100" : "pointer-events-none opacity-0"),
                    onClick: ()=>setOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("md:hidden", "absolute left-0 right-0 top-full", "z-30", "transition-[opacity,transform] duration-300", open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 md:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 p-3 text-[12px] font-medium uppercase tracking-[0.22em] text-white/75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}}),
"[project]/src/components/interactive-starburst.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "InteractiveStarburst": (()=>InteractiveStarburst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    const rays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
        const majorRays = major.map((deg, idx)=>({
                id: `ray-major-${deg}`,
                deg,
                len: 210 + idx * 13 % 34,
                stroke: "rgba(255,255,255,0.075)",
                strokeWidth: 2,
                question: questions[idx % questions.length] ?? questions[0] ?? ""
            }));
        const minorRays = minor.map((deg, idx)=>({
                id: `ray-minor-${deg}`,
                deg,
                len: 240 + idx * 17 % 64,
                stroke: "rgba(255,255,255,0.045)",
                strokeWidth: 1,
                question: questions[(idx + majorRays.length) % questions.length] ?? questions[0] ?? ""
            }));
        return [
            ...majorRays,
            ...minorRays
        ];
    }, [
        lang
    ]);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cx = 600;
        const cy = 320;
        return rays.map((ray, idx)=>{
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
        });
    }, [
        rays
    ]);
    const [activePointId, setActivePointId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: joinClassNames("relative h-full w-full", dragging ? "cursor-grabbing" : "cursor-grab", className),
        role: "application",
        "aria-label": "Mapa interactivo de preguntas clínicas",
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerUp,
        onPointerCancel: onPointerCancel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("dc_motion will-change-transform", ambientMotion ? "dc_starburst_drift" : null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion will-change-transform",
                        style: {
                            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dc_motion dc_starburst_spin origin-center transform-gpu will-change-transform",
                            style: {
                                transformOrigin: "50% 50%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 1200 640",
                                className: "h-[620px] w-[1160px] select-none md:h-[760px] md:w-[1400px] lg:h-[820px] lg:w-[1520px]",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.62",
                                            transform: "translate(600 360)",
                                            children: rays.map((ray)=>{
                                                const isActive = ray.id === activePointId;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.96",
                                            children: [
                                                points.filter((p)=>p.id !== activePointId).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PointGroup, {
                                                        p: p,
                                                        idx: idx,
                                                        isActive: false,
                                                        setActivePointId: setActivePointId
                                                    }, p.id, false, {
                                                        fileName: "[project]/src/components/interactive-starburst.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 27
                                                    }, this)),
                                                points.filter((p)=>p.id === activePointId).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PointGroup, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                        x: foX,
                        y: foY,
                        width: foSize,
                        height: foSize,
                        className: "overflow-visible pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center animate-[dc-spin_60s_linear_infinite_reverse]",
                            style: {
                                animationPlayState: isActive ? "paused" : "running"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-end -translate-y-[50px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-white/20 rounded-xl px-5 py-4 text-center shadow-[0_0_60px_rgba(255,255,255,0.25)] max-w-[320px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/src/components/deepclinic-fx-frame.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicFxFrame": (()=>DeepClinicFxFrame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function DeepClinicFxFrame({ accent, children, className, style, variant = "ui", tilt = true, spotlight = true, scanlines = true, shimmer = true, cursor = true }) {
    const spotlightOpacity = variant === "video" ? 0.55 : variant === "visual" ? 0.7 : 0.75;
    const scanlinesOpacity = variant === "video" ? 0.10 : variant === "visual" ? 0.12 : 0.14;
    const shimmerOpacity = variant === "video" ? 0.65 : 0.8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: joinClassNames("relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl transform-gpu", className),
        style: {
            contain: "paint",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: [
                    spotlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    spotlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    scanlines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    shimmer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    cursor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/src/components/deepclinic-whatsapp.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicWhatsApp": (()=>DeepClinicWhatsApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-ssr] (ecmascript)");
"use client";
;
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
function WhatsAppVisual({ activeStep, videoRef, lang }) {
    const PhoneFrame = ({ children })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-[560px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[54px] bg-gradient-to-b from-white/25 to-white/10 p-[14px] shadow-[0_44px_140px_rgba(0,0,0,0.34)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto w-full overflow-hidden rounded-[42px] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] ring-1 ring-black/5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[9/19] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_10%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(80%_65%_at_75%_35%,rgba(34,197,94,0.08),transparent_62%)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-3 h-[22px] w-[128px] -translate-x-1/2 rounded-full bg-black/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-6 top-4 text-[11px] font-semibold text-black/60",
                                children: "9:41"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-6 top-4 flex items-center gap-1.5 text-[11px] font-semibold text-black/45",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block h-1.5 w-1.5 rounded-full bg-black/25"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block h-1.5 w-1.5 rounded-full bg-black/25"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block h-1.5 w-1.5 rounded-full bg-black/25"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pt-12 pb-6",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    };
    const ui = lang === "es" ? {
        chats: "Chats",
        all: "Todo",
        review: "Por revisar",
        done: "Revisado",
        seen: "Revisado",
        personal: "Contacto personal",
        summary: "Mostrar mensajes",
        createNote: "Crear nota interna",
        assign: "Asignar conversación"
    } : lang === "pt" ? {
        chats: "Chats",
        all: "Tudo",
        review: "Para revisar",
        done: "Revisado",
        seen: "Revisado",
        personal: "Contato pessoal",
        summary: "Mostrar mensagens",
        createNote: "Criar nota interna",
        assign: "Atribuir conversa"
    } : {
        chats: "Chats",
        all: "All",
        review: "To review",
        done: "Reviewed",
        seen: "Reviewed",
        personal: "Personal contact",
        summary: "Show messages",
        createNote: "Create internal note",
        assign: "Assign chat"
    };
    const ink = "#2B1670";
    const soft = "rgba(43,22,112,0.10)";
    const chipInk = "rgba(43,22,112,0.78)";
    const dcGreen = "rgba(34,197,94,0.22)";
    const ChatsScreen = ()=>{
        const tabs = [
            {
                label: ui.all,
                count: 15,
                active: false
            },
            {
                label: ui.review,
                count: 13,
                active: true
            },
            {
                label: ui.done,
                count: 2,
                active: false
            }
        ];
        const list = [
            {
                name: "Javier Velázquez",
                time: "10:35 AM",
                preview: "Tengo mucho dolor abdominal y quisiera saber qué puedo tomar?",
                tags: [
                    "Alergia Diclofenaco",
                    "Gastritis"
                ],
                unread: 4,
                badge: "MT IN"
            },
            {
                name: "Rosa Marín",
                time: "10:35 AM",
                preview: "Tengo mucho dolor abdominal y quisiera saber qué puedo tomar?",
                tags: [
                    "Alergia Diclofenaco",
                    "Gastritis"
                ],
                unread: 4,
                badge: "MT IN"
            },
            {
                name: "Teresa Bermúdez",
                time: "10:35 AM",
                preview: "Todavía sigo con el dolor. Crees que deba agendar una cita?",
                tags: [],
                unread: 16,
                badge: ""
            },
            {
                name: "Carlos Novoa",
                time: "10:35 AM",
                preview: "Quisiera agendar una cita para el 23 de agosto",
                tags: [
                    "Citas"
                ],
                unread: 1,
                badge: "MT IN"
            },
            {
                name: "Carlos Novoa",
                time: "10:35 AM",
                preview: "Quisiera agendar una cita para el 23 de agosto",
                tags: [],
                unread: 1,
                badge: ""
            }
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 text-[22px] font-semibold tracking-tight",
                                    style: {
                                        color: ink
                                    },
                                    children: ui.chats
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-2",
                                    children: [
                                        {
                                            glyph: "⌕",
                                            tone: "rgba(43,22,112,0.06)"
                                        },
                                        {
                                            glyph: "≡",
                                            tone: "rgba(43,22,112,0.06)"
                                        },
                                        {
                                            glyph: "+",
                                            tone: "rgba(124,58,237,0.12)"
                                        }
                                    ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold",
                                            style: {
                                                background: b.tone,
                                                color: ink
                                            },
                                            children: b.glyph
                                        }, b.glyph, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center gap-5 text-[13px] font-semibold",
                            style: {
                                color: chipInk
                            },
                            children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: t.active ? "text-[13px]" : "text-[13px] opacity-60",
                                                    children: t.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                                                    style: {
                                                        background: "rgba(43,22,112,0.08)",
                                                        color: chipInk
                                                    },
                                                    children: t.count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        t.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full",
                                            style: {
                                                background: ink
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this) : null
                                    ]
                                }, t.label, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 h-px w-full",
                    style: {
                        background: "rgba(15,23,42,0.06)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full overflow-hidden bg-white/70",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full",
                                children: list.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-7 py-4",
                                        style: idx === 0 ? undefined : {
                                            borderTop: "1px solid rgba(15,23,42,0.06)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5",
                                                        style: {
                                                            background: idx === 0 ? "rgba(124,58,237,0.10)" : "rgba(43,22,112,0.06)",
                                                            color: ink
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-semibold",
                                                            children: row.name.split(" ")[0]?.slice(0, 1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0 truncate text-[14px] font-semibold",
                                                                        style: {
                                                                            color: ink
                                                                        },
                                                                        children: row.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "shrink-0 text-[12px] font-semibold",
                                                                        style: {
                                                                            color: "rgba(43,22,112,0.55)"
                                                                        },
                                                                        children: row.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 text-[12.5px] leading-snug",
                                                                style: {
                                                                    color: "rgba(43,22,112,0.72)"
                                                                },
                                                                children: row.preview
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    row.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-full border border-black/5 px-3 py-1 text-[11px] font-semibold",
                                                                            style: {
                                                                                background: soft,
                                                                                color: chipInk
                                                                            },
                                                                            children: t
                                                                        }, t, false, {
                                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    row.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-auto rounded-full border border-black/5 px-3 py-1 text-[11px] font-semibold",
                                                                        style: {
                                                                            background: "rgba(34,197,94,0.16)",
                                                                            color: ink
                                                                        },
                                                                        children: row.badge
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-auto"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold",
                                                            style: {
                                                                background: ink,
                                                                color: "white"
                                                            },
                                                            children: row.unread
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this),
                                            idx === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold",
                                                        style: {
                                                            background: "rgba(43,22,112,0.06)",
                                                            color: ink
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[14px]",
                                                                children: "⊖"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 27
                                                            }, this),
                                                            ui.personal
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold",
                                                        style: {
                                                            background: "rgba(37,99,235,0.12)",
                                                            color: ink
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[14px]",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 27
                                                            }, this),
                                                            ui.seen
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 345,
                                                columnNumber: 23
                                            }, this) : null
                                        ]
                                    }, row.name, true, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 291,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-black/5 bg-white/75 px-10 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-6 text-center text-[11px] font-semibold",
                        style: {
                            color: "rgba(43,22,112,0.62)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto h-7 w-7 rounded-2xl",
                                        style: {
                                            background: dcGreen
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        children: ui.chats
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto h-7 w-7 rounded-2xl",
                                        style: {
                                            background: "rgba(43,22,112,0.06)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        children: "Ajustes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto h-7 w-7 rounded-2xl",
                                        style: {
                                            background: "rgba(43,22,112,0.06)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        children: "Soporte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this);
    };
    const ConversationScreen = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold",
                                            style: {
                                                background: "rgba(43,22,112,0.06)",
                                                color: ink
                                            },
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate text-[13px] font-semibold",
                                                    style: {
                                                        color: ink
                                                    },
                                                    children: "Luis Enrique Navarro…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate text-[11px] font-medium",
                                                    style: {
                                                        color: "rgba(43,22,112,0.55)"
                                                    },
                                                    children: "Luis Enrique Navarro Ortiz"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold",
                                    style: {
                                        background: "rgba(43,22,112,0.06)",
                                        color: ink
                                    },
                                    children: "⌕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 rounded-3xl border border-black/5 bg-white/85 px-4 py-3 shadow-[0_18px_44px_rgba(43,22,112,0.10)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] font-semibold",
                                            style: {
                                                color: "rgba(43,22,112,0.55)"
                                            },
                                            children: "2 - 4 Feb 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full border border-black/5 px-2.5 py-1 text-[11px] font-semibold",
                                            style: {
                                                background: dcGreen,
                                                color: ink
                                            },
                                            children: "@MT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 space-y-1 text-[12px] leading-snug",
                                    style: {
                                        color: "rgba(43,22,112,0.80)"
                                    },
                                    children: [
                                        "Semana 38 de embarazo, parto inminente.",
                                        "Vacuna de hepatitis B recomendada para el bebé.",
                                        "Próxima cita: jueves, pero podría dar a luz antes.",
                                        "Consulta sobre maleta del hospital."
                                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-[6px] h-1.5 w-1.5 rounded-full",
                                                    style: {
                                                        background: "rgba(124,58,237,0.35)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: r
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, r, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-center justify-center gap-2 text-[12px] font-semibold",
                                    style: {
                                        color: "rgba(124,58,237,0.95)"
                                    },
                                    children: [
                                        ui.summary,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            children: "⌄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex-1 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-black/5 bg-white/65 px-4 py-3 text-[12px]",
                            style: {
                                color: "rgba(43,22,112,0.72)"
                            },
                            children: [
                                "Nos vemos entonces. Que tenga un buen día.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-[11px]",
                                    style: {
                                        color: "rgba(43,22,112,0.45)"
                                    },
                                    children: "Viernes - 10:01"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 ml-auto w-[78%] rounded-3xl border border-black/5 bg-white/85 px-4 py-3 text-[12px]",
                            style: {
                                color: "rgba(43,22,112,0.80)"
                            },
                            children: [
                                "Igualmente. Hasta pronto.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-[11px]",
                                    style: {
                                        color: "rgba(43,22,112,0.45)"
                                    },
                                    children: "Admin Isabella · Viernes - 10:05"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-3xl border border-black/5 bg-white/85 px-4 py-3 text-[12px]",
                            style: {
                                color: "rgba(43,22,112,0.72)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5 h-6 w-6 rounded-2xl border border-black/5",
                                        style: {
                                            background: "rgba(124,58,237,0.10)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                style: {
                                                    color: ink
                                                },
                                                children: "Dr. Torres"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, this),
                                            "re-asignó la conversación ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "rgba(245,158,11,0.95)"
                                                },
                                                children: "@Admin Victoria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 462,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-[11px]",
                                                style: {
                                                    color: "rgba(43,22,112,0.45)"
                                                },
                                                children: "Solo visible para ti · 2:16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold",
                                    style: {
                                        background: "rgba(43,22,112,0.06)",
                                        color: ink
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px]",
                                            children: "▢"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this),
                                        ui.createNote
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold",
                                    style: {
                                        background: "rgba(124,58,237,0.12)",
                                        color: ink
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px]",
                                            children: "✚"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 truncate whitespace-nowrap",
                                            children: ui.assign
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex items-center gap-3 rounded-3xl border border-black/5 bg-white/85 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold",
                                    style: {
                                        background: "rgba(43,22,112,0.06)",
                                        color: ink
                                    },
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 text-[12px] font-medium",
                                    style: {
                                        color: "rgba(43,22,112,0.45)"
                                    },
                                    children: "Escribe aquí"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold",
                                    style: {
                                        background: "rgba(43,22,112,0.06)",
                                        color: ink
                                    },
                                    children: "🎙"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#ECE6FF]"
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(90%_70%_at_40%_12%,rgba(124,58,237,0.22),transparent_62%),radial-gradient(80%_70%_at_70%_65%,rgba(34,197,94,0.12),transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-white/55 via-white/15 to-white/0"
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneFrame, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        className: "absolute inset-0 h-full w-full object-cover",
                                        src: WHATSAPP_VIDEO,
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        preload: "auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-6 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold text-white/80",
                                        children: "WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/35 px-4 py-3 text-[11px] font-medium text-white/80",
                                        children: "“Doctor, tengo dolor desde ayer…”"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatsScreen, {}, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 transition-opacity duration-700 " + (activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConversationScreen, {}, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 554,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35"
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
function DeepClinicWhatsApp({ lang = "es" }) {
    const t = CONTENT[lang];
    const accent = "rgba(34,197,94,0.22)";
    const steps = STEPS[lang];
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const flowLabel = lang === "es" ? "Flujo" : lang === "pt" ? "Fluxo" : "Flow";
    const detailLabel = lang === "es" ? "Detalle" : lang === "pt" ? "Detalhe" : "Detail";
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        "TURBOPACK unreachable";
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reducedMotion) return;
        const el = sectionRef.current;
        if (!el) return;
        const id = window.setInterval(()=>{
            if (document.hidden) return;
            if (el.getAttribute("data-dc-active") !== "true") return;
            setActiveStep((prev)=>(prev + 1) % steps.length);
        }, 5200);
        return ()=>window.clearInterval(id);
    }, [
        reducedMotion,
        steps.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = videoRef.current;
        if (!v) return;
        if (activeStep === 0) {
            if (v.autoplay && v.paused) {
                void v.play().catch(()=>{});
            }
        } else {
            if (!v.paused) v.pause();
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative z-10 w-full min-h-[100svh] snap-start flex items-start px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:min-h-[74svh] md:p-12 lg:min-h-[78svh] lg:p-14 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 643,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                            children: t.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                        children: flowLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-white/10",
                                                    children: steps.map((s, i)=>{
                                                        const isActive = i === activeStep;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveStep(i),
                                                            className: "w-full px-4 py-3 text-left transition-colors duration-300 " + (isActive ? "bg-white/[0.04]" : "bg-transparent"),
                                                            "aria-current": isActive ? "step" : undefined,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold tracking-[0.18em]",
                                                                        style: {
                                                                            background: isActive ? accent : "rgba(255,255,255,0.04)"
                                                                        },
                                                                        children: s.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0 flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[13px] font-semibold tracking-tight " + (isActive ? "text-white" : "text-white/75"),
                                                                                children: s.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                                lineNumber: 676,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-[12px] leading-relaxed text-white/55",
                                                                                children: s.caption
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                                lineNumber: 679,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 h-2 w-2 rounded-full",
                                                                        style: {
                                                                            background: "rgba(255,255,255,0.22)",
                                                                            boxShadow: `0 0 14px ${accent}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 h-2 w-2 rounded-full bg-white/10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, s.id, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                        children: detailLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12.5px] font-semibold tracking-tight text-white/85",
                                                            children: steps[activeStep]?.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[12px] leading-relaxed text-white/55",
                                                            children: steps[activeStep]?.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 grid gap-2",
                                                            children: (steps[activeStep]?.bullets ?? []).slice(0, 3).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-2 text-[12px] text-white/70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-[7px] h-1.5 w-1.5 rounded-full",
                                                                            style: {
                                                                                background: "rgba(255,255,255,0.22)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0",
                                                                            children: b
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                            lineNumber: 704,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, b, true, {
                                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-wrap gap-2",
                                            children: painPoints.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full",
                                                            style: {
                                                                background: "rgba(255,255,255,0.24)",
                                                                boxShadow: `0 0 18px ${accent}`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 23
                                                        }, this),
                                                        p
                                                    ]
                                                }, p, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 711,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid grid-cols-3 gap-2",
                                            children: metrics.slice(0, 3).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[16px] font-semibold tracking-tight text-white/90",
                                                            children: m.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, m.label, true, {
                                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 723,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/desk`,
                                                className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                                children: [
                                                    t.cta,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        "aria-hidden": true,
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                                lineNumber: 733,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 732,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 642,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                        accent: accent,
                                        variant: "video",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppVisual, {
                                            activeStep: activeStep,
                                            videoRef: videoRef,
                                            lang: lang
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                        lineNumber: 747,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 640,
                            columnNumber: 13
                        }, this),
                        t.footer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 flex flex-col items-center gap-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-white/50",
                                children: t.footer
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                                lineNumber: 756,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                            lineNumber: 755,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                    lineNumber: 634,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
                lineNumber: 633,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
            lineNumber: 632,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-whatsapp.tsx",
        lineNumber: 631,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/deepclinic-history.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicHistory": (()=>DeepClinicHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-ssr] (ecmascript)");
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
    const tone = "rgba(56,189,248,0.55)";
    const capabilities = lang === "es" ? [
        "Línea de tiempo clínica unificada en un solo lugar",
        "Búsqueda instantánea por diagnósticos, labs e imágenes",
        "Trazabilidad y contexto para decisiones más seguras",
        "Acceso seguro para equipos y cuidadores autorizados"
    ] : lang === "pt" ? [
        "Linha do tempo clínica unificada em um só lugar",
        "Busca instantânea por diagnósticos, exames e imagens",
        "Rastreabilidade e contexto para decisões mais seguras",
        "Acesso seguro para equipes e cuidadores autorizados"
    ] : [
        "Unified clinical timeline in one place",
        "Instant search across diagnoses, labs, and imaging",
        "Traceability and context for safer decisions",
        "Secure access for teams and authorized caregivers"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 order-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                    accent: accent,
                                    variant: "ui",
                                    shimmer: false,
                                    className: "relative mx-auto w-full max-w-[640px] xl:max-w-[720px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-7 md:p-8",
                                        style: {
                                            transform: "translateZ(18px)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dc_motion pointer-events-none absolute inset-x-0 top-0 h-14 opacity-0",
                                                style: {
                                                    background: "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                                                    animation: "dc_scan_y 7.8s ease-in-out infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden rounded-2xl border border-white/10 bg-black/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pointer-events-none absolute inset-0 opacity-70",
                                                        style: {
                                                            background: "radial-gradient(80% 70% at 30% 20%, rgba(56,189,248,0.14), transparent 62%), radial-gradient(60% 60% at 70% 60%, rgba(255,255,255,0.05), transparent 64%)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03]",
                                                                        style: {
                                                                            boxShadow: "0 0 28px rgba(56,189,248,0.18)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[11px] font-semibold tracking-[0.14em] text-white/80",
                                                                                children: ui.uhr
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-[10px] font-medium text-white/45",
                                                                                children: [
                                                                                    ui.patient,
                                                                                    ": M. González • ID DC-1024"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 146,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/65",
                                                                        children: ui.secure
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "dc_motion h-2 w-2 rounded-full",
                                                                        style: {
                                                                            background: "rgba(56,189,248,0.65)",
                                                                            boxShadow: "0 0 16px rgba(56,189,248,0.35)",
                                                                            animation: "dc_soft_pulse 3.2s ease-in-out infinite"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative px-5 pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                ].map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: tab.active ? "relative overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-center text-[10px] font-semibold text-white/85" : "rounded-full border border-white/10 bg-black/30 px-3 py-2 text-center text-[10px] font-medium text-white/55",
                                                                        style: tab.active ? {
                                                                            boxShadow: "0 0 26px rgba(56,189,248,0.14)"
                                                                        } : undefined,
                                                                        children: [
                                                                            tab.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "dc_motion pointer-events-none absolute inset-y-0 left-0 w-16 opacity-0",
                                                                                style: {
                                                                                    background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                                                                                    animation: "dc_scan_x 6.8s ease-in-out infinite",
                                                                                    animationDelay: `${-0.4 - i * 0.6}s`
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 180,
                                                                                columnNumber: 33
                                                                            }, this) : null,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: tab.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, tab.label, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 grid gap-4 sm:grid-cols-[0.42fr_0.58fr] pb-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-white/10 bg-black/35 p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                        children: ui.timeline
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 198,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] font-medium text-white/45",
                                                                                        children: ui.last30
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 199,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-4 relative pl-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "pointer-events-none absolute left-1.5 top-0 h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-white/0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 202,
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
                                                                                    ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "relative pb-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "dc_motion absolute -left-[5px] top-0 h-3 w-3 rounded-full border border-white/10",
                                                                                                    style: {
                                                                                                        background: row.tone,
                                                                                                        boxShadow: `0 0 18px ${row.tone}`,
                                                                                                        animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                                                                                        animationDelay: row.delay
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 210,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center justify-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "text-[10px] font-semibold text-white/65",
                                                                                                            children: row.date
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                            lineNumber: 220,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-white/60",
                                                                                                            children: row.tag
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                            lineNumber: 221,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 219,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "mt-2 h-px w-full bg-white/10"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                    lineNumber: 225,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, row.date, true, {
                                                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                            lineNumber: 209,
                                                                                            columnNumber: 33
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 201,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: ui.dx
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 234,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/50",
                                                                                                children: ui.active
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 235,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 233,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                        ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "h-2 w-2 rounded-full",
                                                                                                        style: {
                                                                                                            background: d.tone,
                                                                                                            boxShadow: `0 0 16px ${d.tone}`
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 243,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-[11px] font-medium text-white/70",
                                                                                                        children: d.label
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 244,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dc_motion ml-auto h-6 w-10 rounded-lg border border-white/10",
                                                                                                        style: {
                                                                                                            background: "rgba(255,255,255,0.04)",
                                                                                                            animation: "dc_bar_breathe 4.8s ease-in-out infinite",
                                                                                                            animationDelay: `${-0.6 - i * 0.7}s`
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 245,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, d.label, true, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 242,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 237,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 232,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid gap-3 md:grid-cols-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: "LABS"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 256,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[11px] font-medium text-white/65",
                                                                                                                children: r.k
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 264,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[11px] font-semibold text-white/80",
                                                                                                                children: r.v
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 265,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "text-[10px] font-medium text-white/40",
                                                                                                                children: r.s
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 266,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, r.k, true, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 263,
                                                                                                        columnNumber: 37
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 257,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 255,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-2xl border border-white/10 bg-white/[0.02] p-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold tracking-[0.22em] text-white/40",
                                                                                                children: ui.meds
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 273,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                                ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dc_motion h-2 w-2 rounded-full",
                                                                                                                style: {
                                                                                                                    background: "rgba(16,185,129,0.55)",
                                                                                                                    boxShadow: "0 0 16px rgba(16,185,129,0.28)",
                                                                                                                    animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                                                                                                    animationDelay: `${-0.2 - i * 0.6}s`
                                                                                                                }
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 281,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "min-w-0",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-[11px] font-medium text-white/70",
                                                                                                                        children: r.k
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                        lineNumber: 291,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-[10px] font-medium text-white/40",
                                                                                                                        children: [
                                                                                                                            r.v,
                                                                                                                            " • ",
                                                                                                                            r.s
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                        lineNumber: 292,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                                lineNumber: 290,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, r.k, true, {
                                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                        lineNumber: 280,
                                                                                                        columnNumber: 37
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                                lineNumber: 274,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                        lineNumber: 272,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                                lineNumber: 254,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-xl order-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                        children: t.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                        children: t.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                    children: lang === "es" ? "Capacidades" : lang === "pt" ? "Capacidades" : "Capabilities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2",
                                                    children: capabilities.slice(0, 4).map((b, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3 py-2 " + (idx === 0 ? "pt-0" : "") + (idx < Math.min(4, capabilities.length) - 1 ? " border-b border-white/10" : ""),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-[7px] h-1.5 w-1.5 rounded-full",
                                                                    style: {
                                                                        background: tone,
                                                                        boxShadow: `0 0 16px ${tone}`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[12.5px] leading-relaxed text-white/75",
                                                                    children: b
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, b, true, {
                                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/platform`,
                                            className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                            children: [
                                                t.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    "aria-hidden": true,
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-history.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-history.tsx",
                                            lineNumber: 342,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-history.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-history.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-history.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-history.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-history.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-history.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-history.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/deepclinic-triage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicTriage": (()=>DeepClinicTriage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/deepclinic-fx-frame.tsx [app-ssr] (ecmascript)");
"use client";
;
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
        priority: "Prioridad Media",
        intake: "Intake",
        symptoms: "Síntomas",
        vitals: "Signos",
        risk: "Riesgo",
        plan: "Plan",
        ready: "Listo"
    },
    en: {
        title: "DeepClinic Triage Command",
        description: "Walk into the visit with the case prepared. Automated voice/text intake, triage, and a clean clinical summary in minutes.",
        cta: "View details",
        chat: "Hello, to prepare for your consultation, could you tell me what symptoms you have felt today?",
        voice: "Voice Detected",
        summary: "Preliminary Summary",
        priority: "Medium Priority",
        intake: "Intake",
        symptoms: "Symptoms",
        vitals: "Vitals",
        risk: "Risk",
        plan: "Plan",
        ready: "Ready"
    },
    pt: {
        title: "DeepClinic Comando de Triagem",
        description: "Entre na consulta com o caso pronto. Intake por voz/texto, triagem e resumo clínico claro em minutos.",
        cta: "Ver detalhes",
        chat: "Olá, para preparar sua consulta, poderia me dizer quais sintomas sentiu hoje?",
        voice: "Voz Detectada",
        summary: "Resumo Preliminar",
        priority: "Prioridade Média",
        intake: "Intake",
        symptoms: "Sintomas",
        vitals: "Sinais",
        risk: "Risco",
        plan: "Plano",
        ready: "Pronto"
    }
};
function DeepClinicTriage({ lang = "es" }) {
    const t = CONTENT[lang];
    const accent = "rgba(16,185,129,0.22)";
    const tone = "rgba(16,185,129,0.55)";
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phaseTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [voiceHeights, setVoiceHeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Array.from({
            length: 16
        }, ()=>40));
    const capabilities = lang === "es" ? [
        "Intake por voz y texto listo para consulta",
        "Clasificación y priorización clínica en minutos",
        "Resumen preliminar para acelerar la decisión médica",
        "Escalamiento cuando detecta señales de alarma"
    ] : lang === "pt" ? [
        "Intake por voz e texto pronto para a consulta",
        "Classificação e priorização clínica em minutos",
        "Resumo preliminar para acelerar a decisão médica",
        "Escalonamento quando detecta sinais de alerta"
    ] : [
        "Voice + text intake ready for the visit",
        "Clinical classification and prioritization in minutes",
        "Preliminary summary to speed up medical decisions",
        "Escalation when red flags are detected"
    ];
    const phases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                key: "intake",
                label: t.intake,
                priority: lang === "es" ? "En evaluación" : lang === "pt" ? "Em avaliação" : "Assessing",
                priorityClass: "bg-white/10 text-white/70"
            },
            {
                key: "symptoms",
                label: t.symptoms,
                priority: t.priority,
                priorityClass: "bg-yellow-500/20 text-yellow-200"
            },
            {
                key: "vitals",
                label: t.vitals,
                priority: t.priority,
                priorityClass: "bg-yellow-500/20 text-yellow-200"
            },
            {
                key: "risk",
                label: t.risk,
                priority: lang === "es" ? "Prioridad Alta" : lang === "pt" ? "Prioridade Alta" : "High Priority",
                priorityClass: "bg-rose-500/20 text-rose-200"
            },
            {
                key: "plan",
                label: t.plan,
                priority: lang === "es" ? "Acción inmediata" : lang === "pt" ? "Ação imediata" : "Immediate action",
                priorityClass: "bg-rose-500/20 text-rose-200"
            },
            {
                key: "ready",
                label: t.ready,
                priority: lang === "es" ? "Caso listo" : lang === "pt" ? "Caso pronto" : "Case ready",
                priorityClass: "bg-emerald-500/20 text-emerald-200"
            }
        ], [
        lang,
        t.intake,
        t.plan,
        t.priority,
        t.ready,
        t.risk,
        t.symptoms,
        t.vitals
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const el = undefined;
        const reduced = undefined;
        const observer = undefined;
    }, [
        phases.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        let cancelled = false;
        const durations = [
            2300,
            2400,
            2400,
            2400,
            2400,
            2400
        ];
        const len = phases.length;
        if (phaseTimeoutRef.current) {
            window.clearTimeout(phaseTimeoutRef.current);
            phaseTimeoutRef.current = null;
        }
        setPhase(0);
        let nextIndex = 1;
        const scheduleNext = (fromIndex)=>{
            const ms = durations[fromIndex] ?? 2400;
            phaseTimeoutRef.current = window.setTimeout(()=>{
                if (cancelled) return;
                setPhase(nextIndex);
                const current = nextIndex;
                nextIndex = (nextIndex + 1) % len;
                scheduleNext(current);
            }, ms);
        };
        scheduleNext(0);
        return ()=>{
            cancelled = true;
            if (phaseTimeoutRef.current) {
                window.clearTimeout(phaseTimeoutRef.current);
                phaseTimeoutRef.current = null;
            }
        };
    }, [
        inView,
        phases.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        const active = phases[phase]?.key;
        if (active !== "symptoms") return;
        const id = window.setInterval(()=>{
            setVoiceHeights((prev)=>prev.map((_, i)=>{
                    const base = 24 + i % 5 * 6;
                    const r = Math.random();
                    return Math.max(12, Math.min(92, Math.round(base + r * 62)));
                }));
        }, 140);
        return ()=>window.clearInterval(id);
    }, [
        inView,
        phase,
        phases
    ]);
    const progress = (phase + 1) / phases.length * 100;
    const activePhase = phases[phase] ?? phases[0];
    const showVitals = phase >= 2;
    const showRisk = phase >= 3;
    const showPlan = phase >= 4;
    const showReady = phase >= 5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-screen-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 740,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold tracking-tight text-white md:text-4xl",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]",
                                            children: t.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-white/10 bg-white/[0.02] px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                        children: lang === "es" ? "Capacidades" : lang === "pt" ? "Capacidades" : "Capabilities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-2",
                                                        children: capabilities.slice(0, 4).map((b, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3 py-2 " + (idx === 0 ? "pt-0" : "") + (idx < Math.min(4, capabilities.length) - 1 ? " border-b border-white/10" : ""),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-[7px] h-1.5 w-1.5 rounded-full",
                                                                        style: {
                                                                            background: tone,
                                                                            boxShadow: `0 0 16px ${tone}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[12.5px] leading-relaxed text-white/75",
                                                                        children: b
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, b, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/booking`,
                                                className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80",
                                                children: [
                                                    t.cta,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        "aria-hidden": true,
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deepclinic$2d$fx$2d$frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepClinicFxFrame"], {
                                        accent: accent,
                                        variant: "ui",
                                        className: "relative mx-auto w-full max-w-[640px] xl:max-w-[720px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-7 md:p-8",
                                            style: {
                                                transform: "translateZ(18px)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-black/35 px-4 py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                                        children: lang === "es" ? "Simulación" : lang === "pt" ? "Simulação" : "Simulation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-white/65",
                                                                        children: lang === "es" ? "Paciente: Laura M. · 46" : lang === "pt" ? "Paciente: Laura M. · 46" : "Patient: Laura M. · 46"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-full overflow-hidden rounded-full bg-white/10",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full rounded-full bg-emerald-500/60",
                                                                            style: {
                                                                                width: `${progress}%`,
                                                                                transition: "width 650ms ease"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6",
                                                                        children: phases.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-full border px-2 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors " + (i <= phase ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200" : "border-white/10 bg-white/[0.02] text-white/40"),
                                                                                children: p.label
                                                                            }, p.key, false, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-4 lg:grid-cols-[1.05fr_0.95fr]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "h-4 w-4",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        stroke: "currentColor",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 321,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 320,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 319,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "min-w-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-2xl rounded-tl-none bg-white/10 p-3 text-[12px] leading-relaxed text-white/80",
                                                                                            children: t.chat
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 325,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "mt-2 text-[10px] font-medium text-white/40",
                                                                                            children: [
                                                                                                lang === "es" ? "Paso 1" : lang === "pt" ? "Passo 1" : "Step 1",
                                                                                                " · ",
                                                                                                t.intake
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 328,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 324,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 318,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col items-end gap-2 transition-all duration-500 " + (phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 rounded-2xl rounded-tr-none bg-emerald-500/10 px-4 py-3 border border-emerald-500/20",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-semibold uppercase tracking-wider text-emerald-300 mr-2",
                                                                                            children: t.voice
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 341,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-end gap-[2px] h-4",
                                                                                            children: voiceHeights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-[3px] rounded-full bg-emerald-400/60",
                                                                                                    style: {
                                                                                                        height: `${h}%`,
                                                                                                        transition: "height 180ms ease",
                                                                                                        opacity: 0.35 + i % 5 * 0.12
                                                                                                    }
                                                                                                }, i, false, {
                                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                    lineNumber: 344,
                                                                                                    columnNumber: 37
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 342,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 340,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-medium text-white/40",
                                                                                    children: [
                                                                                        lang === "es" ? "Paso 2" : lang === "pt" ? "Passo 2" : "Step 2",
                                                                                        " · ",
                                                                                        t.symptoms
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 356,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 334,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-2xl border border-white/10 bg-black/35 p-4 transition-all duration-500 " + (phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45",
                                                                                            children: lang === "es" ? "Extracción" : lang === "pt" ? "Extração" : "Extraction"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 368,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-white/60",
                                                                                            children: lang === "es" ? "2 min" : lang === "pt" ? "2 min" : "2 min"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 371,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 367,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-3 flex flex-wrap gap-2",
                                                                                    children: [
                                                                                        lang === "es" ? "Dolor torácico" : lang === "pt" ? "Dor torácica" : "Chest pain",
                                                                                        lang === "es" ? "Disnea" : lang === "pt" ? "Dispneia" : "Dyspnea",
                                                                                        lang === "es" ? "Mareo" : lang === "pt" ? "Tontura" : "Dizziness",
                                                                                        lang === "es" ? "Inicio: 2h" : lang === "pt" ? "Início: 2h" : "Onset: 2h",
                                                                                        lang === "es" ? "HTA" : lang === "pt" ? "HAS" : "HTN"
                                                                                    ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/70",
                                                                                            children: chip
                                                                                        }, chip, false, {
                                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                            lineNumber: 383,
                                                                                            columnNumber: 35
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                    lineNumber: 375,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                            lineNumber: 361,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40",
                                                                                children: t.summary
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 397,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded px-2 py-0.5 text-[9px] font-bold uppercase " + activePhase.priorityClass,
                                                                                children: activePhase.priority
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 398,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4 space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl border border-white/10 bg-black/30 px-3 py-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                                                                children: lang === "es" ? "Signos vitales" : lang === "pt" ? "Sinais vitais" : "Vitals"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 404,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-medium transition-opacity " + (showVitals ? "opacity-100 text-white/55" : "opacity-40 text-white/30"),
                                                                                                children: showVitals ? lang === "es" ? "capturados" : lang === "pt" ? "capturados" : "captured" : lang === "es" ? "pendiente" : lang === "pt" ? "pendente" : "pending"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 405,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 403,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3 grid grid-cols-2 gap-2",
                                                                                        children: [
                                                                                            {
                                                                                                k: lang === "es" ? "TA" : lang === "pt" ? "PA" : "BP",
                                                                                                v: "168/96"
                                                                                            },
                                                                                            {
                                                                                                k: lang === "es" ? "FC" : lang === "pt" ? "FC" : "HR",
                                                                                                v: "112"
                                                                                            },
                                                                                            {
                                                                                                k: "SpO₂",
                                                                                                v: "92%"
                                                                                            },
                                                                                            {
                                                                                                k: lang === "es" ? "Temp" : lang === "pt" ? "Temp" : "Temp",
                                                                                                v: "37.1"
                                                                                            }
                                                                                        ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 transition-all duration-500 " + (showVitals ? "opacity-100" : "opacity-40"),
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40",
                                                                                                        children: row.k
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                        lineNumber: 423,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "mt-1 text-[13px] font-semibold tracking-tight text-white/80",
                                                                                                        children: row.v
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                        lineNumber: 424,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, row.k, true, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 416,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 409,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl border border-white/10 bg-black/30 px-3 py-3 transition-all duration-500 " + (showRisk ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-0.5"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                                                                children: lang === "es" ? "Banderas rojas" : lang === "pt" ? "Sinais de alerta" : "Red flags"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 437,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-[10px] font-semibold text-rose-200",
                                                                                                children: showRisk ? lang === "es" ? "Detectadas" : lang === "pt" ? "Detectadas" : "Detected" : lang === "es" ? "Analizando" : lang === "pt" ? "Analisando" : "Analyzing"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 440,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 436,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3 space-y-2",
                                                                                        children: [
                                                                                            lang === "es" ? "Dolor torácico + disnea" : lang === "pt" ? "Dor torácica + dispneia" : "Chest pain + dyspnea",
                                                                                            lang === "es" ? "SpO₂ < 94%" : lang === "pt" ? "SpO₂ < 94%" : "SpO₂ < 94%",
                                                                                            lang === "es" ? "Taquicardia" : lang === "pt" ? "Taquicardia" : "Tachycardia"
                                                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "h-1.5 w-1.5 rounded-full bg-rose-400/80"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                        lineNumber: 451,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-[12px] text-white/70",
                                                                                                        children: item
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                        lineNumber: 452,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, item, true, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 450,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 444,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl border border-white/10 bg-black/30 px-3 py-3 transition-all duration-500 " + (showPlan ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                                                        children: lang === "es" ? "Recomendación" : lang === "pt" ? "Recomendação" : "Recommendation"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 464,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3 rounded-xl border border-rose-500/15 bg-rose-500/10 px-3 py-2 text-[12px] font-semibold text-rose-100",
                                                                                        children: lang === "es" ? "Derivar a urgencias. ECG y troponinas. Monitorización." : lang === "pt" ? "Encaminhar à emergência. ECG e troponinas. Monitorização." : "Refer to ER. ECG and troponins. Monitoring."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 467,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 458,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl border border-white/10 bg-white/[0.02] p-3 transition-all duration-500 " + (showReady ? "opacity-100" : "opacity-0 pointer-events-none"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40",
                                                                                                children: lang === "es" ? "Caso para consulta" : lang === "pt" ? "Caso para consulta" : "Visit-ready"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 483,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200",
                                                                                                children: lang === "es" ? "Listo" : lang === "pt" ? "Pronto" : "Ready"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 486,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 482,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3 space-y-2",
                                                                                        children: [
                                                                                            0,
                                                                                            1,
                                                                                            2
                                                                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "h-1.5 w-full rounded-full bg-white/10"
                                                                                            }, i, false, {
                                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                                lineNumber: 492,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                        lineNumber: 490,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                                lineNumber: 476,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-triage.tsx",
                                                lineNumber: 283,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-triage.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-triage.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-triage.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deepclinic-triage.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-triage.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-triage.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/grok-background.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "GrokBackground": (()=>GrokBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function GrokBackground({ variant = "default" }) {
    const isHero = variant === "hero";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 isolate overflow-hidden pointer-events-none select-none bg-black transform-gpu",
        style: {
            contain: "paint"
        },
        children: [
            isHero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute inset-0 opacity-40",
                style: {
                    animation: "dc_star_drift 52s ease-in-out infinite",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[-14%] right-[-12%] w-[92vw] h-[100vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/35 via-indigo-900/16 to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_light_drift 22s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            isHero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[2%] right-[2%] w-[56vw] h-[56vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/18 via-blue-400/16 to-transparent blur-[120px] mix-blend-screen",
                style: {
                    animation: "dc_light_drift 16s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[14%] right-[10%] w-[52vw] h-[52vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-sky-400/12 to-transparent blur-[160px] mix-blend-screen",
                style: {
                    animation: "dc_drift_a 22s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute top-[14%] left-[-18%] w-[82vw] h-[82vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/14 via-blue-900/10 to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_drift_b 28s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc_motion absolute -bottom-[28%] left-[-18%] w-[76vw] h-[76vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent blur-[170px] mix-blend-screen",
                style: {
                    animation: "dc_drift_c 36s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-22%] left-[10%] w-[90vw] h-[55vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/14 via-black to-transparent blur-[140px]"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30 mix-blend-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/src/components/deepclinic-perf-controller.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicPerfController": (()=>DeepClinicPerfController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function DeepClinicPerfController({ rootSelector = "main.dc_perf" }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const prefersReducedMotion = undefined;
        const saveData = undefined;
        const root = undefined;
        const shouldPreload = undefined;
        let preloadCancel;
        let sections;
        const setActive = undefined;
        const setNear = undefined;
        const setHidden = undefined;
        const syncVideos = undefined;
        const section = undefined;
        const initial = undefined;
        let currentActiveIndex;
        let nearIndex;
        let scrollRaf;
        const syncNearFromScroll = undefined;
        let currentActive;
        const ratios = undefined;
        const setExclusiveActive = undefined;
        const onVisibilityChange = undefined;
        const observer = undefined;
        const section1 = undefined;
    }, [
        rootSelector
    ]);
    return null;
}
}}),
"[project]/src/components/deepclinic-impact-wall.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DeepClinicImpactWall": (()=>DeepClinicImpactWall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function formatNumber(value, lang) {
    const locale = lang === "es" ? "es-MX" : lang === "pt" ? "pt-BR" : "en-US";
    return new Intl.NumberFormat(locale).format(Math.max(0, Math.round(value)));
}
function DeepClinicImpactWall({ lang = "es" }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        "TURBOPACK unreachable";
    }, []);
    const copy = lang === "es" ? {
        eyebrow: "[ IMPACTO ]",
        title: "Más de 1.2M consultas clínicas. 30M+ interacciones.",
        description: "Métricas reales de uso: alcance global, flujo continuo y horas ahorradas cada semana."
    } : lang === "pt" ? {
        eyebrow: "[ IMPACTO ]",
        title: "Mais de 1,2M consultas clínicas. 30M+ interações.",
        description: "Métricas reais de uso: alcance global, fluxo contínuo e horas economizadas toda semana."
    } : {
        eyebrow: "[ IMPACT ]",
        title: "1.2M+ clinical consultations. 30M+ interactions.",
        description: "Real usage metrics: global reach, continuous flow, and hours saved week after week."
    };
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const base = lang === "es" ? [
            {
                key: "consultations",
                label: "Consultas clínicas",
                value: 1_200_000,
                plus: true,
                live: {
                    everyMs: 550,
                    step: 7,
                    maxExtra: 22_000
                }
            },
            {
                key: "countries",
                label: "Países",
                value: 35,
                plus: true
            },
            {
                key: "interactions",
                label: "Interacciones",
                value: 30_000_000,
                plus: true,
                live: {
                    everyMs: 420,
                    step: 220,
                    maxExtra: 1_200_000
                }
            },
            {
                key: "hours",
                label: "Horas ahorradas",
                value: 240_000,
                plus: true,
                live: {
                    everyMs: 900,
                    step: 4,
                    maxExtra: 12_000
                }
            }
        ] : lang === "pt" ? [
            {
                key: "consultations",
                label: "Consultas clínicas",
                value: 1_200_000,
                plus: true,
                live: {
                    everyMs: 550,
                    step: 7,
                    maxExtra: 22_000
                }
            },
            {
                key: "countries",
                label: "Países",
                value: 35,
                plus: true
            },
            {
                key: "interactions",
                label: "Interações",
                value: 30_000_000,
                plus: true,
                live: {
                    everyMs: 420,
                    step: 220,
                    maxExtra: 1_200_000
                }
            },
            {
                key: "hours",
                label: "Horas economizadas",
                value: 240_000,
                plus: true,
                live: {
                    everyMs: 900,
                    step: 4,
                    maxExtra: 12_000
                }
            }
        ] : [
            {
                key: "consultations",
                label: "Clinical consultations",
                value: 1_200_000,
                plus: true,
                live: {
                    everyMs: 550,
                    step: 7,
                    maxExtra: 22_000
                }
            },
            {
                key: "countries",
                label: "Countries",
                value: 35,
                plus: true
            },
            {
                key: "interactions",
                label: "Interactions",
                value: 30_000_000,
                plus: true,
                live: {
                    everyMs: 420,
                    step: 220,
                    maxExtra: 1_200_000
                }
            },
            {
                key: "hours",
                label: "Hours saved",
                value: 240_000,
                plus: true,
                live: {
                    everyMs: 900,
                    step: 4,
                    maxExtra: 12_000
                }
            }
        ];
        return base;
    }, [
        lang
    ]);
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            consultations: Math.max(0, stats[0]?.value ? stats[0].value * 0.78 : 0),
            countries: Math.max(0, stats[1]?.value ? stats[1].value : 0),
            interactions: Math.max(0, stats[2]?.value ? stats[2].value * 0.92 : 0),
            hours: Math.max(0, stats[3]?.value ? stats[3].value * 0.84 : 0)
        }));
    const [hasStarted, setHasStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reducedMotion) {
            setHasStarted(true);
            setValues({
                consultations: stats.find((s)=>s.key === "consultations")?.value ?? 0,
                countries: stats.find((s)=>s.key === "countries")?.value ?? 0,
                interactions: stats.find((s)=>s.key === "interactions")?.value ?? 0,
                hours: stats.find((s)=>s.key === "hours")?.value ?? 0
            });
            return;
        }
        const el = sectionRef.current;
        if (!el) return;
        const root = document.querySelector("main.dc_perf");
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                    break;
                }
            }
        }, {
            root,
            threshold: 0.32
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        reducedMotion,
        stats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasStarted) return;
        const el = sectionRef.current;
        if (!el) return;
        const targets = {
            consultations: stats.find((s)=>s.key === "consultations")?.value ?? 0,
            countries: stats.find((s)=>s.key === "countries")?.value ?? 0,
            interactions: stats.find((s)=>s.key === "interactions")?.value ?? 0,
            hours: stats.find((s)=>s.key === "hours")?.value ?? 0
        };
        const startValues = {
            ...values
        };
        const durationMs = 1300;
        const start = performance.now();
        let raf = 0;
        const tick = (now)=>{
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValues({
                consultations: startValues.consultations + (targets.consultations - startValues.consultations) * eased,
                countries: startValues.countries + (targets.countries - startValues.countries) * eased,
                interactions: startValues.interactions + (targets.interactions - startValues.interactions) * eased,
                hours: startValues.hours + (targets.hours - startValues.hours) * eased
            });
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hasStarted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasStarted) return;
        if (reducedMotion) return;
        const el = sectionRef.current;
        if (!el) return;
        const baseTargets = {
            consultations: stats.find((s)=>s.key === "consultations")?.value ?? 0,
            countries: stats.find((s)=>s.key === "countries")?.value ?? 0,
            interactions: stats.find((s)=>s.key === "interactions")?.value ?? 0,
            hours: stats.find((s)=>s.key === "hours")?.value ?? 0
        };
        const maxExtra = {
            consultations: stats.find((s)=>s.key === "consultations")?.live?.maxExtra ?? 0,
            countries: 0,
            interactions: stats.find((s)=>s.key === "interactions")?.live?.maxExtra ?? 0,
            hours: stats.find((s)=>s.key === "hours")?.live?.maxExtra ?? 0
        };
        const timers = [];
        for (const s of stats){
            if (!s.live) continue;
            const { everyMs, step } = s.live;
            const id = window.setInterval(()=>{
                if (document.hidden) return;
                if (el.getAttribute("data-dc-active") !== "true") return;
                setValues((prev)=>{
                    const current = prev[s.key];
                    const base = baseTargets[s.key];
                    const extraCap = maxExtra[s.key];
                    const allowedMax = base + extraCap;
                    const next = Math.min(allowedMax, current + step);
                    if (next === current) return prev;
                    return {
                        ...prev,
                        [s.key]: next
                    };
                });
            }, everyMs);
            timers.push(id);
        }
        return ()=>{
            for (const id of timers)window.clearInterval(id);
        };
    }, [
        hasStarted,
        reducedMotion,
        stats
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative z-10 h-[100svh] snap-start flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-[100svh] w-full max-w-7xl flex-col justify-center px-6 pt-24 pb-16 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                durationMs: 760,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-3xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold tracking-[0.25em] text-white/35",
                                children: copy.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-7 text-balance text-[clamp(34px,4.6vw,60px)] font-semibold leading-[0.95] tracking-tight text-white",
                                children: copy.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-[15px] leading-relaxed text-white/60",
                                children: copy.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(255,255,255,0.06),transparent_68%)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-[0.55]",
                                        style: {
                                            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                                            backgroundSize: "140px 92px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative grid md:grid-cols-2",
                                children: stats.map((s, idx)=>{
                                    const isTop = idx < 2;
                                    const isLeft = idx % 2 === 0;
                                    const borderClasses = (isTop ? "border-b border-white/10 " : "") + (isLeft ? "md:border-r md:border-white/10 " : "") + "border-white/10";
                                    const accent = s.key === "consultations" ? "rgba(56,189,248,0.55)" : s.key === "countries" ? "rgba(168,85,247,0.55)" : s.key === "interactions" ? "rgba(34,197,94,0.55)" : "rgba(244,63,94,0.55)";
                                    const value = values[s.key];
                                    const rendered = formatNumber(value, lang);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative p-7 md:p-10 " + borderClasses,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 opacity-70",
                                                style: {
                                                    background: `radial-gradient(75% 70% at 30% 18%, ${accent}, transparent 62%)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50",
                                                                children: s.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    s.live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-2 w-2 rounded-full",
                                                                        style: {
                                                                            background: "rgba(255,255,255,0.18)",
                                                                            boxShadow: `0 0 14px ${accent}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 29
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35",
                                                                        children: s.plus ? "+" : ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 flex items-baseline gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "tabular-nums text-[clamp(38px,5.2vw,64px)] font-semibold leading-none tracking-tight text-white",
                                                                children: rendered
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 25
                                                            }, this),
                                                            s.plus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[clamp(18px,2.2vw,26px)] font-semibold text-white/55",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 35
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-medium text-white/55",
                                                                children: lang === "es" ? "Actualizado en tiempo real" : lang === "pt" ? "Atualizado em tempo real" : "Updated in real time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55",
                                                                children: "DeepClinic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.key, true, {
                                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                        lineNumber: 306,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
            lineNumber: 267,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-impact-wall.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/es/deepclinic/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_d22097._.js.map