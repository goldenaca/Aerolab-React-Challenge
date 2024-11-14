"use server";
import { GameData } from "@/types/types";
import dayjs from "dayjs";
import { Calendar, Puzzle, Star } from "lucide-react";

interface Props {
  data: GameData;
}

async function TagSection({ data }: Props) {
  const rating = data?.total_rating
    ? (data?.total_rating / 10).toFixed(1)
    : "Not Found";
  const date = data?.first_release_date
    ? dayjs.unix(data?.first_release_date).format("DD/MM/YYYY")
    : "Not Found";
  const genres = data?.genres?.map((gnre, index) =>
    index ? ` & ${gnre.name}` : gnre.name
  );

  return (
    <div className="md:mt-4 flex gap-2 flex-wrap">
      <div className="flex gap-1 items-center h-9 p-2 rounded-full border border-myViolet-50 w-fit">
        <Star size={16} className="text-myViolet-600" />
        <p className="text-sm font-medium text-myViolet-600">Rating:</p>
        <p className="text-myViolet-900">{rating}</p>
      </div>
      <div className="flex gap-1 items-center h-9 p-2 rounded-full border border-myViolet-50 w-fit">
        <Calendar size={16} className="text-myViolet-600" />
        <p className="text-sm font-medium text-myViolet-600">Release:</p>
        <p className="text-myViolet-900">{date}</p>
      </div>
      <div className="flex gap-1 items-center h-9 p-2 rounded-full border border-myViolet-50 w-fit">
        <Puzzle size={16} className="text-myViolet-600" />
        <p className="text-sm font-medium text-myViolet-600">Genre:</p>
        <p className="truncate text-myViolet-900  max-w-[60vw] overflow-hidden whitespace-nowrap">
          {genres}
        </p>
      </div>
    </div>
  );
}

export default TagSection;
