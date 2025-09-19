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

            {/* About Section */}
            <section id="about" className="section bg-white dark:bg-gray-900">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <span className="badge badge-info">Men haqimda</span>
                                <h2 className="heading-2">
                                    Professional Backend Developer
                                </h2>
                                <p className="text-body">
                                    5+ yillik tajribaga ega professional backend dasturchi sifatida, korporativ darajadagi
                                    yechimlar yaratish va murakkab texnik masalalarni hal qilishda chuqur bilimga egaman.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-blue-600">50+</div>
                                    <div className="text-small">Bajarilgan loyihalar</div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-blue-600">15+</div>
                                    <div className="text-small">Texnologiyalar</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="heading-4">Ta'lim</h3>
                                <div className="card p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <span className="text-blue-600 dark:text-blue-400 font-bold">NT</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Najot Ta'lim</h4>
                                            <p className="text-small">Backend Development kursi</p>
                                            <p className="text-small text-gray-500">Node.js, Express.js, MongoDB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="heading-4">Asosiy Ko'nikmalar</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>Backend Development</span>
                                            <span className="text-blue-600 font-semibold">95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>API Development</span>
                                            <span className="text-blue-600 font-semibold">90%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Database Design</span>
                                            <span className="text-blue-600 font-semibold">85%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>DevOps & Cloud</span>
                                            <span className="text-blue-600 font-semibold">80%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
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
