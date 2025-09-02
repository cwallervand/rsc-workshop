import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", ...fontFamily.sans],
        heading: ["var(--font-gochi-hand)", "cursive"]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        ['kantega-purple']: '#27003d',
        ['kantega-purple-dark']: '#150023',
        ['kantega-purple-light']: '#36015b',
        ['kantega-red']: '#ee3a64',
        ['kantega-red-dark']: '#d3335e',
        ['kantega-red-light']: '#ff507e',
        ['kantega-blue']: '#19254F',
        ['kantega-blue-dark']: '#111B38',
        ['kantega-blue-light']: '#2B4172',
        ['kantega-teal']: '#028EA7',
        ['kantega-teal-dark']: '#027C92',
        ['kantega-teal-light']: '#06B3C6',
        ['kantega-white']: '#FFF8FC',
        ['kantega-white-dark']: '#F5E3ED',
        ['kantega-white-light']: '#FFFBFD',
        ['kantega-yellow']: '#F49727',
        ['kantega-yellow-dark']: '#DA7D0B',
        ['kantega-yellow-light']: '#F6A94C',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
