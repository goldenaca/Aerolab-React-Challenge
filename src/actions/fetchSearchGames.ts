"use server";
import { SearchData } from "@/types/types";

export async function fetchSearchGames(
  formData: FormData
): Promise<SearchData[]> {
  const token = process.env.TOKEN as string;
  const clientId = process.env.CLIENT_ID as string;
  const searchValue = formData.get("search") as string;

  try {
    const res = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: `fields name,cover.url; search "${searchValue}"; limit 10;`,
    });

    const data: SearchData[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
