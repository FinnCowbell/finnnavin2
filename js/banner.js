(function(){
  var backdrop = document.getElementById('billboard');
  var remote = document.getElementById('remote');
  var video = document.getElementById('backdrop-video');
  remote.onclick = function(e){
    if(video.paused){
      video.play();
      remote.classList.add('playing');
    } else{
      video.pause();
      remote.classList.remove('playing');
    }
  }
})();