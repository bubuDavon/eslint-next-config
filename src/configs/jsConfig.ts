import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";
export const jsConfig = {
  name: "javascript",
  files: ["**/*.js", "**/*.mjs"],
  plugins: {
    js,
    import: importPlugin,
  },
  extends: ["js/recommended"],
  rules: {
    "import/no-unresolved": "error", // 确保导入的模块存在
    "import/order": ["warn", { "newlines-between": "always" }], // 规范 import 顺序
  },
};

export const jsConfigStr = `{
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
`;
