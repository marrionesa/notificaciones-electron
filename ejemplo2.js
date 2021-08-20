const notifier = require('node-notifier');
const xnightmarex = new notifier.NotificationCenter();

const trueAnswer = 'Todavía no';

xnightmarex.notify(
  {
    title: 'XnightmareX - Notificacion',
    message: 'Te has suscrito a mi canal?',
    sound: 'Bomb',

 icon:  'logo.png',
    contentImage: 'logo.png',
 open:  'https://twitch.tv/marrionesa',
    closeLabel: 'Si',
    actions: trueAnswer
  },
  function(err, response, metadata) {
    if (err) throw err;
    console.log(metadata);

    if (metadata.activationValue !== trueAnswer) {
      return; // No need to continue
    }


    xnightmarex.notify(
      {
        title: 'Suscrite y apoya es gratis',
        message: 'Quieres decir algo?',
        sound: 'Jazz',

 icon:  'logo.png',
 contentImage: 'logo.png',
 open:  'https://twitch.tv/marrionesa',
        // case sensitive
        reply: true
      },
      function(err, response, metadata) {
        if (err) throw err;
        console.log(metadata);
      }
    );
  }
);

xnightmarex.on('replied', function(obj, options, metadata) {
  console.log('Mensaje de respuesta', metadata);
});

