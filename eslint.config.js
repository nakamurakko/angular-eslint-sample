// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      // 戻り値の型を明示する。(warn)
      "@typescript-eslint/explicit-function-return-type": "warn",
      // クラスメソッド、プロパティのアクセシビリティを明示する。(warn)
      "@typescript-eslint/explicit-member-accessibility": "warn",
      // 実装が空の関数を許可しない。(off)
      "@typescript-eslint/no-empty-function": "off",
      // 宣言時に初期化された変数は型宣言を許可しない。(off)
      "@typescript-eslint/no-inferrable-types": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  }
]);
