// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalImage = document.createElement('img');
modal.appendChild(modalImage);
document.body.appendChild(modal);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Form submission (for now, just prevent default)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a placeholder)');
});

