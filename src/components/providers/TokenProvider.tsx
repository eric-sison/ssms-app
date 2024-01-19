"use client";

import { requestToken } from "@/functions/http/request-token";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, ReactNode, createContext } from "react";

type TokenProviderProps = {
  children: ReactNode | ReactNode[];
};

export const TokenContext = createContext<string | undefined>(undefined);

export const TokenProvider: FunctionComponent<TokenProviderProps> = ({ children }) => {
  const { data, isLoading } = useQuery({ queryKey: ["access-token"], queryFn: requestToken });

  if (isLoading) return <>Loading...</>;

  return <TokenContext.Provider value={data?.token}>{children}</TokenContext.Provider>;
};
