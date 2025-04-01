// Function to handle task completion
function taskCompleted(checkbox) {
  if (checkbox.checked) {
    // Add a line-through effect to the task text
    checkbox.parentElement.style.textDecoration = 'line-through';
    // Trigger confetti celebration
    launchConfetti();
  } else {
    checkbox.parentElement.style.textDecoration = 'none';
  }
}

// Confetti function using canvas-confetti library
function launchConfetti() {
  // Dynamically load the canvas-confetti script if not already loaded
  if (!window.confetti) {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => { window.confetti(); triggerConfetti(); };
    document.body.appendChild(script);
  } else {
    triggerConfetti();
  }
}

function triggerConfetti() {
  // Launch confetti for 1 second
  const duration = 1 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    window.confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    window.confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
