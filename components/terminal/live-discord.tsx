"use client"

import { useLiveData } from "./live-fetch"
import { getPresence, type PresenceResult } from "@/lib/lanyard"
import { DiscordCard } from "./discord-card"
import { StatusBar } from "./status-bar"

const INITIAL: PresenceResult = {
  status: "offline",
  username: "pedro3pv",
  avatar: "",
  listeningToSpotify: false,
  spotify: null,
  activityText: null,
  source: "demo",
}

/**
 * Single source of truth for Discord presence. Fetches Lanyard once every 15s
 * and shares the result with both the card and the status bar, so the site
 * issues exactly one request per interval instead of two.
 */
export function LiveDiscord() {
  const { data } = useLiveData(() => getPresence(), INITIAL, 15000)

  return (
    <>
      <div className="mb-4">
        <DiscordCard presence={data} />
      </div>
      <StatusBar presence={data} />
    </>
  )
}
