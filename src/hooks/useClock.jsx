import { useEffect, useState } from 'react'

export const useClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timeout = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timeout)
  }, [])

  const hours = time.getHours()
  const formattedHours = (hours % 12 || hours).toString().padStart(2, 0)
  const minutes = time.getMinutes().toString().padStart(2, 0)
  const seconds = time.getSeconds().toString().padStart(2, 0)
  const abreviature = hours >= 12 ? 'PM' : 'AM'

  return { hours: formattedHours, minutes, seconds, abreviature }
}
