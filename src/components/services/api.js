import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: '27366068-7f092b690db13a9a2c4fde80b',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

async function fetchImages(searchQuery, page) {
  const response = await axios.get('', {
    params: {
      page,
      q: searchQuery,
    },
  });
  return response.data.hits;
}

export default fetchImages;
