import nextPlugin from "@next/eslint-plugin-next";
export const nextConfig = {
  name: "next",
  files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
}
export const nextConfigStr = `{
  name: "next",
  files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
}`

