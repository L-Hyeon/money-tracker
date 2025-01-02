import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "no-plusplus": "off",
      "no-shadow": "off",
      "vars-on-top": "off",
      "no-underscore-dangle": "off", // var _foo;
      "comma-dangle": "off",
      "func-names": "off", // setTimeout(function () {}, 0);
      "prefer-template": "off",
      "no-nested-ternary": "off",
      "max-classes-per-file": "off",
      "consistent-return": "off",
      "no-restricted-syntax": ["off", "ForOfStatement"], // disallow specified syntax(ex. WithStatement)
      "prefer-arrow-callback": "error", // Require using arrow functions for callbacks
      "require-await": "error",
      "arrow-parens": ["error", "as-needed"], // a => {}
      "no-param-reassign": ["error", { props: false }],
      "no-unused-expressions": [
        "error",
        {
          allowTernary: true, // a || b
          allowShortCircuit: true, // a ? b : 0
          allowTaggedTemplates: true,
        },
      ],
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ], // prettier의 printWidth 옵션 대신 사용
    },
  }
);
