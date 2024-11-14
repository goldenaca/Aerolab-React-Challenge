"use client";

import { useGames } from "@/hooks/useGames";
import { MouseEvent, useCallback, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameData } from "@/types/types";
import { NoGamesSaved } from "./NoGamesSaved";
import GameCard from "./GameCard";
import FilterSection from "./FilterSection";

export type Filters = "last" | "new" | "old";

function SavedGames() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filters>("last");
  const { games, removeGame } = useGames();
  const [isOutOfView, setIsOutOfView] = useState(false);
  const list = useMemo(() => {
    if (filter === "last") return games.toReversed();
    return filter === "new"
      ? games.toSorted((a, b) => b.first_release_date - a.first_release_date)
      : games.toSorted((b, a) => b.first_release_date - a.first_release_date);
  }, [filter, games]);

  const changeFilter = useCallback((value: Filters) => {
    setFilter(value);
    window.scrollTo(0, 0);
  }, []);

  const handleGameClick = useCallback(
    (id: number) => router.push(`/game/${id}`),
    [router]
  );

  const handleRemove = useCallback(
    (
      e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
      game: GameData
    ) => {
      e.stopPropagation();
      removeGame(game);
    },
    [removeGame]
  );

  useEffect(() => {
    const handleScroll = () => {
      const targetPositionY = 380;
      setIsOutOfView(window.scrollY > targetPositionY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return !games.length ? (
    <NoGamesSaved />
  ) : (
    <div className="my-8 md:mt-[80px] mb-4">
      <h1 className="text-xl text-gradient font-bold mb-4 md:text-center">
        Saved games
      </h1>
      <FilterSection
        filter={filter}
        isOutOfView={isOutOfView}
        changeFilter={changeFilter}
      />
      <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
        {list.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            handleRemove={handleRemove}
            handleGameClick={handleGameClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedGames;
