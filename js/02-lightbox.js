import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

function createGalleryItemMarkup(item) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${item.original}">
        <img class="gallery-image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");
galleryElement.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
