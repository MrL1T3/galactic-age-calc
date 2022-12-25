import planetYears from "../src/planetYears";

describe('planetYears.mercYearsOld', () => {
    test('should return a sentence describing the users age on mercury', () => {
        const mercConvert = new planetYears(20);
        expect(mercConvert.mercYearsOld()).toBe('You are 83.33 Mercury years old.')
    });
});

describe('planetYears.venusYearsOld', () => {
    test('should return a sentence stating the input age in venus years', () => {
        const venusConvert = new planetYears(20);
        expect(venusConvert.venusYearsold()).toBe('You are 32.26 Venus years old.');
    });
});

describe('planetYears.marsYearsOld', () => {
    test('should return a sentence stating the input age in mars years', () => {
        const marsConvert = new planetYears(20);
        expect(marsConvert.marsYearsold()).toBe('You are 10.64 Mars years old.');
    });
});

describe('planetYears.jupiterYearsOld', () => {
    test('should return a sentence stating the input age in jupiter years', () => {
        const jupiterConvert = new planetYears(20);
        expect(jupiterConvert.jupiterYearsold()).toBe('You are 1.69 Jupiter years old.');
    });
});