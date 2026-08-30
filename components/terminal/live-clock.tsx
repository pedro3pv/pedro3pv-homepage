"use client"

import { useEffect, useState } from "react"

function two(n: number) {
  return n.toString().padStart(2, "0")
}

function format(date: Date, locale: string) {
  return {
    time: `${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}`,
    date: date.toLocaleDateString(locale, { weekday: "short", day: "2-digit", month: "short" }),
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }
}

export function LiveClock({ locale = "en-US" }: { locale?: string }) {
  const [now, setNow] = useState(() => format(new Date(), locale))

  useEffect(() => {
    const id = setInterval(() => setNow(format(new Date(), locale)), 1000)
    return () => clearInterval(id)
  }, [locale])

  return (
    <span className="flex items-center gap-2 font-mono text-xs">
      <span aria-hidden="true">⏱</span>
      <span>
        {now.date} · {now.time}
      </span>
    </span>
  )
}
