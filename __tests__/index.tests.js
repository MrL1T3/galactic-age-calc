import spaceCalc from "../src/index.js";

describe('spaceCalc', () => {
    test.skip('should return the input earthAge in jupiter years', () => {
        expect(spaceCalc(20, 10, 35)).toContain('You are 1.69 Jupiter years old.')
    }),
    test.skip('should return mercYearsOld and jupiterYearsOld results together in an array', () => {
        console.log(spaceCalc(20, 10, 35));
        expect(spaceCalc(20, 10, 35)).toContain(['You are 83.33 Mercury years old.','You are 1.69 Jupiter years old.']);
    }),
    test('should return all results together in an array', () => {
        console.log(spaceCalc(20, 10, 35));
        expect(spaceCalc(20, 10, 35)).toEqual(['You are 83.33 Mercury years old.','You are 32.26 Venus years old.','You are 10.64 Mars years old.','You are 1.69 Jupiter years old.']);
    })
});

