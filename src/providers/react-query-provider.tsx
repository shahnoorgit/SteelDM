"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const query = new QueryClient();

const ReactQueryProvider = ({ children }: Props) => {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
