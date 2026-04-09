"use client";

import React, { createContext, useCallback, useEffect, useState } from "react";

export type ThemeName = "atelier" | "ocean" | "forest" | "midnight";
export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeName;
  mode: ThemeMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export const themes: { name: ThemeName; label: string; color: string }[] = [
  { name: "atelier", label: "Atelier", color: "#FF6B35" },
  { name: "ocean", label: "Ocean", color: "#1565C0" },
  { name: "forest", label: "Forest", color: "#2E7D32" },
  { name: "midnight", label: "Midnight", color: "#5E35B1" },
];

const defaultContext: ThemeContextType = {
  theme: "midnight",
  mode: "light",
  setTheme: () => {},
  setMode: () => {},
  toggleMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("atelier");
  const [mode, setModeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("plumbmaster-theme") as ThemeName | null;
      const savedMode = localStorage.getItem("plumbmaster-mode") as ThemeMode | null;
      
      if (savedTheme && themes.some(t => t.name === savedTheme)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeState(savedTheme);
      }
      if (savedMode && (savedMode === "light" || savedMode === "dark")) {
        setModeState(savedMode);
      } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setModeState("dark");
      }
    } catch {
      // localStorage not available (SSR)
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      const html = document.documentElement;
      html.setAttribute("data-theme", theme);
      html.classList.toggle("dark", mode === "dark");
      localStorage.setItem("plumbmaster-theme", theme);
      localStorage.setItem("plumbmaster-mode", mode);
    } catch {
      // document/localStorage not available
    }
  }, [theme, mode, mounted]);

  const setTheme = useCallback((t: ThemeName) => setThemeState(t), []);
  const setMode = useCallback((m: ThemeMode) => setModeState(m), []);
  const toggleMode = useCallback(() => setModeState(prev => (prev === "light" ? "dark" : "light")), []);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
      <div suppressHydrationWarning style={mounted ? undefined : { visibility: "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
