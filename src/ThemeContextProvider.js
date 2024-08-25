// Todo: Create & manage context in this file
import React from 'react'

export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = React.useState('light');
  
  function handleChangeTheme(){
      setTheme((prev) => {
          return prev === 'light' ? 'dark' : 'light';
      })
  }
  
  const ctxValue = {
    theme: theme,
    toggleTheme: handleChangeTheme,
  }
  
  return <ThemeContext.Provider value={ctxValue}>
  {children}
  </ThemeContext.Provider>
}
