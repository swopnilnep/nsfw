

var music = document.getElementById("music");
var isPlaying = false;
music.volume = 0.2;

function start() {
  music.play();
  document.getElementById("play").innerHTML = `
  <img src="source.gif">
  <div class="play-music">
    <div id="music-animation" class="music-animation">
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar3"></span>
      <span class="bar bar4"></span>
      <span class="bar bar5"></span>
    </div>
  </div>
  `;
 
  document.getElementById("top").innerHTML = "Remembering the Legendary Carlton Dance";
  document.getElementById("bottom").innerHTML = "";
  document.title = "The Carlton Dance | Swopnil Shrestha";


}

function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};


// music.onplaying = function() {
//   isPlaying = true;
//   document.getElementById("music-animation").classList.add('on')
// };
// music.onpause = function() {
//   isPlaying = false;
//   document.getElementById("music-animation").classList.remove('on')
// };

var button = document.getElementById("toggle");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);
