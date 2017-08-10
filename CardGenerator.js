//require constructors and inquirer prompt
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

inquirer.prompt([
    {   
        //pick a card type
        type: "list",
        name: "cardType",
        message: "What type of flashcard would you like to create?",
        choices: ["Basic Flashcard(s)", "Cloze Flashcard(s)"],
    },
    {
        //get inputs for Basic Card 
        type: "input",
        name: "front",
        message: "Please enter your question for the front of the card.",
        when:(type) => {
            if(type.cardType === "Basic Flashcard(s)"){
            return true;
            }
        }
    },

            
    {   type: "input",
        name: "back",
        message: "Please enter answer for the back of the card.",
        when:(type) => {
            if(type.cardType === "Basic Flashcard(s)"){
            return true;
            }
        }
    },
    //gets inputs for the Cloze Cards 
    {
        type: "input",
        name: "full",
        message: "Please enter your statement.",
        when:(type) => {
            if(type.cardType === "Cloze Flashcard(s)"){
            return true;
            }
        }

    },

    {
        type: "input",
        name: "omit",
        message: "What part of your statement would you like to cloze/omit?",
        when:(type) => {
            if(type.cardType === "Cloze Flashcard(s)"){
            return true;
            }
        }

    },

]).then(function(user){
    // create Basic Flashcard based on user inputs 
    if (user.cardType === "Basic Flashcard(s)"){
        front = user.front
        back = user.back
        var card = new BasicCard(front, back) 
    
    } 
    //create Cloze Flashcard based on user inputs 
    else {
        text = user.full
        cloze = user.omit
        var card = new ClozeCard(text, cloze)
        card.fullSet();

    }

});







