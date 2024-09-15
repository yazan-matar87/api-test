import axios from 'axios';

const fetchData = async (page = 1) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
  console.log(`Fetching data for page: ${page}`);
  return {
    data: response.data,
    total: parseInt(response.headers['x-total-count'], 10),
  };
};

export default fetchData;
