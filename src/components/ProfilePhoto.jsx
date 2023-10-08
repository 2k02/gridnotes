import { useState } from 'react'

export const ProfilePhoto = () => {
  const localImage = localStorage.getItem('profile')
  const defaultImage =
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'

  const [url, setUrl] = useState(localImage || defaultImage)

  const handleFileClick = () => {
    const file = document.querySelector('#loadImage')
    file.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const imageDataUrl = reader.result
      setUrl(imageDataUrl)
      localStorage.setItem('profile', imageDataUrl)
    })
    reader.readAsDataURL(file)
  }

  return (
    <div className="bg-secondary col-span-3 row-span-3 border border-line rounded-2xl flex items-center justify-center relative overflow-hidden select-none">
      <img
        id="profilePhoto"
        className="object-cover w-full h-full rounded-2xl"
        src={url}
        alt="profile"
        onClick={handleFileClick}
      />
      <input
        id="loadImage"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  )
}
