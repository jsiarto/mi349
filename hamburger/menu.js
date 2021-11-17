// Make sure all whole page has loaded before executing the script
window.onload = function() {
  const hamburger = document.querySelector(".mobile-trigger");
  const navigation = document.querySelector(".desktop-links");
  
  // Toggle function checks the state of the navigation constant and displays or hides the links
  function toggle() {
    if (window.getComputedStyle(navigation).display === "none") {
      navigation.style.display = "block";
    } else {
      navigation.style.display = "none";
    }
  }
  
  // Create an "even listener" to watch for clicks on the hamburger link
  // When it detects a click it executes the toggle() function above
  hamburger.addEventListener("click", toggle);
};



function playDrum() {
  var audio = new Audio('link_to_sound_1');
  audio.play();
}

function playBubble() {
  var audio = new Audio('link_to_sound_1');
  audio.play();
}

function playCymbal() {
  var audio = new Audio('link_to_sound_1');
  audio.play();
}

// This goes in the HTML
<button onclick="playDrum()"></button>

