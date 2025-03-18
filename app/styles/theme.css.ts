import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    background: {
      primary: '#111827', // Dark slate gray
      secondary: '#1F2937', // Darker slate gray
      tertiary: '#374151', // Medium slate gray
      card: '#1E293B', // Dark blue-gray
      glass: 'rgba(17, 24, 39, 0.8)', // Glass effect background
      gradient: {
        start: '#111827',
        end: '#0F172A',
        accent: '#1E293B'
      }
    },
    accent: {
      primary: '#64748B', // Slate gray
      secondary: '#475569', // Darker slate
      tertiary: '#334155', // Deep slate
      quaternary: '#0F766E', // Teal
      hover: {
        primary: '#94A3B8',
        secondary: '#64748B'
      }
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#E2E8F0',
      muted: '#94A3B8',
      accent: '#CBD5E1'
    },
    border: {
      primary: 'rgba(203, 213, 225, 0.1)',
      accent: 'rgba(100, 116, 139, 0.3)',
      glow: '0 0 10px rgba(100, 116, 139, 0.2)'
    }
  },
  space: {
    none: '0',
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '4rem',
    xxxlarge: '8rem'
  },
  fontSizes: {
    xsmall: '0.75rem',
    small: '0.875rem',
    base: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2.25rem',
    xxxlarge: '3rem',
    display: '5rem'
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },
  radii: {
    xsmall: '0.125rem',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    xlarge: '1.5rem',
    full: '9999px'
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease'
  }
});
