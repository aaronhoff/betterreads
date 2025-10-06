export function YearByYearSection() {
  const timeline = [
    {
      year: "2011",
      title: "The Beginning",
      description: "Started with Augusten Burroughs",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-900"
    },
    {
      year: "2013-2015",
      title: "Peak Discovery",
      description: "19-21 books/year consistently",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-900"
    },
    {
      year: "2018",
      title: "The Dip",
      description: "Dropped to 12 books",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-900"
    },
    {
      year: "2020",
      title: "Pandemic Reading",
      description: "Surged to 21 books",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-900"
    },
    {
      year: "2022",
      title: "The Quiet Year",
      description: "Only 2 books",
      color: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      textColor: "text-gray-900"
    },
    {
      year: "2024",
      title: "Record Breaker",
      description: "25 books, your best year",
      color: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-900"
    },
    {
      year: "2025",
      title: "Strong Start",
      description: "16 books so far",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-900"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-teal-50 to-cyan-50 px-8 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-teal-900 mb-4">
            How Your Reading Has Evolved
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-teal-300 rounded-full"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`ml-20 bg-gradient-to-r ${item.color} rounded-2xl p-6 border ${item.borderColor} shadow-lg flex-1`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-xl font-bold ${item.textColor} mb-1`}>
                        {item.year}
                      </div>
                      <div className={`text-2xl font-bold ${item.textColor} mb-2`}>
                        {item.title}
                      </div>
                      <div className={`text-lg ${item.textColor.replace('900', '700')}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

