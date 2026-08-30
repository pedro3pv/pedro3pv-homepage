import Link from "next/link"
import { projects } from "@/lib/projects"
import { socialLinks } from "@/lib/social-links"

import { TerminalWindow, TermLine, Prompt, SectionTitle } from "@/components/terminal/window"
import { StatusBar } from "@/components/terminal/status-bar"
import { GitHubCard } from "@/components/terminal/github-card"
import { DiscordCard } from "@/components/terminal/discord-card"
import { LastFmCard } from "@/components/terminal/lastfm-card"
import { SpotifyProfileCard } from "@/components/terminal/spotify-card"
import { XTimeline } from "@/components/terminal/x-timeline"

import { TbExternalLink, TbClock } from "react-icons/tb"

const skills = ["Python", "Docker", "Next.js", "Supabase", "N8N", "Web Scraping", "Go"]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-terminal-bg px-4 py-10 sm:px-6">
      {/* faint grid backdrop — subtle, not an AI blob */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] [background-image:linear-gradient(#10b981_1px,transparent_1px),linear-gradient(90deg,#10b981_1px,transparent_1px)] [background-size:40px_40px]" />

      <TerminalWindow>
        {/* ---------------- whoami + github profile ---------------- */}
        <SectionTitle command="whoami" path="~" />
        <GitHubCard />

        <div className="mb-8 flex flex-wrap gap-1.5">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded border border-terminal-border bg-terminal-code px-2 py-0.5 font-mono text-xs text-terminal-cyan"
            >
              {s}
            </span>
          ))}
        </div>

        {/* ---------------- status (discord + spotify) ---------------- */}
        <SectionTitle command="cat ./status" path="~/.config" />
        <div className="mb-4">
          <DiscordCard />
        </div>
        <div className="mb-10">
          <SpotifyProfileCard />
        </div>

        {/* ---------------- now playing (last.fm) ---------------- */}
        <SectionTitle command="recently-played" path="~/.music" />
        <div className="mb-10">
          <LastFmCard />
        </div>

        {/* ---------------- X timeline ---------------- */}
        <SectionTitle command="cat ./feed" path="~/.config" />
        <div className="mb-10">
          <XTimeline screenName="pedro3pv" />
        </div>

        {/* ---------------- projects ---------------- */}
        <SectionTitle command="ls -la ./projects" path="~" />
        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-terminal-border bg-terminal-code p-4 transition-colors hover:border-terminal-green/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-terminal-fg group-hover:text-terminal-green">
                  {project.title}
                </span>
                <TbExternalLink
                  className="text-terminal-dimmed/50 transition-colors group-hover:text-terminal-green"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 font-mono text-xs leading-relaxed text-terminal-dimmed">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        {/* ---------------- links ---------------- */}
        <SectionTitle command="./links --all" path="~/.config" />
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(({ label, handle, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="group flex items-center gap-2 rounded border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-fg transition-colors hover:border-terminal-green/60 hover:text-terminal-green"
            >
              <Icon className="text-sm" aria-hidden="true" />
              <span className="text-terminal-cyan group-hover:text-terminal-green">
                @{handle}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Prompt text="echo done" dir="~" />
          <TermLine className="mt-1 text-terminal-dimmed">
            <TbClock className="mr-2 inline text-terminal-cyan" aria-hidden="true" />
            Feito com muito ctrl+c, ctrl+v e café.
          </TermLine>
        </div>

        <StatusBar />
      </TerminalWindow>
    </div>
  )
}
