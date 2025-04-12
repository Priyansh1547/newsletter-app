"use client";
import { useParams } from "next/navigation";
import { newsletterNameAtom } from "@/store/newsletter";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Main() {
  const params = useParams();
  const name = params.name?.toString();

  const [newsletterName, setNewsletterName] = useAtom(newsletterNameAtom);

  useEffect(() => {
    setNewsletterName(name!);
  });

  return (
    <>
      <div>{newsletterName}</div>
    </>
  );
}
