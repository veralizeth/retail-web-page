import data from './data.json';

export const fetchData = () => {
  // Create a promise to represent the eventual completion of the mock api.
  // The reject is not use since this mock is designated to always succeed.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
