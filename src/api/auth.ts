import axios from 'axios';

export type RegisterData = {
  username: string;
  email: string;
  password: string;
};

export default {
  register(userData: RegisterData) {
    return axios.post(`${process.env.REACT_APP_MAMAO_BACKEND_API}auth/register`, {
      ...userData,
    });
  },
};
