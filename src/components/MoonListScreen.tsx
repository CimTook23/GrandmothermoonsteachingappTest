import { moons } from "../data/moons";
import { Home } from "lucide-react";

interface MoonListScreenProps {
  onSelectMoon: (moonId: number) => void;
  onHome: () => void;
}

export default function MoonListScreen({ onSelectMoon, onHome }: MoonListScreenProps) {
  // Get the last 4 moons
  const lastFourMoons = moons.slice(-4);
  
  return (
    <div className="bg-[#242223] relative min-h-screen w-full max-w-[430px] mx-auto overflow-y-auto pb-20">
      {/* Background gradients - similar to landing screen */}
      <div className="absolute h-[372px] left-[-137px] top-[200px] w-[404px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 372">
          <ellipse cx="202" cy="186" fill="url(#paint0_radial_moon_1)" fillOpacity="0.64" rx="202" ry="186" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(202 186) rotate(90) scale(186 202)" gradientUnits="userSpaceOnUse" id="paint0_radial_moon_1" r="1">
              <stop stopColor="#3DB6A4" />
              <stop offset="0.287018" stopColor="#35887C" stopOpacity="0.686582" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[372px] left-[191px] top-[-37px] w-[404px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 372">
          <ellipse cx="202" cy="186" fill="url(#paint0_radial_moon_2)" fillOpacity="0.64" rx="202" ry="186" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(202 186) rotate(90) scale(186 202)" gradientUnits="userSpaceOnUse" id="paint0_radial_moon_2" r="1">
              <stop stopColor="#FFD447" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[404px] left-[123px] top-[400px] w-[425px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 404">
          <ellipse cx="212.5" cy="202" fill="url(#paint0_radial_moon_3)" rx="212.5" ry="202" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(212.5 202) rotate(90) scale(202 212.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_moon_3" r="1">
              <stop stopColor="#FF924D" />
              <stop offset="1" stopColor="#242223" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <button
        onClick={onHome}
        className="absolute top-6 left-6 z-20 text-[#EFE7D2] hover:opacity-70 transition-opacity"
        aria-label="Go to home"
      >
        <Home className="w-8 h-8" />
      </button>
      
      <div className="relative z-10 pt-12 px-6">
        <h2 className="text-white text-center mb-12">Choose Your Moon</h2>
        
        <div className="space-y-8">
          {lastFourMoons.map((moon) => (
            <button
              key={moon.id}
              onClick={() => onSelectMoon(moon.id)}
              className="w-full flex items-center gap-6 p-4 rounded-lg hover:bg-[#242323]/30 transition-colors"
            >
              <div className="relative flex-shrink-0 w-24 h-24">
                <div className="absolute inset-[-19%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 511 511">
                    <g filter={`url(#filter-${moon.id})`}>
                      <circle cx="255.3" cy="255.3" fill={`url(#gradient-${moon.id})`} r="185" />
                    </g>
                    <defs>
                      <filter 
                        colorInterpolationFilters="sRGB" 
                        filterUnits="userSpaceOnUse" 
                        height="510.6" 
                        id={`filter-${moon.id}`}
                        width="510.6" 
                        x="0" 
                        y="0"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result={`effect1_foregroundBlur_${moon.id}`} stdDeviation="35.15" />
                      </filter>
                      <radialGradient 
                        cx="0" 
                        cy="0" 
                        gradientTransform="translate(255.3 255.3) rotate(90) scale(185)" 
                        gradientUnits="userSpaceOnUse" 
                        id={`gradient-${moon.id}`}
                        r="1"
                      >
                        <stop stopColor={moon.gradientFrom} />
                        <stop offset="1" stopColor={moon.gradientTo} />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              <div className="text-left flex-1">
                <h3 className="text-[#EFE7D2] mb-1">{moon.name}</h3>
                <p className="text-[#EFE7D2]/70">{moon.month}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}