// Last.fm recent tracks — client-safe. Needs a public, app-scoped API key
// (NEXT_PUBLIC_LASTFM_API_KEY). Without it, falls back to a demo state.

import { lastfmDemo } from "./fallback"

const BASE = "https://ws.audioscrobbler.com/2.0/"
const USER = "pedro3pv"
const DEFAULT_KEY =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_LASTFM_API_KEY ?? "" : ""

export type LastFmTrack = {
  name: string
  artist: string
  album: string
  art: string
  url: string
  nowPlaying: boolean
}

export type LastFmResult = {
  nowPlaying: LastFmTrack | null
  recent: LastFmTrack[]
  source: "live" | "demo"
}

interface RawTrack {
  name?: string
  artist?: { "#text"?: string } | string
  album?: { "#text"?: string } | string
  url?: string
  image?: Array<{ size?: string; "#text"?: string }>
  "@attr"?: { nowplaying?: string }
}

interface RawResponse {
  error?: number
  message?: string
  recenttracks?: { track?: RawTrack[] }
}

function pickImage(images: RawTrack["image"]): string {
  if (!images?.length) return ""
  const big =
    images.find((i) => i.size === "extralarge") ||
    images.find((i) => i.size === "large") ||
    images[images.length - 1]
  return big?.["#text"] ?? ""
}

function normalize(t: RawTrack): LastFmTrack {
  const artistName =
    typeof t.artist === "string" ? t.artist : t.artist?.["#text"] ?? "Unknown Artist"
  const albumName =
    typeof t.album === "string" ? t.album : t.album?.["#text"] ?? ""

  return {
    name: t.name ?? "Unknown Track",
    artist: artistName,
    album: albumName,
    art: pickImage(t.image),
    url: t.url ?? "https://www.last.fm/user/pedro3pv",
    nowPlaying: t["@attr"]?.nowplaying === "true",
  }
}

function demoResult(): LastFmResult {
  const now = normalize({
    name: lastfmDemo.track.name,
    artist: { "#text": lastfmDemo.track.artist },
    album: { "#text": lastfmDemo.track.album },
    image: lastfmDemo.track.image,
    "@attr": { nowplaying: "true" },
  })
  return {
    nowPlaying: now,
    recent: lastfmDemo.recent.map((r) =>
      normalize({ name: r.name, artist: { "#text": r.artist }, album: { "#text": r.album } }),
    ),
    source: "demo",
  }
}

export function lastfmKey(): string {
  return DEFAULT_KEY.trim()
}

export async function getLastFm(limit = 6): Promise<LastFmResult> {
  const apiKey = lastfmKey()
  if (!apiKey) return demoResult()

  const url = `${BASE}?method=user.getrecenttracks&user=${USER}&api_key=${encodeURIComponent(apiKey)}&format=json&limit=${limit + 1}`

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Last.fm HTTP ${res.status}`)
    const json = (await res.json()) as RawResponse
    if (json.error) throw new Error(json.message || `Last.fm error ${json.error}`)

    const tracks = json.recenttracks?.track ?? []
    const normalized = tracks.map(normalize)
    const nowPlaying = normalized.find((t) => t.nowPlaying) ?? null
    const recent = normalized.filter((t) => !t.nowPlaying).slice(0, limit)

    return {
      nowPlaying,
      recent: recent.length ? recent : normalized.slice(0, limit),
      source: "live",
    }
  } catch (e) {
    console.error("Last.fm fetch failed:", e)
    return demoResult()
  }
}
