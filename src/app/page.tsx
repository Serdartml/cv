"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  UserCircle2,
  Mail,
  ChevronDown,
  Cpu,
  ExternalLink,
  Briefcase,
  Globe,
  X
} from "lucide-react";

const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const translations: any = {
  tr: {
    internshipBadge: "Aktif Olarak Staj Arıyor",
    gradeBadge: "Yazılım Mühendisliği 4. Sınıf",
    greeting: "MERHABA, BEN",
    heroDescription: "Yazılım Mühendisliği son sınıf öğrencisiyim. Öğrenmeye çok hevesli bir yapıya sahibim. Modern teknolojileri yakından takip ederek projelerimde hızlı, pratik ve yenilikçi çözümler üretmeyi seviyorum.",
    navCards: ["Kimim?", "Neler Bilirim?", "Neler Yaptım?", "Konuşalım mı?"],
    aboutHeader: "Hakkımda",
    aboutTitle: ["SÜREKLİ ÖĞRENEN VE", "GELİŞEN", "BİR MÜHENDİS ADAYI."],
    aboutPara1: "Merhaba, ben Serdar Temel. 24 yaşındayım ve Yazılım Mühendisliği (İngilizce) bölümü 4. sınıf öğrencisiyim. Üniversite eğitimimin yanı sıra, modern yazılım geliştirme pratiklerine büyük ilgi duyuyorum.",
    aboutPara2: "Karşılaştığım problemleri çözerken yeni nesil araçları verimli bir şekilde kullanarak süreci hızlandırmayı ve pratik kalmayı seviyorum. Şu anda hem bilgilerimi pratiğe dökebileceğim hem de tecrübeli ekiplerden yeni şeyler öğrenebileceğim bir staj fırsatı arıyorum. Ayrıca staj sonrasında uyum sağlanması durumunda tam zamanlı olarak ekibin bir parçası olmaya da istekliyim.",
    quickInfo: "Kısa Bilgiler",
    infoKeys: { name: "İsim", age: "Yaş", dept: "Bölüm", class: "Sınıf", hobbies: "Hobiler" },
    hobbyList: "Gitar, Kayak, Basketbol, Futbol, E-Spor",
    skillsHeader: "Stack",
    skillsTitle: "YETENEK SETİM",
    portfolioHeader: "Portfolyo",
    portfolioTitle: "PROJELERİM",
    contactTitle: ["EKİBİNİZE DEĞER", "KATMAYA", "HAZIRIM."],
    contactPara: "Kendimi geliştirebileceğim, tecrübeli meslektaşlarımdan yeni şeyler öğrenebileceğim ve aynı zamanda şirketinize katkı sağlayabileceğim bir fırsat arıyorum. Tanışmak için bana ulaşabilirsiniz.",
    contactBtn: "İletişime Geçin",
    footerText: "Yazılım Mühendisliği Öğrencisi",
    projectLabels: { details: "Proje Detayı", visit: "Projeye Git", github: "GitHub Kaynak Kodu" }
  },
  en: {
    internshipBadge: "Actively Seeking Internship",
    gradeBadge: "Software Engineering Senior",
    greeting: "HELLO, I AM",
    heroDescription: "I am a senior Software Engineering student. I am highly motivated to learn and enjoy creating fast, practical, and innovative solutions by closely following modern technologies.",
    navCards: ["Who Am I?", "My Skills", "My Projects", "Contact Me"],
    aboutHeader: "About Me",
    aboutTitle: ["A CONTINUOUSLY LEARNING AND", "EVOLVING", "ENGINEER CANDIDATE."],
    aboutPara1: "Hello, I am Serdar Temel. I am 24 years old and a senior Software Engineering (English) student. In addition to my university education, I have a great interest in modern software development practices.",
    aboutPara2: "I enjoy using next-generation tools efficiently to speed up the process and stay practical while solving problems. Currently, I am looking for an internship opportunity where I can put my knowledge into practice and learn new things from experienced teams. I am also willing to become a full-time part of the team if there is a good fit after the internship.",
    quickInfo: "Quick Info",
    infoKeys: { name: "Name", age: "Age", dept: "Department", class: "Grade", hobbies: "Hobbies" },
    hobbyList: "Guitar, Skiing, Basketball, Football, E-Sports",
    skillsHeader: "Stack",
    skillsTitle: "MY SKILL SET",
    portfolioHeader: "Portfolio",
    portfolioTitle: "MY PROJECTS",
    contactTitle: ["READY TO ADD", "VALUE", "TO YOUR TEAM."],
    contactPara: "I am looking for an opportunity to develop myself, learn new things from experienced colleagues, and contribute to your company. You can reach out to me to meet.",
    contactBtn: "Get In Touch",
    footerText: "Software Engineering Student",
    projectLabels: { details: "Project Details", visit: "Visit Project", github: "GitHub Source Code" }
  }
};

export default function Home() {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navCards = [
    { id: "hakkimda", title: t.navCards[0], icon: <UserCircle2 size={32} />, glow: "bg-emerald-500/5 group-hover:bg-emerald-500/20", iconWrapper: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20" },
    { id: "yetenekler", title: t.navCards[1], icon: <Terminal size={32} />, glow: "bg-cyan-500/5 group-hover:bg-cyan-500/20", iconWrapper: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20" },
    { id: "projeler", title: t.navCards[2], icon: <Code2 size={32} />, glow: "bg-blue-500/5 group-hover:bg-blue-500/20", iconWrapper: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" },
    { id: "iletisim", title: t.navCards[3], icon: <Mail size={32} />, glow: "bg-purple-500/5 group-hover:bg-purple-500/20", iconWrapper: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20" },
  ];

  return (
    <main className="snap-container bg-[#030712] text-slate-100 selection:bg-neon-cyan/30">

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-[100] flex gap-2">
        <button
          onClick={() => setLang('tr')}
          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all border ${lang === 'tr' ? 'bg-neon-cyan text-[#030712] border-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}
        >
          TR
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all border ${lang === 'en' ? 'bg-neon-cyan text-[#030712] border-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}
        >
          EN
        </button>
      </div>

      {/* Static Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#06101e] to-[#030712]"></div>
        <div className="absolute top-0 left-0 w-[55vw] h-[55vw] bg-neon-emerald/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 right-0 w-[55vw] h-[55vw] bg-neon-blue/5 rounded-full blur-[160px]"></div>
      </div>

      {/* SECTION 1: HERO */}
      <section id="home" className="snap-section relative flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden py-4">
        <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-10">

          {/* Profile Section - Slightly smaller to avoid overflow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/15">
              <img
                src="/profile.jpg"
                alt="Serdar Temel"
                className="w-full h-full object-cover object-[center_20%] scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[10px] md:text-xs font-semibold backdrop-blur-md">
              <Cpu size={14} className="animate-pulse" />
              <span>{t.gradeBadge}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-emerald/10 border border-neon-emerald/20 text-neon-emerald text-[10px] md:text-xs font-bold backdrop-blur-md animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-emerald"></div>
              <span>{t.internshipBadge}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-5xl font-black mb-2 tracking-tighter"
          >
            {t.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-emerald to-neon-blue">SERDAR TEMEL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-lg text-slate-400 max-w-xl mb-6 font-light leading-relaxed px-4 md:px-0"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-4 mb-8"
          >
            <a href="https://github.com/Serdartml" target="_blank" className="p-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white text-slate-300 transition-all border border-white/5 hover:border-white/20 flex items-center gap-2 shadow-lg">
              <Github size={18} /> <span className="text-xs md:text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/serdar-temel-087487408/" target="_blank" className="p-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]/50 text-slate-300 transition-all border border-white/5 flex items-center gap-2 shadow-lg">
              <Linkedin size={18} /> <span className="text-xs md:text-sm font-medium">LinkedIn</span>
            </a>
          </motion.div>

          {/* Large Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mb-4"
          >
            {navCards.map((card, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(card.id)}
                className={`group relative p-3 h-20 md:h-28 rounded-2xl md:rounded-3xl bg-[#0f172a]/80 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col items-center justify-center gap-2 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${card.glow} rounded-full blur-3xl transition-colors duration-700`}></div>
                <div className={`p-2 rounded-2xl ${card.iconWrapper} group-hover:scale-110 transition-all duration-500`}>
                  {card.icon}
                </div>
                <div className="text-center z-10">
                  <h3 className="text-[10px] md:text-xs font-medium text-slate-200 group-hover:text-white tracking-wide transition-colors">{card.title}</h3>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HAKKIMDA */}
      <section id="hakkimda" className="snap-section relative z-10 flex items-center justify-center p-6 py-12 md:py-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full bg-glass p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <UserCircle2 size={300} />
          </div>
          <div className="relative z-10">
            <h2 className="text-sm uppercase tracking-[0.4em] text-neon-emerald font-bold mb-6 italic">{t.aboutHeader}</h2>
            <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">{t.aboutTitle[0]} <span className="text-neon-emerald">{t.aboutTitle[1]}</span> {t.aboutTitle[2]}</h3>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 text-slate-300 text-sm md:text-base font-light leading-relaxed">
              <div className="space-y-4 order-last md:order-none">
                <p>
                  {t.aboutPara1}
                </p>
                <p>
                  {t.aboutPara2}
                </p>
              </div>
              <div className="bg-[#0f172a]/60 p-5 md:p-6 rounded-3xl border border-white/5 space-y-3 shadow-lg backdrop-blur-sm order-first md:order-none">
                <h4 className="text-white font-semibold mb-3 border-b border-white/10 pb-2">{t.quickInfo}</h4>
                <ul className="space-y-2.5 text-xs md:text-sm">
                  <li className="flex items-center gap-3"><strong className="text-neon-emerald min-w-[70px]">{t.infoKeys.name}:</strong> Serdar Temel</li>
                  <li className="flex items-center gap-3"><strong className="text-neon-emerald min-w-[70px]">{t.infoKeys.age}:</strong> 24</li>
                  <li className="flex items-center gap-3"><strong className="text-neon-emerald min-w-[70px]">{t.infoKeys.dept}:</strong> {lang === 'tr' ? 'Yazılım Müh. (İngilizce)' : 'Software Eng. (English)'}</li>
                  <li className="flex items-center gap-3"><strong className="text-neon-emerald min-w-[70px]">{t.infoKeys.class}:</strong> {lang === 'tr' ? '4. Sınıf' : 'Senior / 4th Grade'}</li>
                  <li className="flex items-center gap-3"><strong className="text-neon-emerald min-w-[70px]">{lang === 'tr' ? 'İngilizce' : 'English'}:</strong> B2</li>
                  <li className="flex items-start gap-3"><strong className="text-neon-emerald min-w-[70px]">{t.infoKeys.hobbies}:</strong> <span>{t.hobbyList}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: YETENEKLER */}
      <section id="yetenekler" className="snap-section relative z-10 flex flex-col items-center justify-start p-6 pt-24 md:pt-32 bg-[#020617]">
        <div className="max-w-6xl w-full">

          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neon-cyan font-bold mb-4">{t.skillsHeader}</h2>
            <h3 className="text-3xl md:text-5xl font-black">{t.skillsTitle}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { name: "C", level: "95%", color: "#10b981" },
              { name: "React Native", level: "92%", color: "#00f2ff" },
              { name: "React / Next.js", level: "88%", color: "#3b82f6" },
              { name: "Java", level: "80%", color: "#10b981" },
              { name: "Python", level: "80%", color: "#00f2ff" },
              { name: "TypeScript", level: "85%", color: "#3b82f6" },
              { name: "Tailwind CSS", level: "90%", color: "#10b981" },
              { name: "Node.js & SQL", level: "75%", color: "#00f2ff" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-3 pb-6 md:p-4 md:pb-8 rounded-2xl md:rounded-3xl bg-glass group transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">{skill.name}</h4>
                </div>

                <div className="relative h-1.5 w-full bg-white/5 rounded-full mt-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 15px ${skill.color}66` }}
                    className="absolute inset-y-0 left-0 rounded-full"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                  className="mt-2 text-right"
                >
                  <span className="text-[10px] font-black tracking-widest" style={{ color: skill.color }}>
                    {skill.level}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJELER */}
      <section id="projeler" className="snap-section relative z-10 flex flex-col items-center justify-start p-6 pt-24 md:pt-32">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 w-full">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-neon-blue font-bold mb-3 italic">{t.portfolioHeader}</h2>
              <h3 className="text-4xl md:text-5xl font-black">{t.portfolioTitle}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Lunata",
                desc: lang === 'tr' ? "Yapay zeka destekli, birçok alanda size yardımcı olan özel asistan maskotlarını içeren mobil uygulama." : "AI-powered mobile application featuring special assistant mascots to help you in many fields.",
                tag: "React Native • TS • AI",
                img: "/lunata-mobile.jpg",
                objPos: "center 15%",
                color: "purple",
                linkUrl: "https://play.google.com/store/apps/details?id=com.lunatamobile.app",
                linkLabel: t.projectLabels.details,
                btnClass: "bg-[#a855f7] hover:bg-[#9333ea] text-white",
                tagClass: "bg-[#a855f7]/10 text-[#a855f7]"
              },
              {
                title: "Lunata Web",
                desc: lang === 'tr' ? "Lunata mobil uygulamasının tanıtım ve reklamı amacıyla hazırlanan, modern tasarımlı resmi web sitesi." : "Official website designed with a modern structure for the promotion and advertising of the Lunata mobile app.",
                tag: "React • Tailwind CSS",
                img: "/lunata-web.jpg",
                objPos: "center top",
                color: "cyan",
                linkUrl: "https://www.lunatawebsite.com/",
                linkLabel: t.projectLabels.details,
                btnClass: "bg-[#00f2ff] hover:bg-[#00d8e4] text-[#030712]",
                tagClass: "bg-[#00f2ff]/10 text-[#00f2ff]"
              },
              {
                title: "Mert Kitap Kırtasiye",
                desc: lang === 'tr' ? "Modern ve kullanıcı dostu bir yapıya sahip, yerel bir işletme için tasarlanmış reklam amaçlı kurumsal web sitesi." : "A modern and user-friendly corporate website designed for advertising purposes for a local business.",
                tag: "HTML/CSS • Tailwind CSS",
                img: "/mert-kirtasiye.jpg",
                objPos: "center top",
                color: "emerald",
                linkUrl: "https://mert-kitap-kirtasiye.vercel.app/",
                linkLabel: t.projectLabels.visit,
                btnClass: "bg-[#10b981] hover:bg-[#059669] text-white",
                tagClass: "bg-[#10b981]/10 text-[#10b981]"
              },
              {
                title: "Taskly",
                desc: lang === 'tr' ? "Kullanıcı deneyimini ön planda tutan, basit ama oldukça şık tasarımlı kişisel To-Do List (Görev Yöneticisi) mobil uygulaması." : "A personal To-Do List mobile application with a simple yet elegant design that prioritizes user experience.",
                tag: "React Native • UI/UX",
                img: "/taskly.JPG",
                objPos: "center",
                color: "blue",
                linkUrl: "https://github.com/Serdartml/mobilproje",
                linkLabel: t.projectLabels.github,
                btnClass: "bg-[#3b82f6] hover:bg-[#2563eb] text-white",
                tagClass: "bg-[#3b82f6]/10 text-[#3b82f6]"
              }
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl overflow-hidden bg-[#0a0f1e] border border-white/5 shadow-2xl cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="relative w-full h-52 md:h-60 overflow-hidden flex-shrink-0">
                  <img
                    src={proj.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    style={{ objectPosition: (proj as any).objPos || 'center center' }}
                    alt={proj.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1e]/30" />
                </div>
                <div className="p-5 md:p-6">
                  <span className={`px-2.5 py-0.5 rounded-full ${proj.tagClass} text-[9px] font-bold uppercase tracking-wider mb-3 inline-block`}>
                    {proj.tag}
                  </span>
                  <h4 className="text-lg md:text-xl font-black mb-2 group-hover:text-neon-cyan transition-colors">{proj.title}</h4>
                  <p className="text-slate-400 text-xs font-light line-clamp-2 leading-relaxed italic">"{proj.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: İLETİŞİM */}
      <section id="iletisim" className="snap-section flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-neon-cyan/20 blur-[100px] rounded-full animate-pulse"></div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 relative z-10">{t.contactTitle[0]} <br /> <span className="text-neon-blue">{t.contactTitle[1]}</span> {t.contactTitle[2]}</h2>
            <p className="text-base md:text-xl text-slate-400 font-light max-w-xl mx-auto mb-10 relative z-10 leading-relaxed">
              {t.contactPara}
            </p>
            <a
              href="mailto:serdarrtml@gmail.com"
              className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neon-cyan text-[#030712] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,242,255,0.3)]"
            >
              {t.contactBtn} <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <footer className="mt-auto py-10 text-slate-600 text-[10px] md:text-sm font-medium tracking-[0.3em] uppercase">
          &copy; 2026 Serdar • {t.footerText}
        </footer>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#0f172a] p-6 md:p-10 rounded-[2rem] max-w-2xl w-full border border-white/10 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none`}></div>
              <button
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-white/20 z-20 transition-all border border-white/10 text-white shadow-xl hover:rotate-90"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              <img src={selectedProject.img} style={{ objectPosition: selectedProject.objPos || 'center center' }} className="w-full h-52 md:h-80 object-contain bg-black/40 rounded-2xl mb-6 shadow-2xl relative z-10" alt="" />
              <div className="relative z-10">
                <span className={`px-4 py-1.5 rounded-full ${selectedProject.tagClass} text-xs font-bold uppercase tracking-wider mb-4 inline-block`}>
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl md:text-4xl font-black mb-4">{selectedProject.title}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.linkUrl && (
                    <a href={selectedProject.linkUrl} target="_blank" className={`flex-1 py-4 text-center rounded-2xl ${selectedProject.btnClass} font-black text-sm md:text-base transition-all shadow-lg active:scale-95`}>
                      {selectedProject.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
