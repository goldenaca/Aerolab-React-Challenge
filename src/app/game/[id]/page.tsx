import { fetchGameData } from "@/actions/fetchGameData";
import { GameDetailHeader } from "./ui/GameDetailHeader";
import SimilarGames from "./ui/SimilarGames";
import RequireAuth from "@/components/Auth/RequireAuth";
import TagSection from "./ui/TagSection";
import { Summary } from "./ui/Summary";
import { Platforms } from "./ui/Platforms";
import { MediaSection } from "./ui/MediaSection";
import { GameHero } from "./ui/GameHero";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function GamePage({ params }: Props) {
  const { id } = await params;
  const gameData = await fetchGameData(id);

  return (
    <RequireAuth>
      <GameDetailHeader />
      <GameHero data={gameData} />
      <TagSection data={gameData} />
      <Summary data={gameData} />
      <Platforms data={gameData} />
      <MediaSection data={gameData} />
      <SimilarGames data={gameData} />
    </RequireAuth>
  );
}
