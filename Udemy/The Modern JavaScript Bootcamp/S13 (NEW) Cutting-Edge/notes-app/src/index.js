import { createNote } from "./notes";
import { setFilters } from "./filters"
import { renderNotes } from "./views"

renderNotes()

// Add new note button Call
document.querySelector('#create-note').addEventListener('click', () => {
    const id = createNote()
    location.assign(`./edit.html#${id}`)
})

// Filtered by text Call
document.querySelector('#search-text').addEventListener('input', (event) => {
    setFilters({
        searchText: event.target.value
    })
    renderNotes()
})

// Filtered by list Call
document.querySelector('#sorted-by').addEventListener('change', (event) => {
    setFilters({
        sortBy: event.target.value
    })
    renderNotes()
})

// refresh notes list while editing at same time
window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        renderNotes()
    }
})