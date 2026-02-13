
import React from 'react';
import { DateOption } from '../types';
import { DATE_OPTIONS } from '../constants';

interface DatePlannerProps {
  name: string;
  onSelect: (option: DateOption) => void;
}

const DatePlanner: React.FC<DatePlannerProps> = ({ onSelect }) => {
  return (
    <div className="glass-card p-5 rounded-[1rem] border-white/30">
      <div className="text-center mb-10">
        <h2 className="font-title text-3xl text-white mb-4">The Plan</h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent mx-auto mb-4" />
        <p className="font-love-letter text-2xl text-pink-100">
          Where shall we go?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATE_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className="group relative bg-white/5 hover:bg-pink-500/20 border border-white/10 p-5 rounded-2xl flex items-center gap-5 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,100,100,0.2)] hover:-translate-y-1"
          >
            <div className="text-4xl transform transition-transform group-hover:scale-125 group-hover:rotate-12 duration-500">
              {option.icon}
            </div>
            <div className="text-left">
              <span className="block text-white font-medium group-hover:text-pink-100 transition-colors">
                {option.label}
              </span>
              <span className="text-white/40 text-xs uppercase tracking-tighter">Romantic Choice</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="font-signature text-2xl text-pink-300/40">Choosing with love...</div>
      </div>
    </div>
  );
};

export default DatePlanner;
