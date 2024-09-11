
import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


// Functioncomponent for NotePAge
function NotePage({ match, history }) {

  // By using {match} the props-object (passed in automatically) is 'destructed'
  // The match attribute of props is directly signed to the variable 'match'

  // First we retrieve the ID of the note using 'match' (from props, URL-info)
  let noteId = match.params.id

  // React Hook to create state variable (initialised on null/empty)
  let [note, setNote] = useState(null)

  // useEffect is a React Hook to create additional tasks within (functional) components
  useEffect(() => {

    // Call getNote() function
    getNote()

  }, [noteId])
  // Dependency array [noteId] ensures useEffect is only executed when noteId changes. 
  // If the component refreshes but noteId remains unchanged, then useEffect is NOT executed.


  // Define asynchronous function 'getNote' (async is necessarry to use 'await')
  let getNote = async () => {
    if (noteId === 'new') return

    // get data from fetch API
    let response = await fetch(`http://192.168.2.7:3001/notes/${noteId}`)
    // The fetch function sends a HTTP-request to call data from server (Fetch API)
    // Mind the backticks to use dynamic URL and store into variable 'noteID'

    // Parse response to JSON
    let data = await response.json()

    // Save JSON in componentstate with setNotes() function (rerender component) 
    setNote(data)
  }


  // Create function
  let createNote = async () => {
    await fetch(`http://192.168.2.7:3001/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }


  // Update function
  let updateNote = async () => {
    await fetch(`http://192.168.2.7:3001/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }


  // Delete function
  let deleteNote = async () => {
    await fetch(`http://192.168.2.7:3001/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    history.push('/')
  }


  // Submit function (done-button or back-button)
  let handleSubmit = () => {
    if (noteId !== 'new' && !note.body) {
      deleteNote()
    } else if (noteId !== 'new') {
      updateNote()
    } else if (noteId === 'new' && note !== null) {
      createNote()
    }
    history.push('/')
  }


  // JSX
  return (
    <div className='note'>

      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>

        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}

      </div>

      <textarea
        onChange={(e) => setNote({ ...note, 'body': e.target.value })}
        value={note?.body}
      />

      {/* Remember setNote is the function to update the statevariable */}
      {/* ...note copies the current state,  */}
      {/* 'body':e.target.value adjusts the body of the current state only */}
      {/* setNote function knows how to deal with the above statements together into {} */}
      
    </div>
  )
}


export default NotePage