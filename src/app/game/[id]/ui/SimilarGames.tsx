"use client";

import { formatUrl } from "@/lib/utils";
import { GameData } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface Props {
  data: GameData;
}

function SimilarGames({ data }: Props) {
  const router = useRouter();
  const handleClick = useCallback(
    (id: number) => router.push(`/game/${id}`),
    [router]
  );

  return (
    <div className="my-12">
      <h1 className="font-bold text-gradient mb-4">Similar Games</h1>
      {!data.similar_games && (
        <p className="text-gray-600 text-sm sm:text-base">
          No similar games data found.
        </p>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {data?.similar_games?.map((game, i) => (
          <Image
            key={i}
            src={formatUrl(game.cover.url, "t_cover_big")}
            alt={`similar - ${i}`}
            onClick={() => handleClick(game.id)}
            width={200}
            height={260}
            className="w-full shadow rounded hover:scale-105 transition cursor-pointer sm:rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarGames;
