import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export const tsConfig = {
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
};

export const tsConfigStr = `
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
}`;
