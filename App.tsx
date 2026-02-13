
import React, { useState, useEffect } from 'react';
import { Step, DateOption } from './types';
import Proposal from './components/Proposal';
import Surprise from './components/Surprise';
import DatePlanner from './components/DatePlanner';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.PROPOSAL);
  const [selectedDate, setSelectedDate] = useState<DateOption | null>(null);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart-particle text-pink-400/60';
      const emojis = ['❤️', '💖', '✨', '🌸', '💝'];
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = Math.random() * 20 + 15 + 'px';
      heart.style.animationDuration = Math.random() * 2 + 4 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  const handleProposalAccept = () => {
    setStep(Step.SURPRISE);
  };

  const handleSurpriseContinue = () => {
    setStep(Step.DATE_PLANNER);
  };

  const handleDateSelect = (option: DateOption) => {
    setSelectedDate(option);
    setStep(Step.FINAL);
  };

  return (
    <div className="min-h-screen bg-pink flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-pink pointer-events-none" />
      
      <div className="w-full max-w-lg z-10 transition-all duration-1000">
        {step === Step.PROPOSAL && (
          <div className="animate-[fadeIn_1s_ease-out]">
            <Proposal  
              onAccept={handleProposalAccept} name={''} />
          </div>
        )}

        {step === Step.SURPRISE && (
          <div className="animate-[scaleUp_0.6s_ease-out]">
            <Surprise 
              onContinue={handleSurpriseContinue} name={''} />
          </div>
        )}

        {step === Step.DATE_PLANNER && (
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <DatePlanner  
              onSelect={handleDateSelect} name={''}            />
          </div>
        )}

        {step === Step.FINAL && (
          <div className="glass-card p-10 rounded-[2.5rem] text-center text-white transform transition-all duration-700 scale-105 shimmer">
            <h1 className="font-title text-7xl mb-6 text-pink-200">Our Perfect Day</h1>
            <p className="font-love-letter text-4xl mb-6 text-white/90">I'm so lucky to have you.</p>
            <div className="text-[100px] mb-8 animate-bounce drop-shadow-[0_0_20px_rgba(255,100,100,0.5)]">
              {selectedDate?.icon}
            </div>
            <p className="text-pink-300 text-2xl font-love-letter mb-4 italic">See you for our {selectedDate?.label}!</p>
            <div className="font-signature text-4xl text-white/40 mt-10">Yours forever...</div>
            
            <button 
            onClick={() => setStep(Step.PROPOSAL)}
            className="mt-12 text-xs uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity"
            >
            Screenshot before you leave 💖
            </button>
                  <footer>
        <p>&copy; 2026 <span>Justine Leymark</span> | All rights reserved</p>
        <p>With love & focus.</p>
      </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
