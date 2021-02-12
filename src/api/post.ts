import authenticatedAxios from './authenticatedAxios';

export default {
  addPost(text: string) {
    return authenticatedAxios.post(`${process.env.REACT_APP_MAMAO_BACKEND_API}post/add`, {
      text,
    });
  },
  getTablePosts(start = 0) {
    return authenticatedAxios.get(`${process.env.REACT_APP_MAMAO_BACKEND_API}table?start=${start}`);
  },
  likePost(postUuid: string) {
    return authenticatedAxios.get(
      `${process.env.REACT_APP_MAMAO_BACKEND_API}post/like/${postUuid}`,
    );
  },
  disLikePost(postUuid: string) {
    return authenticatedAxios.get(
      `${process.env.REACT_APP_MAMAO_BACKEND_API}post/dislike/${postUuid}`,
    );
  },
  findAll(username: string, start = 0) {
    return authenticatedAxios.get(
      `${process.env.REACT_APP_MAMAO_BACKEND_API}post/findAll/${username}?limit=10&start=${start}`,
    );
  },
};
