
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector(".gallery");

/**
 * Створює HTML-розмітку для одного елемента галереї.
 * @param {Object} image - Об'єкт зображення з властивостями preview, original, description.
 * @returns {string} - Шаблонний рядок з розміткою <li>.
 */
function createGalleryItemMarkup({ preview, original, description }) {
    return `
        <li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img
                    class="gallery-image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
}

const galleryMarkup = images.map(createGalleryItemMarkup).join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", handleGalleryClick);

/**
 * Обробник кліку на галереї.
 * @param {Event} event - Об'єкт події.
 */
function handleGalleryClick(event) {
    event.preventDefault();

    const isImageElement = event.target.classList.contains("gallery-image");

    if (!isImageElement) {
        return;
    }

    const largeImageUrl = event.target.dataset.source;
    const imageDescription = event.target.alt;
    
    openModal(largeImageUrl, imageDescription);
}

/**
 * Відкриває модальне вікно з великим зображенням за допомогою basicLightbox.
 * @param {string} url - Посилання на велике зображення.
 * @param {string} alt - Опис зображення для alt.
 */
function openModal(url, alt) {
    const modalMarkup = `
        <div class="modal">
            <img src="${url}" alt="${alt}" class="modal-image"/>
        </div>
    `;

    const instance = basicLightbox.create(modalMarkup);

    instance.show();
}