import Mercury from "../src/mercury.js";

describe('Mercury', () => {

    test('should return one Earth year in Mercury years', () => {
      const earthToMercury = new Mercury(1);
      expect(earthToMercury).mercYears === 0.24;
    })
})