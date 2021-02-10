import axios from 'axios';
import AuthenticatedAxios from './authenticatedAxios';

export default {
  searchUsers(username: string) {
    return axios.get(`${process.env.REACT_APP_MAMAO_BACKEND_API}user/search/${username}`);
  },
  userProfile(username: string) {
    return AuthenticatedAxios.get(`${process.env.REACT_APP_MAMAO_BACKEND_API}user/${username}`);
  },
  follow(username: string) {
    return AuthenticatedAxios.put(
      `${process.env.REACT_APP_MAMAO_BACKEND_API}user/follow/${username}`,
    );
  },
  unFollow(username: string) {
    return AuthenticatedAxios.put(
      `${process.env.REACT_APP_MAMAO_BACKEND_API}user/unfollow/${username}`,
    );
  },
};
