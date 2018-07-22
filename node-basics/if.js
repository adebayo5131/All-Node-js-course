var averageGrade = 100;
var name = 'Adebay'

function average(Grade){
    
   if(Grade===100 || name ==='Adebayo')
   {
       
       

        var message ='Congratulations you passed the course with a perfect grade';

        console.log(message);
    }
    else if(Grade >= 70 )
    {
        var message ='Congratulations you passed the course';
        
        console.log(message);
        
        
    }
   
    else{
                    
                    var message ='Sorry you failed the coursee';
        
        console.log(message);
    }
}

average(averageGrade);