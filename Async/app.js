
var weather = require('./weather.js');

var location = require('./location.js');

var argv = require('yargs')
.option('location',{
    alias:'l',
    demand:false,
    descibe : 'Location to fetch weather for',
    type:'string'
}).help('help')
.argv;

var command = argv._[0];


if ( typeof argv.l === 'string'&& argv.l.length > 0) {
    console.log('Location was provided\n')
    weather(argv.l).then (function(currentweather){
            
        console.log(currentweather);
}).catch(function (error){
     console.log(error);
})
	
}
 else {


    location().then(function(loc){
        return weather(loc.city);
    }).then(function(currentweather){
         console.log(currentweather)
    }).catch(function(error){

        console.log(error);
    })

}


