const webTech = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const cloudTech = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
];

const TechCard = ({ name, icon }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black-200 border border-black-300 hover:border-white/20 transition-colors">
    <img
      src={icon}
      alt={name}
      className="w-10 h-10 object-contain"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
    <p className="text-xs text-white-600 text-center font-medium">{name}</p>
  </div>
);

const Technologies = () => {
  return (
    <section className="c-space my-20" id="technologies">
      <div className="w-full text-white-600">
        <p className="head-text">Technologies</p>

        <div className="mt-10 space-y-10">
          <div>
            <p className="text-lg font-semibold text-white mb-4">Web Development</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3">
              {webTech.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-white mb-4">Cloud & DevOps</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {cloudTech.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
