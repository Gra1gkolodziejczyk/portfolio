import {AboutSection} from "@/components/about/about-section";

export function About() {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-row h-full">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <AboutSection />
      </div>
    </section>
  );
}
