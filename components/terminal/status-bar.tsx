"use client"

import { LiveClock } from "./live-clock"
import { TbWaveSine } from "react-icons/tb"
import type { PresenceResult } from "@/lib/lanyard"

const STATUS_COLOR: Record<string, string> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
}

const STATUS_LABEL: Record<string, string> = {
  online: "online",
  idle: "idle",
  dnd: "do not disturb",
  offline: "offline",
}

export function StatusBar({ presence }: { presence: PresenceResult }) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-terminal-border bg-terminal-chrome/60 px-4 py-2.5 font-mono text-xs">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <TbWaveSine className="text-terminal-green" aria-hidden="true" />
          <span className="text-terminal-dimmed">uptime</span>
          <span className="text-terminal-fg">100%</span>
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: STATUS_COLOR[presence.status] }}
            aria-hidden="true"
          />
          <span className="text-terminal-fg">
            {STATUS_LABEL[presence.status]}
            {presence.source === "demo" ? " (demo)" : ""}
          </span>
        </span>
      </div>
      <LiveClock />
    </div>
  )
}
