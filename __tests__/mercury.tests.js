import Mercury from "../src/mercury.js";

describe('Mercury', () => {
    test('should return one Earth year in Mercury years', () => {
      const earthToMercury = new Mercury(1);
      expect(earthToMercury.mercYears).toBe(0.24);
    }),
    test('should return two and a half Earth years in Mercury years', () => {
      const earthToMercury = new Mercury(2.5);
      expect(earthToMercury.mercYears).toBe(0.60);
    }),
    test('should return a string saying the input Earth years and its equivalent in Mercury years.', () => {
      const earthToMercury = new Mercury(1);
      expect(earthToMercury.mercYearsString).toBe('1 Earth years is equal to 0.24 Mercury years.');
    }),
    test("should return a string stating the user's input age in Mercury years.", () => {
      const earthToMercury = new Mercury(15);
      expect(earthToMercury.mercAge).toBe('You are 3.6 Mercury years old.');
    }),
    test('should return how many years it has been since a given age to the current age of the user', () => {
      const earthToMercury = new Mercury(20, 10);
      expect(earthToMercury.mercYearsSince).toBe('2.4');
    })
})