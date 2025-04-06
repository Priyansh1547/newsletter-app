import { Hero } from "@/components/landing/hero";
import { Section } from "@/components/landing/section";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Section />
      </div>
    </>
  );
}
