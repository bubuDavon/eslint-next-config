import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
export const reactConfig = {
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
};

export const reactConfigStr = `{
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
}`;
