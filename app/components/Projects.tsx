import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Світові дані про модулі Full-Screen — новий рівень ефективності!",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-13.04.25-2.webp",
  },
  {
    id: 2,
    title: "Глобальний проєкт: 2,3 МВт безрамкових Full-Screen панелей DAH Solar",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-10.22.59.webp",
  },
  {
    id: 3,
    title: "Україна. Сонячна система Carports",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-19-at-14.29.05.webp",
  },
  {
    id: 4,
    title: "Сонячна електростанція в горах",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/whatsapp-image-2024-11-08-at-12.51.09-1.webp",
  },
  {
    id: 5,
    title: "Приватні будинки з сонячними панелями",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/20200426191053_50718.webp",
  },
  {
    id: 6,
    title: "Дахові сонячні електростанції для бізнесу",
    image: "https://nrg.com.ua/wp-content/uploads/2024/11/20201119162425_23381.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <span className="text-sm text-gray-500 uppercase tracking-wider">Головна / Проєкти</span>
          <h2 className="mt-2 text-4xl font-bold text-black uppercase">ПРОЄКТИ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
