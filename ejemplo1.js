
const notifier = require('node-notifier');
const xnightmarex = new notifier.NotificationCenter();
const path = require('path');

xnightmarex.notify(
  {
    title: 'Notificacion XNightmareX',
    subtitle: '',
    message: "Suscribiros al canal vampiros!",
    sound: 'Bomb',
    wait: true,
    icon: path.join(__dirname, 'logo.png'),
    contentImage: path.join(__dirname, 'logo.png'),
open: 'http://' + path.join('twitch.tv', 'marrionesa')
  },
  function() {
    console.log(arguments);
  }
);
