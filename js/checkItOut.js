
function activateIFrame(url=false, frame, card, button, hide=false){
  if(card.classList.contains('hidden')){
    card.classList.remove('hidden');
    button.innerHTML = "Check it Out";
    if(hide){
      frame.style.display = 'block';
    }
  } else{
      if(hide){
        frame.style.display = 'hidden';
      }
    if(url){
      frame.src = url;
    }
    card.classList.add('hidden');
    button.innerHTML = "Return";
  }
}

function main(){
  var sovButton,sovCard,sovFrame;
  sovButton = document.getElementById('sov-button');
  sovCard = document.getElementById('spirographs');
  sovFrame = document.getElementById('venus-frame');
  sovButton.onclick = function(){
    activateIFrame('/sov',sovFrame,sovCard,sovButton);
  }
}
document.onload = main();