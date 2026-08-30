import {
  SiGithub,
  SiBluesky,
  SiReddit,
  SiSpotify,
  SiSteam,
  SiDiscord,
  SiLastdotfm,
  SiEbay,
  SiRiotgames,
  SiX,
  SiTwitch,
  SiYoutube,
} from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6"

export type SocialLink = {
  label: string
  handle: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  lightColor: string
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "pedro3pv",
    href: "https://github.com/pedro3pv",
    icon: SiGithub,
    color:      "hover:border-white/60 hover:bg-white/20",
    lightColor: "hover:border-slate-400 hover:bg-slate-100",
  },
  {
    label: "X / Twitter",
    handle: "pedro3pv",
    href: "https://x.com/pedro3pv",
    icon: SiX,
    color:      "hover:border-sky-400/60 hover:bg-sky-500/20",
    lightColor: "hover:border-sky-400 hover:bg-sky-100",
  },
  {
    label: "Twitch",
    handle: "pedro3pv",
    href: "https://www.twitch.tv/pedro3pv",
    icon: SiTwitch,
    color:      "hover:border-purple-400/60 hover:bg-purple-500/20",
    lightColor: "hover:border-purple-400 hover:bg-purple-100",
  },
  {
    label: "YouTube",
    handle: "pedro3pv",
    href: "https://www.youtube.com/channel/UC8ViC3hHYXgaZML00OY5mTQ",
    icon: SiYoutube,
    color:      "hover:border-red-400/60 hover:bg-red-500/20",
    lightColor: "hover:border-red-400 hover:bg-red-100",
  },
  {
    label: "Bluesky",
    handle: "pedro3pv",
    href: "https://bsky.app/profile/pedro3pv.bsky.social",
    icon: SiBluesky,
    color:      "hover:border-sky-300/60 hover:bg-sky-400/20",
    lightColor: "hover:border-sky-400 hover:bg-sky-100",
  },
  {
    label: "Reddit",
    handle: "u/pedro3pv",
    href: "https://www.reddit.com/u/pedro3pv",
    icon: SiReddit,
    color:      "hover:border-orange-400/60 hover:bg-orange-500/20",
    lightColor: "hover:border-orange-400 hover:bg-orange-100",
  },
  {
    label: "Spotify",
    handle: "pedro3pv",
    href: "https://open.spotify.com/user/exnadh9it239wbkgdzvwipkvr",
    icon: SiSpotify,
    color:      "hover:border-green-400/60 hover:bg-green-500/20",
    lightColor: "hover:border-green-400 hover:bg-green-100",
  },
  {
    label: "Steam",
    handle: "pedro3pv",
    href: "https://steamcommunity.com/profiles/76561198144283173",
    icon: SiSteam,
    color:      "hover:border-blue-300/60 hover:bg-blue-400/20",
    lightColor: "hover:border-blue-400 hover:bg-blue-100",
  },
  {
    label: "Last.fm",
    handle: "pedro3pv",
    href: "https://www.last.fm/pt/user/pedro3pv",
    icon: SiLastdotfm,
    color:      "hover:border-red-300/60 hover:bg-red-400/20",
    lightColor: "hover:border-red-400 hover:bg-red-100",
  },
  {
    label: "Discord",
    handle: "pedro3pv",
    href: "https://discord.com/users/pedro3pv",
    icon: SiDiscord,
    color:      "hover:border-indigo-400/60 hover:bg-indigo-500/20",
    lightColor: "hover:border-indigo-400 hover:bg-indigo-100",
  },
  {
    label: "League of Legends",
    handle: "pedro3pv#BR1",
    href: "https://www.op.gg/summoners/br/pedro3pv-BR1",
    icon: SiRiotgames,
    color:      "hover:border-rose-400/60 hover:bg-rose-500/20",
    lightColor: "hover:border-rose-400 hover:bg-rose-100",
  },
  {
    label: "LinkedIn",
    handle: "in/pedro3pv",
    href: "https://linkedin.com/in/pedro3pv",
    icon: FaLinkedin,
    color:      "hover:border-blue-400/60 hover:bg-blue-500/20",
    lightColor: "hover:border-blue-400 hover:bg-blue-100",
  },
  {
    label: "eBay",
    handle: "pedro3pv",
    href: "https://www.ebay.com/usr/pedro3pv",
    icon: SiEbay,
    color:      "hover:border-yellow-400/60 hover:bg-yellow-400/20",
    lightColor: "hover:border-yellow-400 hover:bg-yellow-100",
  },
]
