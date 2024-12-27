import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { ignores: ["**/dist", "**/coverage"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: { react: { version: "detect" } },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "react-hooks/exhaustive-deps": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
