var _URL = 'http://google.cl'

casper.test.begin('Examinar cambios en documento', 3, function (test) {

    casper.start(_URL, function () {
        this.waitForSelector('form[action="/search"]');
        test.assertExists('form[action="/search"]', "Formulario de búsqueda presente");
    })

    casper.then( function () {
        this.fill('form[action="/search"]', {
            q: 'unicornio'
        }, true);
    });
    casper.waitForUrl(/q=unicornio/, function() {
        test.assertTitleMatch(/unicornio/, 'Fragmento requerido en el Título');
    });

    casper.then(function () {
        test.assertTextExists('Wikipedia, la enciclopedia libre' , "Entrada de wikipedia");
    })



    casper.run(function () {
        test.done();
    })
})