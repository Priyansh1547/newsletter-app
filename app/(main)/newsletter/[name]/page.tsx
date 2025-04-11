"use client";
import { useParams } from "next/navigation";

export default function Main() {
  const params = useParams();

  return (
    <>
      <div>{params.name}</div>
    </>
  );
}
