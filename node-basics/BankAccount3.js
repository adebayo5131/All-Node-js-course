// Acoount array
var accounts=[];

// A function that creates an account by receiveing aand account object
function createaccount(account)
{
   //push an account into account array
   accounts.push(account)

   //return account
   return account;



}

//get a specific account using the username

function getaccount(userName)
{
    // Just like an accumulator use this to verify if accounts match
    var accountMatched;

    //check each individual account for a match
  
        for( var i =0; i < accounts.length; i++)
        {

            if(accounts[i].userName == userName)
            {
                   accountMatched = accounts[i];
                  
            }
          
                  
        

        }
       

        
   
    
    return accountMatched;
}



function creditaccount(account, deposit){
    if(typeof deposit == 'number')
    {
        account.balance += deposit;
    }
    else
    console.log("Deposit failed: Amount is not a number")
  
   
}


function Deduction(account,withdraw)
  {
    if(typeof withdraw == 'number')
    {
         
     account.balance -= withdraw;
    }
    else
    console.log("Withdraw failed:Amount is not a number")
  
   



}
 
 

function createBalanceGetter (account)
{
    return function()
    {
        return account.balance;
    }
        
    
}

var shainassaccount = createaccount( {

    userName: 'shaina',
    balance: 50

 });
    


creditaccount(shainassaccount, 300);
Deduction(shainassaccount, 100);

var shaina2 = getaccount('shaina');
var getshaina2Balance = createBalanceGetter(shaina2);

console.log(getshaina2Balance());