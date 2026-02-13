
import React, { useState } from 'react';

interface IntroductionProps {
  onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onStart, 800);
  };

  return (
    <div className={`glass-card p-12 rounded-[3.5rem] text-center space-y-8 relative overflow-hidden transition-all duration-700 ${isOpening ? 'scale-110 opacity-0 blur-lg' : 'scale-100 opacity-100'}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="space-y-6">
        <div className="relative inline-block">
          <div className="text-8xl mb-4 cursor-pointer hover:scale-110 transition-transform duration-500 animate-[heartBeat_3s_infinite]" onClick={handleClick}>
            💌
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white animate-ping" />
        </div>
        
        <h1 className="font-title text-7xl text-white tracking-wide drop-shadow-lg">A Private Invite</h1>
        <p className="font-love-letter text-3xl text-pink-100/90 max-w-sm mx-auto leading-relaxed italic">
          "For your eyes only... because some feelings are simply too big for ordinary words."
        </p>
      </div>

      <div className="py-6 space-y-8">
        <button
          onClick={handleClick}
          className="shimmer-btn group relative overflow-hidden text-white font-bold py-5 px-14 rounded-full shadow-[0_0_30px_rgba(219,39,119,0.4)] transition-all duration-500 hover:scale-105 active:scale-95 text-xl tracking-tight"
        >
          <span className="relative z-10 flex items-center gap-3">
            Open the Letter <span className="animate-bounce">✨</span>
          </span>
        </button>
        
        <div className="flex justify-center gap-4 text-pink-500/40">
          <span className="animate-pulse">❤️</span>
          <span className="animate-pulse [animation-delay:0.2s]">❤️</span>
          <span className="animate-pulse [animation-delay:0.4s]">❤️</span>
        </div>
      </div>
      
      <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Confidential & Sincere</p>
    </div>
  );
};

export default Introduction;
