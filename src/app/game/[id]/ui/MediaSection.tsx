"use server";
import { GameData } from "@/types/types";
import { CustomCarousel } from "./CustomCarousel";

export const MediaSection = async ({ data }: { data: GameData }) => {
  return (
    <div className="mt-8">
      <h1 className="font-semibold">Media</h1>
      {!data.screenshots && (
        <p className="text-gray-600 text-sm sm:text-base">
          No media data found.
        </p>
      )}
      <CustomCarousel data={data} />
    </div>
  );
};
