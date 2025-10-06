export function BigPictureSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 px-6 py-16 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238b5e3c' stroke-width='1' fill-rule='evenodd'%3E%3Cpath d='M30 30V0M30 30H0M30 30v30M30 30h30'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 bg-clip-text text-transparent mb-4">
            Reading by the Numbers
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            A comprehensive look at your reading journey through data
          </p>
        </div>

        {/* Main Stats Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-200/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">📚</div>
              <div className="text-5xl font-bold bg-gradient-to-br from-amber-800 to-orange-700 bg-clip-text text-transparent mb-3">223</div>
              <div className="text-lg text-amber-700 font-medium">Total Books Read</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-emerald-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">📄</div>
              <div className="text-5xl font-bold bg-gradient-to-br from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-3">73,949</div>
              <div className="text-lg text-emerald-700 font-medium">Total Pages</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-amber-200/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-yellow-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">⭐</div>
              <div className="text-5xl font-bold bg-gradient-to-br from-yellow-800 to-amber-700 bg-clip-text text-transparent mb-3">3.5</div>
              <div className="text-lg text-yellow-700 font-medium">Average Rating</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-indigo-200/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">📅</div>
              <div className="text-5xl font-bold bg-gradient-to-br from-purple-800 to-indigo-700 bg-clip-text text-transparent mb-3">15</div>
              <div className="text-lg text-purple-700 font-medium">Years Tracked</div>
            </div>
          </div>
        </div>

        {/* Additional Stats - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-orange-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-3xl font-bold text-orange-800 mb-2">15</div>
              <div className="text-sm text-orange-600 font-medium">Books per year</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-teal-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📖</div>
              <div className="text-3xl font-bold text-teal-800 mb-2">~14</div>
              <div className="text-sm text-teal-600 font-medium">Pages per day</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-rose-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">✍️</div>
              <div className="text-3xl font-bold text-rose-800 mb-2">177</div>
              <div className="text-sm text-rose-600 font-medium">Unique authors</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-indigo-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📏</div>
              <div className="text-3xl font-bold text-indigo-800 mb-2">1,177</div>
              <div className="text-sm text-indigo-600 font-medium">Longest book pages</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📋</div>
              <div className="text-3xl font-bold text-emerald-800 mb-2">333</div>
              <div className="text-sm text-emerald-600 font-medium">Avg book length</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

