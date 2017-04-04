var sitioWeb = require('webpage').create();
var URL = "http://localhost:8001";


var captura = function(_width, _height,_nombre  ){


        sitioWeb.viewportSize = {
            width: _width,
            height: _height
        }

        sitioWeb.render( "imagen"+_nombre+'.jpg' , { format: 'jpeg' , quality:'80' });

}

sitioWeb.open( URL , function(status){

    if(status === 'success'){

        captura( 67, 100 , "extra_small");
        captura( 769, 100 , "small");
        captura( 992, 100 , "medium");
        captura( 1201, 100 , "large");

    }

    phantom.exit();

})