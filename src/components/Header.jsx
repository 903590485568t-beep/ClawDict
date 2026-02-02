import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-claw-bg/90 backdrop-blur-sm border-b-2 border-claw-primary/50 p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2 animate-bounce cursor-pointer group">
        <span className="text-4xl group-hover:rotate-12 transition-transform">🦞</span>
        <h1 className="text-3xl font-bold tracking-tighter text-claw-text">ClawDict</h1>
      </div>
      
      <div className="flex gap-4">
        <button className="hidden md:block hover:underline decoration-wavy decoration-2 text-claw-text hover:text-claw-primary transition-colors">Markets</button>
        <button className="hidden md:block hover:underline decoration-wavy decoration-2 text-claw-text hover:text-claw-primary transition-colors">News</button>
        <button className="bg-claw-secondary text-white border border-claw-primary px-4 py-1 rounded-full hover:bg-claw-primary transition-all hover:-rotate-2 shadow-[2px_2px_0px_0px_#800000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
