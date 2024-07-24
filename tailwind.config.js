/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '320px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px', 'max': '1399px'},
      '2xl': {'min': '1400px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#1D1D1D',
      'white': '#ffffff',
      'engineering': {
        100: '#F7F7F7',
        200: '#EEEDED',
        300: '#BFBBBB',
        400: '#8D8786',
        500: '#575352',
        600: '#3C3A39',
      },
      'ocean': {
        100: '#DFF4F3',
        200: '#B8DEDA',
        300: '#6CB4AD',
        400: '#3B9B91',
        500: '#0A8276',
        600: '#08665C',
        700: '#06534B',
      },
      'red': {
        500: '#CD002F',
        600: '#A2001E',
        700: '#900021',
      },
      'orange': {
        500: '#E16B25',
      },
      'green': {
        500: '#4CA460',
      },
      'lawn': {
        500: '#9BBA43',
        700: '#3C6C0F',
      },
      'berry': {
        400: '#BE3283',
        500: '#9C216E',
      },
      'sun': {
        400: '#FF9737',
        500: '#F97414',
      },
      'sand': {
        400: '#FBE273',
        500: '#FCD442',
      },
      'overlay-light': '#FFFFFF33',
      'overlay-dark': '#1D1D1D33',
    },
    boxShadow: {
      'none': '0 0 #0000',
      DEFAULT: '0 0 12px 0 #1D1D1D1F, 0 0 1px 0 #1D1D1D1F',
      'small': '0 4px 8px 0 #1D1D1D1F, 0 0 1px 0 #1D1D1D1F',
      'large': '0 4px 16px 0 #1D1D1D1F, 0 0 1px 0 #1D1D1D1F',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '1px',
      '25': '2px',
      '50': '4px',
      '100': '8px',
      '200': '16px',
      'full': '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
    },
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans-serif']
    },
    fontSize: {
      'display-01': ['4.25rem', {
        lineHeight: '4.75rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'display-02': ['3.5rem', {
        lineHeight: '4rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'display-03': ['3rem', {
        lineHeight: '3,75rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-01': ['2.75rem', {
        lineHeight: '3.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-01': ['2rem', {
        lineHeight: '2.75rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-02': ['2.25rem', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-02': ['1.75rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-03': ['1.75rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-03': ['1.375rem', {
        lineHeight: '1.875rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-04': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-04': ['1.25rem', {
        lineHeight: '1.75rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-05': ['1.25rem', {
        lineHeight: '1.75rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-05': ['1.125rem', {
        lineHeight: '1.625rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-06': ['1.125rem', {
        lineHeight: '1.625rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'heading-compact-06': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'eyebrow-01': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.02em',
        fontWeight: '600',
      }],
      'eyebrow-02': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0.02em',
        fontWeight: '600',
      }],
      'eyebrow-03': ['0.625rem', {
        lineHeight: '0.875rem',
        letterSpacing: '0.02em',
        fontWeight: '600',
      }],
      'body-01': ['1.375rem', {
        lineHeight: '1.875rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-02': ['1.125rem', {
        lineHeight: '1.625rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-underline-02': ['1.125rem', {
        lineHeight: '1.625rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-02': ['1.125rem', {
        lineHeight: '1.625rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-03': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-03': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-underline-03': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-underline-03': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-04': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-04': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-underline-04': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-underline-04': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-05': ['0.75rem', {
        lineHeight: '1rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      'body-semibold-05': ['0.75rem', {
        lineHeight: '1rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      'body-06': ['0.625rem', {
        lineHeight: '0.875rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
    }
  },
  plugins: [],
}
