import { DefaultTheme } from '@react-navigation/native';
import { ThemeVariables } from '../../types/theme';

// Default Light Theme Variables
const theme: ThemeVariables = {
  navigationTheme: {
    ...DefaultTheme,
  },
  colors: {
    primary: '#2196F3',
    secondary: '#666666',
    accent: '#FFC107',
    background: '#FFFFFF',
    text: '#000000',
    placeholder: '#F5F5F5',
    success: '#4CAF50',
    error: '#FF3B30',
    shadow: '#e0e0e0',
    dark: '#333333',
    light: '#FFFFFF',
  },
  fontSize: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
      color: '#000000',
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      color: '#000000',
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold',
      color: '#000000',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: '#000000',
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      color: '#666',
    },
  },
};

export default theme;
