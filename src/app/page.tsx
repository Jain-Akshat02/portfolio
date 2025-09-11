import HeroSection from "./components/HeroSection";
import GitHubCalendar from "react-github-calendar";
export default function Home() {
  return (
    <div className="font-sans grid min-h-screen p-2 ">
      <h1>
        <HeroSection/>
      </h1>
    </div>
  );
}
