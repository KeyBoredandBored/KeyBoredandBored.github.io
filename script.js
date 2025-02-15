// Timing settings (in milliseconds)
const fadeDuration = 1000;      // Duration for fade in/out
const displayTime = 3000;       // How long each element stays fully visible

// Get the elements
const message1 = document.getElementById("message1");
const gifContainer = document.getElementById("gifContainer");
const message2 = document.getElementById("message2");

// 1. Show the first message immediately
setTimeout(() => {
  message1.classList.add("visible");
}, 0);

// 2. Fade out the first message after displayTime
setTimeout(() => {
  message1.classList.remove("visible");
}, displayTime);

// 3. Fade in the GIF after the first message fades out
setTimeout(() => {
  gifContainer.classList.add("visible");
}, displayTime + fadeDuration);

// 4. Fade out the GIF after its display time
setTimeout(() => {
  gifContainer.classList.remove("visible");
}, displayTime + fadeDuration + displayTime);

// 5. Fade in the second message after the GIF fades out
setTimeout(() => {
  message2.classList.add("visible");
}, displayTime + fadeDuration + displayTime + fadeDuration);
