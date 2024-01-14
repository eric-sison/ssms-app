"use client";

import { FunctionComponent, ReactNode, Suspense, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDevToolStore } from "@/hooks/zustand/useDevtoolStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const ReactQueryProductionDevTools = dynamic(() =>
  import("@tanstack/react-query-devtools/production").then((devTool) => ({
    default: devTool.ReactQueryDevtools,
  }))
);

type QueryProviderProps = {
  children: ReactNode | ReactNode[];
};

export const QueryProvider: FunctionComponent<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const showDevTools = useDevToolStore((state) => state.showDevTools);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />

      {showDevTools && (
        <Suspense fallback={null}>
          <ReactQueryProductionDevTools />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};
