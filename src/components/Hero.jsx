import React from 'react';

const Hero = ({ onBetClick }) => {
  return (
    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-visible">
      
      {/* Floating lobster decoration */}
      <div className="absolute top-0 left-1/4 text-6xl opacity-20 animate-bounce delay-700 pointer-events-none select-none">🦞</div>
      <div className="absolute bottom-10 right-1/4 text-4xl opacity-10 animate-pulse delay-300 pointer-events-none select-none">🧂</div>
      
      <div className="max-w-xl space-y-6 z-10">
        <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 rotate-[-2deg] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-2 cursor-help hover:scale-110 transition-transform">
           $ClawDict on Pumpfun 🚀
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black leading-none transform -rotate-1">
          Predict <br/>
          <span className="text-claw-primary decoration-wavy underline decoration-4">Crypto</span> Chaos!
        </h2>
        <p className="text-xl md:text-2xl border-l-4 border-black pl-4">
          The only prediction market run by a <span className="font-bold text-claw-primary">Lobster</span> named Claw. 
          Bigger claws, bigger gains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onBetClick}
            className="bg-claw-primary text-white text-xl border-2 border-black px-8 py-3 wonky-border hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-2"
          >
            <span>🦞</span> Place a Bet
          </button>
          <button className="bg-green-400 text-xl border-2 border-black px-8 py-3 wonky-border hover:rotate-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-bold flex items-center justify-center gap-2">
            <span>💸</span> Buy $ClawDict
          </button>
        </div>
        
        {/* Small funny references */}
        <div className="text-sm font-mono opacity-60 rotate-1">
            * Claw pinch: Strong Buy signal
        </div>
      </div>
      
      <div className="relative w-64 h-64 md:w-96 md:h-96 z-10 group">
        {/* Abstract "Child Drawing" of a Lobster */}
        <div className="absolute inset-0 bg-red-400 wonky-border animate-pulse opacity-20 rotate-3 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute inset-0 border-4 border-black bg-claw-primary wonky-border flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 overflow-hidden">
            <span className="text-9xl filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-300">🦞</span>
            
            {/* Hidden Claws appearing on hover */}
            <span className="absolute -left-4 top-1/2 text-6xl transform -translate-y-1/2 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">✂️</span>
            <span className="absolute -right-4 top-1/2 text-6xl transform -translate-y-1/2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">✂️</span>
        </div>
        
        {/* Speech Bubble */}
        <div className="absolute -top-12 -right-12 bg-white p-4 border-2 border-black wonky-border-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12 z-20 group-hover:rotate-6 transition-transform">
          <p className="font-bold text-lg">Pinch the Dip!</p>
        </div>
        
        {/* Tiny Easter Egg */}
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-yellow-200 border border-black p-1 text-xs rotate-[-10deg] shadow-sm">
            Not a shrimp!
        </div>
      </div>
    </div>
  );
};

export default Hero;
