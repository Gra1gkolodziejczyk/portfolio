import { BubbleSection } from "@/components/competences/bubble-section";

export function Competences() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary pt-20">
        Mes Compétences
      </h2>
      <BubbleSection />
    </section>
  );
}
