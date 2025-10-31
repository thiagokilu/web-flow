import ChoiceCards from "@/Components/ChoiceCards/ChoiceCards";
import Header from "@/Components/Header/Header";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HeroFooter from "@/Components/HeroFooter/HeroFooter";
import SectionAwards from "@/Components/SectionAwards/SectionAwards";
import SectionStudyCase from "@/Components/SectionStudyCase/SectionStudyCase";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 mb-20">
      {/* Seções principais */}
      <HeroBanner />

      <ChoiceCards />

      <SectionStudyCase />

      <SectionAwards />

      <HeroFooter />
    </div>
  );
}
