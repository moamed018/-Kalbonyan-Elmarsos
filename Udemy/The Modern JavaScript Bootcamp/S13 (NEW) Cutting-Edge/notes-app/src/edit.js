import { initializeEditPage, generateLastEdited } from "./views"
import { updateNotes, removeNote } from "./notes";

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

// Change details of note Call
titleElement.addEventListener('input', (event) => {
    const note = updateNotes(noteId, {
        title: event.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
})

bodyElement.addEventListener('input', (event) => {
    const note = updateNotes(noteId, {
        body: event.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
})

// Remove this note button setup
removeElement.addEventListener('click', (event) => {
    removeNote(noteId)
    location.assign('./index.html')
})

// Update the inputes all over pages
window.addEventListener('storage', (event) => {
    if (event.key === 'notes'){
        initializeEditPage(noteId)
    }
})
