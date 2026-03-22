"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { socialLinks } from "@/lib/social-links"

// React Icons
import { TbExternalLink, TbTerminal2 } from "react-icons/tb"
import { FaMoon, FaSun } from "react-icons/fa6"

const skills = [
  "Python", "Docker", "Next.js",
  "Supabase", "N8N", "Web Scraping", "GO",
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.classList.toggle("light", theme === "light")
  }, [theme])

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"))

  // ── Theme token map ────────────────────────────────────────────────────
  const dk = theme === "dark"
  const t = {
    text:      dk ? "text-white"        : "text-slate-800",
    textMuted: dk ? "text-white/70"     : "text-slate-600",
    textFaint: dk ? "text-white/40"     : "text-slate-400",
    textSub:   dk ? "text-white/50"     : "text-slate-500",
    border:    dk ? "border-white/20"   : "border-slate-300",
    bg:        dk ? "bg-white/10"       : "bg-white/60",
    divider:   dk ? "bg-white/10"       : "bg-slate-200",
    themeBtn:  dk
      ? "border-white/30 bg-white/10 hover:bg-white/20"
      : "border-slate-300 bg-white/60 hover:bg-white/90",
    badge: dk
      ? "border-white/20 bg-white/10 text-white/70"
      : "border-slate-300 bg-slate-100 text-slate-600",
    input: dk
      ? "bg-white/10 text-white placeholder:text-white/40 border-white/30"
      : "bg-white/70 text-slate-800 placeholder:text-slate-400 border-slate-300",
    card: dk
      ? "border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/15 hover:shadow-white/5"
      : "border-slate-200 bg-white/70 hover:border-slate-400 hover:bg-white/90 hover:shadow-slate-300/30",
    cardTitle: dk ? "text-white"    : "text-slate-800",
    cardText:  dk ? "text-white/70" : "text-slate-600",
    cardExt:   dk
      ? "text-white/30 group-hover:text-white/70"
      : "text-slate-300 group-hover:text-slate-600",
    empty: dk ? "text-white/40" : "text-slate-400",
    // Cores específicas para os botões sociais
    socialBtn: dk 
      ? "bg-white/5 border-white/10 text-white/80 hover:text-white" 
      : "bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900",
  }

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Duplicar links para o efeito de carrossel infinito não "quebrar"
  // Multiplicamos por 3 para garantir que preencha telas ultrawide
  const marqueeLinks = [...socialLinks, ...socialLinks, ...socialLinks]

  if (!mounted) return null

  return (
    <main className="relative min-h-screen overflow-hidden pb-12 pt-6 md:pb-16 md:pt-12">
      {/* ── Background ────────────────────────────────────────────────── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-slate-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500/5 blur-3xl animation-delay-4000" />
        <div className="stars absolute inset-0" />
        <div className="stars2 absolute inset-0" />
        <div className="stars3 absolute inset-0" />
        {/* Overlay do light mode */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-gray-100 to-slate-200 opacity-0 transition-opacity duration-500 in-[.light]:opacity-95" />
      </div>

      {/* Container principal */}
      <div className="relative mx-auto max-w-3xl px-6 md:px-0">
        {/* ── Theme toggle ──────────────────────────────────────────────── */}
        <div className="mb-6 flex justify-end">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className={`rounded-full border-2 backdrop-blur-sm transition-all hover:scale-110 ${t.themeBtn}`}
          >
            {dk
              ? <FaSun className="text-white" size={18} />
              : <FaMoon className={t.text} size={18} />}
          </Button>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-12 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-1.5 animate-spin-slow rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 opacity-70 blur-md" />
            <img
              src="https://github.com/pedro3pv.png"
              alt="pedro3pv avatar"
              className="relative h-32 w-32 rounded-full border-4 border-black dark:border-gray-900 object-cover"
            />
            <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-black dark:border-gray-900 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse" />
          </div>

          <h1 className={`mb-2 font-mono text-4xl font-extrabold tracking-tight md:text-5xl ${t.text}`}>
            pedro3pv
          </h1>
          <p className={`mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] ${t.textSub}`}>
            Full-stack · DevOps · Open Source
          </p>
          <p className={`mb-6 max-w-md text-lg leading-relaxed ${t.textMuted}`}>
            Desenvolvedor apaixonado por automação e infraestrutura.
            Construindo ferramentas que fazem sentido.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <Badge
                key={s}
                variant="outline"
                className={`font-mono text-xs backdrop-blur-sm px-3 py-1 ${t.badge}`}
              >
                {s}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ZONA 2 — SOCIAL MARQUEE (Carrossel Infinito Divertido)
          Fora do max-w-3xl para cruzar a tela toda!
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16 w-full relative">
        {/* Bordas de gradiente para suavizar as pontas (fade in/out) */}
        <div className={`absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r ${dk ? 'from-slate-950' : 'from-slate-100'} to-transparent pointer-events-none`} />
        <div className={`absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l ${dk ? 'from-slate-950' : 'from-slate-100'} to-transparent pointer-events-none`} />
        
        {/* Área do carrossel */}
        <div className="pause-on-hover flex overflow-hidden py-4">
          <div className="animate-marquee flex w-max gap-4 px-4">
            {marqueeLinks.map(({ label, href, icon: Icon, color, lightColor }, index) => {
              // Pegamos apenas a parte de hover:bg-xxx para o estilo de tema
              const activeColor = dk ? color : lightColor;
              
              return (
                <Link
                  key={`${label}-${index}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex shrink-0 items-center justify-center gap-3 rounded-full border 
                    px-6 py-3 backdrop-blur-md transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-110 hover:shadow-xl
                    ${t.socialBtn} ${activeColor}
                  `}
                >
                  <Icon className="text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="font-mono text-sm font-semibold tracking-wide">
                    {label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ZONA 3 — PROJECTS
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-3xl px-6 md:px-0">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <TbTerminal2 className={`text-xl ${t.textFaint}`} />
            <span className={`font-mono text-sm font-bold uppercase tracking-[0.2em] ${t.textFaint}`}>
              projetos
            </span>
            <div className={`h-[2px] flex-1 ${t.divider} rounded-full`} />
          </div>

          <div className="mb-8">
            <Input
              type="text"
              placeholder="buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`h-14 rounded-2xl border-2 backdrop-blur-sm shadow-inner text-lg px-6 ${t.input}`}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className={`group h-full cursor-pointer rounded-3xl border-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl ${t.card}`}>
                  <CardHeader className="pb-3 pt-6 px-6">
                    <CardTitle className={`flex items-center justify-between font-mono text-xl ${t.cardTitle}`}>
                      {project.title}
                      <TbExternalLink className={`text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 ${t.cardExt}`} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className={`text-base leading-relaxed ${t.cardText}`}>
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={`mt-16 flex flex-col items-center justify-center gap-4 ${t.empty}`}>
              <TbTerminal2 className="text-4xl opacity-50" />
              <p className="font-mono text-lg">nenhum projeto encontrado</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
