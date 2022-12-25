import planetYears from "../src/planetYears";

describe('planetYears.mercYearsOld', () => {
    test('should return a sentence describing the users age on mercury', () => {
        const mercConvert = new planetYears(0.24, 0.62, 1.88, 11.86);
        expect(mercConvert.mercYearsOld(20)).toBe('You are 83.33 Mercury years old.')
    });
});

describe('planetYears.venusYearsOld', () => {
    test('should return a sentence stating the input age in venus years', () => {
        const venusConvert = new planetYears(0.24, 0.62, 1.88, 11.86);
        expect(venusConvert.venusYearsold(20)).toBe('You are 32.26 Venus years old.');
    });
});

describe('planetYears.marsYearsOld', () => {
    test('should return a sentence stating the input age in mars years', () => {
        const marsConvert = new planetYears(0.24, 0.62, 1.88, 11.86);
        expect(marsConvert.marsYearsold(20)).toBe('You are 10.64 Mars years old.');
    });
});