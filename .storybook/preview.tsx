import React from "react";
import {themes} from "@storybook/theming";
import type {Preview} from "@storybook/react";

import "./style.css";
import {withStrictModeSwitcher} from "./addons/react-strict-mode";
import { ThemeProvider } from "./addons/Theme/ThemeProvider";

const decorators: Preview["decorators"] = [
  (Story, {globals: {disableAnimation}}) => {
    return (
      <>
      <ThemeProvider>
            <Story />
      </ThemeProvider>
      </>
    );
  },
  ...(process.env.NODE_ENV !== "production" ? [withStrictModeSwitcher] : [withStrictModeSwitcher]),
];

const commonTheme = {
  brandTitle: "Effective UI",
  brandUrl: "https://shivi2408.github.io/effective-ui/",
  brandTarget: "_self",
};

const parameters: Preview["parameters"] = {
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Foundations", "Components"],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "dark",
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    dark: {
      ...themes.dark,
      ...commonTheme,
      appBg: "#161616",
      barBg: "#161616",
      appContentBg: "#161616",
      appBorderRadius: 12,
      // brandImage: 'dark-logo.svg',
    },
    light: {
      ...themes.light,
      ...commonTheme,
      appBg: "#f6f9fc",
      barBg: "#f6f9fc",
      appContentBg: "#f6f9fc",
      appBorderRadius: 12,
      // brandImage: "-light-logo.svg",
    },
  },
};

const globalTypes: Preview["globalTypes"] = {
  disableAnimation: {
    name: "Disable Animation",
    description: "Disable all animations in the stories",
    toolbar: {
      icon: "photodrag",
      items: [
        {value: true, title: "True"},
        {value: false, title: "False"},
      ],
    },
  },
};

const preview: Preview = {
  decorators,
  parameters,
  globalTypes,
  tags: ["autodocs"],
};

export default preview;