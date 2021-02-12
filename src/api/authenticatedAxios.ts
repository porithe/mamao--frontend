import axios from 'axios';
import { Http2ServerRequest } from 'http2';
import { bearerToken } from '../utils/auth/auth';

const instance = axios.create({
  timeout: 3000,
});

instance.interceptors.request.use(
  (config): any => {
    const token = bearerToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export default instance;
