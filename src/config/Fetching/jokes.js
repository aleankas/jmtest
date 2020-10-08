import url from '../Api/url';
import {Platform} from 'react-native';


export const getListData = (data) => {
  return url.post('/jokes/random/7', data);
};