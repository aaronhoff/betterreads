import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';

const data = [
  { year: '2011', books: 1 },
  { year: '2012', books: 7 },
  { year: '2013', books: 19 },
  { year: '2014', books: 21 },
  { year: '2015', books: 21 },
  { year: '2016', books: 18 },
  { year: '2017', books: 16 },
  { year: '2018', books: 12 },
  { year: '2019', books: 16 },
  { year: '2020', books: 21 },
  { year: '2021', books: 14 },
  { year: '2022', books: 2 },
  { year: '2023', books: 14 },
  { year: '2024', books: 25 },
  { year: '2025', books: 16 },
];

export function ReadingTimelineSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-16 relative">
      {/* Stars background effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(2px 2px at 20px 30px, #fff, transparent),
                         radial-gradient(2px 2px at 40px 70px, #fff, transparent),
                         radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                         radial-gradient(1px 1px at 130px 80px, #fff, transparent),
                         radial-gradient(2px 2px at 160px 30px, #fff, transparent)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-blue-300" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
          <h2 className="text-6xl font-bold text-white mb-6">
            Your Reading Journey Over Time
          </h2>
          <p className="text-2xl text-blue-200 max-w-2xl mx-auto">
            Books read per year from 2011 to 2025
          </p>
        </div>

        {/* Enhanced chart container */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={data} margin={{ top: 30, right: 40, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.3} />
                <XAxis 
                  dataKey="year" 
                  stroke="#64748b"
                  fontSize={14}
                  fontWeight="500"
                  tick={{ fill: '#64748b' }}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={14}
                  fontWeight="500"
                  tick={{ fill: '#64748b' }}
                />
                <Bar dataKey="books" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.year === '2024' ? '#10b981' : 
                        entry.year === '2022' ? '#ef4444' : 
                        entry.year === '2020' ? '#f59e0b' :
                        '#6366f1'
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced insights cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-800 mb-1">Slowest Year</div>
                  <div className="text-red-600">A challenging period</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-red-700 mb-2">2022</div>
              <div className="text-red-600">Only 2 books completed</div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-800 mb-1">Peak Reading Year</div>
                  <div className="text-green-600">Personal record!</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">2024</div>
              <div className="text-green-600">Amazing 25 books completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

