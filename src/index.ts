import { defineConfig } from "eslint/config";

import * as configs from "./configs/index";
import { ignorePaths } from "./common";

export default function () {
  const config = [
    {
      ignores: ignorePaths,
    },
  ];
  for (const [configName, configItem] of Object.entries(configs)) {
    if (configName.endsWith("Str")) continue;
    config.push(configItem);
  }


  return defineConfig(config);
}
