"use client";

import React from "react";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export function ThemesProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
