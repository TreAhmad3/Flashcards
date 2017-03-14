// create a basic card instructor (object) and a clozecard instructor (object) *later work on basic first*

//display the questions based on user input *a clozedCard vs a basicCard

//use process.argv to call on the appropriate function to call

var inquirer = require("inquirer");

//deck and cards methods
function Deck() {

    this.flashCards = [];
    this.basicCards = [];
    this.clozeCards = [];
    this.numFlashCards = 0;

    this.addBasicFlashCard = function(front, back) {
        this.numFlashCards = this.flashCards.length;
        this.basicCards.push(new basicCard(front, back));
        this.flashCards.push(new basicCard(front, back));
    };

    this.addClozeFlashCard = function(text, cloze, fullText){
        this.numFlashCards = this.flashCards.length;
        this.clozeCards.push(new clozeCard(text, cloze, fullText));
        this.flashCards.push(new clozeCard(text, cloze, fullText));
    };

}

function basicCard(front, back) {
    this.question = front;
    this.answer = back;
    
}

function clozeCard(text, cloze, fullText){
    this.text = text;
    this.cloze = cloze;
    this.fullText = fullText;
}

inquirer.prompt([

    {
        type: "confirm",
        message: "Is the card you're adding a basic flashcard?",
        default: false,
        name: "basic"
    },


]).then(function(user){

    if (user.basic == true){
        console.log("adding a basic card...");
        inquirer.prompt([
            {
                type: "input",
                message: "What is your flashcards question?",
                name: "question",
                
            },

            {
                type: "input",
                message: "What is this flashcard's answer?",
                name: "answer",
                
            },



        ]).then(function(input){
            var firstDeck = new Deck();

            firstDeck.addBasicFlashCard(input.question, input.answer);

            console.log(firstDeck.basicCards[0]);

        })
        
    } else if (user.basic == false){
        console.log("adding a clozed card...");
        inquirer.prompt([

            {
                type: "input",
                message: "What will be the partial text?",
                name: "text",
                
            },

            {
                type: "input",
                message: "What is this flashcard's answer?",
                name: "answer",
                
            },

            {
                type: "input",
                message: "What will the full sentence read?",
                name: "fullText",
            }

        ]).then(function(input){
            var firstDeck = new Deck();

            firstDeck.addClozeFlashCard(input.text, input.answer, input.fullText);

            console.log(firstDeck.clozeCards[0]);

        });
        
    }  


}); // end of .then of prompt




