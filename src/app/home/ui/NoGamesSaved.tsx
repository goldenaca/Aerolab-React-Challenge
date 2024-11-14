import Image from "next/image";
import noGamesImage from "./.././../../../public/no-games.png";

export const NoGamesSaved = () => {
  return (
    <div className="my-8 md:mt-[80px]">
      <h1 className="text-xl text-gradient font-bold mb-12 md:text-center">
        Saved games
      </h1>
      <Image
        src={noGamesImage}
        alt="not found pic"
        className="m-auto w-[350px] h-[168px]"
        width={350}
        height={168}
      />
      <h1 className="font-bold text-center mt-4">Nothing collected yet</h1>
      <p className="text-sm text-gray-600 text-center">
        Here you will see your collected games
      </p>
    </div>
  );
};
