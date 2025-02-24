"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  prefetchUserProfile,
  prefetchUserAutomations,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const queryClient = new QueryClient();

const Layout = ({ children, params: { slug } }: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      await prefetchUserProfile(queryClient);
      await prefetchUserAutomations(queryClient);
    };
    fetchData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-3">
        <Sidebar slug={slug} />
        <div className="lg:ml-[270px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <Navbar slug={slug} />
          {children}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
