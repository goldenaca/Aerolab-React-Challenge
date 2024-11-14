"use server";
import { GameData } from "@/types/types";

export const Summary = async ({ data }: { data: GameData }) => {
  return (
    <div className="mt-8">
      <h1 className="font-semibold">Summary</h1>
      <p className="text-gray-600 text-sm sm:text-base">
        {data?.summary || "No summary data found."}
      </p>
    </div>
  );
};
