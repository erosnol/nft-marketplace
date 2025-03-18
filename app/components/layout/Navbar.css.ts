import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const navLink = recipe({
  base: {
    color: vars.colors.text.secondary,
    transition: vars.transitions.normal,
    ':hover': {
      color: vars.colors.text.primary
    }
  }
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.small
});

export const logoIcon = style({
  height: '2rem',
  width: '2rem',
  padding: '0.25rem',
  borderRadius: '9999px',
  border: `2px solid ${vars.colors.accent.primary}`
});

export const logoInner = style({
  height: '100%',
  width: '100%',
  borderRadius: '9999px',
  background: `linear-gradient(to right, ${vars.colors.accent.primary}, ${vars.colors.accent.secondary})`
});
