import { GameData } from "@/types/types";
import { useState, useEffect } from "react";
import { useToast } from "./use-toast";

export const useGames = () => {
  const { addToast, removeToast } = useToast();
  const [games, setGames] = useState<GameData[]>([]);

  const addGame = (game: GameData) => {
    setGames((prevGames) => [...prevGames, game]);
    localStorage.setItem("games", JSON.stringify([...games, game]));
    addToast(`${game.name} has been added to your collection`);
  };

  const removeGame = (game: GameData) => {
    setGames((prevGames) => [
      ...prevGames.filter((item) => item.id !== game.id),
    ]);
    localStorage.setItem(
      "games",
      JSON.stringify([...games.filter((item) => item.id !== game.id)])
    );
    removeToast(`${game?.name} has been removed from your collection`);
  };

  useEffect(() => {
    const storedGames = localStorage.getItem("games");
    if (storedGames) {
      setGames(JSON.parse(storedGames));
    }
  }, []);

  return { games, addGame, removeGame };
};
