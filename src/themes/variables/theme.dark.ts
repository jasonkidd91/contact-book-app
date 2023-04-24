import { DarkTheme } from '@react-navigation/native';
import { ThemeVariables } from '../../types/theme';

// Dark Theme Overriding Variables
const theme: Partial<ThemeVariables> = {
  navigationTheme: {
    ...DarkTheme,
  },
  colors: {
    primary: '#2196F3',
    secondary: '#607D8B',
    accent: '#FFC107',
    background: '#303030',
    text: '#FFFFFF',
    placeholder: '#B0BEC5',
    success: '#4CAF50',
    error: '#FF3B30',
    shadow: '#000000',
    dark: '#000000',
    light: '#FFFFFF',
  },
};

export default theme;
