import { useState } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return { dark, toggleTheme };
};
