import React from "react";
import {themes} from "@storybook/theming";
import type {Preview} from "@storybook/react";

import "./style.css";
import {withStrictModeSwitcher} from "./addons/react-strict-mode";
import { ThemeProvider } from "../src/Theme/ThemeProvider";

const decorators: Preview["decorators"] = [
  (Story, {globals: {locale, disableAnimation}}) => {
    const direction =
      // @ts-ignore
      locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "rtl" : undefined;

    return (
      <>
      <ThemeProvider>
        <div>
          <div className="bg-dark" lang={locale} dir={direction}>
            <Story />
          </div>
        </div>
      </ThemeProvider>
      </>
    );
  },
  ...(process.env.NODE_ENV !== "production" ? [withStrictModeSwitcher] : []),
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
      barBg: "black",
      background: "black",
      appContentBg: "black",
      appBorderRadius: 14,
      // brandImage: "/dark-logo.svg",
    },
    light: {
      ...themes.light,
      ...commonTheme,
      appBorderRadius: 14,
      // brandImage: "/light-logo.svg",
    },
  },
};

const locales = [
  "ar-AE",
  "bg-BG",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "en-US",
  "es-ES",
  "et-EE",
  "fi-FI",
  "fr-FR",
  "he-IL",
  "hr-HR",
  "hu-HU",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "lt-LT",
  "lv-LV",
  "nb-NO",
  "nl-NL",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sl-SI",
  "sr-SP",
  "sv-SE",
  "tr-TR",
  "uk-UA",
  "zh-CN",
  "zh-TW",
];

const globalTypes: Preview["globalTypes"] = {
  locale: {
    toolbar: {
      icon: "globe",
      items: locales.map((locale) => ({
        value: locale,
        title: new Intl.DisplayNames(undefined, {type: "language"}).of(locale),
        // @ts-ignore
        right: new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "Right to Left" : undefined,
      })),
    },
  },
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