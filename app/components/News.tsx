const news = [
  {
    id: 1,
    date: "28.03.2025",
    title: "DAH Solar на Solar & Storage Live 2024: Відкриваємо майбутнє разом!",
    excerpt: "DAH Solar бере участь у провідній виставці Solar & Storage Live, що проходить у The NEC, Бірмінгем...",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-13.04.25-2.webp",
  },
  {
    id: 2,
    date: "28.03.2025",
    title: "DAH Solar на Intersolar 2024: Інновації, які ведуть у майбутнє",
    excerpt: "На виставці Intersolar 2024 DAH Solar з гордістю представили новітні досягнення в галузі...",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <span className="text-sm text-gray-500 uppercase tracking-wider">Головна / Новини в світі енергетики</span>
          <h2 className="mt-2 text-4xl font-bold text-black uppercase">НОВИНИ В СВІТІ ЕНЕРГЕТИКИ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 mb-6">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-green-700 font-bold text-sm bg-green-50 px-2 py-1 rounded">{item.date}</span>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
