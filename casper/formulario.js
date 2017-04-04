var _URL = 'http://localhost:8001/contacto.html'


casper.test.begin('Insertar datos de contacto', 2, function (test) {

    casper.start(_URL, function () {
         test.assertExists('form#contacto', "formulario de contacto disponible");

         this.fill('form#contacto', {
            nombre: 'test',
            email: 'prueba@gmail.com',
            favorito: 'Capuccino',
            mensaje: 'Lorem Ipsum dolor sit amet',
            gratis: 'on'
        }, true);

        this.click('form#contacto input[type="submit"]');
    })

    casper.then(function(){
         this.waitUntilVisible('#respuesta', function () {
              test.assertTextExists('Gracias por contactarnos test', 'Mensaje de confirmación');
         })
    })

    


    casper.run(function () {
        test.done();
    })

})