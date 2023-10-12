import { useClock } from '../hooks/useClock'

export const Clock = () => {
  const {hours, minutes, seconds, abreviature} = useClock();

  return (
    <div className="bg-secondary col-span-9 row-span-2 border border-line rounded-2xl relative">
      <div className="flex items-center justify-center h-full gap-5">
        <span className="text-8xl font-black">{hours}</span>
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
