import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log('🚀 ~ 인터셉터 요청 오류', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('🚀 ~ 응답이... 공습 경보! ', error);
    return Promise.reject(error);
  },
);

export default instance;
