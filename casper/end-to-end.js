var _URL = 'https://twitter.com/'

casper.test.begin('Autenticación y cierre de sesión', 1, function (test) {

    casper.start(_URL, function () {
        casper.viewport(767, 1024);

        test.assertExists('form[action="https://twitter.com/sessions"]', "Formulario de búsqueda presente");

        this.capture("screenshot1.png");

    })


    casper.then(function () {

        this.fill('form[action="https://twitter.com/sessions"]', {
            'session[username_or_email]': 'end2end42',
            'session[password]': 'qwerty12345678'
        }, true);

        this.click('button.submit')
    });


    casper.then(function () {

        casper.waitForSelector('.me a.btn.settings', function() {
             this.click('.me a.btn.settings');
             this.capture("screenshot2.png");
        });

    })

     casper.then(function () {
        this.click('#signout-button .dropdown-link');
    });

    casper.waitForUrl(/logged_out=1/, function () {
        this.capture("screenshot3.png");
    })



    casper.run(function () {
        test.done();
    })
})