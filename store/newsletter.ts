import { atom } from "jotai";
import { NewsletterResponse } from "@/types/NewsletterResponse";

export const newslettersAtom = atom<NewsletterResponse[]>([]);
