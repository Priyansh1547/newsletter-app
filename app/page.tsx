import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl w-full">
        <h1 className="text-center text-5xl font-semibold leading-tight tracking-[-0.03em]sm:text-6xl md:px-0">
          Step into the Future of Newsletter
        </h1>
        <p className="text-gray-400 mb-6">
          Experience writing and distributing newsletter like never before.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button className="hover:cursor-pointer w-32" variant={"dark"}>
            <Link href="/login">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
