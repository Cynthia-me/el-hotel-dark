
window.onload=function(){
  enableAutoPlay();
}
var video1 = document.getElementById('openingVideo');
var button = document.getElementById('do1');
var audiobtn = document.getElementById('vol1');
function enableAutoPlay(){
    video1.autoplay = true;
    video1.load();
}
function pauseIt(){
    if(video1.paused){
        video1.play();
        button.innerHTML = "<i class='fas fa-pause'></i>"
    }else{
        video1.pause();
        button.innerHTML = "<i class='fas fa-play'></i>"
    }
}
function muteIt(){
    if(video1.muted){
        video1.unmute();
        audiobtn.innerHTML = "<i class='fas fa-volume-mute'></i>"
    }else{
        video1.mute();
        audiobtn.innerHTML = "<i class='fas fa-volume-down'></i>"
    }
}
function openNav() {
    document.getElementById("myNav").style.width = "30%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  //sCRIPT FOR THE NAV BAR
  // window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar = document.getElementsByClassName("topnav");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


