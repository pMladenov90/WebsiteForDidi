const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function showLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImage.src = galleryItems[index].src;
    lightboxImage.alt = galleryItems[index].alt;
    currentIndex = index;
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showLightbox(index);
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    showLightbox(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    showLightbox(currentIndex);
});