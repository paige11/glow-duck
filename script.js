function nightTime() {
  chainYank();
  backgroundDark();
  lamppostBlack();
  duckGreen();
  $('#chain').on('click', lightTime)
}

function chainYank() {
  // chain animation
}

function backgroundDark() {
  $('body')[0].style.backgroundImage = "none";
  $('body')[0].style.backgroundColor = "#333";
}

function lamppostBlack() {
  $('#light-pole')[0].style.backgroundColor = "black";
  $('#light-base')[0].style.backgroundColor = "black";
}

function duckGreen() {
  $('#duck-body')[0].style.backgroundColor = "#abfd91";
  $('#duck-head')[0].style.backgroundColor = "#abfd91";
  $('#duck-tail')[0].style.borderRightColor = "#abfd91";
}

function lightTime() {
  backgroundRevert();
  lamppostRevert();
  duckRevert();
  $('#chain').on('click', nightTime)
}

function backgroundRevert() {
  $('body')[0].style.background = "url(flowers.jpg)";
}

function lamppostRevert() {
  $('#light-pole')[0].style.backgroundColor = "red";
  $('#light-base')[0].style.backgroundColor = "red";
}

function duckRevert() {
  $('#duck-body')[0].style.backgroundColor = "yellow";
  $('#duck-head')[0].style.backgroundColor = "yellow";
  $('#duck-tail')[0].style.borderRightColor = "yellow";
}

function listenForPull() {
  $('#chain').on('click', nightTime);
}

$(document).ready(function() {
  listenForPull();
})
