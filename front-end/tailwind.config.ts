import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        tall: { raw: "(max-height: 800px)" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config
