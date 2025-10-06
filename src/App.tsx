import { HeroSection } from "./components/HeroSection";
import { BigPictureSection } from "./components/BigPictureSection";
import { ReadingTimelineSection } from "./components/ReadingTimelineSection";
import { ReadingSuperlativesSection } from "./components/ReadingSuperlativesSection";
import { TopBooksSection } from "./components/TopBooksSection";
import { ReadingPatternsSection } from "./components/ReadingPatternsSection";
import { YearByYearSection } from "./components/YearByYearSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white">
      <HeroSection />
      <BigPictureSection />
      <ReadingTimelineSection />
      <ReadingSuperlativesSection />
      <TopBooksSection />
      <ReadingPatternsSection />
      <YearByYearSection />
      <Footer />
    </div>
  );
}

