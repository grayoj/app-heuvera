import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emphasis: "var(--heuvera-bg-emphasis)",
        subtle: "var(--heuvera-bg-subtle)",
        muted: "var(--heuvera-bg-muted)",
        inverted: "var(--heuvera-bg-inverted)",
        info: "var(--heuvera-bg-info)",
        success: "var(--heuvera-bg-success)",
        attention: "var(--heuvera-bg-attention)",
        error: "var(--heuvera-bg-error)",
        darkError: "var(--heuvera-bg-dark-error)",
      },
    },
  },
  plugins: [],
}
export default config
