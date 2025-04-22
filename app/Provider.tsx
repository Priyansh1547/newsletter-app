"use client";

import { Provider as JotaiProvider } from "jotai";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};
