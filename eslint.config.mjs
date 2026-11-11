// eslint-config-next 16 fournit directement des configs « flat » :
// les passer à FlatCompat (ancien format) faisait planter ESLint
// (« Converting circular structure to JSON »).
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      // eslint-plugin-react-hooks 7.1 signale en erreur les états initialisés
      // depuis localStorage dans un useEffect (motif voulu, évite un écart
      // d'hydratation SSR). Signalé, mais non bloquant.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    // Scripts Node en CommonJS (lancés à la main, hors application)
    files: ["scripts/**/*.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
]);

export default eslintConfig;
