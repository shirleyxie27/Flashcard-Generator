//Setting up 
var inquirer = require("inquirer");
var fs = require("fs");
var dataTxt = ("./data.json");
var storeBasicCard = "";
var storeClozeCard = "";

//constructor for BasicCard & ClozeCard
function BasicCard(front, back){
    this.front = front;
    this.back = back;
}//end of BasicCard constructor

function ClozeCard(text, cloze, partial){
    this.text = text;
    this.cloze = cloze;
    this.partial = partial;
}//end of ClozeCard constructor

//user choose cardType (basic or cloze)
inquirer.prompt({
    type: "list",
    name: "cardType",
    message: "What type of card would you like to create?",
    choices: ["Basic-FlashCard", "Cloze-FlashCard"]
}).then(function (answer) {
    if(answer.cardType === "Basic-FlashCard"){
        addBasicCard();
    }
    else{
        addClozeCard();
    }       
}); //end of inquirer.prompt

