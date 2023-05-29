import { useEffect } from "react";
import { toggleThemeClass } from "../../theme/config";

export const ThemeState = {
  Dark: "dark",
  Light: "light",
  System: "system",
} as const;

export type ThemeState = (typeof ThemeState)[keyof typeof ThemeState];

export const useTheme = (theme?: ThemeState) => {
  const toggleTheme = (theme: ThemeState) => {
    if ([ThemeState.Dark, ThemeState.Light].includes(theme as any)) {
      localStorage.theme = theme;
    } else {
      localStorage.removeItem("theme");
    }
    toggleThemeClass();
  };

  useEffect(() => {
    if (theme) {
      toggleTheme(theme);
    }
  }, []);

  return {
    toggleTheme,
    theme: localStorage.theme || ThemeState.System,
  };
};
