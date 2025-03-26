const typewriterElement = document.querySelector(".typewriter");

// List of texts with actual Unicode characters in <span> tags
const textArray = [
    "⚲  United States of America",
    "Master's in Data Science",
    "Software Developer",
    "Data Engineer & Cloud Enthusiast",
    "Full-Stack Engineering",
    "Cricket Fanatic, Hot Chocolate Lover, Gardening Passionate...❤️",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = textArray[textIndex];

    // Display text with HTML properly interpreted
    typewriterElement.innerHTML = currentText.substring(0, charIndex) + "<span class='cursor'>|</span>";

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeEffect, 50);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 30);
    } else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            textIndex = (textIndex + 1) % textArray.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

// Start typing effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);
