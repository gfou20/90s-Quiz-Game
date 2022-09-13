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
const pEl = document.querySelectorAll(".quiz-text")
const quizBtnEL =document.querySelectorAll(".quiz-btns")
// const submitBtnEl =document.getElementById("finish")
// const resetBtnEl = document.getElementById("reset-btn")
const mainBtnEL = document.getElementById("return-to-main")
const quizArea = document.getElementById("quiz")
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', nickQuiz)
toonBtnEl.addEventListener('click', toonQuiz)
disneyBtnEl.addEventListener('click', disneyQuiz)
randomBtnEl.addEventListener('click', randomQuiz)
quizBtnEL.forEach(b => {
  b.addEventListener('click', handleClick)
})
// quizArea.addEventListener('click', handleClick)
// submitBtnEl.addEventListener('click', submit)
// resetBtnEl.addEventListener('reset', renderQuestion)
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
  nickQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function toonQuiz() {
  toonQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function disneyQuiz() {
  disneyQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function randomQuiz() {
  randomQuestions.forEach(q => {
    renderQuestion(q)
  })
}

function handleClick() {
  nickBtnEl.style.visibility = 'hidden'
  toonBtnEl.style.visibility = 'hidden'
  disneyBtnEl.style.visibility = 'hidden'
  randomBtnEl.style.visibility = 'hidden'
}

// function submit(evt) {

// }

// function reset(evt) {
  
// }

// function returnMain(evt) {

// }