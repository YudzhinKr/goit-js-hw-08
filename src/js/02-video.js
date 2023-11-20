import Vimeo from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
  console.log('Current time:', data.seconds);
  console.log('Percent played:', data.percent);
});
