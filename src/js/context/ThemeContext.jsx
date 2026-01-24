import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({theme: 'light', setTheme: () => {}});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

   useEffect(() => {
    document.body.className = theme;
   }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

    //  const body = document.querySelector('body');
    //  if (theme === 'dark') {
    //    body.classList.add('dark');
    //  } else {
    //    body.classList.remove('dark');
    // }