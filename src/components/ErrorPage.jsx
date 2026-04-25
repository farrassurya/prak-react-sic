// NEW: Reusable error page component
export default function ErrorPage({ errorCode = 404, description = "Page not found", image = "" }) {
  return (
    /* Gunakan 'fixed inset-0' untuk mengunci container ke seluruh layar.
       'overflow-hidden' memastikan tidak ada scrollbar yang muncul.*/
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 p-6 overflow-hidden">
      
      {/* Background Decor (Subtle) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/40 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-xl text-center">
        
        {/* Error Code dengan Typography Kuat */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-slate-900 leading-none">
          {errorCode}
        </h1>

        {/* Deskripsi */}
        <p className="mt-4 text-lg md:text-xl font-semibold text-slate-500 uppercase tracking-wide">
          {description}
        </p>

        {/* Image Section - Dibatasi max-height-nya agar tidak melebihi sisa ruang layar */}
        {image ? (
          <div className="mt-8 flex justify-center">
            <div className="relative p-2 bg-white rounded-[2rem] shadow-2xl shadow-slate-200 ring-1 ring-slate-100">
              <img
                src={image}
                alt={`Error ${errorCode}`}
                /* max-h-[45vh] menjaga gambar tidak terlalu besar sehingga tidak memicu scroll */
                className="max-h-[45vh] w-auto rounded-[1.5rem] object-contain"
              />
            </div>
          </div>
        ) : null}

        {/* Action Button */}
        <div className="mt-10">
          <button 
            onClick={() => window.history.back()}
            className="group relative px-8 py-3 font-bold text-white transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-slate-900 rounded-full transition-all group-hover:scale-105 group-active:scale-95"></span>
            <span className="relative">Kembali ke Beranda</span>
          </button>
        </div>

      </div>
    </div>
  );
}