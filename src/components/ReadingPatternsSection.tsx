export function ReadingPatternsSection() {
  const insights = [
    {
      title: "Reading Pace",
      content: "You read ~14 pages per day on average",
      subtitle: "That's one book every 24 days",
      icon: "📖",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-900"
    },
    {
      title: "Rating Trends",
      content: "Your average rating stays consistent at 3.5 stars",
      subtitle: "A reliable reading compass",
      icon: "⭐",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      textColor: "text-amber-900"
    },
    {
      title: "Reading Consistency",
      content: "Most consistent: 2013-2016 (averaging 20 books/year)",
      subtitle: "Quietest year: 2022 with only 2 books",
      icon: "📊",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-900"
    },
    {
      title: "Fun Facts",
      content: "73,949 pages = 185 copies of The Great Gatsby",
      subtitle: "~18.5 million words read",
      icon: "🎯",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-900"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-slate-50 to-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Reading Insights & Patterns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${insight.bgColor} rounded-2xl p-8 border ${insight.borderColor} shadow-lg`}
            >
              <div className="text-5xl mb-6">{insight.icon}</div>
              <div className={`text-2xl font-bold ${insight.textColor} mb-4`}>
                {insight.title}
              </div>
              <div className={`text-lg ${insight.textColor} mb-3`}>
                {insight.content}
              </div>
              <div className={`text-base ${insight.textColor.replace('900', '700')}`}>
                {insight.subtitle}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200 inline-block">
            <div className="text-2xl font-bold text-slate-900 mb-2">
              📚 Dave Eggers: Your most trusted author (9 books)
            </div>
            <div className="text-slate-700">
              When in doubt, reach for an Eggers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

