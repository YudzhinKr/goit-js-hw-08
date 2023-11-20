import Vimeo from 'vimeo-player';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

const player = new Vimeo('vimeo-player');

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {})
    .catch(function (error) {
      console.error('Помилка встановлення часу відтворення:', error);
    });
}
