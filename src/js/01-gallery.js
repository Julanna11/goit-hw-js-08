// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryList = document.querySelector('.gallery');
const cards = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', cards);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
            <a "gallery__item" 
            href = "${original}" >
                  <img class="gallery__image"
            src = "${preview}"
            alt = "${description}"
            	/>
                  </a>
            `;
        }).join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {

});
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom", 
        captionDelay: "250", 
}); 
  console.log(lightbox);

console.log(galleryItems);
