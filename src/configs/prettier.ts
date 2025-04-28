import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
export const prettierConfig = {
  ...eslintPluginPrettierRecommended,
  rules: {
    "prettier/prettier": "warn",
  },
}

export const prettierConfigStr = `{
  ...eslintPluginPrettierRecommended,
  rules: {
    "prettier/prettier": "warn",
  },
}`
