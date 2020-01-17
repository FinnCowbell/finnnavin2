/*Function Declarations*/
function toggleVideo(){
  var remote = document.getElementById('remote');
  var video = document.getElementById('backdrop-video');
  if(video.paused){
    video.play();
    if(!video.paused){
      remote.classList.add('playing');
    }
  } else{
    video.pause();
    remote.classList.remove('playing');
  }
}

function assignAutoPlayBar(){
  let autoplayBar = document.getElementById('autoplay-bar')
  let action = ()=>{
    toggleVideo()
    autoplayBar.style.width = '100%';
    autoplayBar.style.animationDuration = '.5s';
    autoplayBar.style.animationName = 'fadeOut'
    autoplayBar.removeEventListener('animationend',action)
  }
  autoplayBar.addEventListener('animationend', action);
}

function assignAutoPlayButton(){
  var remote = document.getElementById('remote');
  remote.onclick = function(e){
    toggleVideo();
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
function getPercentThrough(item,accountForBottom = true){
  //returns the distance an item has travelled through a div, taking into account the entire height of the div.
  itemLocation = item.getBoundingClientRect();
  if(accountForBottom){
    percentThrough = (window.innerHeight - itemLocation.y)/(window.innerHeight + itemLocation.height)
  } else{
    percentThrough = (window.innerHeight - itemLocation.y)/(window.innerHeight)
  }
  if (percentThrough > 1){
    return 1
  } else if(percentThrough < 0){
    return 0
  } else{
    return percentThrough;
  }
}

function changeBannerColor(){
  let about,projects,resume,accents;
  about = {
    start: 'into-about',
    color:'rgb(107, 93, 138)'
  },
  projects = {
    start: 'into-projects',
    color:'rgb(0,152,116)'
  },
  resume = {
    start: 'resume',
    color: 'rgb(159, 79, 76)'
  }
  accents = [about,projects,resume];
  banner = document.getElementById('menu-banner').children[0];
  for(o in accents){
    start = document.getElementById(accents[o].start);
    if(start.getBoundingClientRect().top <= window.innerHeight / 4){
      banner.style.color = accents[o].color;
    }
  }
}

function slideTitles(){
  var billboard, banner, aboutText, projectsText, resumeText;
  billboard = document.getElementById( 'billboard' );
  banner = document.getElementById( 'menu-banner' );
  aboutText = document.getElementById( 'about-text' );
  projectContent = document.getElementById('projects-content');
  projectsText = document.getElementById( 'projects-text' );
  resumeText = document.getElementById( 'resume-text' );
  if(isOnScreen(aboutText)){
    percentThrough = getPercentThrough(aboutText);
    aboutText.style.marginLeft =  (percentThrough * 15) + '%';
    aboutText.style.opacity = percentThrough * .65 + .5;
  }
  if(isOnScreen(projectContent)){
    percentThrough = getPercentThrough(projectContent,false);
    startPos = window.innerWidth / 3;
    projectsText.style.paddingLeft = startPos - (percentThrough * startPos) + 'px';
    projectsText.style.opacity = percentThrough * .65 + .5;
  }
  if(isOnScreen(resumeText)){
    percentThrough = getPercentThrough(resumeText);
    resumeText.style.marginLeft =  (percentThrough * 15) + '%';
    resumeText.style.opacity = percentThrough * .65 + .5;
  }
}

function rotateAboutHexagons(){
  var hex1,hex2,hex3;
  hex1 = document.getElementById( 'hex-svg-1' )
  hex2 = document.getElementById( 'hex-svg-2' )
  hex3 = document.getElementById( 'hex-svg-3' )
  hexes = [hex1,hex2,hex3]
  maxRotation = [100,-100,100];
  for(i in hexes){
    if(true){
      percentThrough = getPercentThrough(hexes[i]);
      hexes[i].children[0].children[0].style.transform = `rotate(${maxRotation[i]*percentThrough}deg)`
    }
  }
};

function slideInProjectBackground(){
  var bg,decal,projectText,curtain;
  bg = document.getElementById( 'travelling-background' );
  decal = document.getElementById( 'into-projects' );
  projectContent = document.getElementById('projects-content');
  projectText = document.getElementById( 'projects-text')
  curtain = document.getElementById('project-decal-curtain');

  if(isOnScreen(decal)){
    var contentRect,percentThrough,initialDistance,position, curtainHeight, decalHeight;
    contentRect = projectContent.getBoundingClientRect()
    percentThrough = getPercentThrough(decal);
    initialDistance = (window.innerHeight / 2);
    position = (initialDistance - (initialDistance * (percentThrough) * 1.5));
    decalHeight = decal.getBoundingClientRect().height + 5;
    decalHeight = decal.getBoundingClientRect().height;
    curtainHeight = decalHeight;
    if(position < 0){//Stop it from moving when it hits the decal, which is also the top of the projectText.
      curtainHeight = decalHeight + position * .33 > 0 ? decalHeight + position * .33 : 0; //one liner to decrease height until it is 0.
      position = 0
    }
    curtain.style.height = curtainHeight + 'px';
    bg.style.top = position + "px";
  }

}

function elementPositionTick(){
  if(window.scrolled){
    slideTitles();
    rotateAboutHexagons();
    slideInProjectBackground();
    autoPauseVideo();
    changeBannerColor();
    window.scrolled = false;
  }
}

window.onload = function(){
  //Link the play button to the video.
  assignAutoPlayButton();
  assignAutoPlayBar();
  //Set window to scrolled initially to update all values.
  window.scrolled = true;
  setInterval(elementPositionTick, 1000/60);

  document.addEventListener('scroll', function(){
    window.scrolled = true;
  })
  //Initialize SmoothScrolling
  var scroll = new SmoothScroll('a[href*="#"', {
    speed: 500
  });

}
