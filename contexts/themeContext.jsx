import { createContext, useState } from "react";

export const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("isDarkMode");
      return stored !== null ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  );
}
