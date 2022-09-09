import {} from "../data/answers.js"
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

const questions = []

const answers = []

// const score

const timer = 25

/*------------------------ Cached Element References ------------------------*/

const nickBtnEl = document.getElementById("nick-btn")
const toonBtnEl = document.getElementById("toon-btn")
const disneyBtnEl = document.getElementById("disney-btn")
const randomBtnEl = document.getElementById("random-btn")
const submitBtnEl =document.getElementById("finish")
const resetBtnEl = document.getElementById("reset")
const mainBtnEL = document.getElementById("return-to-main")



/*----------------------------- Event Listeners -----------------------------*/

nickBtnEl.addEventListener('click', initNick)
toonBtnEl.addEventListener('click', initToon)
disneyBtnEl.addEventListener('click', initDisney)
randomBtnEl.addEventListener('click', initRandom)
submitBtnEl.addEventListener('click', submit)
resetBtnEl.addEventListener('click', reset)
mainBtnEL.addEventListener('click', returnMain)

/*-------------------------------- Functions --------------------------------*/