import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline-block', 'grid'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: ['100%', 'auto', '50%'],
    height: ['100%', 'auto', '100vh'],
    borderRadius: vars.radii,
    fontSize: vars.fontSizes,
    textAlign: ['left', 'center', 'right']
  }
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'darkMode',
  properties: {
    color: {
      primary: vars.colors.text.primary,
      secondary: vars.colors.text.secondary,
      muted: vars.colors.text.muted
    },
    background: {
      primary: vars.colors.background.primary,
      secondary: vars.colors.background.secondary,
      transparent: 'transparent'
    },
    borderColor: {
      primary: vars.colors.border.primary,
      accent: vars.colors.border.accent
    }
  },
  shorthands: {
    bg: ['background'],
    bc: ['borderColor']
  }
});

export const atoms = createSprinkles(responsiveProperties, colorProperties);
