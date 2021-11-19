import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgMarkUp = makeGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgMarkUp);

function makeGallery(items) {
    return items.map(
            ({ preview, original, description }) =>
                `<li class="gallery__item"><a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}" class="gallery__image"></a>
    </li>`,
        )
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });