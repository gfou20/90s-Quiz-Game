import {nickQuestions, toonQuestions, disneyQuestions, randomQuestions} from "../data/questions.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const questions = []

const answers = []

let timeLeft = 25

// let timer = setInterval(() => {
//   timeLeft -= 1
//   countdownEl.textContent = timeLeft + ' seconds remaining'
//   if(timeLeft === 0) {
//     countdownEl.textContent = 'Times Up!'
//     clearInterval(timer)
//   }
// }, 1000)


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
const quizArea = document.getElementById("quiz")

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', nickQuiz)
toonBtnEl.addEventListener('click', toonQuiz)
disneyBtnEl.addEventListener('click', disneyQuiz)
randomBtnEl.addEventListener('click', randomQuiz)
// submitBtnEl.addEventListener('click', submit)
// resetBtnEl.addEventListener('click', reset)
// mainBtnEL.addEventListener('click', returnMain)

/*-------------------------------- Functions --------------------------------*/

function renderQuestion(quesObj) {
  const question = document.createElement('p')
  question.textContent = quesObj.question
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  const btn3 = document.createElement('button')
  const btn4 = document.createElement('button')
  btn1.textContent = quesObj.answers.a
  btn2.textContent = quesObj.answers.b
  btn3.textContent = quesObj.answers.c
  btn4.textContent = quesObj.answers.d
  quizArea.append(question, btn1, btn2, btn3, btn4)
}


function nickQuiz() {
  nickBtnEl.style.visibility = 'hidden'
  nickQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function toonQuiz() {
  toonBtnEl.style.visibility = 'hidden'
  toonQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function disneyQuiz() {
  disneyBtnEl.style.visibility = 'hidden'
  disneyQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function randomQuiz() {
  randomBtnEl.style.visibility = 'hidden'
  randomQuestions.forEach(q => {
    renderQuestion(q)
  })
}

// function submit(evt) {

// }

// function reset(evt) {
  
// }

// function returnMain(evt) {

// }