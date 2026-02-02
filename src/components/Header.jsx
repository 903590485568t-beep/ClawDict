import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-claw-bg border-b-4 border-black p-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 animate-bounce cursor-pointer group">
        <span className="text-4xl group-hover:rotate-12 transition-transform">🦞</span>
        <h1 className="text-3xl font-bold tracking-tighter">ClawDict</h1>
      </div>
      
      <div className="flex gap-4">
        <button className="hidden md:block hover:underline decoration-wavy decoration-2">Markets</button>
        <button className="hidden md:block hover:underline decoration-wavy decoration-2">News</button>
        <button className="bg-claw-secondary border-2 border-black px-4 py-1 rounded-full hover:bg-teal-300 transition-transform hover:-rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
