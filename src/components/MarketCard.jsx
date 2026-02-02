import React, { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const MarketCard = ({ market }) => {
  const [voted, setVoted] = useState(null);

  const handleVote = (type) => {
    setVoted(type);
    // Here we would trigger confetti or something
  };

  return (
    <div className={`relative group ${market.color} border-4 border-red-600 p-4 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ff0000] shadow-[4px_4px_0px_0px_#ff0000] wonky-border flex flex-col h-full`}>
      
      {/* Header Image */}
      <div className="absolute -top-6 -right-6 bg-black w-16 h-16 border-2 border-red-600 rounded-full flex items-center justify-center text-3xl shadow-[2px_2px_0px_0px_#ff0000] z-10">
        {market.image}
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold leading-tight mb-2 pr-8 text-white">{market.question}</h3>
        <p className="text-sm font-semibold opacity-80 text-gray-200">{market.description}</p>
      </div>

      {/* Progress Bar styled as a drawn line */}
      <div className="mt-auto space-y-4">
        <div className="flex justify-between items-end">
            <span className="text-3xl font-black text-red-500">{market.chance}%</span>
            <span className="text-sm font-bold flex items-center gap-1 text-gray-300">
                <TrendingUp size={16} /> Vol: {market.volume}
            </span>
        </div>

        <div className="w-full h-4 border-2 border-red-600 rounded-full p-0.5 bg-black">
            <div 
                className="h-full bg-claw-secondary rounded-full border-r-2 border-red-600" 
                style={{ width: `${market.chance}%` }}
            ></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
            <button 
                onClick={() => handleVote('yes')}
                className={`py-2 border-2 border-red-600 rounded-xl font-bold transition-all
                ${voted === 'yes' ? 'bg-green-700 text-white translate-y-[2px] shadow-none' : 'bg-green-900 text-green-200 hover:bg-green-800 shadow-[2px_2px_0px_0px_#ff0000]'}
                `}
            >
                YES
            </button>
            <button 
                onClick={() => handleVote('no')}
                className={`py-2 border-2 border-red-600 rounded-xl font-bold transition-all
                ${voted === 'no' ? 'bg-red-700 text-white translate-y-[2px] shadow-none' : 'bg-red-900 text-red-200 hover:bg-red-800 shadow-[2px_2px_0px_0px_#ff0000]'}
                `}
            >
                NO
            </button>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
