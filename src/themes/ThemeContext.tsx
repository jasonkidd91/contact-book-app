import { createContext } from 'react';
import { ThemeVariables } from '../types/theme';

// Define the Theme type
export type Theme = 'default' | 'dark';

// Define the ThemeContextValue interface
export interface ThemeContextValue {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
  buildTheme: () => ThemeVariables;
}

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextValue | null>(null);

export default ThemeContext;
