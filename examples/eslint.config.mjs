import { defineConfig } from "eslint/config"
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import nextPlugin from "@next/eslint-plugin-next";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import css from "@eslint/css";


const config = [{
  name: "javascript",
  files: ["**/*.js", "**/*.mjs"],
  plugins: {
    js,
    import: importPlugin,
  },
  extends: ["js/recommended"],
  rules: {
    "import/no-unresolved": "error", 
    "import/order": ["warn", { "newlines-between": "always" }], // 规范 import 顺序
  },
}
,
{
  name: "next",
  files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
},

{
  name: "typescript-and-react",
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
  plugins: {
    "@typescript-eslint": pluginTs,
    import: importPlugin,
  },
  rules: {
    ...pluginTs.configs.recommended.rules,
    "import/no-unresolved": "error", // 确保导入的模块存在
    "import/order": ["warn", { "newlines-between": "always" }], // 规范 import 顺序
  },
},
{
  name: "jsx-tsx",
  files: ["**/*.jsx", "**/*.tsx", "**/*.js", "**/*.ts"],
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooks,
  },
  rules: {
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat["jsx-runtime"].rules,
    ...reactHooks.configs["recommended-latest"].rules,
  },
  languageOptions: reactPlugin.configs.flat.recommended.languageOptions,
  settings: {
    react: {
      version: "detect", // 自动检测 React 版本
    },
  },
},
{
  ...eslintPluginPrettierRecommended,
  rules: {
    "prettier/prettier": "warn",
  },
},
{
  name: "css",
  files: ["**/*.css", "**/*.less", "**/*.scss"],
  plugins: {
    css,
  },
  language: "css/css",
  rules: {
    ...css.configs.recommended.rules,
  },
}];
export default defineConfig(config)
  