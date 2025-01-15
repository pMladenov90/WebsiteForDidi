let currentSlide = 0;
const comments = document.querySelectorAll('.comment');

function showSlide(index) {
    comments.forEach((comment, i) => {
        comment.classList.remove('active');
        if (i === index) {
            comment.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= comments.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

// Set interval for automatic slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds