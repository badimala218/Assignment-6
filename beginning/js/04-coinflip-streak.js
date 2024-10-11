let coinFlip;
const heads = "Heads";
const tails = "Tails";
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0)
    {
        window.console.log(heads);
    }
}
while (coinFlip != 1);
window.console.log(tails);