import { ProfilePhoto } from '../components/ProfilePhoto'
import { NoteEditor } from '../components/NoteEditor'
import { NotesList } from '../components/NotesList'
import { Clock } from '../components/Clock'
import NotesContextProvider from '../context/noteContext'
import { useScreenWidth } from '../hooks/useScreenWidth'
import { Toaster } from 'sonner'

export const Home = () => {
  const screenWidth = useScreenWidth()

  return (
    <NotesContextProvider>
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen p-10">
        {screenWidth >= 1024 && <ProfilePhoto />}
        <NoteEditor />
        <NotesList />
        {screenWidth >= 1024 && <Clock />}
      </div>
      <Toaster />
    </NotesContextProvider>
  )
}
