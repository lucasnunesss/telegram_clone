"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NoSSR from "react-no-ssr";

export function ThemeProvider(props) {
  const { children, ...rest } = props;

  return <NextThemesProvider {...rest}>
    <NoSSR>
      {children}
    </NoSSR>
  </NextThemesProvider>;
}
