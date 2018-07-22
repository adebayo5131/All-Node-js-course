/*

// How to define an object
var person = {
    
    gender: 'male',
    height: '5.9inc'
};


//properties of the objects
person.firstName ='Adebayo';
person.lastName ='Ajagunna';

person.age =29;

//used to delete a propety from an object
/*delete person.age;
console.log(person);*/

/*
function greetUser(person)
{
    
    console.log('Hello '+ person.firstName +" " +person.lastName +' 
                 'age ' + person.age +" " + person.gender);
    
}

greetUser(person);

*/


var pet ={
    
    Petname : ' stiles',
    type: ' Dog',
    personName: 'Adebayo'
}

function usersPet(pet)
{

    console.log('Hello '+ pet.personName + " You own " + pet.Petname + " which is a " +pet.type );

}

usersPet(pet);

