import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { socialLinks } from "@/lib/social-links"

import { TbExternalLink, TbTerminal2 } from "react-icons/tb"

const skills = [
  "Python", "Docker", "Next.js",
  "Supabase", "N8N", "Web Scraping", "GO",
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-12 pt-6 md:pb-16 md:pt-12">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-slate-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500/5 blur-3xl animation-delay-4000" />
        <div className="stars absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-gray-100 to-slate-200 opacity-95 transition-opacity duration-500 dark:opacity-0" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-0">
        {/* Hero */}
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

          <h1 className="mb-2 font-mono text-4xl font-extrabold tracking-tight md:text-5xl dark:text-white text-slate-800">
            pedro3pv
          </h1>
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] dark:text-white/50 text-slate-500">
            Full-stack · DevOps · Open Source
          </p>
          <p className="mb-6 max-w-md text-lg leading-relaxed dark:text-white/70 text-slate-600">
            Desenvolvedor apaixonado por automação e infraestrutura.
            Construindo ferramentas que fazem sentido.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <Badge
                key={s}
                variant="outline"
                className="font-mono text-xs backdrop-blur-sm px-3 py-1
                  dark:border-white/20 dark:bg-white/10 dark:text-white/70
                  border-slate-300 bg-slate-100 text-slate-600"
              >
                {s}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <TbTerminal2 className="text-xl dark:text-white/40 text-slate-400" />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] dark:text-white/40 text-slate-400">
              projetos
            </span>
            <div className="h-[2px] flex-1 rounded-full dark:bg-white/10 bg-slate-200" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="group h-full cursor-pointer rounded-3xl border-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl
                  dark:border-white/20 dark:bg-white/10 dark:hover:border-white/40 dark:hover:bg-white/15 dark:hover:shadow-white/5
                  border-slate-200 bg-white/70 hover:border-slate-400 hover:bg-white/90 hover:shadow-slate-300/30"
                >
                  <CardHeader className="pb-3 pt-6 px-6">
                    <CardTitle className="flex items-center justify-between font-mono text-xl dark:text-white text-slate-800">
                      {project.title}
                      <TbExternalLink className="text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1
                        dark:text-white/30 dark:group-hover:text-white/70
                        text-slate-300 group-hover:text-slate-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-base leading-relaxed dark:text-white/70 text-slate-600">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Social links */}
        <section className="mt-12 flex flex-wrap justify-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl
                dark:bg-white/5 dark:border-white/10 dark:text-white/80 dark:hover:text-white
                bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900"
            >
              <Icon className="text-lg" />
              <span className="font-mono text-xs font-semibold tracking-wide">{label}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
