"use server";

import { GameData } from "@/types/types";

export const Platforms = async ({ data }: { data: GameData }) => {
  const platforms = data?.platforms?.map((gnre, index) =>
    index ? `, ${gnre.name}` : gnre.name
  );
  return (
    <div className="mt-8">
      <h1 className="font-semibold">Platforms</h1>
      <p className="text-gray-600 text-sm sm:text-base">
        {platforms || "No platforms data found."}
      </p>
    </div>
  );
};
