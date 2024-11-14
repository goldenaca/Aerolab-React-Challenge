import { formatUrl } from "@/lib/utils";
import { GameData } from "@/types/types";
import { FileQuestion, Trash } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

interface Props {
  game: GameData;
  handleRemove: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    game: GameData
  ) => void;
  handleGameClick: (id: number) => void;
}

function GameCard({ game, handleRemove, handleGameClick }: Props) {
  return (
    <div
      key={game.id}
      onClick={() => handleGameClick(game.id)}
      className="w-full relative transition hover:scale-105 cursor-pointer rounded-[8px] shadow shadow-gray-400"
    >
      {!game?.cover?.url ? (
        <div className="flex items-center justify-center w-full h-full shadow rounded-[8px] bg-gray-100">
          <FileQuestion size={32} />
        </div>
      ) : (
        <Image
          src={formatUrl(game.cover.url, "t_cover_big")}
          alt="saved games"
          width={170}
          height={226}
          className="rounded-[8px] w-full h-full"
        />
      )}
      <button
        onClick={(e) => handleRemove(e, game)}
        className="w-10 h-10 flex items-center hover:opacity-100 justify-center bottom-1 right-1 absolute rounded-full bg-white opacity-90"
      >
        <Trash />
      </button>
    </div>
  );
}

export default GameCard;
