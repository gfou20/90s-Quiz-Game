import {nickQuestions, toonQuestions, disneyQuestions, randomQuestions} from "../data/questions.js"
import {confetti} from "./confetti.js"

/*-------------------------------- Variables --------------------------------*/

let answers = []

let totalPoints = 0

let timeLeft = 25

const nickAudio = new Audio('../assets/audio/spongebob.mp3')

const toonAudio = new Audio('../assets/audio/courage.mp3')

const disneyAudio = new Audio('../assets/audio/timon.mp3')

const randomAudio = new Audio('../assets/audio/family-guy.mp3')

const perfectAudio = new Audio('../assets/audio/perfect.mp3')

const goodAudio = new Audio('../assets/audio/good-good.mp3')

const haAudio = new Audio('../assets/audio/haha.mp3')

const slowAudio = new Audio('../assets/audio/sonic-slow.mp3')

const disAudio = new Audio('../assets/audio/disqualified.mp3')

/*------------------------ Cached Element References ------------------------*/

const nickBtnEl = document.getElementById("nick-btn")
const toonBtnEl = document.getElementById("toon-btn")
const disneyBtnEl = document.getElementById("disney-btn")
const randomBtnEl = document.getElementById("random-btn")
const pEl = document.querySelectorAll(".quiz-text")
const quizBtnEL =document.querySelectorAll(".quiz-btns")
const quizArea = document.getElementById("quiz")
const resetBtn = document.getElementById("reset-btn")
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', nickQuiz)
nickBtnEl.addEventListener('click', function() {
  nickAudio.volume = .10
  nickAudio.play()
})
toonBtnEl.addEventListener('click', toonQuiz)
toonBtnEl.addEventListener('click', function() {
  toonAudio.volume = .10
  toonAudio.play()
})
disneyBtnEl.addEventListener('click', disneyQuiz)
disneyBtnEl.addEventListener('click', function() {
  disneyAudio.volume = .20
  disneyAudio.play()
})
randomBtnEl.addEventListener('click', randomQuiz)
randomBtnEl.addEventListener('click', function() {
  randomAudio.volume = .20
  randomAudio.play()
})
quizBtnEL.forEach(b => {
  b.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', reset)
countdownEl.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

function reset() {
  answers = []
  totalPoints = 0
  timeLeft = 25
  quizArea.innerHTML = ''
  nickBtnEl.style.visibility = 'visible'
  toonBtnEl.style.visibility = 'visible'
  disneyBtnEl.style.visibility = 'visible'
  randomBtnEl.style.visibility = 'visible'
  resetBtn.style.visibility = 'hidden'
  pEl.forEach(p => {
    p.style.visibility = 'visible'
  })
}

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
      resetBtn.style.visibility = 'visible'
      if(totalPoints === 8){
        mess.textContent = `Your score is ${totalPoints}! You win!! Perfect Score!!`
        confetti.start(2000)
        perfectAudio.volume = .30
        perfectAudio.play()
      } else if(totalPoints >=5) {
        mess.textContent = `Your score is ${totalPoints}! You win!! You know your stuff!!`
        goodAudio.volume = .40
        goodAudio.play()
      } else {
        mess.textContent = `Your score is ${totalPoints}! You lose!!Try again?!`
        haAudio.volume = .40
        haAudio.play()
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
  timeStart()
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

function timeStart() {
  let timer = setInterval(() => {
  timeLeft -= 1
  countdownEl.textContent = timeLeft + ' seconds remaining'
  if(timeLeft === 10) {
    slowAudio.volume = .10
    slowAudio.play()
  } else if(timeLeft === 0) {
    countdownEl.textContent = 'Times Up! Try again?'
    disAudio.volume = .25
    disAudio.play()
    resetBtn.style.visibility = 'visible'
    clearInterval(timer)
    reset()
    } else if(answers.length === 8) {
      countdownEl.textContent = "Let's see how you did!"
      clearInterval(timer)
    }
  }, 1000)
  
}
