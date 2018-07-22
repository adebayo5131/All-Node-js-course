/* var listOfnames =["Shaina", "Ade", "James"]

console.log(listOfnames[1]);

listOfnames.push("Adedapo");

listOfnames.forEach(function(names) {

    console.log(names)
    
});
 */

sumOfnumbers = [1,2,3,4,5]
var i =0;
var Total=0;
function Sum()
{
   for(i=0; i<= sumOfnumbers.length; i++)
   {
          Total +=i;
          console.log(Total)
   }

   return Total;


}
console.log("\nTotal sum of array = " +Sum()+"\n");


var grades =[100,50,75]
var totalGrade =0;

grades.push(60)

grades.forEach(function (grade)
{
    
             totalGrade += grade;

             
    
    
    console.log("Total grade = " + totalGrade);
    
})
var avergaeGrade = totalGrade/grades.length;
    console.log("Average Grade = " + avergaeGrade)






