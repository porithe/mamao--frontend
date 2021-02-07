import axios from 'axios';
// import AuthenticatedAxios from './authenticatedAxios';

export default {
  searchUsers(username: string) {
    return axios.get(`${process.env.REACT_APP_MAMAO_BACKEND_API}user/search/${username}`);
  },
};
