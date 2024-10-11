let coinFlip;

for (let count = 0; count < 10; count++) 
{
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0)
    {
        window.console.log("Heads");
    }
    else if (coinFlip == 1)
    {
        window.console.log("Tails");
    }
}