function doWork(MakeFail){

    return new Promise(function(resolve, reject){

       /*  setTimeout(function (){
            console.log('done');
            resolve();
        }, 1000); */

        setTimeout(function(){

            if(typeof MakeFail == 'boolean' && MakeFail == true){
                reject('error message');

            }
            else
            {
                resolve('Successful');
            }
        })

    })
}

doWork().then(function(messageIfGoesWell){
    console.log(messageIfGoesWell);
    
    return doWork(true);
}).then(function(messageIfGoesWell){
    console.log(messageIfGoesWell);
   
}).catch(function(error){
    console.log(error);
});