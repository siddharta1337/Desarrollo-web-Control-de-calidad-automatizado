var _URL = 'https://es.wikipedia.org/wiki/Nikola_Tesla'


casper.test.begin('Navegar en Wikipedia', 3, function (test) {

    casper.start(_URL, function () {
        test.assertExists('a[href="/wiki/Wikipedia:Portada"]', "Enlace a portada presente");
        this.click('a[href="/wiki/Wikipedia:Portada"]')

    })
    casper.then(function () {

        test.assertUrlMatch(/Wikipedia:Portada/, 'Acceso a portada de Wikipedia');
    })

    casper.thenOpen( 'https://es.wikiquote.org', function() {
        this.echo( "Navegando en otro sitio: " + this.getCurrentUrl() )
    });

    casper.back();

    casper.then(function(){
        this.echo("Navegando de vuelta en portada: " + this.getCurrentUrl() );
    });

    casper.back();

    casper.then(function(){
        test.assertUrlMatch(/Nikola_Tesla/, 'Regreso al sitio original');
    })

     casper.run(function () {
        test.done();
    })
     
})