import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '003067612dmshaf3b28753ca381ap1fd52djsnc8525e4030dd',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async ( url: string ) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}