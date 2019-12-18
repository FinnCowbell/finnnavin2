(function(){
  var backdrop = document.getElementById('billboard');
  var remote = document.getElementById('remote');
  var video = document.getElementById('backdrop-video');
  remote.onclick = function(e){
    toggleVideo(video,remote);
  }
})();

function toggleVideo(video,remote){
  if(video.paused){
    video.play();
    remote.classList.add('playing');
  } else{
    video.pause();
    remote.classList.remove('playing');
  }
}

function isOnScreen(item){
  itemLocation = item.getBoundingClientRect();
  return (itemLocation.y + itemLocation.height > 0) && (itemLocation.y < window.innerHeight);
}

function autoPauseVideo(){
  var video = document.getElementById('backdrop-video');
  var remote = document.getElementById('remote');
  if(!video.paused && !isOnScreen(video)){
    toggleVideo(video,remote);
  }
}
function getPercentThrough(item){
  itemLocation = item.getBoundingClientRect();
  percentThrough = (window.innerHeight - itemLocation.y)/(window.innerHeight + itemLocation.height)
  if (percentThrough > 1){
    return 1
  } else if(percentThrough < 0){
    return 0
  } else{
    return percentThrough;
  }
}

function changeTitleLocations(){
  var billboard, banner, aboutText, projectsText, resumeText;
  billboard = document.getElementById( 'billboard' );
  banner = document.getElementById( 'menu-banner' );
  aboutText = document.getElementById( 'about-text' );
  if(isOnScreen(aboutText)){
    percentThrough = getPercentThrough(aboutText);
    aboutText.style.marginLeft =  (percentThrough * 15) + '%';
    aboutText.style.opacity = percentThrough * .65 + .5;
  }
}

function rotateAboutHexagons(){
  var hex1,hex2,hex3;
  hex1 = document.getElementById( 'hex-svg-1' )
  hex2 = document.getElementById( 'hex-svg-2' )
  hex3 = document.getElementById( 'hex-svg-3' )
  hexes = [hex1,hex2]
  maxRotation = [20,-30,-10];
  for(i in hexes){
    if(isOnScreen(hexes[i])){
      percentThrough = getPercentThrough(hexes[i]);
      hexes[i].children[0].children[0].children[0].style.transform = `rotate(${maxRotation[i]*percentThrough}deg)`
    }
  }
};

window.onload = function(){
  document.addEventListener('scroll', function(e){
    changeTitleLocations();
    rotateAboutHexagons();
    autoPauseVideo();
  })
  changeTitleLocations();
  rotateAboutHexagons();
}