import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme должен использоваться внутри ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    
    const handleSystemThemeChange = (e) => {
      
      if (localStorage.getItem('theme') === null) {
        setIsDark(e.matches);
      }
    };
    
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};