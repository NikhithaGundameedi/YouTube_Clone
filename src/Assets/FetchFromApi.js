import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?${url}`, options); 
    console.log('successful');
    return data || {}; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return {}; 
  }
};
