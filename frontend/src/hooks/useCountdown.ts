import { useEffect, useState } from 'react'

const TICK_MS = 200

// Counts down from durationMs to 0, starting when the component mounts.
// The end time is computed once, so the display never drifts:
// each tick shows "end - now" instead of removing 1 second.
function useCountdown(durationMs: number): number {
  const [remainingMs, setRemainingMs] = useState(durationMs)

  useEffect(() => {
    const endTime = Date.now() + durationMs

    const intervalId = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now())
      setRemainingMs(remaining)
      if (remaining === 0) clearInterval(intervalId)
    }, TICK_MS)

    // stop the interval when the component disappears
    return () => clearInterval(intervalId)
  }, [durationMs])

  return remainingMs
}

export default useCountdown
