import LayoutLogged from '../../layout_logged'
import useNotes from '../../../hooks/notes'

export default function NotesPage () {
  const [notes] = useNotes()

  return (
    <LayoutLogged>
      {notes.map(note => (
        <div key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      ))}
    </LayoutLogged>
  )
}
