import { SiSpotify } from "react-icons/si"
import { TbExternalLink } from "react-icons/tb"

/**
 * Keyless Spotify profile card — links to the public Spotify profile.
 * (Spotify's top-artists/tracks API needs OAuth, which can't be hidden on a
 * static site, so this card plus the live now-playing in the Discord card
 * cover the Spotify presence without any key.)
 */
export function SpotifyProfileCard() {
  return (
    <div className="rounded-lg border border-terminal-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terminal-dimmed">
          <SiSpotify className="text-[#1DB954]" aria-hidden="true" />
          spotify
        </span>
      </div>

      <a
        href="https://open.spotify.com/user/exnadh9it239wbkgdzvwipkvr"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded border border-terminal-border bg-[#1DB954]/10 text-[#1DB954]">
          <SiSpotify aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-sm text-terminal-fg transition-colors group-hover:text-terminal-green">
            pedro3pv
          </span>
          <span className="block font-mono text-xs text-terminal-dimmed">
            open.spotify.com/user/pedro3pv
          </span>
        </span>
        <TbExternalLink
          className="ml-auto shrink-0 text-terminal-dimmed/50 transition-colors group-hover:text-terminal-green"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
