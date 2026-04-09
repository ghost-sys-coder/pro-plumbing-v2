"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Sun, Moon, Check } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { themes } from "@/components/theme-provider";

export function ThemeSwitcher() {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-56 rounded-2xl bg-card ambient-shadow p-4 ghost-border"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Theme
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setTheme(t.name)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium transition-all ${
                    theme === t.name
                      ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full shrink-0 ring-1 ring-black/10"
                    style={{ backgroundColor: t.color }}
                  />
                  {t.label}
                  {theme === t.name && <Check className="h-3 w-3 ml-auto" />}
                </button>
              ))}
            </div>

            <div className="border-t border-border pt-3">
              <button
                onClick={toggleMode}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium hover:bg-muted transition-all text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  {mode === "light" ? (
                    <Sun className="h-3.5 w-3.5" />
                  ) : (
                    <Moon className="h-3.5 w-3.5" />
                  )}
                  {mode === "light" ? "Light Mode" : "Dark Mode"}
                </span>
                <div
                  className={`w-8 h-4.5 rounded-full relative transition-colors ${
                    mode === "dark" ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                >
                  <motion.div
                    className="absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white shadow-sm"
                    animate={{ left: mode === "dark" ? "calc(100% - 16px)" : "2px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-12 w-12 items-center justify-center rounded-full ambient-shadow transition-colors ${
          isOpen
            ? "bg-primary text-primary-foreground"
            : "bg-card text-muted-foreground hover:text-foreground ghost-border"
        }`}
        aria-label="Theme settings"
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          <Settings className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </div>
  );
}
