// Init AOS Animations
AOS.init();

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Typing Effect
const typingElement = document.getElementById("typing-text");
const textArray = [
  "AWS Certified Cloud Practitioner",
  "Cybersecurity Enthusiast",
  "AI & Machine Learning Developer",
  "Java & Python Programmer"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  let currentText = textArray[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(type, 1000);
  }
}

type();
