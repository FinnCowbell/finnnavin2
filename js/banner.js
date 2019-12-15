(function(){
  var video = document.getElementById('backdrop-video');
  video.onclick = function(){
    if(video.paused){
      video.play();
    } else{
      video.pause();
    }
  }
})();