// var dark = false;

function nightTime() {
  // dark = true;
  chainYank();
  backgroundDark();
  lamppostBlack();
  duckGreen();
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

// function lightTime() {
//   console.log("working");
//   backgroundRevert();
//   lamppostRevert();
//   duckRevert();
//   dark = false;
// }

// function backgroundRevert() {
//   $('body')[0].style.backgroundColor = "white"
// }
//
// function lamppostRevert() {
//   $('#light-pole')[0].style.backgroundColor = "red";
//   $('#light-base')[0].style.backgroundColor = "red";
// }
//
// function duckRevert() {
//   $('#duck-body')[0].style.backgroundColor = "yellow";
//   $('#duck-head')[0].style.backgroundColor = "yellow";
//   $('#duck-tail')[0].style.borderRightColor = "yellow";
// }

function listenForPull() {
  // if (dark === false) {
    $('#chain').on('click', nightTime);
  // } else {
  //   $('#chain').on('click', lightTime);
  // }
}

$(document).ready(function() {
  listenForPull();
})
