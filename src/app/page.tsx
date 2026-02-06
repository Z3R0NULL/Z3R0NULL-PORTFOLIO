"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ExternalLink, Shield, Cpu, Wifi, Home, Printer, Bot, Wrench, Terminal, Lock, Eye, Bug, Fingerprint, Key, Radio, Zap, ChevronDown, ShoppingBag, Youtube, Instagram } from "lucide-react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );
    const children = el.querySelectorAll(".scroll-reveal");
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}


// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const projects = [
  {
    title: "WiFi Deauther",
    description: "Dispositivo de hardware para pruebas de seguridad WiFi. Detecta redes vulnerables y realiza auditorías de autenticación.",
    tags: ["ESP32", "Python", "Ciberseguridad"],
    category: "ciberseguridad",
    github: "#",
    demo: "#",
  },
  {
    title: "Robot Seguidor de Línea",
    description: "Robot autónomo con sensores infrarrojos que sigue trayectorias. Chasis impreso en 3D y controlado por Arduino.",
    tags: ["Arduino", "C++", "Impresión 3D"],
    category: "robotica",
    github: "#",
    demo: "#",
  },
  {
    title: "BT Auth Scanner",
    description: "Herramienta de análisis de seguridad Bluetooth. Escanea dispositivos y detecta vulnerabilidades de autenticación.",
    tags: ["Python", "Bluetooth", "Raspberry Pi"],
    category: "ciberseguridad",
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema Domótica",
    description: "Automatización del hogar con control de luces, temperatura y seguridad. Interfaz web y control por voz.",
    tags: ["ESP8266", "MQTT", "Home Assistant"],
    category: "domotica",
    github: "#",
    demo: "#",
  },
  {
    title: "Keylogger Detector",
    description: "Script en Python para detectar y analizar actividad sospechosa de keyloggers en sistemas Windows/Linux.",
    tags: ["Python", "Seguridad", "Análisis"],
    category: "ciberseguridad",
    github: "#",
    demo: "#",
  },
  {
    title: "Brazo Robótico",
    description: "Brazo robótico de 6 ejes con piezas impresas en 3D. Control mediante joystick y programación de movimientos.",
    tags: ["Arduino", "Servos", "Impresión 3D"],
    category: "robotica",
    github: "#",
    demo: "#",
  },
];

const skills = [
  { name: "Ciberseguridad", icon: Shield, items: ["Pentesting", "Análisis de redes", "WiFi/Bluetooth Security", "Python scripting"] },
  { name: "Electrónica", icon: Cpu, items: ["Arduino", "ESP32/ESP8266", "Raspberry Pi", "Diseño de PCB"] },
  { name: "Robótica", icon: Bot, items: ["Sensores", "Motores/Servos", "Control PID", "Visión artificial"] },
  { name: "Domótica", icon: Home, items: ["MQTT", "Home Assistant", "Zigbee/Z-Wave", "Automatización"] },
  { name: "Redes", icon: Wifi, items: ["WiFi hacking", "Bluetooth LE", "Protocolos IoT", "Análisis de tráfico"] },
  { name: "Fabricación", icon: Printer, items: ["Impresión 3D", "Diseño CAD", "Soldadura", "Prototipado"] },
];

const securityIcons = [
  { icon: Lock, delay: "0s" },
  { icon: Eye, delay: "0.5s" },
  { icon: Bug, delay: "1s" },
  { icon: Fingerprint, delay: "1.5s" },
  { icon: Key, delay: "2s" },
  { icon: Radio, delay: "2.5s" },
];

// Productos en venta - cada uno con link a MercadoLibre
const shopProducts = [
  {
    title: "WiFi Deauther V3",
    description: "Dispositivo listo para usar. Incluye case impreso en 3D.",
    price: "$15.000",
    image: "/products/wifi-deauther.jpg",
    mercadoLibreUrl: "#", // Reemplazar con tu link de MercadoLibre
  },
  {
    title: "Bad USB Rubber Ducky",
    description: "Herramienta de pentesting con scripts personalizables.",
    price: "$8.500",
    image: "/products/bad-usb.jpg",
    mercadoLibreUrl: "#",
  },
  {
    title: "ESP32 Dev Kit",
    description: "Kit completo con sensores y componentes para proyectos IoT.",
    price: "$12.000",
    image: "/products/esp32-kit.jpg",
    mercadoLibreUrl: "#",
  },
  {
    title: "Brazo Robótico Mini",
    description: "Brazo robótico ensamblado con Arduino y control remoto.",
    price: "$25.000",
    image: "/products/robot-arm.jpg",
    mercadoLibreUrl: "#",
  },
];

// Redes sociales
const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-500" },
  { icon: TikTokIcon, label: "TikTok", href: "#", color: "hover:text-pink-500" },
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-purple-500" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
];

export default function Portfolio() {
    const scrollRef = useScrollReveal();
    return (
      <div ref={scrollRef} className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
        {/* Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden animate-entry-fade delay-300">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px] animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Floating security icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {securityIcons.map((item, index) => (
            <div
              key={index}
              className="absolute animate-float opacity-10"
              style={{
                left: `${15 + index * 15}%`,
                top: `${20 + (index % 3) * 25}%`,
                animationDelay: item.delay,
                animationDuration: `${3 + index * 0.5}s`,
              }}
            >
              <item.icon className="h-12 w-12 text-emerald-400" />
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl text-center relative z-10">
            {/* Logo */}
            <div className="mx-auto h-24 w-24 sm:h-28 sm:w-28 relative flex items-center justify-center mb-8 animate-entry-scale">
              <div className="absolute inset-[-8px] rounded-full bg-emerald-500/20 blur-xl animate-pulse-glow pointer-events-none" />
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/eefe8903-79f5-459c-9ae9-dcb210b1e70a/logo-1770396517506.png?width=8000&height=8000&resize=contain"
                alt="Z3RØNULL Logo"
                className="h-full w-full object-contain relative z-10"
              />
            </div>

            {/* Terminal-style badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-sm font-mono text-emerald-400 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-entry delay-200">
              <Terminal className="h-4 w-4 animate-pulse" />
              <span className="typing-effect">~/security_researcher</span>
              <span className="animate-pulse">_</span>
            </div>
            
            {/* Main title with glitch effect */}
            <h1 className="mb-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl leading-[1.6] animate-entry delay-300" style={{ fontFamily: "'Fipps', monospace" }}>
                  <span className="relative inline-block py-2">
                    <span style={{ color: "#e20303" }}>Z3RØ</span><span className="transition-colors duration-500 hover:text-white" style={{ color: "#858585" }}>NULL</span>
                  </span>
                </h1>
          
          {/* Subtitle with icons */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-emerald-400/80 animate-entry delay-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-mono text-sm">HARDWARE HACKER</span>
            </div>
            <span className="hidden sm:inline text-emerald-500/50">|</span>
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              <span className="font-mono text-sm">MAKER</span>
            </div>
            <span className="hidden sm:inline text-emerald-500/50">|</span>
            <div className="flex items-center gap-2">
              <Bug className="h-5 w-5" />
              <span className="font-mono text-sm">SECURITY</span>
            </div>
          </div>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed animate-entry delay-500">
            Apasionado por la <span className="text-emerald-400 font-medium">ciberseguridad</span>, la <span className="text-cyan-400 font-medium">electrónica</span> y el <span className="text-emerald-400 font-medium">hardware hacking</span>. 
            Creo proyectos con Arduino, Raspberry Pi, impresión 3D y Python.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-entry delay-600">
            <a
              href="#proyectos"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Wrench className="relative h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative">Ver Proyectos</span>
            </a>
            <a
              href="#shop"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg border border-amber-500/50 bg-amber-500/10 px-8 text-sm font-medium text-amber-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105"
            >
              <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Tienda</span>
            </a>
            <a
              href="#contacto"
              className="group inline-flex h-12 items-center justify-center rounded-lg border border-emerald-500/50 bg-transparent px-8 text-sm font-medium text-emerald-400 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Contactar
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="absolute bottom-10 flex gap-4 animate-entry-fade delay-800">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`group relative p-2 text-gray-500 transition-all duration-300 ${social.color}`}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              <social.icon className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 animate-bounce animate-entry-fade delay-1000">
          <ChevronDown className="h-6 w-6 text-emerald-500/50" />
        </div>
      </section>

        {/* Skills Section */}
        <section className="relative border-t border-emerald-500/10 bg-[#0d0d0d] py-24">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
              <Zap className="h-6 w-6 text-emerald-400" />
              <h2 className="text-center text-3xl font-bold sm:text-4xl">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Habilidades
                </span>
              </h2>
            </div>
            <p className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500" style={{ transitionDelay: "0.1s" }}>
              Áreas en las que me especializo y tecnologías que domino
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="scroll-reveal group relative overflow-hidden rounded-xl border border-emerald-500/20 bg-[#111111]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110">
                      <skill.icon className="h-5 w-5 text-emerald-400 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300"
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
        <section id="proyectos" className="relative py-24">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
              <Terminal className="h-6 w-6 text-emerald-400" />
              <h2 className="text-center text-3xl font-bold sm:text-4xl">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Proyectos
                </span>
              </h2>
            </div>
            <p className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500" style={{ transitionDelay: "0.1s" }}>
              Una selección de mis proyectos de hardware, seguridad y automatización
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="scroll-reveal group relative flex flex-col overflow-hidden rounded-xl border border-emerald-500/20 bg-[#111111]/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                {/* Project image placeholder with animated background */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
                  <div className="absolute inset-0 cyber-grid opacity-50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {project.category === "ciberseguridad" && <Shield className="h-20 w-20 text-emerald-500/30 transition-all duration-300 group-hover:text-emerald-500/50" />}
                    {project.category === "robotica" && <Bot className="h-20 w-20 text-cyan-500/30 transition-all duration-300 group-hover:text-cyan-500/50" />}
                    {project.category === "domotica" && <Home className="h-20 w-20 text-emerald-500/30 transition-all duration-300 group-hover:text-emerald-500/50" />}
                  </div>
                  
                  {/* Animated scan line - bottom edge */}
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono text-emerald-400 backdrop-blur-sm border border-emerald-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 border-t border-emerald-500/10 pt-4">
                    <a
                      href={project.github}
                      className="group/link inline-flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:text-emerald-400"
                    >
                      <Github className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" />
                      <span>Código</span>
                    </a>
                    <a
                      href={project.demo}
                      className="group/link inline-flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:text-emerald-400"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110 group-hover/link:rotate-12" />
                      <span>Ver más</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
        <section id="shop" className="relative border-t border-amber-500/10 bg-[#0d0d0d] py-24">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
              <ShoppingBag className="h-6 w-6 text-amber-400" />
              <h2 className="text-center text-3xl font-bold sm:text-4xl">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Tienda
                </span>
              </h2>
            </div>
            <p className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500" style={{ transitionDelay: "0.1s" }}>
              Proyectos y dispositivos disponibles para comprar en MercadoLibre
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shopProducts.map((product, index) => (
                <a
                  key={product.title}
                  href={product.mercadoLibreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-reveal group relative flex flex-col overflow-hidden rounded-xl border border-amber-500/20 bg-[#111111]/80 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:-translate-y-2 cursor-pointer"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                {/* Product image placeholder */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ShoppingBag className="h-16 w-16 text-amber-500/30 transition-all duration-300 group-hover:text-amber-500/50" />
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-mono font-bold text-amber-400 backdrop-blur-sm border border-amber-500/30">
                      {product.price}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-amber-500/0 transition-all duration-300 group-hover:bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-amber-400 font-medium">
                      <ExternalLink className="h-4 w-4" />
                      Ver en MercadoLibre
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-amber-400">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
            {/* MercadoLibre link */}
            <div className="scroll-reveal mt-12 text-center">
            <a
              href="#" // Reemplazar con tu perfil de MercadoLibre
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-amber-400/70 transition-all duration-300 hover:text-amber-400"
            >
              <span className="font-mono text-sm">Ver todos los productos en MercadoLibre</span>
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative border-t border-emerald-500/10 py-24">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
              <Lock className="h-6 w-6 text-emerald-400" />
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Contacto
                </span>
              </h2>
            </div>
            <p className="scroll-reveal mx-auto mb-10 max-w-xl text-gray-500" style={{ transitionDelay: "0.1s" }}>
              ¿Tienes un proyecto de hardware, seguridad o automatización en mente? 
              ¿Quieres colaborar? No dudes en contactarme.
            </p>
            
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <a
              href="mailto:tu@email.com"
              className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Mail className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative font-mono">Enviar Email</span>
            </a>
            </div>
            
            {/* Social links grid */}
            <div className="scroll-reveal mt-12 flex flex-wrap justify-center gap-6" style={{ transitionDelay: "0.3s" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 text-gray-500 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-mono text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 bg-[#0a0a0a] py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-mono text-sm text-gray-600">
            <span className="text-emerald-500/50">&gt;</span> © {new Date().getFullYear()} Z3R0NULL <span className="text-emerald-500/50">|</span> Security Researcher
          </p>
        </div>
      </footer>
    </div>
  );
}
