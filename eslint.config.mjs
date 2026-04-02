import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
    },
  },
];
