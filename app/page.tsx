import { Button } from "@/components/ui/button";

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
          <Button className="bg-gradient-to-r from-rose-100 to-teal-100 text-black shadow-md hover:cursor-pointer w-32">
            <a href="https://github.com/Priyansh1547/stack-mail">Github</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
