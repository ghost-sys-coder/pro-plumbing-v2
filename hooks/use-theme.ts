"use client";

import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "@/components/theme-provider";

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
