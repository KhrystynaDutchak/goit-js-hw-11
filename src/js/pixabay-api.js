import { showMessage,  renderImages} from './render-functions.js';


export const fetchImages = async (value) => {
    const API_KEY = '42557635-c58ce0ef5400f7d3e989a162c';
   
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
   try{
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`);
        const data = await response.json();

        if (data.hits.length === 0) {
            showMessage('Sorry, there are no images matching your search query. Please try again!"');
        }
        else{
            renderImages(data.hits);
        }
    }catch(error){
        console.log(error);
    }finally {
        loader.style.display = 'none'; 
    }
}