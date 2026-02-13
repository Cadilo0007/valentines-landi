
// import React, { useState } from 'react';

// interface NameInputProps {
//   onSubmit: (name: string) => void;
// }

// const NameInput: React.FC<NameInputProps> = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (value.trim()) {
//       onSubmit(value);
//     }
//   };

//   const lovePercent = Math.min(value.length * 10, 100);

//   return (
//     <div className="glass-card p-12 rounded-[3rem] border-pink-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
//       <div className="text-center mb-12">
//         <div className="text-6xl mb-6">✍️</div>
//         <h1 className="font-title text-6xl text-white mb-3">Addressing...</h1>
//         <p className="font-love-letter text-2xl text-pink-200/70 italic">To the one who holds my heart's key</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-12">
//         <div className="relative group">
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             placeholder="Recipient's Name"
//             className="w-full bg-transparent border-b-2 border-white/10 text-white font-love-letter text-5xl px-2 py-4 focus:outline-none focus:border-pink-500 transition-all placeholder:text-white/5 text-center"
//             autoFocus
//           />
          
//           {/* Heart progress bar */}
//           <div className="mt-6 flex items-center gap-4 px-10">
//             <span className="text-xs text-white/30 font-bold uppercase tracking-widest">Love Level</span>
//             <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
//               <div 
//                 className="h-full bg-gradient-to-r from-pink-700 to-rose-400 transition-all duration-700"
//                 style={{ width: `${lovePercent}%` }}
//               />
//             </div>
//             <span className="text-pink-400 text-lg">❤️</span>
//           </div>
//         </div>
        
//         <button
//           type="submit"
//           className="w-full shimmer-btn text-white font-bold py-5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-20 disabled:scale-100 text-xl tracking-wide"
//           disabled={!value.trim()}
//         >
//           Unveil the Message 💖
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NameInput;
