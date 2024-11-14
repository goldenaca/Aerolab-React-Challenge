export interface GameData {
  id: number;
  name: string;
  cover: {
    id: number;
    url: string;
  };
  first_release_date: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  involved_companies: Array<{
    id: number;
    company: {
      id: number;
      name: string;
    };
    developer: boolean;
  }>;
  platforms: Array<{
    id: number;
    name: string;
  }>;
  rating: number;
  screenshots: Array<{
    id: number;
    url: string;
  }>;
  similar_games: Array<{
    id: number;
    cover: {
      id: number;
      url: string;
    };
    name: string;
  }>;
  summary: string;
  total_rating: number;
}

export interface SearchData {
  id: number;
  name: string;
  cover: {
    id: number;
    url: string;
  };
}
