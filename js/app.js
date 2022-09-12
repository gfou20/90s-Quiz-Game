import {getNickQuestions, getToonQuestions, getDisneyQuestions,getRandomnQuestions,} from "../data/questions.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const questions = []

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
// submitBtnEl.addEventListener('click', submit)
// resetBtnEl.addEventListener('click', reset)
// mainBtnEL.addEventListener('click', returnMain)

/*-------------------------------- Functions --------------------------------*/

function initNick(evt) {
  const isNick = evt.target.id === "nick-btn"
  const newNickQues = {
    button: isNick ? getNickQuestions() : null,
  }
  // console.log(newNickQues)
  questions.push(newNickQues)
  render()
}

function initToon(evt) {
  const isToon = evt.target.id === "toon-btn"
  const newToonQues = {
    button: isToon ? getToonQuestions() : null,
  }
  // console.log(newToonQues)
  questions.push(newToonQues)
  render()
}

function initDisney(evt) {
  const isDisney = evt.target.id === "disney-btn"
  const newDisneyQues = {
    button: isDisney ? getDisneyQuestions() : null,
    
  }
  // console.log(newDisneyQues)
  questions.push(newDisneyQues)
  render()
}

function initRandom(evt) {
  const isRandom = evt.target.id === "random-btn"
  const newRandomQues = {
    button: isRandom ? getRandomQuestions() : null,
  }
  // console.log(newRandomQues)
  questions.push(newRandomQues)
  render()
}

function render() {

}

// function submit(evt) {

// }

// function reset(evt) {
  
// }

// function returnMain(evt) {

// }