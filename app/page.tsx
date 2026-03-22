"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Github, Linkedin, Mail, Twitter, ExternalLink, Terminal } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { socialLinks } from "@/lib/social-links"

// ─── Skill tags ────────────────────────────────────────────────────────────
const skills = [
  "Python", "Node.js", "Docker", "Next.js",
  "Supabase", "N8N", "Speech AI", "Web Scraping", "GO",
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.classList.toggle("light", theme === "light")
  }, [theme])

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"))

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="relative min-h-screen overflow-hidden p-6 md:p-12">
      {/* ── Background (idêntico ao original) ─────────────────────────── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-slate-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500/5 blur-3xl animation-delay-4000" />
        <div className="stars absolute inset-0" />
        <div className="stars2 absolute inset-0" />
        <div className="stars3 absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-gray-100 to-slate-200 opacity-0 transition-opacity duration-500 dark:opacity-0 in-[.light]:opacity-95" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* ── Theme toggle ──────────────────────────────────────────────── */}
        <div className="mb-6 flex justify-end">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
          >
            {theme === "dark"
              ? <Sun className="h-5 w-5 text-white" />
              : <Moon className="h-5 w-5 text-slate-800" />}
          </Button>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 1 — HERO / PROFILE
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10 flex flex-col items-center text-center">
          {/* Avatar com borda animada */}
          <div className="relative mb-5">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-slate-400 to-blue-600 opacity-75 blur-sm animate-spin-slow" />
            <img
              src="https://github.com/pedro3pv.png"
              alt="pedro3pv avatar"
              className="relative h-28 w-28 rounded-full border-2 border-white/30 object-cover"
            />
            {/* Status dot */}
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-black bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </div>

          <h1 className="mb-1 font-mono text-3xl font-bold text-white md:text-4xl">
            pedro3pv
          </h1>
          <p className="mb-3 font-mono text-sm text-white/50 tracking-widest uppercase">
            Full-stack · DevOps · Open Source
          </p>
          <p className="mb-5 max-w-md text-white/70 leading-relaxed">
            Desenvolvedor apaixonado por automação, speech AI e infraestrutura.
            Construindo ferramentas que fazem sentido.
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <Badge
                key={s}
                variant="outline"
                className="border-white/20 bg-white/10 text-white/70 font-mono text-xs backdrop-blur-sm"
              >
                {s}
              </Badge>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 2 — SOCIAL LINKS (Linktree style)
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-white/40" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              links
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, href, icon: Icon, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-2xl border-2 border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${color}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-white" />
                  <span className="font-mono text-white/80 transition-colors group-hover:text-white">
                    {label}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-white/30 transition-all group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ZONA 3 — PROJECTS GRID
        ══════════════════════════════════════════════════════════════ */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-white/40" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              projetos
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Search */}
          <div className="mb-8">
            <Input
              type="text"
              placeholder="buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
          </div>

          {/* Grid — max-w-3xl já centraliza, 2 colunas no desktop */}
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="group h-full cursor-pointer rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-white/40 hover:bg-white/15 hover:shadow-xl hover:shadow-white/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between font-mono text-lg text-white">
                      {project.title}
                      <ExternalLink className="h-4 w-4 text-white/30 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-10 text-center font-mono text-white/40">
              nenhum projeto encontrado
            </p>
          )}
        </section>
      </div>
    </main>
  )
}
