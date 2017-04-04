var _URL = 'http://localhost:8001'

var phantomcss = require('../node_modules/phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: '../node_modules/phantomcss'
});

casper.start(_URL, function () {
  
  casper.viewport(1280, 1024);
  this.capture('imagen.png');

   phantomcss.screenshot('.jumbotron')

   phantomcss.compareAll();
});

casper.run(function () {
   phantom.exit(phantomcss.getExitStatus());
})