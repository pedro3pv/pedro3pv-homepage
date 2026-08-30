"use client"

import { useEffect, useRef } from "react"
import { SiX } from "react-icons/si"

/**
 * X (Twitter) timeline via the official keyless widgets.js embed.
 * X's widget boots its own guest session and renders the live timeline on any
 * static page — no API key. We inject the async script once, then let the
 * twitter-timeline anchor render into the iframe it replaces.
 */
export function XTimeline({ screenName = "pedro3pv" }: { screenName?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null
    const load = () => {
      const w = window as unknown as {
        twttr?: { widgets?: { load: (el?: HTMLElement) => Promise<void> } }
      }
      if (w.twttr?.widgets) {
        w.twttr.widgets.load(ref.current ?? undefined).catch(() => {})
      } else {
        timer = setTimeout(load, 300)
      }
    }

    const s = document.createElement("script")
    s.src = "https://platform.twitter.com/widgets.js"
    s.async = true
    s.onload = () => load()
    document.head.appendChild(s)

    return () => {
      if (timer) clearTimeout(timer)
      s.remove()
    }
  }, [])

  return (
    <div className="rounded-lg border border-terminal-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terminal-dimmed">
          <SiX className="text-terminal-fg" aria-hidden="true" />
          @{screenName} — latest posts
        </span>
      </div>

      <div
        ref={ref}
        className="relative min-h-[160px] overflow-hidden rounded bg-terminal-code/40"
      >
        {/* The anchor X replaces with its live timeline */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <a
          className="twitter-timeline"
          href={`https://twitter.com/${screenName}`}
          data-theme="dark"
          data-chrome="noheader nofooter"
          data-tweet-limit="4"
          data-height="420"
        >
          Tweets by @{screenName}
        </a>

        <p className="absolute inset-x-0 bottom-0 border-t border-terminal-border bg-terminal-code/70 px-3 py-2 font-mono text-xs text-terminal-dimmed">
          Loading X timeline… if nothing appears, X may be rate-limiting embeds.
        </p>
      </div>
    </div>
  )
}
