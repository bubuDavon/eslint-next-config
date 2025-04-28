import fs from "fs";
import { execSync } from "child_process";
import inquirer from "inquirer";
import * as configsTemplates from "../configs";
import { ignorePaths } from "../common";

async function main() {


  async function askQuestions() {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "useTypeScript",
        message: "Do you want to use a TypeScript eslint configuration?",
        default: true,
      },
      {
        type: "confirm",
        name: "useCSS",
        message: "Do you want to use a css eslint configuration?",
        default: true,
      },
      {
        type: "confirm",
        name: "usePrettier",
        message: "Do you want to integrate Prettier?",
        default: true,
      },
      {
        type: "list",
        name: "packageManager",
        message: "Choose your package manager",
        choices: ["pnpm", "npm", "yarn"],
        default: "pnpm",
      },
      {
        type: "confirm",
        name: "useNext",
        message: "Do you want to use a Next.js eslint configuration?",
        default: true,
      },
    ]);

    if (!answers.useNext) {
      const reactAnswer = await inquirer.prompt([
        {
          type: "confirm",
          name: "useReact",
          message: "Do you want to use react eslint config?",
          default: true,
        },
      ]);

      answers.useReact = reactAnswer.useReact;
    }

    if (answers.useReact) {
      const reactHooksAnswer = await inquirer.prompt([
        {
          type: "confirm",
          name: "useReactHooks",
          message: "Do you want to use react hooks eslint config?",
          default: true,
        },
      ]);

      answers.useReactHooks = reactHooksAnswer.useReactHooks;
    }
    console.log(answers);
   return answers;
  }

  const answers = await askQuestions();

  const imports = [];
  const dependencies = ["eslint"];
  const templates = [configsTemplates.jsConfigStr];

  // js
  imports.push(`import { defineConfig } from "eslint/config";`);
  imports.push(`import js from "@eslint/js";`);
  imports.push(`import importPlugin from "eslint-plugin-import";`);
  dependencies.push("@eslint/js", "eslint-plugin-import");

  const featureConfigs = [
    {
      condition: answers.useNext,
      imports: [`import nextPlugin from "@next/eslint-plugin-next";`],
      dependencies: ["@next/eslint-plugin-next"],
      templates: [configsTemplates.nextConfigStr],
    },
    {
      condition: answers.useTypeScript,
      imports: [
        `import pluginTs from "@typescript-eslint/eslint-plugin";`,
        `import parserTs from "@typescript-eslint/parser";`,
      ],
      dependencies: [
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
      ],
      templates: [configsTemplates.tsConfigStr],
    },
    {
      condition: answers.useReact || answers.useNext,
      imports: [
        `import reactPlugin from "eslint-plugin-react";`,
        answers.useReactHooks || answers.useNext
          ? `import reactHooks from "eslint-plugin-react-hooks";`
          : "",
      ],
      dependencies: [
        "eslint-plugin-react",
        answers.useReactHooks || answers.useNext ? "eslint-plugin-react-hooks" : "",
      ],
      templates: [configsTemplates.reactConfigStr(answers.useReactHooks || answers.useNext)],
    },
    {
      condition: answers.usePrettier,
      imports: [
        `import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";`,
      ],
      dependencies: ["eslint-plugin-prettier", "prettier"],
      templates: [configsTemplates.prettierConfigStr],
    },
    {
      condition: answers.useCSS,
      imports: [`import css from "@eslint/css";`],
      dependencies: ["@eslint/css"],
      templates: [configsTemplates.cssConfigStr],
    },
  ];

  for (const feature of featureConfigs) {
    if (feature.condition) {
      imports.push(...feature.imports.filter((v) => Boolean(v)));
      dependencies.push(...feature.dependencies.filter((v) => Boolean(v)));
      templates.push(...feature.templates);
    }
  }

  const finalConfig = `
${imports.join("\n")}

const config = [
  {
    ignores: ${JSON.stringify(ignorePaths)},
  }, 
  ${templates.join(",\n")}
];
export default defineConfig(config);`;

  //  eslint.config.mjs
  fs.writeFileSync("eslint.config.mjs", finalConfig);
  console.log("✅ generated eslint.config.mjs ！");
  if (answers.usePrettier) {
    fs.writeFileSync(
      ".prettierrc",
      `{
      "semi": false,
      "singleQuote": false,
      "trailingComma": "all"
    }`
    );
    console.log("✅ generated .prettierrc！");
  }
  // install dependencies
  console.log("📦 installing dependencies...");
  const installCommand = {
    pnpm: `pnpm add -D ${dependencies.join(" ")}`,
    npm: `npm install -D ${dependencies.join(" ")}`,
    yarn: `yarn add -D ${dependencies.join(" ")}`,
  }[answers.packageManager];

  try {
    execSync(installCommand, { stdio: "inherit" });
    console.log("🎉 installed dependencies");
  } catch (error) {
    console.error(
      "❌ installed failed, do it manually:",
      dependencies.join(" ")
    );
  }
}

main();
