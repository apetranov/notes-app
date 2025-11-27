import { use, useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState(0);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const handleAddNote = () => {
    if (!title || !content) {
      alert("Missing title and/or content!");
      return;
    }

    const newNote = {
      id: id,
      title: title,
      content: content
    }

    setId(id + 1);

    const notesCopy = [...notes];
    notesCopy.push(newNote);
    setNotes(notesCopy);
    console.log(notes);
    setTitle("");
    setContent("");
  }

  const handleDeleteNote = (idToDelete) => {
    const updatedNotes = notes.filter(note => note.id !== idToDelete);

    setNotes(updatedNotes);
  } 

  return (
    <div className='p-5 space-y-5 flex flex-col justify-center items-center'>
      <div className='space-y-2 flex flex-col justify-center items-center bg-green-600 p-10 rounded-lg'>
        <h1 className='font-black text-white text-center'>Create Note</h1>
        <div className='flex flex-col space-y-3'>
          <div className='flex flex-col space-y-1'>
            <label className='font-bold text-white' htmlFor="">Title</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} className='bg-white rounded-lg p-2' placeholder='Enter note title...' type="text" />
          </div>
          <div className='flex flex-col space-y-1'>
            <label className='font-bold text-white' htmlFor="">Content</label>
            <textarea onChange={(e) => setContent(e.target.value)} value={content} className='bg-white rounded-lg p-2' placeholder='Enter note content...' type="text" />
          </div>
        </div>

        <button onClick={handleAddNote} className='bg-green-400 hover:cursor-pointer hover:bg-green-700 font-semibold rounded-lg py-2 px-5'>Create Note</button>
      </div>

      <div className='p-5 space-y-7 border-t w-full flex flex-col justify-center items-center'>
        {notes.map((note) => (
          <div className='flex flex-col justify-center items-center space-y-2 shadow-lg outline-1 rounded-lg p-5' key={note.id}>
            <div>
              <h1 className='font-bold'>{note.title}</h1>
              <p>{note.content}</p>
            </div>
            <button onClick={() => handleDeleteNote(note.id)} className='hover:bg-red-600 cursor-pointer bg-red-400 rounded-lg text-white font-semibold px-3 py-1'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
