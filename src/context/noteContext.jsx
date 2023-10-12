import { createContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'sonner'

export const NotesContext = createContext(null)

function NotesContextProvider({ children }) {
  const storageNotes = JSON.parse(localStorage.getItem('notes')) || []
  const [notes, setNotes] = useState(storageNotes)
  const [selectedNote, setSelectedNote] = useState(null)
  const titleFocus = useRef()

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote = {
      id: window.crypto.randomUUID(),
      title: 'New title',
      content: null,
      date: new Date().toISOString()
    }
    setNotes([...notes, newNote])
    setSelectedNote(newNote.id)
    titleFocus.current.focus()
    toast.success('Note has been created')
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

  const deleteNote = (noteId) => {
    const updatedNote = notes.filter((notes) => notes.id !== noteId)
    setNotes(updatedNote)
    toast.success('Note has been deleted')
  }

  const selectNote = (id) => {
    setSelectedNote(id)
    titleFocus.current.focus()
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        createNote,
        updateNote,
        deleteNote,
        selectNote,
        selectedNote,
        titleFocus
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

NotesContextProvider.propTypes = {
  children: PropTypes.array
}

export default NotesContextProvider
