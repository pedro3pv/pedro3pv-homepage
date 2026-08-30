"use client"

import { useEffect, useRef, useState, useCallback } from "react"

/**
 * Client-side live data hook for static export. Fetches on mount, then polls
 * every `intervalMs`. `initial` is the static/prerendered fallback shown before
 * the first fetch resolves.
 *
 * The `fetcher` is held in a ref so that callers may pass an inline arrow
 * function (recreated each render) without re-triggering the effect — that
 * would otherwise cause an infinite refetch loop on every state update.
 */
export function useLiveData<T>(fetcher: () => Promise<T>, initial: T, intervalMs = 30000) {
  const [data, setData] = useState<T>(initial)
  const [loading, setLoading] = useState(true)

  const fetcherRef = useRef(fetcher)
  useEffect(() => {
    fetcherRef.current = fetcher
  })

  const run = useCallback(async () => {
    try {
      const result = await fetcherRef.current()
      setData(result)
      setLoading(false)
    } catch (e) {
      console.error("live data fetch failed:", e)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void run()
    const id = setInterval(() => void run(), intervalMs)
    return () => clearInterval(id)
  }, [run, intervalMs])

  return { data, loading }
}
