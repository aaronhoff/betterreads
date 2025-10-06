import { BookOpen, Share2, Download, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 text-white py-20 px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M20 20v40M60 20v40M20 20h40M20 60h40'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo and tagline */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <BookOpen className="w-12 h-12 text-amber-300" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                Betterreads
              </h2>
              <Sparkles className="w-8 h-8 text-amber-300" />
            </div>
            <p className="text-2xl text-amber-100 font-light">
              Your Goodreads data visualized beautifully
            </p>
          </div>

          {/* Enhanced stats summary */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-3">
                  <div className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
                    223
                  </div>
                  <div className="text-amber-200 font-medium uppercase tracking-wider">
                    Books Read
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                    73,949
                  </div>
                  <div className="text-amber-200 font-medium uppercase tracking-wider">
                    Pages Turned
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
                    15
                  </div>
                  <div className="text-amber-200 font-medium uppercase tracking-wider">
                    Years of Stories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button className="group relative bg-white/20 hover:bg-white/30 transition-all duration-300 px-8 py-4 rounded-2xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-amber-200 group-hover:text-white transition-colors" />
                <span className="font-medium">Share your reading story</span>
              </div>
            </button>
            <button className="group relative bg-white/20 hover:bg-white/30 transition-all duration-300 px-8 py-4 rounded-2xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-amber-200 group-hover:text-white transition-colors" />
                <span className="font-medium">Export data</span>
              </div>
            </button>
          </div>

          {/* Footer info */}
          <div className="border-t border-amber-700/50 pt-12">
            <div className="text-amber-200 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-px bg-amber-300"></div>
                <p className="font-semibold text-lg">Built with Figma Make</p>
                <div className="w-8 h-px bg-amber-300"></div>
              </div>
              <div className="space-y-2 text-sm opacity-80">
                <p>Data source: Goodreads</p>
                <p>© 2025 | A Figma Make demonstration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

