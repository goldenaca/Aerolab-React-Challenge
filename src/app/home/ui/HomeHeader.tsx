"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "./.././../../../public/logo.png";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthContext, AuthContextType } from "@/context/AuthContext";

function HomeHeader() {
  const { logout } = useContext(AuthContext) as AuthContextType;
  return (
    <>
      <div className="flex justify-end">
        <Button onClick={logout} size="sm" className="rounded-full w-28">
          Logout
          <LogOut />
        </Button>
      </div>
      <div className="flex items-center gap-2 md:justify-center mb-4 mt-4 md:mt-[80px]">
        <Image
          src={logo}
          alt="logo"
          width={24}
          height={24}
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <h1 className=" font-bold text-xl md:text-2xl text-gradient">
          Gaming Heaven Z
        </h1>
      </div>
    </>
  );
}

export default HomeHeader;
