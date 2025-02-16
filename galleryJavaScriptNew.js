document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    slideshows.forEach(slideshow => {
        let index = 0;
        const images = slideshow.querySelectorAll('img');
        setInterval(() => {
            index = (index + 1) % images.length;
            slideshow.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    });
});