import React from 'react';
import { isAuthenticated, isTokenValid } from '../utils/auth/auth';

// eslint-disable-next-line import/prefer-default-export
export const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJ1dWlkIjoiNDRhNzcxMzgtYTVlZS00ZGZjLWFmNzMtOTc0YzFjNGNhOTEwIiwic3ViIjoiNDRhNzcxMzgtYTVlZS00ZGZjLWFmNzMtOTc0YzFjNGNhOTEwIiwiaWF0IjoxNjEyNTQwOTA4LCJleHAiOjE2MTUxMzI5MDh9.CUCwfVg3S4Uo6ME3B5JASGjquhIMsIztEU9gpUtOzP8';

afterEach(() => {
  jest.clearAllMocks();
});

test('should return true when token is not expired', () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => new Date('2021-02-14T11:01:58.135Z').valueOf());
  expect(isTokenValid(fakeToken)).toBeTruthy();
});

test('should return true when user is authenticated', () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => new Date('2021-02-14T11:01:58.135Z').valueOf());
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => fakeToken);
  expect(isAuthenticated()).toBeTruthy();
});

test('should return false when user is not authenticated', () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => new Date('2019-02-14T11:01:58.135Z').valueOf());
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
  expect(isAuthenticated()).not.toBeTruthy();
});
