import { TextStyle } from 'react-native';
import { Theme } from '@react-navigation/native';

// Colors
export type Colors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  placeholder: string;
  success: string;
  error: string;
  shadow: string;
  dark: string;
  light: string;
};

// Gutters Spacing
export type Spacing = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

// Font Size
export type FontSize = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

// Typography
export type Typography = {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  caption: TextStyle;
};

// Core Theme Variables Applied Across System
export type ThemeVariables = {
  navigationTheme: Theme;
  colors: Colors;
  spacing: Spacing;
  fontSize: FontSize;
  typography: Typography;
};
