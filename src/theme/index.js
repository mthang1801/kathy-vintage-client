import React, { useState, useEffect, createContext, useContext } from 'react';
import { getFromLS, setToLS } from '../utils/storage';

const defaultState = { theme: {}, colorMode: '', setColorMode: () => {} };
export const ThemeContext = createContext(defaultState);
export const ThemeProvider = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    theme.modes[theme.initialColorModeName]
  );
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [mode, setMode] = useState(theme.initialColorModeName || 'light');
  useEffect(() => {
    const localTheme = getFromLS('tn-theme');

    if (localTheme) {
      setCurrentTheme(localTheme);
      setMode(localTheme.name);
    }
    setThemeLoaded(true);
  }, []);

  const setColorMode = (mode) => {
    //mode in here is light or dark or other colors name
    setCurrentTheme(theme.modes[mode]);
    setToLS('tn-theme', theme.modes[mode]);
    setMode(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setColorMode,
        colorMode: mode,
        themes: theme.modes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return [colorMode, setColorMode];
};

export const useTheme = () => {
  const { theme, colorMode, setColorMode, themes } = useContext(ThemeContext);
  return { theme, colorMode, setColorMode, themes };
};
