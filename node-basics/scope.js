
//Example of closure
/* function greetAde(name)
{

    function greet()
    {
        console.log('Hello' + name)
    }
    return greet;
}

var userName = greetAde('Ade')
userName(); */



function createAdder(basenumber)
{

    return function (addsecondnum)
    {
        return (basenumber + addsecondnum)
    }

}

var addNum = createAdder(10);
console.log(addNum(20));
console.log(addNum(5));
