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

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= comments.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = comments.length - 1;
    }
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);