import { useEffect, useRef, useState } from 'react'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { NoteEditor } from '../components/NoteEditor'
import { NotesList } from '../components/NotesList'
import { Clock } from '../components/Clock'

export const Home = () => {

  const storageNotes = JSON.parse(localStorage.getItem('notes')) || []
  const [notes, setNotes] = useState(storageNotes)
  const [selectedNote, setSelectedNote] = useState(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const titleRef = useRef()

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
  }, [notes])

  const selectNote = (id) => {
    setSelectedNote(id)
    titleRef.current.focus()
  }

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
    setSelectedNote(newNote.id)
    titleRef.current.focus()
  }

  const updateNote = (updatedNote) => {
    const editNote = notes.map((note) => {
      if (note.id === selectedNote) {
        return { ...note, ...updatedNote }
      }
      return note
    })
    setNotes(editNote)
  }

  const deleteNote = (id) => {
    const updatedNote = notes.filter((notes) => notes.id !== id)
    setNotes(updatedNote)
  }

  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen p-10">
      {screenWidth >= 1024 && <ProfilePhoto />}
      <NoteEditor
        selectedNote={notes.find((note) => note.id === selectedNote)}
        updateNote={updateNote}
        titleFocus={titleRef}
      />
      <NotesList
        notes={notes}
        selectedNote={selectedNote}
        handleSelectNote={selectNote}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      {screenWidth >= 1024 && <Clock />}
    </div>
  )
}
