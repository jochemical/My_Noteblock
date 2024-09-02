
import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


// Component for notes overview
const NotesPage = () => {

  // React Hook
  let [notes, setNotes] = useState([])
  // Create statevariabele named 'notes' (initiated as empty array) 
  // setNotes() will become the function to update the date stored in the statevariable

  // React Hook
  useEffect(() => {
    // useEffect is a React Hook to create addtional tasks within (functional) components.
    // There is a anonymous function '()' inside the function useEffect()

    // Call getNotes() function (defined lateron)
    getNotes()

    // The dependency-array [..] below can be used to define when useEffect will be called
    // When empty, useEffect will be called only during the first render of this component
    // This is identical as componentDidMount for classcomponents.

  }, [])


  // Define async function 'getNotes'
  let getNotes = async () => {
    // async is necessarry to use 'await'

    // Get data from fetch API
    let response = await fetch('http://192.168.2.7:3001/notes')
    // The fetch function sends a HTTP-request to call data from server (Fetch API)
    // 'await' ensures that fetch is completed before executing the next line

    // Parse response to JSON
    let data = await response.json()

    // Save JSON in componentstate with setNotes() function (rerender component). 
    setNotes(data)
  }

  // JSX
  return (
    <div className="notes">

      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
          // Index is auto-incrementing
        ))}
      </div>

      <div>
        <AddButton />
      </div>

    </div>
  )
}


export default NotesPage