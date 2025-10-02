'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should handle empty strings in the array`, () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it('should return an empty array if original array is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should return an array with reversed strings', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should preserve original array length', () => {
    expect(arrayReverse(['Mate', 'Academy']).length).toEqual(2);
  });

  it('should return an array with empty strings reversed', () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it('should return an array with a single reversed string', () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });
});
