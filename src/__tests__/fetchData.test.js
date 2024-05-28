import { fetchData } from '../api';

// Mock the data.json file
jest.mock('../data.json', () => [
  {
    id: 'B007TIE0GQ',
    title: 'Shark Ninja',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg',
    subtitle:
      'Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System',
    brand: 'Nutribullet',
  },
]);

describe('fetchData', () => {
  it('should return data from data.json', async () => {
    const data = await fetchData();

    // Assert that the data is correct
    expect(data).toEqual([
      {
        id: 'B007TIE0GQ',
        title: 'Shark Ninja',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg',
        subtitle:
          'Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System',
        brand: 'Nutribullet',
      },
    ]);
  });
});
