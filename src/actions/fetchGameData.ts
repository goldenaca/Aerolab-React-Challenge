"use server";
import { GameData } from "@/types/types";

export async function fetchGameData(id: string): Promise<GameData> {
  const token = process.env.TOKEN as string;
  const clientId = process.env.CLIENT_ID as string;

  try {
    const res = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: `fields name,cover.url,involved_companies.developer,involved_companies.company.name,first_release_date,total_rating,similar_games.name,similar_games.cover.url,genres.name,rating,platforms.name,screenshots.*,summary; where id = ${id};`,
    });

    const data: GameData[] = await res.json();
    return data[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
