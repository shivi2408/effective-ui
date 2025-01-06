// import type { StorybookConfig } from "@storybook/react-vite";

// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-onboarding",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
// };
// export default config;

import {dirname, join} from "path";
import remarkGfm from "remark-gfm";
import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("storybook-dark-mode"),
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "./addons/react-strict-mode/register",
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  // core: {
  //   disableTelemetry: true,
  // },

  // typescript: {
  //   reactDocgen: false,
  // },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default config;