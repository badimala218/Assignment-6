
for (let count = 1; count <= 100; count++)
{
    if (count % 3 == 0 && count % 5 == 0)
    {
        console.log("Marco! Polo!");
    }
    else if (count % 3 == 0) 
    {
        console.log("Marco!");
    }
    else if (count % 5 == 0) 
    {
        console.log("Polo!");
    }
}