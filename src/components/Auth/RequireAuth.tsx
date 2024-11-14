"use client";

import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { LoadingAuth } from "../LoadingAuth.tsx/LoadingAuth";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useContext(
    AuthContext
  ) as AuthContextType;
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (isAuthenticated) return;
    router.push("/");
  }, [isAuthenticated, router, loading]);

  return !isAuthenticated ? <LoadingAuth /> : children;
}
