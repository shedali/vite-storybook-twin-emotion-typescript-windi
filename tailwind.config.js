/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  darkMode: "class",
  mode: "jit",
  extract: {
    include: ["./**/*.tsx"],
  },
  content: ["./index.html", "./src/main.tsx", "./src/**/*.tsx"], //https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  theme: {
    colors: {
      neutral: {
        30: "hsla(0, 0%, 11%, 1)",
        40: `hsla(0, 0%, 14%, 1)`,
        base: `hsla(0, 0%, 30%, 1)`,
        60: `hsla(0, 0%, 50%, 1)`,
        70: "hsla(0, 0%, 70%, 1)",
        80: "hsla(0, 0%, 90%, 1)",
        dark: "hsla(241, 37%, 12%, 1)",
      },
      tertiary: {
        40: "hsla(197, 29%, 29%, 1)",
        base: "hsla(178, 39%, 40%, 1)",
        60: "hsla(160, 21%, 56%, 1)",
        70: "hsla(152, 21%, 74%, 1)",
        80: "hsla(151, 21%, 84%, 1)",
      },
      primary: {
        10: "hsla(227, 100%, 60%, 0)",
        20: "hsla(227, 100%, 60%, 0.2)",
        40: "hsla(227, 100%, 40%, 1)",
        base: "hsla(227, 100%, 60%, 1)",
        60: "hsla(223, 100%, 70%, 1)",
        70: "hsla(224, 57%, 91%, 1)",
        80: "hsla(225, 57%, 97%, 1)",
        77: "hsla(225, 77%, 20%, 1)",
      },
      secondary: {
        40: "hsla(237, 24%, 18%, 1)",
        base: "hsla(223, 35%, 25%, 1)",
        60: "hsla(210, 39%, 31%, 1)",
        70: "hsla(210, 39%, 41%, 1)",
        80: "hsla(210, 39%, 51%, 1)",
      },
      surface: {
        40: "hsla(30, 20%, 72%, 1)",
        base: "hsla(30, 20%, 82%, 1)",
        60: "hsla(33, 19%, 91%, 1)",
        70: "rgb(242, 241, 239)",
        80: "hsla(0, 11%, 98%, 1)",
      },
      onsurface: {
        40: "hsla(30, 33%, 41%, 1)",
        base: "hsla(30, 33%, 51%, 1)",
        50: "hsla(36, 69%, 76%, 1)",
        60: "hsla(29, 33%, 66%, 1)",
        70: "hsla(31, 33%, 75%, 1)",
        80: "hsla(30, 32%, 85%, 1)",
      },
      accent: {
        40: "hsla(333, 30%, 29%, 1)",
        base: "hsla(2, 66%, 66%, 1)",
        60: "hsla(2, 66%, 76%, 1)",
        70: "hsla(11, 55%, 80%, 1)",
        80: "hsla(346, 60%, 86%, 1)",
      },
      success: "hsla(152, 61%, 30%, 1)",
      negative: "hsla(0, 100%, 42%, 1)",
      warning: "hsla(36, 100%, 50%, 1)",
      buy: "hsla(227, 100%, 60%, 1)",
      sell: "hsla(40, 10%, 94%, 1)",
      priceUp: {
        40: "hsla(152, 70%, 26%, 0)",
        base: "hsla(152, 70%, 26%, 1)",
        60: "hsla(152, 70%, 26%, 0.2)",
      },
      priceDown: {
        40: "hsla(12, 100%, 56%, 0)",
        base: "hsla(12, 100%, 56%, 1)",
        60: "hsla(12, 100%, 56%, 0.2)",
      },
      light: "#FFFFFF",
      dark: "#000000",
    },
    spacing: {
      auto: "auto",
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "96px",
      10: "128px",
      11: "256px",
      "1/10": "10%",
    },
    borderRadius: (theme) => ({
      DEFAULT: theme("spacing.1"),
      "10p": "10px",
      iPhoneRadius: "34px",
    }),
    borderWidth: {
      3: "3px",
    },
    boxShadow: (theme) => ({
      DEFAULT: `0px 0px 20px -10px ${theme("colors.dark")}`,
      error: `0px 0px 20px -10px ${theme("colors.error")}`,
      card: "0px 0px 19px -10px #8D99AE",
    }),
    gridTemplateColumns: {
      message: "14px auto auto",
    },
    width: {
      fit: "fit-content",
      "2/6": "33.3%",
      pwaScreen: "600px",
    },
    height: {
      fit: "fit-content",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      pwaScreen: "600px",
    },
    maxHeight: {
      "screen-95": "95vh",
      "screen-98": "98vh",
    },
    zIndex: {
      "-10": "-10",
    },
    flex: {
      2: "2 2 0%",
      3: "3 3 0%",
    },
    minHeight: {
      5: "24px",
      screen: "100vh",
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    //https://daisyui.com/docs/config/
    styled: false,
    themes: [
      {
        mytheme: {
          primary: "hsla(227, 100%, 60%)",
          secondary: "#463AA1",
          tertiary: "hsla(227, 100%, 60%)",
          neutral: "hsla(0, 0%, 30%)",
          surface: "hsla(30, 20%, 82%)",
          accent: "hsla(2, 66%, 66%)",
          success: "hsla(152, 61%, 30%)",
          negative: "hsla(0, 100%, 42%)",
          warning: "hsla(36, 100%, 50%)",
          error: "#E58B8B",
          buy: "hsla(227, 100%, 60%)",
          sell: "hsla(40, 10%, 94%)",
          light: "#FFFFFF",
          dark: "#000000",
        },
      },
    ],
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
