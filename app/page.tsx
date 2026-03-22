"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, ExternalLink, Terminal } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { socialLinks } from "@/lib/social-links"

const skills = [
  "Python", "Docker", "Next.js",
  "Supabase", "N8N", "Web Scraping", "GO",
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
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
    linkRow: dk
      ? "border-white/20 bg-white/10"
      : "border-slate-200 bg-white/70",
    linkIcon: dk ? "text-white/70 group-hover:text-white" : "text-slate-500 group-hover:text-slate-800",
    linkText: dk ? "text-white/80 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900",
    linkExt:  dk ? "text-white/30 group-hover:text-white/70" : "text-slate-300 group-hover:text-slate-600",
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
  }

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="relative min-h-screen overflow-hidden p-6 md:p-12">
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

      <div className="relative mx-auto max-w-3xl">
        {/* ── Theme toggle ──────────────────────────────────────────────── */}
        <div className="mb-6 flex justify-end">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className={`rounded-full border-2 backdrop-blur-sm transition-all hover:scale-110 ${t.themeBtn}`}
          >
            {dk
              ? <Sun className="h-5 w-5 text-white" />
              : <Moon className={`h-5 w-5 ${t.text}`} />}
          </Button>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-r from-blue-500 via-slate-400 to-blue-600 opacity-75 blur-sm" />
            <img
              src="https://github.com/pedro3pv.png"
              alt="pedro3pv avatar"
              className="relative h-28 w-28 rounded-full border-2 border-white/30 object-cover"
            />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-black bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </div>

          <h1 className={`mb-1 font-mono text-3xl font-bold md:text-4xl ${t.text}`}>
            pedro3pv
          </h1>
          <p className={`mb-3 font-mono text-sm uppercase tracking-widest ${t.textSub}`}>
            Full-stack · DevOps · Open Source
          </p>
          <p className={`mb-5 max-w-md leading-relaxed ${t.textMuted}`}>
            Desenvolvedor apaixonado por automação, speech AI e infraestrutura.
            Construindo ferramentas que fazem sentido.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <Badge
                key={s}
                variant="outline"
                className={`font-mono text-xs backdrop-blur-sm ${t.badge}`}
              >
                {s}
              </Badge>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 2 — SOCIAL LINKS
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Terminal className={`h-4 w-4 ${t.textFaint}`} />
            <span className={`font-mono text-xs uppercase tracking-widest ${t.textFaint}`}>
              links
            </span>
            <div className={`h-px flex-1 ${t.divider}`} />
          </div>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, href, icon: Icon, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-2xl border-2 px-5 py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${t.linkRow} ${color}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 transition-colors ${t.linkIcon}`} />
                  <span className={`font-mono transition-colors ${t.linkText}`}>
                    {label}
                  </span>
                </div>
                <ExternalLink className={`h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${t.linkExt}`} />
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 3 — PROJECTS
        ══════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Terminal className={`h-4 w-4 ${t.textFaint}`} />
            <span className={`font-mono text-xs uppercase tracking-widest ${t.textFaint}`}>
              projetos
            </span>
            <div className={`h-px flex-1 ${t.divider}`} />
          </div>

          <div className="mb-8">
            <Input
              type="text"
              placeholder="buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`h-12 rounded-xl border-2 backdrop-blur-sm ${t.input}`}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className={`group h-full cursor-pointer rounded-2xl border-2 backdrop-blur-md transition-all hover:scale-[1.03] hover:shadow-xl ${t.card}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className={`flex items-center justify-between font-mono text-lg ${t.cardTitle}`}>
                      {project.title}
                      <ExternalLink className={`h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${t.cardExt}`} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm leading-relaxed ${t.cardText}`}>
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={`mt-10 text-center font-mono ${t.empty}`}>
              nenhum projeto encontrado
            </p>
          )}
        </section>
      </div>
    </main>
  )
}
