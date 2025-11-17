import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import MoonListScreen from "./components/MoonListScreen";
import MoonDetailScreen from "./components/MoonDetailScreen";
import AnimationScreen from "./components/AnimationScreen";

type Screen = 
  | { type: "landing" }
  | { type: "list" }
  | { type: "detail"; moonId: number }
  | { type: "animation"; moonId: number; userInput: string };

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: "landing" });

  const handleStart = () => {
    setCurrentScreen({ type: "list" });
  };

  const handleSelectMoon = (moonId: number) => {
    setCurrentScreen({ type: "detail", moonId });
  };

  const handleBack = () => {
    setCurrentScreen({ type: "list" });
  };

  const handlePlayAnimation = (moonId: number, userInput: string) => {
    setCurrentScreen({ type: "animation", moonId, userInput });
  };

  const handleCloseAnimation = () => {
    setCurrentScreen({ type: "list" });
  };

  const handleHome = () => {
    setCurrentScreen({ type: "landing" });
  };

  return (
    <div className="min-h-screen bg-[#242223] flex items-center justify-center">
      {currentScreen.type === "landing" && (
        <LandingScreen onStart={handleStart} />
      )}
      
      {currentScreen.type === "list" && (
        <MoonListScreen onSelectMoon={handleSelectMoon} onHome={handleHome} />
      )}
      
      {currentScreen.type === "detail" && (
        <MoonDetailScreen
          moonId={currentScreen.moonId}
          onBack={handleBack}
          onHome={handleHome}
          onPlayAnimation={handlePlayAnimation}
        />
      )}
      
      {currentScreen.type === "animation" && (
        <AnimationScreen
          moonId={currentScreen.moonId}
          userInput={currentScreen.userInput}
          onClose={handleCloseAnimation}
          onHome={handleHome}
        />
      )}
    </div>
  );
}