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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function DeepClinicTopNav({ showProductsSubnav }) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
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
        ], []);
    const productItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                label: "COPILOTO",
                href: "/es/product"
            },
            {
                label: "INGRESOS",
                href: "/es/revenue"
            },
            {
                label: "RECEPCIÓN",
                href: "/es/desk"
            },
            {
                label: "CITAS",
                href: "/es/booking"
            },
            {
                label: "DEEPCLINIC IA",
                href: "/es/platform"
            },
            {
                label: "PACIENTES",
                href: "/es/health"
            }
        ], []);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productsOpen, setProductsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        if (label === "DEEPCLINIC" && showProductsSubnav) {
            e.preventDefault();
            setProductsOpen((prev)=>!prev);
        } else {
            setProductsOpen(false);
        }
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
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-8 px-6 py-5 md:gap-10 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/es/deepclinic",
                            className: "flex items-center gap-2 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-black",
                                children: "DC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center justify-start gap-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:flex",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `transition-colors hover:text-white ${item.label === "DEEPCLINIC" && productsOpen ? "text-white" : ""}`,
                                    onClick: (e)=>handleNavClick(e, item.label),
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: "inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.08]",
                                    children: "PROBAR DEEPCLINIC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpen((v)=>!v),
                                    "aria-expanded": open,
                                    "aria-label": open ? "Cerrar menú" : "Abrir menú",
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 backdrop-blur transition-colors hover:bg-white/10 md:hidden",
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
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 17h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 80,
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
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center justify-start gap-6 py-3 text-[10px] font-medium uppercase tracking-[0.26em] text-white/40",
                                children: productItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "transition-colors hover:text-white/80",
                                        children: item.label
                                    }, `subnav-${item.label}`, false, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: joinClassNames("md:hidden", "fixed left-0 right-0 bottom-0 top-[72px]", "transition-opacity duration-300", open ? "opacity-100" : "pointer-events-none opacity-0"),
                    onClick: ()=>setOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 141,
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
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setOpen(false),
                                        className: "rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white",
                                        children: item.label
                                    }, `mobile-${item.label}`, false, {
                                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/deepclinic-top-nav.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deepclinic-top-nav.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deepclinic-top-nav.tsx",
        lineNumber: 76,
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
function joinClassNames(...parts) {
    return parts.filter(Boolean).join(" ");
}
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function round3(value) {
    return Math.round(value * 1000) / 1000;
}
function InteractiveStarburst({ className }) {
    const rays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const questions = [
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
        ];
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
                len: 300 + idx * 13 % 34,
                stroke: "rgba(255,255,255,0.075)",
                strokeWidth: 2,
                question: questions[idx % questions.length] ?? questions[0] ?? ""
            }));
        const minorRays = minor.map((deg, idx)=>({
                id: `ray-minor-${deg}`,
                deg,
                len: 342 + idx * 17 % 64,
                stroke: "rgba(255,255,255,0.045)",
                strokeWidth: 1,
                question: questions[(idx + majorRays.length) % questions.length] ?? questions[0] ?? ""
            }));
        return [
            ...majorRays,
            ...minorRays
        ];
    }, []);
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
    const activeQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!activePointId) return "";
        const ray = rays.find((r)=>r.id === activePointId);
        if (ray) return ray.question;
        const point = points.find((p)=>p.id === activePointId);
        if (point) return point.question;
        return rays[0]?.question ?? "";
    }, [
        activePointId,
        points,
        rays
    ]);
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
        children: [
            activeQuestion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-12 w-[min(880px,92vw)] -translate-x-1/2 text-center md:top-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45",
                    children: activeQuestion
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive-starburst.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive-starburst.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dc_motion",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc_motion will-change-transform",
                        style: {
                            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dc_motion origin-center transform-gpu will-change-transform animate-dc-spin",
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
                                            transform: "translate(600 320)",
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
                                                        lineNumber: 223,
                                                        columnNumber: 27
                                                    }, this)
                                                }, ray.id, false, {
                                                    fileName: "[project]/src/components/interactive-starburst.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.96",
                                            children: points.map((p, idx)=>{
                                                const isActive = p.id === activePointId;
                                                const hit = 22;
                                                const hitX = round3(p.x - (hit - p.w) / 2);
                                                const hitY = round3(p.y - (hit - p.h) / 2);
                                                const rectX = round3(p.x);
                                                const rectY = round3(p.y);
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
                                                            lineNumber: 248,
                                                            columnNumber: 27
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
                                                            lineNumber: 268,
                                                            columnNumber: 27
                                                        }, this),
                                                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: round3(rectX - 3),
                                                            y: round3(rectY - 3),
                                                            width: p.w + 6,
                                                            height: p.h + 6,
                                                            fill: "transparent",
                                                            stroke: "rgba(255,255,255,0.45)",
                                                            strokeWidth: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 29
                                                        }, this) : null
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/src/components/interactive-starburst.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/interactive-starburst.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/interactive-starburst.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive-starburst.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive-starburst.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive-starburst.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive-starburst.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive-starburst.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive-starburst.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/specialties-visual.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SpecialtiesVisual": (()=>SpecialtiesVisual)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/motion-reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ROLES = [
    "Médico de Familia",
    "Médico General",
    "Urgenciólogo",
    "Residente"
];
function SpecialtiesVisual() {
    const [activeRole, setActiveRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setActiveRole((prev)=>(prev + 1) % ROLES.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 min-h-[100svh] bg-black py-24 md:py-32 overflow-hidden flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-black"
            }, void 0, false, {
                fileName: "[project]/src/components/specialties-visual.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 lg:px-8 relative w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                            durationMs: 800,
                            className: "relative h-[500px] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[500px] h-[500px] scale-[0.55] sm:scale-[0.75] lg:scale-100 transition-transform duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border border-white/10 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/10 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center rounded-[32px] bg-white p-1.5 pr-1.5 shadow-[0_0_40px_rgba(255,255,255,0.1)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-6 pr-4 text-xl font-medium text-black",
                                                    children: "Soy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-12 items-center justify-center rounded-full bg-[#b7f453] px-6 text-xl font-bold text-black min-w-[220px] whitespace-nowrap",
                                                    children: ROLES[activeRole]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 animate-[spin_80s_linear_infinite]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitItem, {
                                                angle: 330,
                                                radius: 290,
                                                label: "Cardiólogo",
                                                duration: "80s"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/specialties-visual.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitItem, {
                                                angle: 140,
                                                radius: 290,
                                                label: "Pediatra",
                                                duration: "80s"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/specialties-visual.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitItem, {
                                                angle: 220,
                                                radius: 290,
                                                label: "Neurólogo",
                                                duration: "80s"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/specialties-visual.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite_reverse]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute w-[380px] h-[380px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitItem, {
                                                    angle: 45,
                                                    radius: 190,
                                                    label: "Psiquiatra",
                                                    duration: "60s",
                                                    reverse: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitItem, {
                                                    angle: 135,
                                                    radius: 190,
                                                    label: "Ginecóloga",
                                                    duration: "60s",
                                                    reverse: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/specialties-visual.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/specialties-visual.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                                    durationMs: 740,
                                    delayMs: 200,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[clamp(32px,4vw,54px)] font-medium leading-[1.1] tracking-tight text-white",
                                            children: [
                                                "Más de 50 especialidades ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40",
                                                    children: "compatibles"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-lg text-white/60 leading-relaxed",
                                            children: "DeepClinic Copilot entiende el idioma de tu especialidad. Diseñado para médicos, psicólogos, dentistas, fisioterapeutas y enfermeros."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 grid sm:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                                            durationMs: 740,
                                            delayMs: 300,
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-white mb-3",
                                                        children: "IA destilada por especialidad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/50 leading-relaxed",
                                                        children: "Modelos propios entrenados con datos clínicos reales para cada especialidad, desde Medicina Interna hasta Cirugía."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/specialties-visual.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2d$reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionReveal"], {
                                            durationMs: 740,
                                            delayMs: 400,
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-white mb-3",
                                                        children: "Menos ruido, más precisión"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/50 leading-relaxed",
                                                        children: "Cada modelo se ajusta al lenguaje clínico de su especialidad para reducir errores y alucinaciones."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/specialties-visual.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/specialties-visual.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/specialties-visual.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/specialties-visual.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/specialties-visual.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/specialties-visual.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/specialties-visual.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/specialties-visual.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
// Helper to position items on a circle and counter-rotate them
function OrbitItem({ angle, radius, label, duration, reverse = false }) {
    const placementStyle = {
        transform: `rotate(${angle}deg) translateY(-${radius}px)`
    };
    // Construct the animation class dynamically based on duration and direction
    // If parent is Normal, Child must be Reverse. If parent is Reverse, Child must be Normal.
    const animationClass = reverse ? `animate-[spin_${duration}_linear_infinite]` : `animate-[spin_${duration}_linear_infinite_reverse]`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center",
        style: placementStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center ${animationClass}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transform: `rotate(${-angle}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 py-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.15)] text-black text-base font-semibold whitespace-nowrap",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/specialties-visual.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/specialties-visual.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/specialties-visual.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/specialties-visual.tsx",
        lineNumber: 131,
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
function GrokBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none select-none bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-10%] right-[-5%] w-[70vw] h-[80vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/40 via-indigo-900/20 to-transparent blur-[120px] mix-blend-screen animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/25 via-blue-400/20 to-transparent blur-[80px] mix-blend-screen"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-blue-900/10 to-transparent blur-[100px] mix-blend-screen animate-spin-slow-reverse",
                style: {
                    animationDuration: '40s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-20%] left-[20%] w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-transparent blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-40 mix-blend-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent blur-[60px] animate-spin-slow",
                        style: {
                            animationDuration: '30s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/grok-background.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-blue-950/20 mix-blend-overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/grok-background.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/grok-background.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/hero-video.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HeroVideo": (()=>HeroVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const BUTTON_LABEL = {
    es: "Descubre cómo funciona",
    en: "See how it works",
    pt: "Descubra como funciona"
};
function HeroVideo({ theme = "light" }) {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es";
    const buttonLabel = BUTTON_LABEL[locale] ?? BUTTON_LABEL.es;
    const containerBorder = theme === "dark" ? "border-white/10" : "border-slate-200";
    const containerBg = theme === "dark" ? "bg-white/5" : "bg-slate-100";
    const shadowClass = theme === "dark" ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] group-hover:border-white/20" : "shadow-[0_4px_24px_rgba(15,23,42,0.08)] group-hover:shadow-[0_8px_40px_rgba(15,23,42,0.12)] group-hover:border-slate-300";
    const playButtonOuterBg = theme === "dark" ? "bg-black/20 backdrop-blur-sm group-hover:bg-black/40" : "bg-white/90 group-hover:bg-white";
    const playButtonShadow = theme === "dark" ? "shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_24px_72px_rgba(0,0,0,0.6)]" : "shadow-[0_20px_60px_rgba(15,23,42,0.2),0_0_0_1px_rgba(0,0,0,0.05)] group-hover:shadow-[0_24px_72px_rgba(15,23,42,0.25)]";
    if (isPlaying) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-3xl bg-black/90 border " + containerBorder,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        className: "h-full w-full rounded-3xl",
                        src: "https://www.youtube.com/embed/rZnbL_LZSm0?autoplay=1&rel=0",
                        title: "DeepClinic Copilot - Cómo funciona",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero-video.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero-video.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero-video.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero-video.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setIsPlaying(true),
            className: "group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-strong focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-3xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-3xl border transition-shadow duration-300 " + containerBg + " " + containerBorder + " " + shadowClass,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: "/tandem-hero-thumb-16-9_esp.mp4",
                            className: "h-full w-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100",
                            muted: true,
                            loop: true,
                            autoPlay: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-44 w-44 items-center justify-center rounded-full border-[4px] border-brand-accent-strong transition-all duration-300 group-hover:scale-105 " + playButtonOuterBg + " " + playButtonShadow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-colors duration-300 group-hover:bg-slate-800 border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5 shrink-0",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 5v14l11-7z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero-video.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero-video.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        buttonLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero-video.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero-video.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero-video.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero-video.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero-video.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero-video.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero-video.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/consultations-counter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConsultationsCounter": (()=>ConsultationsCounter),
    "HoursSavedCounter": (()=>HoursSavedCounter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
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
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver((entries)=>{
            setInView(entries.some((entry)=>entry.isIntersecting));
        }, {
            threshold
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
function useConsultationsValue(minValue) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getConsultationsStore(minValue), [
        minValue
    ]);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>store.value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        store.start(minValue);
        return store.subscribe(setValue);
    }, [
        minValue,
        store
    ]);
    return value;
}
function useMosaicRevealStep() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getMosaicRevealStore(), []);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>store.step);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>store.subscribe(setStep), [
        store
    ]);
    return {
        step,
        increment: store.increment,
        decrement: store.decrement,
        reset: store.reset
    };
}
function MetricMosaic({ revealStep, extraDoctors, theme = "light" }) {
    const circle = theme === "dark" ? "relative overflow-hidden rounded-full ring-4 ring-black shadow-sm" : "relative overflow-hidden rounded-full ring-4 ring-white shadow-sm";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto h-[320px] w-full max-w-[600px] sm:h-[360px] md:h-[440px] md:max-w-[720px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full w-full grid-cols-12 grid-rows-4 items-center justify-items-center gap-y-8",
            children: slots.map((slot, idx)=>{
                const visible = idx < revealCount;
                const sizes = slot.size.includes("h-16") ? "(min-width: 640px) 80px, 64px" : "(min-width: 640px) 84px, 72px";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: slot.className,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: circle + " " + slot.size + " " + slotClass(visible),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: slot.src,
                            alt: "",
                            fill: true,
                            className: "object-cover",
                            sizes: sizes
                        }, void 0, false, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 408,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 407,
                        columnNumber: 15
                    }, this)
                }, slot.key, false, {
                    fileName: "[project]/src/components/consultations-counter.tsx",
                    lineNumber: 406,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/consultations-counter.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
function MetricSection({ id, nextId, prevId, title, fromValue, toValue, formatValue, subtitle, theme = "light" }) {
    const { ref, inView } = useInViewOnce(0.55);
    const lockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchStartYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { step: revealStep, increment, decrement, reset } = useMosaicRevealStep();
    const settledAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [numberPulse, setNumberPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exitStep, setExitStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isHoursSection = Boolean(prevId) && !nextId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        settledAtRef.current = Date.now() + 500;
        if (isHoursSection) setExitStep(0);
    }, [
        inView,
        isHoursSection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const t = undefined;
    }, [
        revealStep
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const isActive = undefined;
        const jumpTo = undefined;
        const onWheel = undefined;
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: ref,
        className: "relative scroll-mt-24 overflow-hidden transition-colors duration-700 " + (theme === "dark" ? "bg-transparent" : isHoursSection ? "bg-[#fbfff5]" : "bg-white"),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 transition-opacity duration-700 " + (inView ? "opacity-100" : "opacity-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 " + (theme === "dark" ? "hidden" : isHoursSection ? "bg-gradient-to-b from-[#fbfff5] via-white to-white" : "bg-gradient-to-b from-white via-white to-[#fbfff5]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/8 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultations-counter.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consultations-counter.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 transition-[opacity,transform,filter] duration-700 ease-out md:px-8 lg:px-0 " + (inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-extrabold uppercase tracking-[0.32em] " + (theme === "dark" ? "text-white" : "text-slate-900"),
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 sm:h-[620px] sm:w-[620px] " + (inView ? "opacity-90" : "opacity-0"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full bg-[#d5ff7c]/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/28"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/36"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/consultations-counter.tsx",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 block whitespace-nowrap font-display font-normal leading-none tracking-[-0.05em] transition-[filter,opacity,transform] duration-300 sm:tracking-[-0.06em] " + (numberPulse ? "opacity-90 blur-[1px]" : "opacity-100 blur-0") + " " + (theme === "dark" ? "text-white" : "text-slate-900"),
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
                                            lineNumber: 671,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 656,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-8 max-w-md text-[16px] leading-relaxed " + (theme === "dark" ? "text-white/60" : "text-slate-600"),
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consultations-counter.tsx",
                                    lineNumber: 688,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "justify-self-center md:justify-self-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricMosaic, {
                                revealStep: revealStep,
                                extraDoctors: isHoursSection ? exitStep : undefined,
                                theme: theme
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultations-counter.tsx",
                                lineNumber: 699,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/consultations-counter.tsx",
                            lineNumber: 698,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consultations-counter.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/consultations-counter.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 547,
        columnNumber: 5
    }, this);
}
function ConsultationsCounter({ locale, minValue = 181_567, title, subtitle, theme = "light" }) {
    const resolvedLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>resolveNumberLocale(locale), [
        locale
    ]);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        try {
            return new Intl.NumberFormat(resolvedLocale);
        } catch  {
            return new Intl.NumberFormat();
        }
    }, [
        resolvedLocale
    ]);
    const consultations = useConsultationsValue(minValue);
    const formatValue = (value)=>formatWithSpaceGrouping(numberFormatter, value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSection, {
        id: "metric-consultations",
        nextId: "metric-hours",
        title: title,
        fromValue: consultations,
        toValue: consultations,
        formatValue: formatValue,
        subtitle: subtitle,
        theme: theme
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 728,
        columnNumber: 5
    }, this);
}
function HoursSavedCounter({ locale, minValue = 181_567, title, subtitle, theme = "light" }) {
    const resolvedLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>resolveNumberLocale(locale), [
        locale
    ]);
    const numberFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        try {
            return new Intl.NumberFormat(resolvedLocale);
        } catch  {
            return new Intl.NumberFormat();
        }
    }, [
        resolvedLocale
    ]);
    const consultations = useConsultationsValue(minValue);
    const hoursSaved = Math.floor(consultations * 12 / 60);
    const formatValue = (value)=>formatWithSpaceGrouping(numberFormatter, value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSection, {
        id: "metric-hours",
        prevId: "metric-consultations",
        title: title,
        fromValue: hoursSaved,
        toValue: hoursSaved,
        formatValue: formatValue,
        subtitle: subtitle,
        theme: theme
    }, void 0, false, {
        fileName: "[project]/src/components/consultations-counter.tsx",
        lineNumber: 764,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/es/deepclinic/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_467bf8._.js.map