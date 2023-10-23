"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
function ThemeProvider({ children }) {
  const { mode } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (mounted) {
    return <div className={`theme ${mode}`}>{children}</div>;
  }
}

export default ThemeProvider;
