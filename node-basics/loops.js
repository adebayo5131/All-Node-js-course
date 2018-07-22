var lastNum = 0;

// function count (lastNum)
// {
//    for(var i =1; i<= lastNum; i++)
//    {
//        console.log(i);
//    }
    
// }
// count(lastNum);

// console.log("\t")
// function recount(lastNum)
// {
//     var i =1;
//     while(i <= lastNum)
//     {
//         console.log(i)
//         i++
//     }
// }
// (recount(lastNum));

// function countDown(lastNum)
// {
//     for(var i =10; i>= lastNum; i--)
//     {
//         console.log(i);
//     }
// }
// countDown(lastNum)

function recount(lastNum)
{
    var i =10;
    while(i > lastNum)
    {
        console.log(i)
        i--
    }
}
(recount(lastNum));

function counts (startingPoint, stopingPoint)
{
    for(;startingPoint >= stopingPoint; startingPoint--)
    {
        console.log(startingPoint)
    }
}
counts(20,10);
