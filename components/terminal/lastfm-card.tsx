"use client"

import { useLiveData } from "./live-fetch"
import { getLastFm, type LastFmResult } from "@/lib/lastfm"
import { TermLine, DemoPill } from "./window"
import { TbMusic } from "react-icons/tb"
import { SiLastdotfm } from "react-icons/si"

const INITIAL: LastFmResult = {
  nowPlaying: null,
  recent: [],
  source: "demo",
}

export function LastFmCard() {
  const { data } = useLiveData(() => getLastFm(6), INITIAL, 30000)
  const live = data.source === "live"

  return (
    <div className="rounded-lg border border-terminal-border p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terminal-dimmed">
          <SiLastdotfm className="text-[#d51007]" aria-hidden="true" />
          last.fm / pedro3pv
        </span>
        {!live && <DemoPill />}
      </div>

      {data.nowPlaying && (
        <div className="mb-4 flex items-center gap-3">
          {data.nowPlaying.art ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.nowPlaying.art}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded border border-terminal-border object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded border border-terminal-border text-terminal-green">
              <TbMusic aria-hidden="true" />
            </div>
          )}
          <div className="min-w-0">
            <TermLine className="text-terminal-green">
              {live ? "♪ " : "(demo) ♪ "}
              {data.nowPlaying.name}
            </TermLine>
            <TermLine className="text-terminal-dimmed">
              {data.nowPlaying.artist}
              {data.nowPlaying.album ? ` — ${data.nowPlaying.album}` : ""}
            </TermLine>
          </div>
        </div>
      )}

      <div className="space-y-1 border-l border-terminal-border pl-3">
        {data.recent.map((t, i) => (
          <TermLine key={`${t.name}-${i}`} className="text-terminal-dimmed">
            <span className="mr-2 text-terminal-dimmed/50">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-terminal-fg">{t.name}</span>
            <span className="text-terminal-dimmed/80"> · {t.artist}</span>
          </TermLine>
        ))}
      </div>
    </div>
  )
}
