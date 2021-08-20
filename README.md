<p align="center">
  <a href="https://patreon.com/marrionesa" target="blank"><img align="center" src="https://github.com/marrionesa/notificaciones-electron/blob/main/logo.png" alt="marrionesa" height="200" width="200" /></a>
<h3 align="center">XNightmareX | marrionesa</h3>

</p>

# Modulo de Notificaciones en ElectronJS
En esta pequeña clase os enseñare que modulo de electron se puede encargar de mostrarte fácilmente notificaciones.
# Antes de comenzar
Recuerda tener instalado NodeJS
# Comenzando
Primero debemos crear un directorio en la ruta que queramos con el nombre que queramos para este proyecto.
``` 
mkdir notificaciones-electron
```
Creando el proyecto con nodejs
``` 
npm init
```
Instalamos el modulo node-notifier en el proyecto que acabamos de crear
``` 
npm install --save node-notifier
```
Crearemos un archivo JS donde le diremos que nos cargue el codigo para mostrar la notificacion
Como veremos varios ejemplos le pondre el nombre al fichero de ejemplo1.js pa no liarnos luego.  

# Ejemplo 1 (Simple)
``` 
nano ejemplo1.js
```

``` 
const notifier = require("node-notifier");

var onError = function(err,response){
    console.error(err,response);
};

     // Notificacion
notifier.notify({
    message: "Ejemplo de notificacion para mis vampiros",
    title: "XnightmareX",
    
     // Sonido
    sound: true,//"Bottle",


    // Imagen para la notificacion, no sale en los globos.
    icon : "logo-xnightmare.png",


   // Respuesta de la noticacion
    wait:true
},onError);

notifier.on('click', function (notifierObject, options) {
    // Triggers if `wait: true` and user clicks notification
    alert("Request Triggered");
});
```

<p align="center">
  <a href="https://patreon.com/marrionesa" target="blank"><img align="center" src="https://github.com/marrionesa/notificaciones-electron/blob/main/logo.png" alt="marrionesa" height="200" width="200" /></a>
<h3 align="center">XNightmareX | marrionesa</h3>
<h3 align="left">Si te sirvió de ayuda suscríbete a mis perfiles sociales para que pueda seguir creando más contenido</h3>
<p align="center">
<a href="https://www.youtube.com/channel/UCFvCUyhMCCl-jC_0nYWwGrA" target="blank"><img align="center" src="https://github.com/marrionesa/notificaciones-electron/blob/main/youtube.svg" alt="marrionesa" height="90" width="120" /></a>
 <a href="https://www.twitch.tv/marrionesa" target="blank"><img align="center" src="https://github.com/marrionesa/notificaciones-electron/blob/main/twitch.svg" alt="marrionesa" height="90" width="120" /></a>
  <a href="https://patreon.com/marrionesa" target="blank"><img align="center" src="https://github.com/marrionesa/notificaciones-electron/blob/main/patreon.svg" alt="marrionesa" height="90" width="120" /></a>
</p>




<h3 align="center">Mis recursos principales</h3>
<p align="center"> <a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.electronjs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" alt="electron" width="40" height="40"/> </a> <a href="https://grafana.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> <a href="https://vuetifyjs.com/en/" target="_blank"> <img src="https://bestofjs.org/logos/vuetify.svg" alt="vuetify" width="40" height="40"/> </a> </p>
