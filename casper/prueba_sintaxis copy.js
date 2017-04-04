var _URL = 'http://localhost:8001'

casper.test.begin('Examinar elementos requeridos' , 2 , function suite(test){

    casper.start( _URL , function(){
        test.assertTitle( "Nico's Café. El mejor espresso en el centro de la ciudad" , "Título del documento" );
        test.assertExists('#formulario' ,  "Formulario principal presente");

    })
    .run( function(){
        test.done();
    })
})