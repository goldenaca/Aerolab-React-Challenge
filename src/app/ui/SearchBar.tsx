"use client";

import Form from "next/form";
import { fetchSearchGames } from "@/actions/fetchSearchGames";
import { Input } from "@/components/ui/input";
import { FileQuestion, Search } from "lucide-react";
import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { throttle } from "@/lib/throttle";
import { SearchData } from "@/types/types";
import Image from "next/image";
import { formatUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [list, setList] = useState<SearchData[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const handleClick = useCallback(
    (id: number) => router.push(`/game/${id}`),
    [router]
  );

  const handleAction = useCallback(async (e: FormData) => {
    setLoading(true);
    const res = await fetchSearchGames(e);
    setLoading(false);
    if (!res) return;
    setList([...res]);
  }, []);

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      if (e.target.value === "") setList([]);
      throttle(() => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        handleAction(formData);
      }, 250);
    },
    [handleAction]
  );

  return (
    <Form
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
      action={handleAction}
      className={`${
        search ? "rounded-t-2xl" : "rounded-full"
      } flex m-auto relative bg-white h-10 px-4 w-full border items-center border-myPink-200 text-myPink-200 md:w-[358px]`}
    >
      <Search size={16} />
      <Input
        id="search"
        name="search"
        onChange={handleInput}
        className={` border-none h-[36px] font-medium placeholder:font-medium placeholder:text-myPink-200 focus:text-black`}
        placeholder="Search games..."
        type="search"
      />
      {search && (
        <div
          className={`absolute z-10 overflow-x-hidden border-b border-x shadow-lg flex flex-col rounded-b-2xl border-myPink-200 bg-white overflow-scroll top-10 left-0 w-full h-56`}
        >
          {list.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="flex gap-2 border-b px-2 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item?.cover?.url ? (
                <Image
                  src={formatUrl(item.cover.url, "t_thumb")}
                  alt="search-img"
                  width={30}
                  height={30}
                  className="w-8 h-8 rounded"
                />
              ) : (
                <div className="flex items-center justify-center h-8 w-8 shadow rounded bg-gray-50">
                  <FileQuestion size={20} />
                </div>
              )}
              <p className="text-black text-lg font-light">{item.name}</p>
            </div>
          ))}
          {!list.length && (
            <div className="flex gap-2 border-b px-2 py-2 cursor-pointer hover:bg-gray-100">
              <p className="text-black text-center w-full text-lg font-medium">
                {loading ? "Loading..." : "Nothing found"}
              </p>
            </div>
          )}
        </div>
      )}
    </Form>
  );
};

export default SearchBar;
