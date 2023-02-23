const text = "This is the text that will be typed out.";
let index = 0;
const typingAnimation = setInterval(() => {
  document.getElementById("typing-animation").textContent = text.slice(0, index);
  index++;
  if (index > text.length) {
    clearInterval(typingAnimation);
  }
}, 50);