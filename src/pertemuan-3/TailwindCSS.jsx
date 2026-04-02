export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-[#5C94FC] text-white font-sans antialiased overflow-x-hidden selection:bg-yellow-400 selection:text-red-600">
      {/* 1. FLEXBOX & GRID (Navigation - Level Progress Bar Style) */}
      <FlexboxGrid />

      {/* Decorative Clouds & Pipes (Pure CSS Decorations) */}
      <div className="absolute top-20 left-10 opacity-50 select-none">☁️</div>
      <div className="absolute top-40 right-20 opacity-50 select-none">☁️</div>

      <main className="relative max-w-6xl mx-auto p-6 lg:p-12 space-y-16">
        
        {/* 2. TYPOGRAPHY & HEADER (The Title Screen) */}
        <header className="text-center space-y-6 relative z-10">
          <Typography />
          
          <div className="relative inline-block group">
             <h1 className="inline-block border-4 border-black bg-white px-6 py-2 m-4 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-xl font-bold uppercase tracking-widest text-red-600 animate-bounce">
              Level 4-0-4: Learning Tailwind
            </h1>
            <span className="absolute -top-4 -right-2 text-3xl animate-pulse">⭐</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="relative bg-[#E52521] border-b-8 border-black active:border-b-0 active:translate-y-2 text-white font-black text-xl px-10 py-4 rounded-none shadow-2xl transition-all uppercase tracking-tighter">
              Press Start
            </button>
            {/* 3. BORDER RADIUS (The Green Pipe Button) */}
            <BorderRadius />
          </div>
        </header>

        {/* SECTION: GRID LAYOUT (The World Map) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* 4. SPACING (Toad's House) */}
          <Spacing />

          {/* 5. BACKGROUND COLORS (Power-Up Box) */}
          <BackgroundColors />

          {/* 6. SHADOW EFFECTS (Bowser's Castle Vibes) */}
          <ShadowEffects />
          
        </div>
      </main>

      {/* Ground Decoration */}
      <div className="fixed bottom-0 w-full h-8 bg-[#944824] border-t-4 border-[#FFA044] z-0"></div>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-[#000000]/30 backdrop-blur-sm border-b-4 border-black px-6 py-4 shadow-xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white flex items-center justify-center font-bold">M</div>
        <h1 className="text-2xl font-black tracking-tighter text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          MARIO<span className="text-white">CSS</span>
        </h1>
      </div>
      <ul className="hidden md:flex items-center space-x-10 font-bold uppercase text-sm tracking-widest">
        <li><a href="#" className="hover:text-yellow-300 transition-colors drop-shadow-md">World 1-1</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors drop-shadow-md">Items</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors drop-shadow-md">High Score</a></li>
      </ul>
      <div className="text-yellow-400 font-mono text-lg font-bold">
        🪙 x 99
      </div>
    </nav>
  );
}

function Typography() {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[10px_10px_0px_rgba(229,37,33,1)] tracking-tighter uppercase italic">
        Super <span className="text-yellow-400">Tailwind</span>
      </h1>
      <p className="text-blue-100 text-2xl font-bold tracking-tight bg-black/20 inline-block px-4 py-1">
        "It's-a me, a CSS Developer!"
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="border-4 border-black bg-[#43B047] text-white font-black text-xl px-10 py-4 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#39963d] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest">
      Green Pipe
    </button>
  );
}

function Spacing() {
  return (
    <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] p-10 rounded-none relative group overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-red-500 border-b-4 border-l-4 border-black text-white font-bold text-xs">INFO</div>
      <h2 className="text-3xl font-black text-black mb-4 uppercase italic">Toad's Spacing</h2>
      <p className="text-gray-700 font-bold leading-tight">
        Gunakan <span className="text-red-500 underline decoration-4">padding</span> dan <span className="text-red-500 underline decoration-4">margin</span> untuk memberi ruang bernapas pada jamur-jamurmu!
      </p>
      <div className="mt-6 flex gap-2">
        <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-black"></div>
        <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-black"></div>
      </div>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-[#F8D824] border-4 border-black p-8 rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] flex flex-col justify-between transform hover:scale-105 transition-transform group">
      <div className="text-black">
        <h3 className="text-4xl font-black mb-3">? BLOCK</h3>
        <p className="font-bold text-lg leading-none opacity-80 uppercase">
          Mystery colors inside every utility class!
        </p>
      </div>
      <div className="mt-10 flex justify-between items-end">
        <div className="text-6xl font-black text-white/50 group-hover:text-white transition-colors">?</div>
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 bg-white border-2 border-black"></div>
          <div className="w-4 h-4 bg-black"></div>
          <div className="w-4 h-4 bg-black"></div>
          <div className="w-4 h-4 bg-white border-2 border-black"></div>
        </div>
      </div>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-[#333] border-4 border-white p-8 rounded-none shadow-[0px_0px_30px_rgba(0,0,0,0.5)] hover:shadow-[0px_0px_50px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer group text-center flex flex-col items-center">
      <div className="w-20 h-20 bg-white border-4 border-black mb-6 flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-180 transition-all shadow-[0_0_15px_rgba(255,255,255,1)]">
        <span className="text-4xl">👻</span>
      </div>
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Boo! Shadows</h3>
      <p className="text-gray-400 mt-2 font-bold italic">
        "Watch out for the dark elevation effects."
      </p>
    </div>
  );
}