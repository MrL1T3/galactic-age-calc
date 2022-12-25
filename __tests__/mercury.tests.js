import Mercury from "../src/mercury.js";
describe('Mercury', () => {
    test('should return one Earth year in Mercury years', () => {
      const earthToMercury = new Mercury(1);
      expect(earthToMercury.mercYears).toBe('4.17');
    }),
    test('should return two and a half Earth years in Mercury years', () => {
      const earthToMercury = new Mercury(2.5);
      expect(earthToMercury.mercYears).toBe('10.42');
    }),
    test('should return a string saying the input Earth years and its equivalent in Mercury years.', () => {
      const earthToMercury = new Mercury(1);
      expect(earthToMercury.mercYearsString).toBe('1 Earth years is equal to 4.17 Mercury years.');
    }),
    test("should return a string stating the user's input age in Mercury years.", () => {
      const earthToMercury = new Mercury(15);
      expect(earthToMercury.mercAge).toBe('You are 62.50 Mercury years old.');
    }),
    test('should return how many years it has been since a given age to the current age of the user', () => {
      const earthToMercury = new Mercury(20, 10);
      expect(earthToMercury.mercYearsSince).toBe('41.67');
    }),
    test('should return the same value as the previous test in a sentence describing the result', () => {
      const earthToMercury = new Mercury(20, 10);
      expect(earthToMercury.mercYearsSinceString).toBe('It has been 41.67 Mercury years since you were that old.');
    }),
    test("should return a string of the number of years until a selcted age, given the current user's age", () => {
      const earthToMercury = new Mercury(20, 10, 35);
      expect(earthToMercury.mercYearsUntil).toBe('62.50');
    }),
})