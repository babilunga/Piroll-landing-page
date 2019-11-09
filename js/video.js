var video = document.querySelector('.video');
var btn = document.getElementById('play-pause');

function PlayPauseVideo (){
  if(video.paused){
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function() {
  PlayPauseVideo();
  video.volume = 0.25;
};
