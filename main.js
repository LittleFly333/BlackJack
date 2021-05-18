let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let startBtn = document.querySelector('.startBtn')
let newCardBtn = document.querySelector('.newCard')


function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

startBtn.addEventListener('click', event=>{
    startGame()
})

function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}`
    }
    sumEl.innerHTML = `Sum: ${sum}`
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

newCardBtn.addEventListener('click', event => {
    newCard()
})

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
  
}