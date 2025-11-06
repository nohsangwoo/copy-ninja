import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import ThemePresetsSection from "./components/sections/ThemePresetsSection";
import InteractivePreviewSection from "./components/sections/InteractivePreviewSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ThemePresetsSection />
      <InteractivePreviewSection />
    </div>
  );
}
