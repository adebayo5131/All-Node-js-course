/* Building a Bank account you will need to add money into the account var credit;
Withdraw money from the account. var withdraw;
Total money in the account var total;
Open the account var accountOpen; */

var OpenAccount={


    name:'Adebayo',
    Age :'18',
    AccountType :'checking',
    balance: 0
}
var deposit= 3000;
var withdraw = 1000;


function Accounts(openAccount)
{
       console.log("Welcome to Breezy's Bank");
       console.log("Your current account information are: \n");
       console.log("Name:  "+ openAccount.name + "\nAge: " + openAccount.Age +
       "\nAccount type: " +openAccount.AccountType);

       




}
  Accounts(OpenAccount);

 function creditAccount(credit, openAccount)
 {
   openAccount.balance += credit;
   

    /*  console.log("\n\nCurrent Balance: $" + openAccount.balance) */

 }
 creditAccount(deposit, OpenAccount);

 function Deduction(withdraw,openAccount)
 {
    
    openAccount.balance -= withdraw;


  /*   console.log('\n\nBalance: $'+ OpenAccount.balance) */


 }
 Deduction(withdraw, OpenAccount);
 
 function getAccountBalance (openAccount)
 {

   
     /* This will display the account balance. */
   return OpenAccount.balance;
 }


 console.log("Current Balance: $" + getAccountBalance());  