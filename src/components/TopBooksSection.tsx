import { Star, BookOpen } from "lucide-react";

export function TopBooksSection() {
  const topBooks = [
    { title: "We All Shine On: John, Yoko, and Me", author: "Elliot Mintz" },
    { title: "What Belongs to You", author: "Garth Greenwell" },
    { title: "The Secret History", author: "Donna Tartt" },
    { title: "Martyr!", author: "Kaveh Akbar" },
    { title: "James", author: "Percival Everett" },
    { title: "The Keeper of the Ornaments", author: "Dave Eggers" },
    { title: "Wellness", author: "Nathan Hill" },
    { title: "Middlesex", author: "Jeffrey Eugenides" },
    { title: "Blackouts", author: "Justin Torres" },
    { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin" },
    { title: "The Song of Achilles", author: "Madeline Miller" },
    { title: "Little Fires Everywhere", author: "Celeste Ng" }
  ];

  // Split books into columns for better readability
  const columns = [
    topBooks.slice(0, 4),
    topBooks.slice(4, 8),
    topBooks.slice(8, 12)
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-6 py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-4">
            Your All-Time Favorites
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Books you rated 5 stars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((book, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-indigo-500 mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-800 mb-2 leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-slate-600 mb-3">
                        by {book.author}
                      </p>
                      
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className="w-4 h-4 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg">
            These represent the cream of the crop from your 15 years of reading
          </p>
        </div>
      </div>
    </section>
  );
}

