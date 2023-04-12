import axios from 'axios';

axios.defaults.baseURL = 'https://643667168205915d34f2961e.mockapi.io/products';

export default async function getProducts() {
  const response = await axios.get('/');
  return response.data;
}
