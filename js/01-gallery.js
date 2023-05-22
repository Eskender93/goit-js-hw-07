import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

function createGalleryItemMarkup(item) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${item.original}">
        <img class="gallery-image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");
galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery-image")) {
    const largeImageURL = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${largeImageURL}" alt="">`
    );
    instance.show();

    const closeLightbox = () => {
      instance.close();
      document.removeEventListener("keydown", handleKeyPress);
    };

    const handleKeyPress = (event) => {
      if (event.code === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    instance.element().addEventListener("click", closeLightbox);
  }
});
