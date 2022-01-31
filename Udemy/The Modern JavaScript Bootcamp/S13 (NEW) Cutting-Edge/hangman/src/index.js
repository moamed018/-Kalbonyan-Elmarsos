'use strict'
import Hangman from "./hangman"
import getPuzzle from "./requests"

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let theGame

//Start the game
const startNewGame = async () => {
    const puzzle = await getPuzzle('1')
    theGame = new Hangman(puzzle, 10)
    rander()
}

// Render the game
const rander = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = theGame.statusMessage

    theGame.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

// Reset button setup
document.querySelector("#reset").addEventListener('click', startNewGame)

// listener to the user keyboard pressing
window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode)
    theGame.makeGuess(guess)
    rander()
})

// Generate SPAN Dom
const generateSpanDOM = async () => {
    
}

startNewGame()

generateSpanDOM()
