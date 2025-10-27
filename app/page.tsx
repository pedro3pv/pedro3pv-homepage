"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

// Dados dos projetos - você pode substituir com seus projetos reais
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce com carrinho e pagamentos",
    url: "https://github.com/pedro3pv/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Aplicativo de gerenciamento de tarefas com drag and drop",
    url: "https://github.com/pedro3pv/task-manager",
  },
  {
    id: 3,
    title: "Weather App",
    description: "App de previsão do tempo com geolocalização",
    url: "https://github.com/pedro3pv/weather-app",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plataforma de blog com markdown e comentários",
    url: "https://github.com/pedro3pv/blog-platform",
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Chat em tempo real com WebSockets",
    url: "https://github.com/pedro3pv/chat-app",
  },
  {
    id: 6,
    title: "Portfolio Site",
    description: "Site de portfólio responsivo e moderno",
    url: "https://github.com/pedro3pv/portfolio",
  },
  {
    id: 7,
    title: "Recipe Finder",
    description: "Busca de receitas com filtros e favoritos",
    url: "https://github.com/pedro3pv/recipe-finder",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description: "Rastreador de exercícios e calorias",
    url: "https://github.com/pedro3pv/fitness-tracker",
  },
  {
    id: 9,
    title: "Music Player",
    description: "Player de música com playlists personalizadas",
    url: "https://github.com/pedro3pv/music-player",
  },
  {
    id: 10,
    title: "Dashboard Analytics",
    description: "Dashboard com gráficos e métricas em tempo real",
    url: "https://github.com/pedro3pv/dashboard-analytics",
  },
  {
    id: 11,
    title: "Social Media App",
    description: "Rede social com posts, likes e comentários",
    url: "https://github.com/pedro3pv/social-media",
  },
  {
    id: 12,
    title: "Booking System",
    description: "Sistema de reservas com calendário interativo",
    url: "https://github.com/pedro3pv/booking-system",
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="relative min-h-screen overflow-hidden p-6 md:p-12">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black dark:from-black dark:via-gray-950 dark:to-black" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-slate-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500/5 blur-3xl animation-delay-4000" />
        <div className="stars absolute inset-0" />
        <div className="stars2 absolute inset-0" />
        <div className="stars3 absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-100 via-gray-100 to-slate-200 opacity-0 transition-opacity duration-500 dark:opacity-0 in-[.light]:opacity-95" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-slate-800" />}
          </Button>
        </div>

        <h1 className="mb-8 text-center font-mono text-4xl text-white drop-shadow-lg md:text-5xl dark:text-white">
          pedro3pv&apos;s projects
        </h1>

        <div className="mx-auto mb-12 max-w-2xl">
          <Input
            type="text"
            placeholder="campos de pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 rounded-xl border-2 border-white/30 bg-white/10 text-lg text-white placeholder:text-white/60 backdrop-blur-sm dark:border-white/20 dark:bg-white/5 dark:text-white"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
              <Card className="group cursor-pointer rounded-3xl border-2 border-white/30 bg-white/10 backdrop-blur-md transition-all hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 dark:border-white/20 dark:bg-white/5 dark:hover:border-white/40 dark:hover:bg-white/10">
                <CardHeader>
                  <CardTitle className="font-mono text-xl text-white dark:text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-white/80 dark:text-white/70">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-xl text-white/70">Nenhum projeto encontrado</p>
          </div>
        )}
      </div>
    </main>
  )
}
