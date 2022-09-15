import {nickQuestions, toonQuestions, disneyQuestions, randomQuestions} from "../data/questions.js"
import {confetti} from "./confetti.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const answers = []

let totalPoints = 0

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
const pEl = document.querySelectorAll(".quiz-text")
const quizBtnEL =document.querySelectorAll(".quiz-btns")
const quizArea = document.getElementById("quiz")
let countdownEl = document.getElementById('countdown')
const resetBtn = document.getElementById("reset-main")
// const favicon = document.querySelector("favicon")

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', nickQuiz)
toonBtnEl.addEventListener('click', toonQuiz)
disneyBtnEl.addEventListener('click', disneyQuiz)
randomBtnEl.addEventListener('click', randomQuiz)
quizBtnEL.forEach(b => {
  b.addEventListener('click', handleClick)
})


/*-------------------------------- Functions --------------------------------*/



function renderQuestion(quesObj) {
  const div = document.createElement('div')
  div.className = "qdiv"
  quizArea.append(div)
  const question = document.createElement('p')
  question.textContent = quesObj.question
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  const btn3 = document.createElement('button')
  const btn4 = document.createElement('button')
  btn1.className = 'btns'
  btn2.className = 'btns'
  btn3.className = 'btns'
  btn4.className = 'btns'
  btn1.textContent = quesObj.answers.a
  btn2.textContent = quesObj.answers.b
  btn3.textContent = quesObj.answers.c
  btn4.textContent = quesObj.answers.d
  div.append(question, btn1, btn2, btn3, btn4)
  btn1.addEventListener('click', result)
  btn2.addEventListener('click', result)
  btn3.addEventListener('click', result)
  btn4.addEventListener('click', result)
  function result(e) {
    let selBtn = e.target.textContent
    answers.push(selBtn)
    if(selBtn === quesObj.correctAnswer) {
      totalPoints++ 
    } 
    if(selBtn){
      div.style.visibility = 'hidden'
    }
    if(answers.length === 8) {
      let messDiv = document.createElement('div')
      quizArea.append(messDiv)
      let mess = document.createElement('h1')
      messDiv.append(mess)
      if(totalPoints === 8){
        mess.textContent = `Your score is ${totalPoints}! You win!! Perfect Score!!`
        confetti.start(2000)
      } else if(totalPoints >=5) {
        mess.textContent = `Your score is ${totalPoints}! You win!! You know your stuff!!`
      } else {
        mess.textContent = `Your score is ${totalPoints}! You lose!!Try again?!`
        resetBtn.style.display = 'block'
      }
    }
  }
}

function handleClick() {
  nickBtnEl.style.visibility = 'hidden'
  toonBtnEl.style.visibility = 'hidden'
  disneyBtnEl.style.visibility = 'hidden'
  randomBtnEl.style.visibility = 'hidden'
  resetBtn.style.visibility = 'hidden'
  pEl.forEach(p => {
    p.style.visibility = 'hidden'
  })
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
