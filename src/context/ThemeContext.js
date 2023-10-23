"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "dark";
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
