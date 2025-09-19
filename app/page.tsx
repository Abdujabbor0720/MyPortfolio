export default function HomePage() {
  const SKILLS = [
    "Node.js", "NestJS", "TypeScript", "JavaScript",
    "PostgreSQL", "Redis", "Docker", "Kubernetes",
    "REST API", "GraphQL", "WebSocket", "Microservices", "JWT",
    "TypeORM", "Prisma", "Git", "GitHub",
    "AWS", "Digital Ocean", "Nginx", "PM2", "Jest"
  ];

  const SERVICES = [
    {
      icon: "🏗️",
      title: "Backend Arxitektura",
      description: "Korporativ darajadagi backend arxitekturalari va mikroservis tizimlarini loyihalash va yaratish."
    },
    {
      icon: "🔌",
      title: "API Rivojlantirish",
      description: "REST va GraphQL API'larni professional standartlarda yaratish va hujjatlash."
    },
    {
      icon: "🗄️",
      title: "Ma'lumotlar Bazasi",
      description: "PostgreSQL va Redis bilan samarali ma'lumotlar bazalarini loyihalash va optimallashtirish."
    },
    {
      icon: "☁️",
      title: "Cloud va DevOps",
      description: "Docker, Kubernetes va cloud platformalar orqali deployment va scaling."
    },
    {
      icon: "🔒",
      title: "Xavfsizlik",
      description: "JWT authentication, ma'lumotlarni shifrlash va API xavfsizligini ta'minlash."
    },
    {
      icon: "⚡",
      title: "Optimallashtirish",
      description: "Tizim samaradorligini oshirish, caching va load balancing yechimlar."
    }
  ];

  const PROJECTS = [
    {
      title: "TechHub Company Dashboard",
      description: "Korporativ boshqaruv tizimi va analytics dashboard",
      tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      status: "production",
      github: "https://github.com/abdujabbor"
    },
    {
      title: "Real-time Chat System",
      description: "WebSocket texnologiyasi asosida qurilgan chat tizimi",
      tech: ["NestJS", "Socket.io", "PostgreSQL"],
      status: "production",
      github: "https://github.com/abdujabbor"
    },
    {
      title: "Payment Processing API",
      description: "To'lov tizimi uchun xavfsiz va tezkor API",
      tech: ["NestJS", "TypeScript", "JWT"],
      status: "development",
      github: "https://github.com/abdujabbor"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-lg bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full border border-white/20">
              <div className="status-dot status-online"></div>
              <span className="text-sm font-medium">Ishga tayyor</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-display">
              Professional <span className="text-gradient">Backend</span> Developer
            </h1>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-lead font-semibold">
                Abdujabbor Sharobiddinov
              </p>
              <p className="text-body max-w-3xl mx-auto">
                Korporativ darajadagi backend yechimlar va API arxitekturalari yaratuvchi professional dasturchi.
                Zamonaviy texnologiyalar va eng yaxshi amaliyotlar bilan ishonchli, kengaytiriladigan tizimlar quraman.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0v-5a2 2 0 011-1h1a2 2 0 011 1v5m-4 0V8a1 1 0 011-1h1a1 1 0 011 1v13m-4 0h4" />
                </svg>
                Loyihalarni Ko'rish
              </a>
              <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Bog'lanish
              </a>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">TechHub</div>
                <div className="text-sm opacity-80">Kompaniya</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3+ oy</div>
                <div className="text-sm opacity-80">Ish Tajribasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-80">Texnologiyalar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900 section-light dark:section-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <span className="badge badge-info">Men haqimda</span>
              <h2 className="heading-2">Professional Backend Developer</h2>
            </div>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-body text-lg max-w-3xl mx-auto">
                  TechHub hususiy kompaniyasida backend developer sifatida ishlayman (2024-yil iyulidan beri).
                  Node.js, NestJS va PostgreSQL asosida professional yechimlar yaratish va murakkab texnik
                  masalalarni hal qilishda tajribaga egaman.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card card-interactive p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">TH</span>
                    </div>
                    <div>
                      <h3 className="heading-4">TechHub Company</h3>
                      <p className="text-blue-600 font-semibold">Backend Developer</p>
                      <p className="text-small text-gray-500">2024-yil iyulidan hozir</p>
                    </div>
                  </div>
                </div>

                <div className="card card-interactive p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-green-600 dark:text-green-400 text-2xl font-bold">NT</span>
                    </div>
                    <div>
                      <h3 className="heading-4">Najot Ta'lim</h3>
                      <p className="text-green-600 font-semibold">Backend Development</p>
                      <p className="text-small text-gray-500">Node.js, NestJS, PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <span className="badge badge-info">Texnologiyalar</span>
            <h2 className="heading-2">Texnik Ko'nikmalar</h2>
            <p className="text-body max-w-2xl mx-auto">
              Zamonaviy backend texnologiyalari va asboblar bilan professional darajada ishlayman
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SKILLS.map((skill, index) => (
              <div key={index} className="card p-4 text-center hover-lift">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <span className="badge badge-info">Xizmatlar</span>
            <h2 className="heading-2">Professional Xizmatlar</h2>
            <p className="text-body max-w-2xl mx-auto">
              Biznes ehtiyojlariga mos keluvchi texnik yechimlar taklif etaman
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="card p-6 card-hover">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-4 mb-3">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <span className="badge badge-info">Loyihalar</span>
            <h2 className="heading-2">So'nggi Loyihalar</h2>
            <p className="text-body max-w-2xl mx-auto">
              Professional darajada yaratilgan backend yechimlar va API'lar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={index} className="card p-6 card-hover">
                <h3 className="heading-4 mb-3">{project.title}</h3>
                <p className="text-body mb-4">{project.description}</p>
                <div className="tech-stack mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`badge ${project.status === 'production'
                      ? 'badge-success'
                      : 'badge-warning'
                    }`}>
                    {project.status === 'production' ? 'Faol' : 'Rivojlantirilmoqda'}
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <span className="badge bg-white/20 text-white border-white/30">Bog'lanish</span>
              <h2 className="heading-2">Hamkorlik Qilaylik</h2>
              <p className="text-lead">
                Loyihangiz uchun professional backend yechimlar kerakmi?
                Keling, birgalikda ajoyib mahsulot yarataylik!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:abdujabborsharobiddinov5@gmail.com" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email orqali yozing
              </a>
              <a href="https://t.me/AbdujabborSharobiddinov" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram orqali
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
