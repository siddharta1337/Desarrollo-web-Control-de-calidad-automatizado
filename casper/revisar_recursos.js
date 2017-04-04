var _URL = 'http://localhost:8001/historia.html'


casper.test.begin('Verificar imágenes', 3, function (test) {

    casper.start(_URL, function () {

        var prueba = "Imagen con enlace correcto";

       if( this.getElementsAttribute('img' , 'src') == 'img/imagen.png') {
            casper.test.pass(prueba);
        }else{
            casper.test.fail(prueba);
        }
    })

    casper.waitForResource('img/imagen.png', function () {

        test.assertResourceExists('img/imagen.png', "Imagen disponible");
        test.assertResourceExists('js/main.js', "javascript disponible");


    });

    casper.run(function () {
        test.done();
    })

})