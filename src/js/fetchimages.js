import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/'; 
const API_KEY = '36149669-add913b38ae3b7f97c2565fee';
export async function fetchImages(value, page = 1, perPage = 40) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
