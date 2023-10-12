import { useContext } from 'react'
import { NotesContext } from '../context/noteContext'

export const NoteEditor = () => {
  const { notes, selectedNote, updateNote, titleFocus } = useContext(NotesContext)

  const note = notes.find(({ id }) => id === selectedNote)

  const handleChange = (event) => {
    const { name, value } = event.target
    updateNote({ ...note, [name]: value })
  }

  return (
    <div className=" lg:col-span-9 col-span-12 bg-secondary row-span-4 border border-line rounded-2xl p-6 ">
      <div className="flex flex-col gap-4 h-full">
        <input
          name="title"
          ref={titleFocus}
          className="bg-transparent py-2 font-bold text-4xl  outline-none"
          type="text"
          placeholder="Title"
          value={note?.title || ''}
          onInput={handleChange}
        />
        <textarea
          name="content"
          className="bg-transparent outline-none resize-none flex-1"
          placeholder="Content"
          value={note?.content || ''}
          onInput={handleChange}
        ></textarea>
      </div>
    </div>
  )
}
