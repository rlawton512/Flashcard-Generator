//create BasicCard constructor to be exported 
var BasicCard = function(front, back){
  this.front = front;
  this.back = back;

    console.log("\nBasic Flashcard has been created!\n")
    console.log(`Front of card/question: ${this.front}`)
    console.log(`Back of card/answer: ${this.back}\n`) 
}


module.exports = BasicCard;


