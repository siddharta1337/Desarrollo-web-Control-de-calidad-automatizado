var casper = require('casper').create();

var URL = 'http://localhost:8001';

casper.start( URL , function(){

    this.echo( this.getPageContent()  )

} )

casper.run()