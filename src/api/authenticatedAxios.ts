import axios from 'axios';
import { bearerToken } from '../utils/auth/auth';

export default axios.create({
  headers: {
    Authorization: bearerToken(),
  },
});
