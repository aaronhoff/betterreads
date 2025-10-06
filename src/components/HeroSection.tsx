import { ChevronDown, BookOpen, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b5e3c' fill-opacity='1'%3E%3Cpath d='M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0S20 20 20 20'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-8">
        {/* Main title with decorative elements */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            <BookOpen className="w-12 h-12 text-primary" />
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          </div>
          
          <h1 className="text-8xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 bg-clip-text text-transparent leading-tight">
            Betterreads
          </h1>
          
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <p className="text-2xl text-amber-800 font-medium">
              Your Goodreads data visualized
            </p>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
        </div>
        
        {/* Enhanced stats card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-3xl blur-xl scale-105"></div>
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-br from-amber-800 to-orange-700 bg-clip-text text-transparent mb-2">
                  223
                </div>
                <div className="text-xl text-amber-700 font-medium">
                  Books Analyzed
                </div>
              </div>
              
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-amber-300 to-transparent mx-auto"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-800 mb-4">
                  2011–2025
                </div>
                <div className="text-lg text-amber-600">
                  15 Years of Reading
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 flex flex-col items-center animate-bounce">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          <p className="text-amber-800 font-medium">Scroll to explore</p>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
        </div>
        <div className="p-2 rounded-full bg-white/80 shadow-lg">
          <ChevronDown className="w-5 h-5 text-amber-700" />
        </div>
      </div>
    </section>
  );
}

