import { showMessage } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js'
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const value = searchInput.value.trim();
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
    if (value === '') {
        showMessage('Please enter a search query');
        return;
    }
    try{
        const images = await fetchImages(value);
    }catch(error){
        console.log(error);
    }
  });
