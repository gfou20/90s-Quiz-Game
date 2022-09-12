import {getNickQuestions, getToonQuestions, getDisneyQuestions,getRandomnQuestions,} from "../data/questions.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const questions = []

const answers = []

// const score

let timeLeft = 25

let timer = setInterval(() => {
  timeLeft -= 1
  countdownEl.textContent = timeLeft + ' seconds remaining'
  if(timeLeft === 0) {
    countdownEl.textContent = 'Times Up!'
    clearInterval(timer)
  }
}, 1000)


/*------------------------ Cached Element References ------------------------*/

const nickBtnEl = document.getElementById("nick-btn")
const toonBtnEl = document.getElementById("toon-btn")
const disneyBtnEl = document.getElementById("disney-btn")
const randomBtnEl = document.getElementById("random-btn")
const submitBtnEl =document.getElementById("finish")
const resetBtnEl = document.getElementById("reset")
const mainBtnEL = document.getElementById("return-to-main")
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', initNick)
toonBtnEl.addEventListener('click', initToon)
disneyBtnEl.addEventListener('click', initDisney)
randomBtnEl.addEventListener('click', initRandom)
submitBtnEl.addEventListener('click', submit)
resetBtnEl.addEventListener('click', reset)
mainBtnEL.addEventListener('click', returnMain)

/*-------------------------------- Functions --------------------------------*/

function initNick(questions, quizContainer, resultContainer, submitButton) {
  
  function displayQuestions(questions, quizContainer) {

  }

  function displayResults(questions, quizContainer, resultContainer) {

  }

  displayQuestions(questions, quizContainer)

  submitButton.onclick = function() {
    displayResults(questions, quizContainer, resultContainer)
  }
}

function initToon(evt) {

}

function initDisney(evt) {

}

function initRandom(evt) {

}

function submit(evt) {

}

function reset(evt) {
  
}

function returnMain(evt) {

}