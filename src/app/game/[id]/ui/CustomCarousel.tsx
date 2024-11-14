"use client";
import { formatUrl } from "@/lib/utils";
import { GameData } from "@/types/types";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface Props {
  data: GameData;
}

export function CustomCarousel({ data }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  const openFullscreen = (url: string) => {
    setFullscreenImage(url);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className={`relative mt-2`}>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-2 scrollbar-hide"
      >
        {data?.screenshots?.map((image, i) => (
          <div
            key={image.id}
            onClick={() => openFullscreen(image.url)}
            className="flex-none cursor-pointer hover:shadow w-20 h-20 sm:w-[140px] sm:h-[140px] rounded-xl overflow-hidden"
          >
            <Image
              src={formatUrl(image.url, "t_screenshot_big")}
              alt={`media image - ${i}`}
              width={512}
              height={512}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      {data?.screenshots?.length > 4 && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute opacity-90 hover:opacity-100  -left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 sm:p-3 shadow-md"
          >
            <ArrowLeft size={14} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute opacity-90 hover:opacity-100 -right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 sm:p-3 shadow-md"
          >
            <ArrowRight size={16} />
          </button>
        </>
      )}

      {fullscreenImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-stone-900 z-50">
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            <X />
          </button>
          <Image
            src={formatUrl(fullscreenImage, "t_screenshot_huge")}
            alt="fullscreen-image"
            width={1280}
            height={720}
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
