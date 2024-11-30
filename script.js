let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcon = document.querySelector(".msg-container");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const compChoiceGen = ()=>{
    const option = ["rock","paper","scissors"];

    //to generate random value between 0-2;
    const choiceIdx = Math.floor(Math.random() * 3);

    return option[choiceIdx];
}

const draw = ()=>{
    // console.log("It is Draw!!!");
    msg.innerText = "It is a Draw!, , Play Again";
    msgcon.style.backgroundColor = "rgb(3, 19, 52)";

}

const gameResult=(userWin,userChoice,compChoice) =>{
    if(userWin){
        //updating user score
        userScore++;
        userScorePara.innerText = userScore;

        //displaying win 
        // console.log("You Win !!!");
        msg.innerText=`You Win !!, Your ${userChoice} beats ${compChoice}`;

        //changing bg color of div to green
        msgcon.style.backgroundColor = "green";
    }else{
        //updating user score
        compScore++;
        compScorePara.innerText = compScore;

        //displaying lose
        // console.log("You lose :( ");
        msg.innerText=`You lose :( , ${compChoice} beats Your ${userChoice}`;

        //changing bg color of div to red
        msgcon.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) =>{
    console.log("User choice =",userChoice);
    const compChoice = compChoiceGen();
    console.log("Computer Choice =",compChoice);

    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;

        if(userChoice === "rock" ){
            userWin = compChoice==="paper" ? false : true;  // paper beats rock
        }else if(userChoice === "paper"){
            userWin = compChoice==="scissors" ? false : true;      // scissors beats paper
        }else{
            userWin = compChoice==="rock" ? false : true;     // rock beats scissors 
        }

        gameResult(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        //to get user's choice
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});