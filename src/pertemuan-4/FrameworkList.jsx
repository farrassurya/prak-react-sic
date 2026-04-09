import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        // Background Biru Langit Kamar Andy dengan awan putih (pola dot)
        <div className="min-h-screen bg-[#60a5fa] bg-[radial-gradient(#ffffff_20px,transparent_20px)] [background-size:100px_100px] p-8 font-mono">
            
            {/* Header ala Plang Mainan */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-block bg-yellow-400 border-[6px] border-black px-10 py-4 shadow-[10px_10px_0px_#000] -rotate-1">
                    <h1 className="text-5xl font-black text-black uppercase tracking-tighter">
                        TOY <span className="text-red-600">STORY</span> LIST
                    </h1>
                </div>
                <p className="mt-6 font-bold text-white text-xl drop-shadow-[2px_2px_0px_#000] uppercase">
                    "Koleksi Framework Milik Andy"
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="relative bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all group"
                    >
                        {/* Badge ID ala Nomor Seri Mainan */}
                        <div className="absolute -top-6 -left-6 bg-red-500 border-[4px] border-black text-white w-12 h-12 flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_#000]">
                            {item.id}
                        </div>

                        {/* Judul Framework */}
                        <h2 className="text-3xl font-black text-blue-700 uppercase mb-4 border-b-[4px] border-black pb-2 group-hover:text-red-500">
                            {item.name}
                        </h2>

                        <div className="space-y-4">
                            <p className="text-black font-bold text-lg leading-tight">
                                {item.description}
                            </p>

                            {/* Info Box ala Kartu Stats Buzz Lightyear */}
                            <div className="bg-yellow-100 border-[4px] border-black p-4 space-y-1">
                                <p className="text-sm font-black uppercase">
                                    <span className="text-blue-600">DEVELOPER:</span> {item.details.developer}
                                </p>
                                <p className="text-sm font-black uppercase">
                                    <span className="text-blue-600">RELEASE:</span> {item.details.releaseYear}
                                </p>
                            </div>

                            {/* Tombol Action ala Tombol Laser Buzz */}
                            <a 
                                href={item.details.officialWebsite} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#22c55e] border-[4px] border-black text-black font-black py-3 text-center uppercase shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                VISIT TOY BOX 🚀
                            </a>
                        </div>

                        {/* Aksen bulat-bulat di pojok biar makin terasa Retro/Toy-ish */}
                        <div className="absolute bottom-2 right-2 flex gap-1">
                            <div className="w-3 h-3 bg-red-500 border-2 border-black rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 border-2 border-black rounded-full"></div>
                            <div className="w-3 h-3 bg-blue-500 border-2 border-black rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tulisan ANDY di bawah */}
            <footer className="mt-20 text-center opacity-40">
                <p className="text-7xl font-black text-black opacity-20 rotate-2 italic">
                    A N D Y
                </p>
            </footer>
        </div>
    )
}