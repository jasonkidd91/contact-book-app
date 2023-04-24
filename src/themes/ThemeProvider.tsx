import React from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import ThemeContext, { Theme } from './ThemeContext';

import { defaultTheme, darkTheme } from './variables';

// Create the ThemeProvider component
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Function to get theme based on system appearance
    // setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'default');
  }, [colorScheme]);

  // Function to set the current theme
  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  // Function to build theme variables
  const buildTheme = (): any => {
    let themeInUse = defaultTheme;
    if (currentTheme === 'dark') {
      themeInUse = { ...defaultTheme, ...darkTheme };
    }
    return themeInUse;
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme: setTheme,
        buildTheme: buildTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
