import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ThemeContext from './ThemeContext';
import { ThemeVariables } from '../types/theme';

// Create the useTheme hook to access theme variables
const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return { ...themeContext, ...themeContext.buildTheme() };
};

// Function to wrap the StyleSheet.create to use theme variables
const createThemedStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  stylesCreator: (theme: ThemeVariables) => T,
) => {
  return () => {
    const theme = useTheme();
    return StyleSheet.create<T>(stylesCreator(theme));
  };
};

export { useTheme, createThemedStyles };
