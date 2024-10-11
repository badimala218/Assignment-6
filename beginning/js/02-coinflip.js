
"use strict";

let coinFlip = Math.round(Math.random());

let choice = window.prompt("Heads or Tails", "");
choice = choice.toLowerCase();

if (coinFlip == false) 
{
    if (choice == 'heads')
    {
        window.alert("The flip was heads and you chose heads...you win!");
    }
    else if (choice == 'tails')
    {
        window.alert("This flip was heads but you chose tails...you lose!");
    }
}
else 
{
    if (choice == 'heads')
    {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
    else if (choice == 'tails')
    {
        window.alert("This flip was tails and you chose tails...you win!");
    }
}