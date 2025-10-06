import { Award, Star, BookOpen, Crown, Target, Calendar, BarChart3, Trophy } from 'lucide-react';

export function ReadingSuperlativesSection() {
  const superlatives = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Most Productive Year',
      value: '2024',
      subtitle: '25 books',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Longest Book',
      value: 'A Storm of Swords',
      subtitle: 'George R.R. Martin - 1,177 pages',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Total 5-Star Books',
      value: '45',
      subtitle: 'Your favorites',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'First Book Tracked',
      value: 'Dry',
      subtitle: 'Augusten Burroughs - December 2011',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Most Read Author',
      value: 'Dave Eggers',
      subtitle: '9 books',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Average Book',
      value: '333 pages',
      subtitle: '3.5 stars',
      gradient: 'from-indigo-400 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Years of Data',
      value: '15 years',
      subtitle: '2011-2025',
      gradient: 'from-pink-400 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Most Common Rating',
      value: '4 stars',
      subtitle: '33% of all books',
      gradient: 'from-teal-400 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <Trophy className="w-8 h-8 text-rose-500" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Your Reading Highlights
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Celebrating the remarkable moments in your literary journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {superlatives.map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-105`}></div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm`}>
                {/* Icon */}
                <div className={`${item.iconBg} ${item.iconColor} p-4 rounded-2xl w-fit mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-br ${item.gradient} rounded-full opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

