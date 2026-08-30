"use client"

import { useEffect, useState, useCallback } from "react"

/**
 * Client-side live data hook for static export. Fetches on mount, then polls
 * every `intervalMs`. `initial` is the static/prerendered fallback shown before
 * the first fetch resolves.
 */
export function useLiveData<T>(fetcher: () => Promise<T>, initial: T, intervalMs = 30000) {
  const [data, setData] = useState<T>(initial)
  const [loading, setLoading] = useState(true)

  const run = useCallback(async () => {
    try {
      const result = await fetcher()
      setData(result)
      setLoading(false)
    } catch (e) {
      console.error("live data fetch failed:", e)
      setLoading(false)
    }
  }, [fetcher])

  useEffect(() => {
    void run()
    const id = setInterval(() => void run(), intervalMs)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, intervalMs])

  return { data, loading }
}
