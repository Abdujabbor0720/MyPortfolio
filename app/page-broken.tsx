export default function HomePage() {
  const SKILLS = [
    "Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
    "REST API", "GraphQL", "WebSocket", "Microservices", "JWT",
    "TypeORM", "Prisma", "Mongoose", "Git", "GitHub",
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
      description: "PostgreSQL, MongoDB va Redis bilan samarali ma'lumotlar bazalarini loyihalash."
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
      title: "E-commerce Backend API",
      description: "Katta hajmdagi onlayn savdo platformasi uchun mikroservis arxitekturasi",
      tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      status: "production"
    },
    {
      title: "Real-time Chat System", 
      description: "WebSocket texnologiyasi asosida qurilgan chat tizimi",
      tech: ["NestJS", "Socket.io", "MongoDB"],
      status: "production"
    },
    {
      title: "Payment Processing API",
      description: "To'lov tizimi uchun xavfsiz va tezkor API",
      tech: ["Express.js", "TypeScript", "JWT"],
      status: "development"
    }
  ];
export default function HomePage() {
  const SKILLS = [
    "Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
    "REST API", "GraphQL", "WebSocket", "Microservices", "JWT",
    "TypeORM", "Prisma", "Mongoose", "Git", "GitHub",
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
      description: "PostgreSQL, MongoDB va Redis bilan samarali ma'lumotlar bazalarini loyihalash."
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
      title: "E-commerce Backend API",
      description: "Katta hajmdagi onlayn savdo platformasi uchun mikroservis arxitekturasi",
      tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      status: "production"
    },
    {
      title: "Real-time Chat System", 
      description: "WebSocket texnologiyasi asosida qurilgan chat tizimi",
      tech: ["NestJS", "Socket.io", "MongoDB"],
      status: "production"
    },
    {
      title: "Payment Processing API",
      description: "To'lov tizimi uchun xavfsiz va tezkor API",
      tech: ["Express.js", "TypeScript", "JWT"],
      status: "development"
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
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-80">Yillik Tajriba</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Loyihalar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-80">Texnologiyalar</div>
              </div>
            </div>
          </div>
        </div>
      </section>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>50+ loyiha</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Najot Ta'lim bitiruvchisi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Men haqimda
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Najot Ta'lim IT o'quv markazida Backend Development yo'nalishi bo'yicha professional ta'lim olganman. 
                  Node.js, PostgreSQL va zamonaviy backend texnologiyalar bilan korporativ darajadagi loyihalar ustida ishlayman.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Har bir loyihada clean code printsiplari, SOLID tamoyillari va eng yaxshi amaliyotlarni qo'llayman. 
                  API arxitekturasidan ma'lumotlar bazasi optimallashtirishgacha - to'liq backend ekosistemasini yaratishga qodirman.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Yillik tajriba</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Muvaffaqiyatli loyiha</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-2xl font-bold">NT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Najot Ta'lim</h3>
                    <p className="text-gray-600 dark:text-gray-300">Backend Development</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Zamonaviy backend texnologiyalar, API dizayni, ma'lumotlar bazasi boshqaruvi va 
                  cloud deployment bo'yicha chuqur bilim va amaliy ko'nikmalar egallagan.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'PostgreSQL', 'Docker', 'API Design', 'Clean Code'].map((skill) => (
                    <span key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Texnologiyalar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Professional backend rivojlantirish uchun zamonaviy vositalar va texnologiyalar
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SKILLS.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm card-hover group">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Xizmatlar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sizning biznesingiz uchun to'liq backend yechimlar va texnik maslahatlar
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                So'nggi Loyihalar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional darajada yaratilgan backend yechimlar va API'lar bilan tanishing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.slice(0, 6).map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg card-hover overflow-hidden group">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === 'production' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {project.status === 'production' ? 'Faol' : 'Rivojlantirilmoqda'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="/projects" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0v-5a2 2 0 011-1h1a2 2 0 011 1v5m-4 0V8a1 1 0 011-1h1a1 1 0 011 1v13m-4 0h4" />
                </svg>
                Barcha loyihalarni ko'rish
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loyihangizni Boshlaylik!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Professional backend yechimlar va zamonaviy texnologiyalar bilan 
              sizning g'oyangizni muvaffaqiyatli loyihaga aylantirish uchun tayyor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:abdujabborsharobiddinov5@gmail.com" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email orqali yozing
              </a>
              <a href="https://t.me/AbdujabborSharobiddinov" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram orqali
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}