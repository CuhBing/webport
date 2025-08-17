document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const text = "Learn more about me!";
    let index = 0;
    let isErasing = false;

    function typeWriterEffect() {
        if (!isErasing) {
            // Typing mode: add characters one by one
            typewriterElement.textContent = text.slice(0, index + 1);
            index++;

            if (index === text.length) {
                // Pause at the end of typing
                isErasing = true; // Switch to erasing mode
                setTimeout(typeWriterEffect, 1000); // Pause duration at full sentence
            } else {
                setTimeout(typeWriterEffect, 100); // Typing speed
            }
        } else {
            // Erasing mode: remove characters one by one
            typewriterElement.textContent = text.slice(0, index - 1);
            index--;

            if (index === 0) {
                // Pause at the end of erasing
                isErasing = false; // Switch to typing mode
                setTimeout(typeWriterEffect, 500); // Pause duration at empty text
            } else {
                setTimeout(typeWriterEffect, 50); // Erasing speed
            }
        }
    }

    // Start the typewriter effect
    typeWriterEffect();
});
