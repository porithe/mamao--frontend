import { Page } from '../constants/infiniteScroll';

// eslint-disable-next-line import/prefer-default-export
export const destructurePages = (pages: Page[]) =>
  pages.map((page) => page.data?.data ?? []).flat();
