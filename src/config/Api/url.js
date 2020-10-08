import axios from 'axios';

const url = axios.create({
  baseURL: 'https://api.icndb.com/',
});

export default url;
