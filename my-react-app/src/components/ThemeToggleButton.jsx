import { useTheme } from "../context/ThemeContext";

export const ThemeToggleButton = () => {
    const { isDark, toggleTheme } = useTheme();
    
    return (
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-button"
      >
        {isDark ? '☀️ Светлая тема' : '🌙 Темная тема'}
      </button>
    );
};