// Discord presence via Lanyard — keyless (needs only a numeric public user ID),
// CORS-enabled, so it runs live in the browser. Spotify now-playing rides along
// for free inside Lanyard's `spotify` object.

import { discordDemo } from "./fallback"

const BASE = "https://api.lanyard.rest/v1/users"

// A Discord user ID is public (not a secret), so a built-in default keeps the
// live status working on a static site with no env setup. Override via
// NEXT_PUBLIC_DISCORD_USER_ID if the handle ever changes.
const DEFAULT_USER_ID =
  (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_DISCORD_USER_ID ?? "" : "") ||
  "335455836593979393"

export type DiscordStatus = "online" | "idle" | "dnd" | "offline"

export type LanyardActivity = {
  type: number
  name?: string
  details?: string
  state?: string
  emoji?: { name?: string; animated?: boolean }
}

export type LanyardSpotify = {
  song: string
  artist: string
  album: string
  album_art_url: string
  track_id: string
  timestamps?: { start?: number; end?: number }
}

export type PresenceResult = {
  status: DiscordStatus
  username: string
  avatar: string
  listeningToSpotify: boolean
  spotify: LanyardSpotify | null
  activityText: string | null
  source: "live" | "demo"
}

interface RawLanyard {
  success?: boolean
  data?: {
    discord_status?: DiscordStatus
    listening_to_spotify?: boolean
    spotify?: LanyardSpotify | null
    discord_user?: { username?: string; id?: string; avatar?: string; discriminator?: string }
    activities?: LanyardActivity[]
  }
}

export function discordUserId(): string {
  return DEFAULT_USER_ID.trim()
}

export async function getPresence(userId = discordUserId()): Promise<PresenceResult> {
  if (!userId) {
    const d = discordDemo
    return {
      status: d.discord_status,
      username: "pedro3pv",
      avatar: "",
      listeningToSpotify: d.listening_to_spotify,
      spotify: d.spotify as LanyardSpotify,
      activityText: d.activities[0].state ?? "",
      source: "demo",
    }
  }

  try {
    const res = await fetch(`${BASE}/${userId}`)
    if (!res.ok) throw new Error(`Lanyard HTTP ${res.status}`)
    const json = (await res.json()) as RawLanyard
    const data = json.data
    if (!data) throw new Error("Lanyard: no data")

    const status: DiscordStatus = data.discord_status ?? "offline"
    const live = (data.activities ?? []).filter((a) => a.type !== 4)
    const custom = (data.activities ?? []).find((a) => a.type === 4)
    const ranked = live.filter((a) => a.type === 0).sort((a, b) => (a.type ?? 0) - (b.type ?? 0))[0]

    const user = data.discord_user
    return {
      status,
      username: user?.username ?? "pedro3pv",
      avatar: user?.avatar ?? "",
      listeningToSpotify: data.listening_to_spotify ?? false,
      spotify: data.spotify ?? null,
      activityText: ranked?.details ?? ranked?.state ?? (custom?.state ?? null),
      source: "live",
    }
  } catch (e) {
    console.error("Lanyard fetch failed:", e)
    return {
      status: "offline",
      username: "pedro3pv",
      avatar: "",
      listeningToSpotify: false,
      spotify: null,
      activityText: null,
      source: "demo",
    }
  }
}
