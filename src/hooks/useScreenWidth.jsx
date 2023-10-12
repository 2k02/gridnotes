import { useState } from "react"

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return screenWidth
}
