import spaceCalc from "../src/index.js";
describe('spaceCalc', () => {
    test.skip('should return the input earthAge in jupiter years', () => {
        expect(spaceCalc(20, 10, 35)).toContain('You are 1.69 Jupiter years old.')
    }),
    test.skip('should return mercYearsOld and jupiterYearsOld results together in an array', () => {
        console.log(spaceCalc(20, 10, 35));
        expect(spaceCalc(20, 10, 35)).toContain(['You are 83.33 Mercury years old.','You are 1.69 Jupiter years old.']);
    }),
    test.skip('should return all results together in an array', () => {
        console.log(spaceCalc(20, 10, 35));
        expect(spaceCalc(20, 10, 35)).toEqual(['You are 83.33 Mercury years old.','You are 32.26 Venus years old.','You are 10.64 Mars years old.','You are 1.69 Jupiter years old.']);
    }),
    test.skip("should return how long its been on earth in an array", () => {
        expect(spaceCalc(20, 10, 35)).toContain('10 Earth years have passed.');
    }),
    test.skip("should return how long its been on mercury in an array", () => {
        expect(spaceCalc(20, 10, 35)).toContain('41.67 Mercury years have passed.');
    }),
    test.skip('should return all years since in a single array', () => {
        expect(spaceCalc(20, 10, 35)).toEqual(['10 Earth years have passed.','41.67 Mercury years have passed.','16.13 Venus years have passed.','5.32 Mars years have passed.','0.84 Jupiter years have passed.']);
    }),
    test('should return all times until the projected age', () => {
        expect(spaceCalc(15, 10, 20)).toEqual(['It will be 5 Earth years until you are that old.','It will be 20.83 Mercury years until you are that old.','It will be 8.06 Venus years until you are that old.','It will be 2.66 Mars years until you are that old.','It will be 0.42 Jupiter years until you are that old.']);
    })
});

