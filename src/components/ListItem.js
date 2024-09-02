
import React from 'react'
import { Link } from 'react-router-dom'


// Function to create title for note
let getTitle = (note) => {

    // split each new line and take out first line
    const title = note.body.split('\n')[0]

    // Max length of title
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


// Function to get date of note
let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


// Function to present first part of the content
let getContent = (note) => {

    // Get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')

    // Ensure max length
    if (content.length > 5) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }
}


// Functional component to list all items
const ListItem = ({ note }) => {
    // console.log('NOTE:', note)

    return (

        <Link to={`/note/${note.id}`}>
            {/* With $ we get the dynamic url as a variable */}
            {/*  Mind the backticks ` ! */}

            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p>
                    <span>{getTime(note)}</span>
                    {getContent(note)}
                </p>
            </div>
        </Link>
    )
}

export default ListItem
