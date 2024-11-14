"use client";
import SearchBar from "@/app/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { ArrowLeft, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useContext } from "react";

export function GameDetailHeader() {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const handleBack = useCallback(() => router.push("/home"), [router]);

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={logout} size="sm" className="rounded-full w-28">
          Logout
          <LogOut />
        </Button>
      </div>
      <div className="mt-4 md:mt-[80px] flex w-full font-bold flex-col gap-4 items-start md:items-center md:flex-row md:justify-between mb-8 md:mb-20">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="text-gradient px-0 items-center gap-1"
        >
          <ArrowLeft
            size={20}
            strokeWidth={2.5}
            className="text-myViolet-600 font-bold"
          />
          Back
        </Button>
        <SearchBar />
        <div className="w-10" />
      </div>
    </>
  );
}
