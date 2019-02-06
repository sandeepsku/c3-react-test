import axios from 'axios';

export default   async () =>{
  const url = 'https://reqres.in/api/users?page=1&per_page=10';
  const response = await axios.get(url);
  return response.data;
}
