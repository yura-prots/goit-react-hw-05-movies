import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a23f5de8750d4e18c3afb539dab409ad';

export const fetchTrending = async () => {
  const response = await axios({
    url: `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};
