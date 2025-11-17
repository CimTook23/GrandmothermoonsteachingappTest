import { useState } from "react";
import { moons } from "../data/moons";
import { ChevronLeft, Home } from "lucide-react";

interface MoonDetailScreenProps {
  moonId: number;
  onBack: () => void;
  onHome: () => void;
  onPlayAnimation: (moonId: number, userInput: string) => void;
}

export default function MoonDetailScreen({ moonId, onBack, onHome, onPlayAnimation }: MoonDetailScreenProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const moon = moons.find(m => m.id === moonId);

  if (!moon) return null;

  const handleSubmit = () => {
    if (selectedWord) {
      onPlayAnimation(moonId, selectedWord);
    }
  };

  return (
    <div className="bg-[#242223] relative min-h-screen w-full max-w-[430px] mx-auto overflow-y-auto">
      {/* Background gradients */}
      <div className="absolute h-[372px] left-[-137px] top-[200px] w-[404px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 372">
          <ellipse cx="202" cy="186" fill="url(#paint0_radial_detail_1)" fillOpacity="0.64" rx="202" ry="186" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(202 186) rotate(90) scale(186 202)" gradientUnits="userSpaceOnUse" id="paint0_radial_detail_1" r="1">
              <stop stopColor="#3DB6A4" />
              <stop offset="0.287018" stopColor="#35887C" stopOpacity="0.686582" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[372px] left-[191px] top-[-37px] w-[404px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 372">
          <ellipse cx="202" cy="186" fill="url(#paint0_radial_detail_2)" fillOpacity="0.64" rx="202" ry="186" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(202 186) rotate(90) scale(186 202)" gradientUnits="userSpaceOnUse" id="paint0_radial_detail_2" r="1">
              <stop stopColor="#FFD447" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[404px] left-[123px] top-[500px] w-[425px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 404">
          <ellipse cx="212.5" cy="202" fill="url(#paint0_radial_detail_3)" rx="212.5" ry="202" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(212.5 202) rotate(90) scale(202 212.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_detail_3" r="1">
              <stop stopColor="#FF924D" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-20 text-white hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={onHome}
        className="absolute top-6 right-6 z-20 text-white hover:opacity-70 transition-opacity"
        aria-label="Go to home"
      >
        <Home className="w-8 h-8" />
      </button>

      <div className="relative z-10 pt-20 px-8 pb-20">
        <div className="flex items-start gap-6 mb-8">
          <div className="relative flex-shrink-0 w-28 h-28">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 231">
              <circle cx="115.5" cy="115.5" fill={moon.color} r="115.5" />
            </svg>
          </div>
          
          <div>
            <h1 className="text-[#EFE7D2] mb-2">{moon.name}</h1>
            <p className="text-[#EFE7D2]/70">{moon.month}</p>
          </div>
        </div>

        <div className="text-[#EFE7D2] mb-12 leading-relaxed">
          <p>{moon.teaching}</p>
        </div>

        <div className="mb-6">
          <p className="text-white mb-6">What resonates with you the most?</p>
          
          <div className="grid grid-cols-2 gap-4">
            {moon.wordOptions.map((word) => (
              <button
                key={word}
                onClick={() => setSelectedWord(word)}
                className={`px-6 py-4 rounded-lg border-2 transition-all ${
                  selectedWord === word
                    ? 'border-white bg-white/10 text-white'
                    : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white/90'
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedWord}
          className="w-full bg-opacity-100 px-12 py-5 rounded-full text-[#242223] transition-opacity disabled:opacity-50"
          style={{ backgroundColor: moon.color }}
        >
          Play interaction
        </button>
      </div>
    </div>
  );
}