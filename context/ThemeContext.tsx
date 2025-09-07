"use client";

import { useState, createContext, ReactNode } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }:  ThemeProviderProps) => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
