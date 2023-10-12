import { addIcon, deleteIcon } from '../assets/icons'
import { useContext } from 'react'
import { NotesContext } from '../context/noteContext'

export const NotesList = () => {
  const { notes, createNote, deleteNote, selectNote, selectedNote } = useContext(NotesContext)

  return (
    <div className="bg-secondary lg:col-span-3 col-span-12 row-span-3 border border-line rounded-2xl p-6 overflow-hidden">
      <div className="relative h-full">
        <div className="flex flex-col overflow-y-scroll snap-none h-full no-scrollbar gap-3">
          {notes.length > 0 ? (
            notes.map(({ id, title }) => {
              return (
                <div
                  key={id}
                  className="group flex items-center justify-between"
                >
                  <span
                    className={`block 2xl:text-6xl xl:text-5xl lg:text-3xl text-5xl w-9/12 overflow-hidden text-ellipsis whitespace-nowrap hover:text-active hover:opacity-100 cursor-pointer font-bold transition duration-300 ${
                      id === selectedNote
                        ? 'text-active opacity-100'
                        : 'opacity-10'
                    }`}
                    onClick={() => selectNote(id)}
                  >
                    {title || 'No title'}
                  </span>
                  <span
                    className="relative translate-x-12 group-hover:-translate-x-0 transition-transform duration-300 cursor-pointer"
                    onClick={() => deleteNote(id)}
                  >
                    {deleteIcon}
                  </span>
                </div>
              )
            })
          ) : (
            <span className="grid place-items-center h-full">No hay notas</span>
          )}
        </div>
        <span
          className="absolute bottom-0 right-0 cursor-pointer"
          onClick={createNote}
        >
          {addIcon}
        </span>
      </div>
    </div>
  )
}

