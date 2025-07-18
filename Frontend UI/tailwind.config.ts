import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        background: '#0D1117',
        'secondary-bg': '#161B22',
        primary: {
          DEFAULT: '#326CE5',
          foreground: '#F1F5F9',
        },
        accent: {
          DEFAULT: '#0db7ed',
          foreground: '#F1F5F9',
        },
        text: {
          primary: '#F1F5F9',
          muted: '#94A3B8',
        },
        highlight: '#00FFE0',
        success: '#22C5E',
        warning: '#EAB308',
        error: '#EF4444',
        border: '#2C313D',
        input: '#2C313D',
        ring: '#0db7ed',
        card: {
          DEFAULT: '#161B22',
          foreground: '#F1F5F9',
        },
        popover: {
          DEFAULT: '#161B22',
          foreground: '#F1F5F9',
        },
        // Keeping chart colors for now, can adjust later if needed
        chart: {
          '1': '#326CE5', // Using primary blue for a chart color
          '2': '#0db7ed', // Using accent blue for a chart color
          '3': '#22C5E', // Using success green for a chart color
          '4': '#EAB308', // Using warning yellow for a chart color
          '5': '#EF4444', // Using error red for a chart color
        },
      },
      borderRadius: {
        lg: 'var(--radius)',

        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
