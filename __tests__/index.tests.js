import planetYears from '../src/planetYears';
import spaceCalc from "../src/index.js";

describe('spaceCalc', () => {
    // test('should return the input earthAge in mercury years', () => {
    //     expect(spaceCalc(20, 10, 35)).toBe('You are 83.33 Mercury years old.')
    // }),
    test('should return the input earthAge in jupiter years', () => {
        expect(spaceCalc(20, 10, 35)).toBe('You are 1.69 Jupiter years old.')
    })
});