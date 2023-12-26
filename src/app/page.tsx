import AboutMe from "./components/AboutMe";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-scroll overflow-x-hidden m-auto">
      {/* Header Nav bar */}
      {/* <Header /> */}

      <Hero />
      {/* About me */}
      <AboutMe />
      {/* Cards */}
      <Cards />

      {/* Footer */}
      <Footer />
    </div>
  );
}
