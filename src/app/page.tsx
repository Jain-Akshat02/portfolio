import HeroSection from "./components/HeroSection";
import MainNav from "./components/MainNav";
export default function Home() {
  return (
    <div className="font-sans grid min-h-screen ">
      <MainNav />
      <div className="pt-8">
        <HeroSection/>
      </div>
    </div>
  );
}
