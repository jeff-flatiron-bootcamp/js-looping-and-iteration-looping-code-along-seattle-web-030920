// Code your solutions in this file
function writeCards(array, input)
{
    let returnArray = []
    for(let i = 0; i < array.length; i++)
    {
        returnArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return returnArray;
}

//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))

function countDown(input)
{
    for(let i = input; i > -1; i--)
    {
        console.log(i)
    }
}

countDown(10)