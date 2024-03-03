class MemoryGame {
  constructor(cards) {
    this.cards=cards
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }

  shuffleCards() {
    let randomIndex=null
    let curIndex=this.cards.length
    let temp=null

    while (curIndex) {
      curIndex-=1
      temp=this.cards[curIndex]
      randomIndex=Math.floor(Math.random()*curIndex)
      this.cards[curIndex]=this.cards[randomIndex]
      this.cards[randomIndex]=temp
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
      return false
  }

  checkIfFinished() {
    return this.cards.length/2===this.pairsGuessed
  }
}
