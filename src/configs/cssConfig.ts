import css from "@eslint/css";
export const cssConfig = {
  name: "css",
  files: ["**/*.css", "**/*.less", "**/*.scss"],
  plugins: {
    css,
  },
  language: "css/css",
  rules: {
    ...css.configs.recommended.rules,
  },
}

export const cssConfigStr = `{
  name: "css",
  files: ["**/*.css", "**/*.less", "**/*.scss"],
  plugins: {
    css,
  },
  language: "css/css",
  rules: {
    ...css.configs.recommended.rules,
  },
}`
