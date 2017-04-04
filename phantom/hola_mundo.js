var system = require('system');

var fecha = new Date().toDateString();

console.log( "Hola mundo" , fecha);


if(system.args.lenght  === 0){
    console.log("no argumentos");
}else{
    system.args.forEach( function (arg, index){
        console.log(  '[' + index + '] ' + arg )
    })
}

phantom.exit();