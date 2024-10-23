import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './test_useContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
        <button onClick={toggleTheme}>swtich_theme: {theme}</button>
    </div>
  );
}

export default ThemeToggler;
