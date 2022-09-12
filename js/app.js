import {getNickQuestions, getToonQuestions, getDisneyQuestions,getRandomQuestions, nickQuestions,} from "../data/questions.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const questions = []

const answers = []

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
let quizContainerEL = document.getElementById("quizzes")
const submitBtnEl =document.getElementById("finish")
const resetBtnEl = document.getElementById("reset")
const mainBtnEL = document.getElementById("return-to-main")
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', nickQuiz)
// toonBtnEl.addEventListener('click', initToon)
// disneyBtnEl.addEventListener('click', initDisney)
// randomBtnEl.addEventListener('click', initRandom)
// submitBtnEl.addEventListener('click', submit)
// resetBtnEl.addEventListener('click', reset)
// mainBtnEL.addEventListener('click', returnMain)

/*-------------------------------- Functions --------------------------------*/

// function initNick(evt) {
//   const isNick = evt.target.id === "nick-btn"
//   const newNickQues = {
//     button: isNick ? getNickQuestions() : null,
//   }
//   console.log(newNickQues)
//   questions.push(newNickQues)
//   // render()
// }

function nickQuiz() {
  nickBtnEl.style.visibility = 'hidden'
  
  nickQuestions.forEach((currentQues, quesNum) => {
    
    for(letter in currentQues.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${quesNum}" value="${letter}">
        ${letter} : 
        ${currentQues.answers[letter]}
        </label>`
      )
    }
    questions.push(
      `<div class="question"> ${currentQues.question}</div>
      <div class="answers"> ${answers.join("")}</div>`
    )
    quizContainerEL.textContent = questions.join("")
  })
  let isNick = getNickQuestions()
}




// function initToon(evt) {
//   const isToon = evt.target.id === "toon-btn"
//   const newToonQues = {
//     button: isToon ? getToonQuestions() : null,
//   }
//   console.log(newToonQues)
//   questions.push(newToonQues)
//   render()
// }

// function initDisney(evt) {
//   const isDisney = evt.target.id === "disney-btn"
//   const newDisneyQues = {
//     button: isDisney ? getDisneyQuestions() : null,
    
//   }
//   console.log(newDisneyQues)
//   questions.push(newDisneyQues)
//   render()
// }

// function initRandom(evt) {
//   const isRandom = evt.target.id === "random-btn"
//   const newRandomQues = {
//     button: isRandom ? getRandomQuestions() : null,
//   }
//   console.log(newRandomQues)
//   questions.push(newRandomQues)
//   render()
// }

// function render() {
  
// }

// function submit(evt) {

// }

// function reset(evt) {
  
// }

// function returnMain(evt) {

// }