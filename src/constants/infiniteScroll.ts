import { PostType } from '../components/Post/Post';

export type Page = {
  data: {
    data: PostType;
  };
};

export type InfiniteQueryParam = {
  pageParam?: number | undefined;
};

export type PageParam = {
  data: {
    paginationNumber: number | null;
  };
};
