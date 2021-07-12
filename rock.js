let readlineSync = require("readline-sync");

var computerMoves = ["rock","paper","scissors"];

var randomMoveOfComputer = computerMoves[Math.floor(Math.random()*computerMoves.length)]

var playerMove = readlineSync.question("Choose your move : ")

console.log("Computer chooses : "+randomMoveOfComputer)

if (playerMove == randomMoveOfComputer){
    console.log("Match Draw");
}

function promise(){
   return new Promise(function(resolve,reject){
       if(playerMove=="rock" && randomMoveOfComputer == "scissors"){
           resolve()
       }else if (playerMove=="scissors" && randomMoveOfComputer == "paper"){
           resolve()
       }else if (playerMove=="paper" && randomMoveOfComputer == "rock"){
           resolve()
       }
   })
}
function promise1(){
    return new Promise(function(resolve,reject){
        if (playerMove =="rock" && randomMoveOfComputer == "paper"){
            resolve()
        }else if (playerMove=="scissors" && randomMoveOfComputer == "rock"){
            resolve()
        }else if (playerMove=="paper" && randomMoveOfComputer == "scissors"){
            resolve()
        }

    })
}
promise()
  .then(function () {
     console.log('You win!');
  })
  .catch(function (error) {
     console.log('Some error occured!');
  });
promise1()
.then(function () {
   console.log('You lose!');
})
.catch(function (error) {
   console.log('Some error occured!');
});
