const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.inset = '0';
lightbox.style.background = 'rgba(0,0,0,0.85)';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.padding = '40px';
lightbox.style.cursor = 'zoom-out';
lightbox.style.zIndex = '9999';

const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightbox-img';
lightboxImg.style.maxWidth = '95%';
lightboxImg.style.maxHeight = '95%';
lightboxImg.style.borderRadius = '12px';
lightboxImg.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
lightboxImg.style.animation = 'zoomIn 0.2s ease';

lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Keyframes animation
const style = document.createElement('style');
style.textContent = `
@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
img { cursor: zoom-in; }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lightbox.style.display = 'none';
    });
});