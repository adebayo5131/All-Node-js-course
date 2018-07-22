
//Set time out takes two arguements
//first argument is a call back function
// second is amount of time yopu want to wait in millisecond
// 1000 millisecond = 1 second
// setTimeout(function(){

//     console.log('1')
// }, 2000);

// setTimeout(function(){

//     console.log('3')
// }, 3000);

// console.log('2');

console.log("\n Challange Area");

var message = 'This is me';
function printInTwoSeconds(message)
{
    
 
    setTimeout(function(){
       console.log(message);
    }, 2000)
}
 (printInTwoSeconds(message));