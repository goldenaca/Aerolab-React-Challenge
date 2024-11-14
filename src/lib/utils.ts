import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUrl(url: string, sizeCode: string) {
  return `https:${url.replace("t_thumb", sizeCode)}`;
}
