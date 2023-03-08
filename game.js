const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});


const buffalo = document.querySelector('.buffalo')
const bison = document.querySelector('.bison')

buffalo.addEventListener('click', () => {
    if(bison.classList.contains('open')) {
        bison.classList.add('active');
        buffalo.classList.remove('active');
    }
});

bison.addEventListener('click', () => {
    if(buffalo.classList.contains('closed')) {
        buffalo.classList.add('active');
        bison.classList.remove('active');
    }
});

const openHorns = document.querySelector('.horns');
const closedFist = document.querySelector('.fist');

openHorns.addEventListener('click', () => {
    if(closedFist.classList.contains('closed')) {
        closedFist.classList.add('active');
        openHorns.classList.remove('active');
    }
});

closedFist.addEventListener('click', () => {
    if(openHorns.classList.contains('open')) {
        openHorns.classList.add('active');
        closedFist.classList.remove('active');
    }
});

const sickGuy = document.querySelector('.dead')
const deadGuy = document.querySelector('.skull')

sickGuy.addEventListener('click', () => {
    if(deadGuy.classList.contains('open')) {
        deadGuy.classList.add('active');
        sickGuy.classList.remove('active');
    }
})

deadGuy.addEventListener('click', () => {
    if(sickGuy.classList.contains('closed')) {
        sickGuy.classList.add('active');
        deadGuy.classList.remove('active');
    }
})

const madGuy = document.querySelector('.mad')
const enragedGuy = document.querySelector('.enrage')

madGuy.addEventListener('click', () => {
    if(enragedGuy.classList.contains('open')) {
        enragedGuy.classList.add('active');
        madGuy.classList.remove('active');
    }
})

enragedGuy.addEventListener('click', () => {
    if(madGuy.classList.contains('closed')) {
        madGuy.classList.add('active');
        enragedGuy.classList.remove('active');
    }
})

const noBird = document.querySelector('.hand')
const flippinBird = document.querySelector('.finger')

flippinBird.addEventListener('click', () => {
    if(noBird.classList.contains('closed')) {
        noBird.classList.add('active');
        flippinBird.classList.remove('active');
    }
})

noBird.addEventListener('click', () => {
    if(flippinBird.classList.contains('open')) {
        flippinBird.classList.add('active');
        noBird.classList.remove('active');
    }
})


const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'barkov'
    }
    if (randomNumber === 4) {
        computerChoice = 'bobrovsky'
    }
    if (randomNumber === 5) {
        computerChoice = 'landy'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === 'rock' && userChoice == 'rock') {
        result = 'Its a draw!'
    }
    if (computerChoice === 'paper' && userChoice == 'paper') {
        result = 'Its a draw!'
    }
    if (computerChoice === 'scissors' && userChoice == "scissors") {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice == "scissors") {
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice == "scissors") {
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice == "rock") {
        result = 'You Lose!'
    }
    if (computerChoice === 'scissors' && userChoice == "rock") {
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice == "paper") {
        result = 'You Lose!'
    }
    if (computerChoice === 'rock' && userChoice == "barkov") {
        result = 'Barkov is a professional at fetching, he catches the rock with ease. Barkov Wins'
    }
    if (computerChoice === 'rock' && userChoice == "bobrovsky") {
        result = 'Bobrovsky eats the rock because hes chubby and happy. Bobrovsky wins'
    }
    if (computerChoice === 'rock' && userChoice == "landy") {
        result = 'Landy is a diamond bitch! Better luck next time.'
    }
    if (computerChoice === 'paper' && userChoice == "barkov") {
        result = 'Barkov pees on the paper. Barkov wins'
    }
    if (computerChoice === 'paper' && userChoice == "bobrovsky") {
        result = 'Bobrovsky eats the paper because hes chubby and happy. Bobrovsky wins'
    }
    if (computerChoice === 'paper' && userChoice == "landy") {
        result = 'Landy is used to getting paper bitch! Better luck next time.'
    }
    if (computerChoice === 'scissors' && userChoice == "barkov") {
        result = 'The scissors are used on Barkovs nails. Its super effective. Tim and Landy win'
    }
    if (computerChoice === 'scissors' && userChoice == "bobrovsky") {
        result = 'Bobrovsky becomes terrified and runs away. He remember a time his daddy said he could cut some nice bacon off of him'
    }
    if (computerChoice === 'scissors' && userChoice == "landy") {
        result = 'Landy steals your scissors bitch! Better luck next time'
    }
    if (computerChoice === 'barkov' && userChoice == "barkov") {
        result = 'Barkov tires out the other Barkov. Its a draw.'
    }
    if (computerChoice === 'barkov' && userChoice == "rock") {
        result = 'You could never use a rock against Barky. He licks you and everyone wins'
    }
    if (computerChoice === 'barkov' && userChoice == "paper") {
        result = 'You spend that paper on Barky and get him a toy. Everyone wins'
    }
    if (computerChoice === 'barkov' && userChoice == "scissors") {
        result = 'Barky gets his little claws trimmed professionally. Everyone wins'
    }
    if (computerChoice === 'barkov' && userChoice == "bobrovsky") {
        result = 'Bobrovsky easily outmatches Barky by simply lying on him. The weight is too much.'
    }
    if (computerChoice === 'barkov' && userChoice == "landy") {
        result = 'Barkov melts Landys heart. Its super effective. Both win'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "bobrovsky") {
        result = 'This is like watching a sumo wrestling match! Thats a lot of jiggling'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "rock") {
        result = 'The rock is easily digested by Bobrovsky. Hes chubby and happy'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "paper") {
        result = 'You use that paper on Bobrovsky and buy him doggy liposuction'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "scissors") {
        result = 'Bobrovsky freaks out like he always does when you hold something. You win'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "barkov") {
        result = 'Barkov obliterates Bobrovsky with a vicious barrage of ear bites! Its no match!'
    }
    if (computerChoice === 'bobrovsky' && userChoice == "landy") {
        result = 'Landy has a normal conversation with Tim. Bobrovsky immediately leaves. You win'
    }
    if (computerChoice === 'landy' && userChoice == "rock") {
        result = 'Landy sees the size of that rock. She is immediately under your control. You win'
    }
    if (computerChoice === 'landy' && userChoice == "paper") {
        result = 'Landy gets ALL that paper baby! Thanks so much!'
    }
    if (computerChoice === 'landy' && userChoice == "scissors") {
        result = 'Landy gets a fresh style. Landy wins. Landy always wins'
    }
    if (computerChoice === 'landy' && userChoice == "barkov") {
        result = 'Landy gets lost in those eyes. She is immediately love struck.'
    }
    if (computerChoice === 'landy' && userChoice == "bobrovsky") {
        result = 'Bobrovsky shows his teeth to Landy. She is immediately love struck.'
    }
    if (computerChoice === 'landy' && userChoice == "landy") {
        result = 'Oh man. This is totally hot....'
    }

    resultDisplay.innerHTML = result
}

