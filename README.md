# eslint-next-config
eslint-next-config
🚀 Quickly generate ESLint configurations tailored for Next.js projects, based on ESLint Flat Config.
This tool helps you seamlessly integrate standardized ESLint setups into your Next.js or modern web projects.

# Features
✨ Supports the latest ESLint Flat Config format

⚡ One-click generation for ready-to-use setups

🧩 Integrates TypeScript / React / Next.js / Prettier easily

🔥 Zero-config startup, perfect for modern frontend development

# Quick Start
## Using pnpm dlx
You can run the generator instantly without installing anything:

`pnpm dlx eslint-next-config`


The CLI will guide you through selecting features like Next.js, TypeScript, Prettier, and React.
It will then generate a fully configured:

eslint.config.mjs
## Importing as a dependency
You can also use it programmatically inside your eslint.config.mjs:

```javascript
// eslint.config.mjs
import eslintConfigGenerator from 'eslint-next-config';

export default eslintConfigGenerator();
```


# Use Cases
Quickly setting up ESLint for a new Next.js project

Migrating to the Flat Config format

Integrating TypeScript / React / Prettier rules seamlessly

Keeping your ESLint configuration clean, modular, and lightweight

# License
MIT

