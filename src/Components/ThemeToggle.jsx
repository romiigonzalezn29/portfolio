import React from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./Layout.module.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      {isDark ? <FiSun /> : <FiMoon />}
      <span>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
    </button>
  );
};

export default ThemeToggle;