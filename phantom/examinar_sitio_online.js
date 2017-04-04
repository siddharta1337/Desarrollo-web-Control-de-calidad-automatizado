var sitioWeb = require('webpage').create();
var _URL = "http://google.casdpoiapsdopasodpaospoasd";

sitioWeb.open( _URL , function(status){

    if (status === "success") {
        console.log(" sitio web funcionando ")
    }else if (status == "fail") {
        console.log("no se puede cargar el sitio web")
    }

    phantom.exit();
} )

