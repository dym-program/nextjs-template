import React, {ReactNode ,createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;  // 指定 children 的类型为 ReactNode
  }
  

export  function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');

    const toggleTheme= () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
}