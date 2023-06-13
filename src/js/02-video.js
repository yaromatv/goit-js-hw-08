import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _throttle(saveWatchProgress, 1000));

function saveWatchProgress(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

window.onload = () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
};
