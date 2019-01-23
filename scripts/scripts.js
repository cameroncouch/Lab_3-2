"use strict";
let userHP = 40;
let bossHP = 10;
let wincondition = 3;

function startGame() {
    let yesNoAns = prompt("Do you want to play a game?");
    if (yesNoAns === "yes") {
        console.log(yesNoAns);
        startCombat(yesNoAns);
    }
    else if (yesNoAns === "no") {
        console.log(yesNoAns);
    }
    else {
        console.log("That is not a valid answer, please reload the page")
    }
}
startGame();
function getDamage () {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}
function startCombat() {
    let namePrompt = prompt("What is your name?");
    while (namePrompt === namePrompt) {
        let attackOrQuit = prompt("Would you like to attack or quit?");
        if (attackOrQuit === "attack") {
          if (wincondition === 0) {
          console.log(`Grant is donezo, ${namePrompt} is victorious!`)
          break;
        }
          else if (userHP <= 0) {
          console.log(`Grant proved to be too mighty, ${namePrompt} has lost the game.`)
          break;
        }
          else if (bossHP <= 0 && userHP != 0 && wincondition != 0) {
          bossHP = 10;
          wincondition--;
          console.log(`With a mighty blow from ${namePrompt}, Grant falls to the ground`);
        }
          else {
          userHP -= getDamage();
          bossHP -= getDamage();
          console.log(`${namePrompt}'s health is ${userHP}.`);
          console.log(`Grant's health is ${bossHP}.`);
        }
      } else {console.log("You Quit, Game Over!"); break;} 
    } 
   } 

// function startCombat() {
//     let namePrompt = prompt("What is your name?");
//     if (namePrompt === namePrompt) {
//             let attackOrQuit = prompt("Would you like to attack or quit?");
//             if (attackOrQuit === "attack") {
//             while (attackOrQuit === "attack") {
//             if (wincondition === 0)  {
//             console.log(`Grant is donezo, ${namePrompt} is victorious!`)
//             break;
//             }
//             else if (userHP <= 0) {
//             console.log(`Grant proved to be too mighty, ${namePrompt} has lost the game.`)
//             break;
//             }
//             else if (bossHP <= 0 && userHP != 0 && wincondition != 0) {
//             bossHP = 10;
//             wincondition--;
//             console.log(`With a mighty blow from ${namePrompt}, Grant falls to the ground`);
//             }  
//             else {
//             userHP -= getDamage();
//             bossHP -= getDamage();
//             console.log(`${namePrompt}'s health is ${userHP}.`);
//             console.log(`Grant's health is ${bossHP}.`);
//             }
//         } //while loop
//     } else {console.log("Game Over");}
//     }//master if
// } //startcombat function