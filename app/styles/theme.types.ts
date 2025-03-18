export type ThemeColors = {
  text: {
    primary: string;
    secondary: string;
    muted: string;
    accent: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    card: string;
    glass: string;
    gradient: {
      start: string;
      end: string;
      accent: string;
    };
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    hover: {
      primary: string;
      secondary: string;
    };
  };
  border: {
    primary: string;
    accent: string;
    glow: string;
  };
};

export type ThemeSpacing = {
  none: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export type ThemeFontSizes = {
  xsmall: string;
  small: string;
  base: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
  display: string;
};

export type ThemeRadii = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  full: string;
};

export type ThemeTransitions = {
  fast: string;
  normal: string;
  slow: string;
};

export type ThemeFontWeights = {
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
};

export type Theme = {
  colors: ThemeColors;
  space: ThemeSpacing;
  fontSizes: ThemeFontSizes;
  fontWeights: ThemeFontWeights;
  radii: ThemeRadii;
  transitions: ThemeTransitions;
};
