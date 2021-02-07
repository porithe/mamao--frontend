import authenticatedAxios from './authenticatedAxios';

export default {
  addPost(text: string) {
    return authenticatedAxios.post(`${process.env.REACT_APP_MAMAO_BACKEND_API}post/add`, {
      text,
    });
  },
};
