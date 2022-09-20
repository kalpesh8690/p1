import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './context';
import '../App.css'

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  React.useLayoutEffect(() => {
    if (prefersDark) {
      setTheme(themes.dark);
    }

}, [prefersDark]);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark-content');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}