import axios from 'axios';
import { bearerToken } from '../utils/auth/auth';

const XD = true;
const func = () => console.log('xd');
export default axios.create({
  headers: {
    Authorization: bearerToken(),
  },
});
