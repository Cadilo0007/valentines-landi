
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface SurpriseProps {
  name: string;
  onContinue: () => void;
}

const Surprise: React.FC<SurpriseProps> = ({ name, onContinue }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      // Extra burst on load
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#db2777', '#f472b6', '#ffffff']
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass-card p-10 rounded-[1rem] text-center relative overflow-hidden group">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" />

      <div className={`transition-all duration-1000 transform space-y-10 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
        <div className="space-y-4">
          <h1 className="font-title text-3xl text-white tracking-tighter animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Yayyy!!!</h1>
          <div className="h-1 w-24 bg-pink-500/30 mx-auto rounded-full" />
        </div>
        
        <div className="flex justify-center">
          <div className="w-60 h-60 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-white/10 animate-[fadeIn_0.5s_ease-out]">
            <img src="https://i.pinimg.com/736x/09/c6/e0/09c6e09b88142cb191be7f262da04b49.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
                
        <div className="space-y-4">
          <p className="font-love-letter text-2xl text-pink-100/90 leading-tight">
            YIEEEEE SAN DATE NATIN? OTW
          </p>
          <p className="text-white/40 text-xs uppercase tracking-[0.4em]">Proposal Accepted • Valentine's 2026</p>
        </div>

        <button
          onClick={onContinue}
          className="shimmer-btn text-white font-bold py-5 px-14 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 text-xl"
        >
          Let's Celebrate! ✨
        </button>
      </div>
    </div>
  );
};

export default Surprise;
