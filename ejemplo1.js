const notifier = require("node-notifier");

var onError = function(err,response){
    console.error(err,response);
};

notifier.notify({
    message: "Ejemplo de notificacion para mis vampiros",
    title: "XnightmareX",
     // Sonido especial
     // Cadena sensible a mayúsculas y minúsculas para la ubicación del archivo de sonido, o use uno de los sonidos nativos de OS X
     // Solo centro de notificaciones o tostadoras de Windows
    sound: true,//"Bottle",


    // The absolute path to the icon of the message
    // (doesn't work on balloons)
    // If not found, a system icon will be shown
    icon : "logo.png",


   // Espere con devolución de llamada (evento onClick del brindis), hasta que el usuario tome medidas contra la notificación


    wait:true
},onError);

notifier.on('click', function (notifierObject, options) {
    // Triggers if `wait: true` and user clicks notification
    alert("Request Triggered");
});

