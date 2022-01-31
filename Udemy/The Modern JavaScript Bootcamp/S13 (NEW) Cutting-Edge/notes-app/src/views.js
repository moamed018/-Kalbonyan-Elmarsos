import moment from 'moment'
import { getFilters } from "./filters";
import { sortNotes, getNotes } from "./notes";


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        note.title = 'Unnamed note'
        textEl.textContent = note.title
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status ELment
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if(filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            document.querySelector('#notes').appendChild(noteEl)
        })
    } else {
        const emptyParagrph = document.createElement("p")
        emptyParagrph.textContent = 'No saved notes here'
        emptyParagrph.classList.add('empty-message')
        notesEl.appendChild(emptyParagrph)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement  = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited');
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('./index.html')
    } else {
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
}

// Generate last edit time 
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }