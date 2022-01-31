'use strict'

// Puzzle the API Setup
const getPuzzle = async (wordNum) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordNum}`,{})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Error has ben happend')
    }
}

export {getPuzzle as default}