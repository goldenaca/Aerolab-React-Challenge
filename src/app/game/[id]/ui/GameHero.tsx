"use client";
import { Button } from "@/components/ui/button";
import { useGames } from "@/hooks/useGames";
import { formatUrl } from "@/lib/utils";
import { GameData } from "@/types/types";
import { FileQuestion, X } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

export const GameHero = ({ data }: { data: GameData }) => {
  const { games, addGame, removeGame } = useGames();
  const company = data?.involved_companies?.find((item) => item.developer);
  const isAdded = games.find((game) => game.id === data.id);

  const addHandler = useCallback(() => addGame(data), [addGame, data]);
  const removeHandler = useCallback(() => removeGame(data), [data, removeGame]);

  return (
    <>
      <div className="flex gap-4">
        {!data?.cover?.url ? (
          <div className="w-20 flex items-center justify-center h-28 md:w-44 md:h-56 shadow rounded bg-gray-50">
            <FileQuestion size={32} />
          </div>
        ) : (
          <Image
            src={formatUrl(data.cover.url, "t_cover_big")}
            alt="game-cover"
            width={80}
            height={112}
            className="w-20 h-28 md:w-44 md:h-56 shadow rounded"
          />
        )}
        <div>
          <h1 className="text-gradient font-bold text-xl">{data.name}</h1>
          <p className="text-sm text-myViolet-600 mt-2">
            {company?.company.name || "Not Found"}
          </p>
          {!isAdded ? (
            <Button onClick={addHandler} className="mt-4 hidden md:flex">
              Collect game
            </Button>
          ) : (
            <Button
              onClick={removeHandler}
              variant="secondary"
              className="mt-4 hidden md:flex"
            >
              Game Collected <X className="text-black" />
            </Button>
          )}
        </div>
      </div>
      {!isAdded ? (
        <Button onClick={addHandler} className="my-4 md:hidden ">
          Collect game
        </Button>
      ) : (
        <Button
          onClick={removeHandler}
          variant="secondary"
          className="my-4 md:hidden"
        >
          Game Collected <X className="text-black" />
        </Button>
      )}
    </>
  );
};
