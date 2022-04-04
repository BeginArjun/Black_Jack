let firstCard=0
let secondCard=0


let playerDetails={
    name: "",
    credits:0,
    id:0
}
const inputVal=document.getElementById("name")
const inputBtn=document.getElementById("name-btn")
inputBtn.addEventListener("click",function()
{
    playerDetails={
        name: inputVal.value,
        credits:200,
        id:Math.random()*1213
    }
}
)
let cards = []

let sum=0

let hasBlackJack=false

let isAlive=false

let message=""

let messageEl=document.getElementById('message-el')


let sumEl=document.querySelector("#sum-el")

let cardsEl=document.querySelector("#cards-el")

function getrandomCard()
{
    let randomCard=Math.floor(Math.random()*13)+1
    if(randomCard === 1)
    {
        return 1
    }
    else if(randomCard>10)
    {
        return 10
    }
    else
    {
        return randomCard
    }
}

function startGame()
{
    isAlive=true
    firstCard=getrandomCard()
    secondCard=getrandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum+=firstCard+secondCard
    let playerEl=document.getElementById("player-el")
    playerEl.textContent = playerDetails.name +": $" + playerDetails.credits
    renderGame()
}

function renderGame()
{
    sumEl.textContent="Sum : "+sum
    cardsEl.textContent= "Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        checkGame()
    }
    else if (sum === 21) {
        message = "Hurray! You've Got BlackJack!"
        hasBlackJack = true
        checkGame()
    }
    else {
        message = "Out of The Game!"
        isAlive = false
        checkGame()
    }
    console.log("Button Clicked...")
    messageEl.textContent=message
}
function checkGame()
{
    if(isAlive === true && hasBlackJack === false)
    {
        let newCardbtn=document.getElementById("game-btn")
        newCardbtn.innerHTML= `<button id="new-card" onclick="newCard()" class="btn">NEW CARD</button>`
    }
    else if(isAlive === true && hasBlackJack === true)
    {
        console.log(hasBlackJack)
        let playAgain=document.getElementById("game-btn")
        playAgain.innerHTML = `
                               <button id="restart" class ="btn" onclick=document.location.reload()>PLAY AGAIN</button>`
    }

    else
    {
        let restart=document.getElementById("game-btn")
        restart.innerHTML= `<button id="restart" class ="btn" onclick=document.location.reload()>RESTART</button>`
    }
  
}


function newCard()
{
    let newCard=getrandomCard()
    cards.push(newCard)
    sum+=newCard
    renderGame()
}