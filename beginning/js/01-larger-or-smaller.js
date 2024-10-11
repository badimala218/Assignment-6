let integer1 = parseInt(window.prompt("Input an integer:", ""));
let integer2 = parseInt(window.prompt("Input another integer:", ""));

if (Number.isNaN(integer1) || Number.isNaN(integer2)) 
{
    document.write("Not integers");
}
else 
{
    if (integer1 > integer2) 
    {
        document.write(integer1);
    }
    else if (integer2 > integer1) 
    {
        document.write(integer2);
    }
    else if (integer1 == integer2)
    {
        document.write(`${integer1} Equal`);
    }
}
