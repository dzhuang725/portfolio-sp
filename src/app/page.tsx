import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionExperiences from "./components/SectionExperiences";
import SectionSkills from "./components/SectionSkills";
import SectionConnect from "./components/SectionConnect";

import BGGrid from './components/deco/BGGrid';


export default function Home() {

  return (
    <div className="container flex flex-col items-center gap-4">
      <SectionHero  />
      <SectionAbout  />
      <SectionExperiences  />
      <SectionSkills  />
      <SectionConnect  />
      <Footer />
      <BGGrid />
    </div>
  );
}
