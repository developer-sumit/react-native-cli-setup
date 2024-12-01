#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */

import prompts from "./src/prompts";
import retry from "./src/helpers/retry";
import createReactNative from "./react-native-lab";
import { installJDK, installAndroidStudio } from "./src/install";

/** Main setup function */
async function setup() {
  const prompt = await prompts();

  if (prompt.installJDK) {
    await retry(installJDK);
  }

  if (prompt.installAndroidStudio) {
    await retry(installAndroidStudio);
  }

  // Create the React Native project with user inputs
  await createReactNative({
    appPath: prompt.projectName,
    packageManager: prompt.packageManager,
    srcDir: prompt.srcDir,
    envEnabled: prompt.envEnabled,
    template: prompt.template,
    disableGit: prompt.disableGit,
    skipInstall: false,
  });
}

// Run the setup function
setup().catch((error) => {
  console.error("Setup failed:", error);
  process.exit(1);
});