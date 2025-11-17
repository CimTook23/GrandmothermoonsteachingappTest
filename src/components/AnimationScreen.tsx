import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { moons } from "../data/moons";
import { X, Home } from "lucide-react";

interface AnimationScreenProps {
  moonId: number;
  userInput: string;
  onClose: () => void;
  onHome: () => void;
}

export default function AnimationScreen({ moonId, userInput, onClose, onHome }: AnimationScreenProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const moon = moons.find(m => m.id === moonId);

  useEffect(() => {
    // Generate random particles based on user input length
    const particleCount = Math.min(Math.max(userInput.length, 20), 50);
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, [userInput]);

  if (!moon) return null;

  // Extract key words from user input (simple approach)
  const words = userInput.split(' ').filter(w => w.length > 3).slice(0, 5);

  return (
    <div className="bg-[#242223] relative h-screen w-full max-w-[430px] mx-auto overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-6 left-6 z-50 text-white hover:opacity-70 transition-opacity"
        aria-label="Close animation"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button
        onClick={onHome}
        className="absolute top-6 right-6 z-50 text-white hover:opacity-70 transition-opacity"
        aria-label="Go to home"
      >
        <Home className="w-8 h-8" />
      </button>

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: moon.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Central moon with pulsing animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 511 511">
            <defs>
              <radialGradient 
                cx="0" 
                cy="0" 
                gradientTransform="translate(255.3 255.3) rotate(90) scale(185)" 
                gradientUnits="userSpaceOnUse" 
                id="moon-gradient"
                r="1"
              >
                <stop stopColor={moon.gradientFrom} />
                <stop offset="1" stopColor={moon.gradientTo} />
              </radialGradient>
              <filter 
                colorInterpolationFilters="sRGB" 
                filterUnits="userSpaceOnUse" 
                height="510.6" 
                id="glow-filter"
                width="510.6" 
                x="0" 
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="45" />
              </filter>
            </defs>
            <g filter="url(#glow-filter)">
              <circle cx="255.3" cy="255.3" fill="url(#moon-gradient)" r="185" />
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-4 opacity-30"
        style={{ borderColor: moon.color }}
        animate={{
          scale: [1, 2, 3],
          opacity: [0.5, 0.2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      {/* User's words floating */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {words.map((word, index) => (
          <motion.div
            key={index}
            className="absolute text-[#EFE7D2]/80"
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Moon name at bottom */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-[#EFE7D2] mb-4">{moon.name}</h2>
        <p className="text-[#EFE7D2]/70 px-8">Your reflection is honored</p>
      </motion.div>
    </div>
  );
}