import { Button } from "@/components/ui/button";
import { Filters } from "./SavedGames";

interface Props {
  filter: Filters;
  isOutOfView: boolean;
  changeFilter: (value: Filters) => void;
}

export default function FilterSection({
  filter,
  isOutOfView,
  changeFilter,
}: Props) {
  return (
    <>
      <div className={`flex gap-2 flex-wrap`}>
        <Button
          size={"sm"}
          className="!w-24 rounded-full"
          variant={filter === "last" ? "default" : "ghost"}
          onClick={() => changeFilter("last")}
        >
          Last added
        </Button>
        <Button
          size={"sm"}
          className="!w-24 rounded-full"
          variant={filter === "new" ? "default" : "ghost"}
          onClick={() => changeFilter("new")}
        >
          Newest
        </Button>
        <Button
          size={"sm"}
          variant={filter === "old" ? "default" : "ghost"}
          onClick={() => changeFilter("old")}
          className="!w-24 rounded-full"
        >
          Oldest
        </Button>
      </div>
      {isOutOfView && (
        <div
          className={`flex gap-2 fixed rounded-full top-5 left-1/2 transform -translate-x-1/2 bg-white opacity-90 shadow-md p-1 z-10`}
        >
          <Button
            size={"sm"}
            className="!w-24 rounded-full"
            variant={filter === "last" ? "default" : "ghost"}
            onClick={() => changeFilter("last")}
          >
            Last added
          </Button>
          <Button
            size={"sm"}
            className="!w-24 rounded-full"
            variant={filter === "new" ? "default" : "ghost"}
            onClick={() => changeFilter("new")}
          >
            Newest
          </Button>
          <Button
            size={"sm"}
            variant={filter === "old" ? "default" : "ghost"}
            onClick={() => changeFilter("old")}
            className="!w-24 rounded-full"
          >
            Oldest
          </Button>
        </div>
      )}
    </>
  );
}
