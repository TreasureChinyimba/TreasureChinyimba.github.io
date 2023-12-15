const topTenDiv = document.getElementById('top-ten');
const notificationsDiv = document.getElementById('notifications');
const latestMusicDiv = document.getElementById('latest-music');
const homeDiv = document.getElementById('home');

function showNotifications() {
  hideAllDivs();
  notificationsDiv.style.display = 'block';
}

function showLatestMusic() {
  hideAllDivs();
  latestMusicDiv.style.display = 'block';
}

function home() {
  hideAllDivs();
  homeDiv.style.display = 'block';
}

function showTopTen() {
  hideAllDivs();
  topTenDiv.style.display = 'block';
}

function hideAllDivs() {
  notificationsDiv.style.display = 'none';
  latestMusicDiv.style.display = 'none';
  topTenDiv.style.display = 'none';
  homeDiv.style.display = 'none';
}

function likeSong(title) {
  likes[title]++;
  updateLikesDisplay(title);
}

function playSong(title) {
  plays[title]++;
  updatePlaysDisplay(title);
  alert('Now playing: ' + title);
}

function updateLikesDisplay(title) {
  const likesElement = document.getElementById('likes-' + title.replace(/\s+/g, '-').toLowerCase());
  if (likesElement) {
    likesElement.textContent = likes[title];
  }
}

function updatePlaysDisplay(title) {
  const playsElement = document.getElementById('plays-' + title.replace(/\s+/g, '-').toLowerCase());
  if (playsElement) {
    playsElement.textContent = plays[title];
  }
}

function searchMusic() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const musicItems = document.querySelectorAll('.music-item');

  musicItems.forEach(item => {
    const songTitle = item.querySelector('audio').getAttribute('title').toLowerCase();
    const displayStyle = songTitle.includes(searchQuery) ? 'block' : 'none';
    item.style.display = displayStyle;
  });
}

const currentlyPlayingAudio = null;

function playAudio(audioId) {
  const audioElement = document.getElementById(audioId);
  
  if (currentlyPlayingAudio) {
    currentlyPlayingAudio.pause();
  }else {
    alert('failed')
  }

  audioElement.play();
  currentlyPlayingAudio = audioElement;
}
