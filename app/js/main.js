"use strict";

/// despliega el menú
function desplegarMenu() {
    $.get("ajax/menu.html", function(data){
        $("#menu").html(data);
    });
}
/// oculta el menú
function ocultrarMenu() {
    $("#menu").html("");
}
/// muestra redes sociales
function social() {
    $("#redes-btn").hide();
    $(".redes-sociales").show();
    return false;
}

///obtiene parámetros de URL
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


/// oculta formulario
$(function () {
    if (getUrlParameter("nombre")) {
        $("#contacto").hide();
        $("#respuesta").show();
        //$("#nombre_param").html(getUrlParameter("nombre"));
    }
});





