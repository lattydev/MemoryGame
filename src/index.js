const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
function startGame() {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      card.classList.add("turned")
      memoryGame.pickedCards.push(card)
      if (memoryGame.pickedCards.length >= 2) {
        const pairsClicked=document.querySelector("#pairs-clicked")
        console.log(memoryGame.pickedCards)
        const isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,
          memoryGame.pickedCards[1].dataset.cardName)
          pairsClicked.textContent=memoryGame.pairsClicked
        if (isPair) {
          const isGameOver = memoryGame.checkIfFinished()
          const pairsGuessed=document.querySelector("#pairs-guessed")
          pairsGuessed.textContent=memoryGame.pairsGuessed
          if (isGameOver) {
            setTimeout(() => { 
            alert("Game over")
            memoryGame.pairsClicked=0
            memoryGame.pairsGuessed=0
            startGame()

          }, 500)
          }
          if (!isGameOver) {
            memoryGame.pickedCards.forEach(item => {
              item.classList.add("blocked")
            })
          }
          memoryGame.pickedCards.length = 0
        }
        else {
       /*   console.log(1)
          setTimeout(() => {
            memoryGame.pickedCards.forEach((item) => {
              console.log(item)
              item.classList.remove("turned")
            })
          }, 500)
          memoryGame.pickedCards.length = 0
          */
         setTimeout(function() {
          memoryGame.pickedCards.forEach((item) => {
            item.classList.remove("turned")
          })
          memoryGame.pickedCards.length = 0
         }, 500)
        }
      }
    });
  });
}
startGame()
});
