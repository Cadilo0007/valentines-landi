import React, { useState, useEffect } from 'react';
import { NO_MESSAGES, CRYING_CATS } from '../constants';
import confetti from 'canvas-confetti';

interface ProposalProps {
  name: string;
  onAccept: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ name, onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [currentNoMessage, setCurrentNoMessage] = useState("No");
  const [catImg, setCatImg] = useState<string | null>(null);
  const [noPos, setNoPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Accept button click
  const handleAcceptClick = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    onAccept();
  };

  // NO button hover: move away from cursor
  const handleNoHover = () => {
    const buttonOffset = 100; // max movement
    const xDir = mousePos.x > window.innerWidth / 2 ? -1 : 1;
    const yDir = mousePos.y > window.innerHeight / 2 ? -1 : 1;

    const offsetX = (Math.random() * buttonOffset + 50) * xDir;
    const offsetY = (Math.random() * 50 + 25) * yDir;

    setNoPos(prev => ({
      x: Math.max(Math.min(prev.x + offsetX, 150), -250),
      y: Math.max(Math.min(prev.y + offsetY, 75), -175),
    }));

    // Update NO count and cat image
    const newCount = noCount + 1;
    setNoCount(newCount);
    setCurrentNoMessage(NO_MESSAGES[Math.min(newCount, NO_MESSAGES.length - 1)]);
    setCatImg(CRYING_CATS[newCount % CRYING_CATS.length]);
    setYesScale(prev => prev + 0.5);
  };

  return (
    <div className="glass-card p-5 sm:p-9 rounded-[1rem] flex flex-col items-center text-center space-y-3 relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,100,0.05),transparent)] pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <h1 className="font-title text-3xl text-white drop-shadow-lg">Happy Valentines</h1>
        <p className="font-love-letter text-xl text-pink-100/90 italic leading-relaxed">
          Will you be my Valentine? 🌹
        </p>
      </div>

      <div className="relative h-56 w-full flex items-center justify-center">
        {catImg ? (
          <div className="w-56 h-56 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-white/10 animate-[fadeIn_0.5s_ease-out]">
            <img src={catImg} alt="Crying cat" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-60 h-60 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-white/10 animate-[fadeIn_0.5s_ease-out]">
              <img src="https://i.pinimg.com/736x/e4/83/9d/e4839dde623a6d2627606811c9be0ad0.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-4 w-full relative min-h-[160px]">
        <button
          onClick={handleAcceptClick}
          style={{ transform: `scale(${yesScale})` }}
          className="shimmer-btn text-white font-bold py-5 px-10 rounded-full shadow-[0_15px_45px_rgba(219,39,119,0.5)] transition-all duration-500 z-50 text-1xl active:scale-95"
        >
          YES! ❤️
        </button>

        <button
          onMouseEnter={handleNoHover}
          style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          className="bg-white/5 hover:bg-white/10 text-white/50 font-medium py-3 px-8 rounded-full border border-white/10 transition-all duration-300 backdrop-blur-md z-10 text-sm hover:text-white/80"
        >
          {currentNoMessage}
        </button>
      </div>

      <div className="h-6">
        {noCount > 0 && (
          <p className="text-pink-400 animate-bounce font-love-letter text-xl">
            {noCount > 7 ? "Dont do this! 😭" : "Please reconsider... 🥺"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Proposal;
