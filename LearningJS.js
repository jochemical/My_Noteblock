// Een traditionele functiedefinitie in JS:
function greet(name) {
    return `Hello, ${name}!`;
}

// Een arrow function met dezelfde functionaliteit (impliciete return):
const greet = (name) => `Hello, ${name}!`;
// When we use 'const' the variabel greet cannot be reassigned to something else
// It still can be adjusted though

// In React worden arrow functions vaak gebruikt om componenten te definiëren
// Hiervoor wordt een expliciete return gebruikt:
const Header = () => {
    return (
        <div>
            <h1>This is our header</h1>
        </div>
    );
};
// Het gedeelte tussen de return(...) is de JSX - JavaScriptXML
// Voor componenten moet je altijd een parent tag hebben!
// Use a capital for components to distinguish with tags

// con and let are accesible within the block where they are defined (Blockscope)
let variable_1 = 1
const variable_con = 2

// var are accesible within the function in which they are defined (Functionscope)
var variable_2 = 3

// This is an array:
let notes = []
// Comparable to a list in python

// Down here we create a component and loop over the array called notes
// With {} we can write JS-code with the JSX
// with 'notes.map(note)' we loop over the elements in 'notes' where each element get
// the name 'note'.
const NotesPage = () => {
    return (
        <div>
            {notes.map(note => (
                <p>
                    {note.body}
                </p>
            ))}
        </div>
    )
}

//   Met de volgende methode kun je een variabele meegeven aan een functie/component genaamd ListItem:
const NotesPage = () => {
    return (
        <div>
            {notes.map(note => (
                <p>
                    <ListItem note={note} />
                </p>
            ))}
        </div>
    )
}

//   Dit kan korter 
// We gebruiken { note } als argument om de variabele 'note' te destructen:
const Listitem = ({ note }) => {
    return (
        <div className="notes-list-item">
            <h3>{note?.body}</h3>
        </div>
    )
}
// We gebruiken {} binnen de JMX om een variabele op te roepen
// note? betekent vul deze variabele alleen in als hij bestaat

// Hiermee kun je iets printen:
console.log(props.match)

 // Secondly we find the specific note in our database
  // let note = notes.find(note => note.id == noteId)

// In this project we use <link> instead of <a>
// since <link> is part of the react routen and ensures that
// only a component is reloaded instead of the whole website 
// when using <a> the whole website is reloaded and this is not 
// the react router has nothing to do with <a>

// Using {} we import only a specific object from the module 'react-router-dom'
// import { Link } from 'react-router-dom'

// Om een nieuw object te maken van een klasse in JavaScript, 
// moet je altijd new gebruiken. Het new-woord roept de constructor 
// van de klasse aan en creëert een nieuw exemplaar van die klasse.
// let getTime = (note) => {
//     return new Date(note.updated).toLocaleDateString()
// }
// Als je new weglaat dan roep je gewoon een string functie op die in die klasse zit.

// useEffect(() => {
//     // There is a anonymous function '()' inside the function useEffect() 


