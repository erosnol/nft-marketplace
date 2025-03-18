import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from './styles/theme.css';

const rippleEffect = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(1.5)',
    opacity: 1
  }
});

const fractalSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg) scale(1)'
  },
  '50%': {
    transform: 'rotate(180deg) scale(1.1)'
  },
  '100%': {
    transform: 'rotate(360deg) scale(1)'
  }
});

export const heroSection = style({
  position: 'relative',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
});

export const heroBackground = style({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to right, ${vars.colors.background.gradient.start}, ${vars.colors.background.gradient.end})`,
  opacity: 0.7
});

export const fractalPattern = style({
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(circle at center, ${vars.colors.accent.primary}10, transparent 60%)`,
  animation: `${fractalSpin} 20s infinite ease-in-out`
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: vars.space.medium
});

export const heroTitle = style({
  fontSize: vars.fontSizes.display,
  fontWeight: 'bold',
  marginBottom: vars.space.large,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSizes.xxlarge
    }
  }
});

export const heroSubtitle = style({
  fontSize: vars.fontSizes.xlarge,
  color: vars.colors.text.secondary,
  maxWidth: '36rem',
  margin: '0 auto',
  marginBottom: vars.space.xlarge,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSizes.large
    }
  }
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.medium,
  justifyContent: 'center',
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'stretch'
    }
  }
});

export const featuredSection = style({
  padding: `${vars.space.xxlarge} 0`
});

export const featuredTitle = style({
  fontSize: vars.fontSizes.xxlarge,
  fontWeight: 'bold',
  marginBottom: vars.space.xlarge
});

export const featuredGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.large,
  '@media': {
    '(max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '(max-width: 640px)': {
      gridTemplateColumns: '1fr'
    }
  }
});

export const nftCard = recipe({
  base: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: vars.radii.large,
    padding: vars.space.medium,
    border: `1px solid ${vars.colors.border.primary}`,
    background: `linear-gradient(to bottom, ${vars.colors.background.secondary}, ${vars.colors.background.primary})`,
    transition: vars.transitions.normal,
    ':hover': {
      borderColor: vars.colors.border.accent,
      transform: 'translateY(-4px)'
    }
  },
  variants: {
    featured: {
      true: {
        borderColor: vars.colors.accent.primary
      }
    }
  }
});
