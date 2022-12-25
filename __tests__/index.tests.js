import planetYears from '../src/planetYears';
import spaceCalc from "../src/index.js";

describe('spaceCalc', () => {
    test('should return the input earthAge in jupiter years', () => {
        expect(spaceCalc(20, 10, 35)).toBe('You are 1.69 Jupiter years old.')
    }).skip,
    test('should return mercYearsOld and jupiterYearsOld results together in an array', () => {
        console.log(spaceCalc(20, 10, 35));
        expect(spaceCalc(20, 10, 35)).toBe(['You are 83.33 Mercury years old', 'You are 1.69 Jupiter years old']);
    })
});

