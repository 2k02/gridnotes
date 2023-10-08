import { useState, useEffect } from 'react'

export const Clock = () => {
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

  return (
    <div className="bg-secondary col-span-9 row-span-2 border border-line rounded-2xl relative">
      <div className="flex items-center justify-center h-full gap-5">
        <span className="text-8xl font-black">{formattedHours}</span>
        <span className="text-8xl font-black">:</span>
        <span className="text-8xl font-black">{minutes}</span>
        <span className="text-8xl font-black">:</span>
        <span className="text-8xl font-black">{seconds}</span>
      </div>
      <span className="absolute bottom-5 right-5 bg-zinc-900 px-4 py-1 rounded-2xl">
        {abreviature}
      </span>
    </div>
  )
}
