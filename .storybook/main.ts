import {dirname, join} from "path";
import remarkGfm from "remark-gfm";
import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    // "./welcome.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],

  addons: [
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

  core: {
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: false,
  },

  // viteFinal: (config) => {
  //   return {
  //     ...config,
  //     base: '/effective-ui/',
  //   };
  // },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default config;