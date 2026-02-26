import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
    {
        rules: {
            "no-console": "error",
            "no-debugger": "error",
            "no-var": "error",
            "prefer-const": "error",
            "eqeqeq": ["error", "always"],
            "no-empty-function": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/anchor-is-valid": "error",
            "import/order": ["error", {
                "groups": [
                    "type",
                    ["builtin", "external"],
                    "internal",
                    ["parent", "sibling", "index"],
                ],
                "pathGroups": [
                    {
                        "pattern": "@components/**",
                        "group": "internal",
                        "position": "after",
                    },
                    {
                        "pattern": "@styles/**",
                        "group": "index",
                        "position": "after",
                    },
                ],
                "pathGroupsExcludedImportTypes": ["builtin"],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true,
                },
                "warnOnUnassignedImports": false,
            }],
            "import/no-unresolved": "error",
            "import/no-duplicates": "error",
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "indent": ["error", 4],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "arrow-parens": ["error", "always"],
        },
    },
]);

export default eslintConfig;
