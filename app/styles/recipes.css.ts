import { recipe } from '@vanilla-extract/recipes';
import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Apply global styles
globalStyle('body', {
  background: `linear-gradient(135deg, ${vars.colors.background.primary}, ${vars.colors.background.secondary})`,
  color: vars.colors.text.primary,
  fontFamily: '"Inter", system-ui, sans-serif',
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
});

globalStyle('::selection', {
  background: vars.colors.accent.primary,
  color: vars.colors.text.primary
});

// Animations
const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const pulse = keyframes({
  '0%, 100%': { opacity: '1' },
  '50%': { opacity: '0.5' }
});

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-10px)' }
});

const glow = keyframes({
  '0%, 100%': { boxShadow: '0 0 5px rgba(255, 0, 128, 0.5)' },
  '50%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.8)' }
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' }
});

export const button = recipe({
  base: {
    padding: `${vars.space.medium} ${vars.space.large}`,
    borderRadius: vars.radii.medium,
    fontWeight: vars.fontWeights.semibold,
    transition: vars.transitions.normal,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.small,
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 7px 14px rgba(0, 0, 0, 0.15)'
    },
    ':active': {
      transform: 'translateY(0)',
      boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)'
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.1)',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    ':hover::after': {
      opacity: 1
    }
  },
  variants: {
    variant: {
      primary: {
        background: `linear-gradient(135deg, ${vars.colors.accent.primary}, ${vars.colors.accent.secondary})`,
        color: vars.colors.text.primary,
        border: 'none',
        ':hover': {
          background: `linear-gradient(135deg, ${vars.colors.accent.hover.primary}, ${vars.colors.accent.hover.secondary})`,
          boxShadow: `0 7px 14px rgba(255, 0, 128, 0.3), 0 0 0 1px ${vars.colors.accent.primary}`
        }
      },
      secondary: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${vars.colors.border.accent}`,
        color: vars.colors.text.primary,
        ':hover': {
          borderColor: vars.colors.accent.primary,
          boxShadow: `0 0 15px rgba(255, 0, 128, 0.3)`
        }
      },
      tertiary: {
        background: 'transparent',
        color: vars.colors.accent.primary,
        border: 'none',
        padding: `${vars.space.small} ${vars.space.medium}`,
        ':hover': {
          color: vars.colors.accent.hover.primary,
          background: 'rgba(255, 0, 128, 0.05)'
        }
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        color: vars.colors.text.primary,
        ':hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    size: {
      small: {
        fontSize: vars.fontSizes.small,
        padding: `${vars.space.small} ${vars.space.medium}`,
        borderRadius: vars.radii.small
      },
      medium: {
        fontSize: vars.fontSizes.base,
        padding: `${vars.space.medium} ${vars.space.large}`,
        borderRadius: vars.radii.medium
      },
      large: {
        fontSize: vars.fontSizes.large,
        padding: `${vars.space.medium} ${vars.space.xlarge}`,
        borderRadius: vars.radii.large
      }
    },
    glow: {
      true: {
        boxShadow: `0 0 10px ${vars.colors.accent.primary}`,
        ':hover': {
          boxShadow: `0 0 20px ${vars.colors.accent.primary}`
        }
      }
    },
    animated: {
      true: {
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 60%, transparent 70%)`,
          backgroundSize: '200% 200%',
          animation: `${shimmer} 3s infinite linear`,
          pointerEvents: 'none'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    glow: false,
    animated: false
  }
});

export const card = recipe({
  base: {
    background: `linear-gradient(135deg, ${vars.colors.background.card}, ${vars.colors.background.tertiary})`,
    borderRadius: vars.radii.large,
    padding: vars.space.large,
    border: `1px solid ${vars.colors.border.primary}`,
    transition: vars.transitions.normal,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: `linear-gradient(90deg, ${vars.colors.accent.primary}, ${vars.colors.accent.secondary})`,
      opacity: 0,
      transition: vars.transitions.normal
    },
    ':hover': {
      borderColor: vars.colors.border.accent,
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      '::before': {
        opacity: 1
      }
    }
  },
  variants: {
    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          transform: 'translateY(-4px)'
        }
      }
    },
    featured: {
      true: {
        border: `1px solid ${vars.colors.accent.primary}30`,
        boxShadow: `0 8px 30px rgba(255, 0, 128, 0.15)`,
        '::before': {
          opacity: 1
        }
      }
    },
    glass: {
      true: {
        background: 'rgba(20, 20, 40, 0.3)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }
    },
    glowing: {
      true: {
        animation: `${glow} 3s infinite ease-in-out`,
        boxShadow: `0 0 15px rgba(255, 0, 128, 0.3)`
      }
    },
    floating: {
      true: {
        animation: `${float} 6s infinite ease-in-out`
      }
    }
  },
  compoundVariants: [
    {
      variants: {
        featured: true,
        glowing: true
      },
      style: {
        boxShadow: `0 8px 30px rgba(255, 0, 128, 0.3)`
      }
    }
  ],
  defaultVariants: {
    interactive: false,
    featured: false,
    glass: false,
    glowing: false,
    floating: false
  }
});

export const container = style({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: `0 ${vars.space.large}`,
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      padding: `0 ${vars.space.medium}`
    }
  }
});

export const glassEffect = style({
  backdropFilter: 'blur(15px)',
  background: vars.colors.background.glass,
  borderBottom: `1px solid ${vars.colors.border.primary}`,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100
});

export const gradientText = style({
  backgroundImage: `linear-gradient(to right, ${vars.colors.accent.primary}, ${vars.colors.accent.secondary})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent'
});

export const animations = {
  rotate: style({
    animation: `${rotate} 20s linear infinite`
  }),
  pulse: style({
    animation: `${pulse} 2s ease-in-out infinite`
  })
};
