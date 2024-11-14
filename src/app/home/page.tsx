import RequireAuth from "@/components/Auth/RequireAuth";
import SearchBar from "../ui/SearchBar";
import HomeHeader from "./ui/HomeHeader";
import SavedGames from "./ui/SavedGames";

export default async function Home() {
  return (
    <RequireAuth>
      <HomeHeader />
      <SearchBar />
      <SavedGames />
    </RequireAuth>
  );
}
