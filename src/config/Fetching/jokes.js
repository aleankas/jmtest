import url from '../Api/url';

export const getListData = (data) => {
  return url.post('/jokes/random/5', data);
};
