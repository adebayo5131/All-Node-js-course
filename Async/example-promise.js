
function doWork(data, callback){

callback('done');
}

function doWorkPromise (data) {
     return new Promise(function(resolve, reject)
     {
        // setTimeout(function (){
        //     resolve('Everything went great');

        // }, 2000)  

        setTimeout(function (){
            reject({
                    error: ' something bad happened'
                });
    
            }, 2000)  


   
        // reject({
        //     error: ' something bad happened'
        // });


     });
}
doWorkPromise('some data').then(function(data){
      console.log(data);
}, function(error){
    console.log(error)
});