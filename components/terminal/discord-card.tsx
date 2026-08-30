"use client"

import { TermLine, DemoPill } from "./window"
import type { PresenceResult } from "@/lib/lanyard"
import { TbBrandDiscord, TbUser, TbHeadphones } from "react-icons/tb"

const STATUS_COLOR: Record<string, string> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
}

export function DiscordCard({ presence }: { presence: PresenceResult }) {
  const live = presence.source === "live"

  return (
    <div className="rounded-lg border border-terminal-border bg-terminal-code p-4">
      <div className="mb-2 flex items-center justify-between">
        <TermLine className="text-terminal-dimmed">
          <TbBrandDiscord className="mr-2 inline text-terminal-green" aria-hidden="true" />
          discord
        </TermLine>
        {!live && <DemoPill />}
      </div>

      <div className="flex items-center justify-between">
        <TermLine>
          <span
            className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
            style={{ backgroundColor: STATUS_COLOR[presence.status] }}
            aria-hidden="true"
          />
          <span className="text-terminal-fg">
            <span className="capitalize">{presence.status}</span>
            {live ? "" : " (demo)"}
          </span>
        </TermLine>
      </div>

      {presence.activityText && (
        <TermLine className="text-terminal-dimmed">
          <TbUser className="mr-2 inline text-terminal-cyan" aria-hidden="true" />
          {presence.activityText}
        </TermLine>
      )}

      {presence.listeningToSpotify && presence.spotify && (
        <TermLine>
          <TbHeadphones className="mr-2 inline text-terminal-green" aria-hidden="true" />
          <span className="text-terminal-fg">{presence.spotify.song}</span>
          <span className="text-terminal-dimmed"> — {presence.spotify.artist}</span>
        </TermLine>
      )}
    </div>
  )
}
