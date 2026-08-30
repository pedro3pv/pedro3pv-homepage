"use client"

import { useLiveData } from "./live-fetch"
import { getPresence, type PresenceResult } from "@/lib/lanyard"
import { TermLine, DemoPill } from "./window"
import { TbBrandDiscord, TbUser, TbHeadphones } from "react-icons/tb"

const INITIAL: PresenceResult = {
  status: "offline",
  username: "pedro3pv",
  avatar: "",
  listeningToSpotify: false,
  spotify: null,
  activityText: null,
  source: "demo",
}

const STATUS_COLOR: Record<string, string> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
}

export function DiscordCard() {
  const { data } = useLiveData(() => getPresence(), INITIAL, 15000)
  const live = data.source === "live"

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
            style={{ backgroundColor: STATUS_COLOR[data.status] }}
            aria-hidden="true"
          />
          <span className="text-terminal-fg">
            <span className="capitalize">{data.status}</span>
            {live ? "" : " (demo)"}
          </span>
        </TermLine>
      </div>

      {data.activityText && (
        <TermLine className="text-terminal-dimmed">
          <TbUser className="mr-2 inline text-terminal-cyan" aria-hidden="true" />
          {data.activityText}
        </TermLine>
      )}

      {data.listeningToSpotify && data.spotify && (
        <TermLine>
          <TbHeadphones className="mr-2 inline text-terminal-green" aria-hidden="true" />
          <span className="text-terminal-fg">{data.spotify.song}</span>
          <span className="text-terminal-dimmed"> — {data.spotify.artist}</span>
        </TermLine>
      )}
    </div>
  )
}
