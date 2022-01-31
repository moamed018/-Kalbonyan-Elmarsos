import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

// Create a note
const createNote = () => {
    const timpstamp = moment().valueOf()
    const id = uuidv4()
    notes.push({
        id,
        title: '',
        body: '',
        createdAt: timpstamp,
        updatedAt: timpstamp
    })
    saveNotes()

    return id
}

// Removing a note when clicking x by ID
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}

// sorted by setup
const sortNotes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
            return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase() ) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
} 

// Update note
const updateNotes = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if(!note) {
        return
    }
    if(typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }
    if(typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }
    saveNotes()
    return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNotes }