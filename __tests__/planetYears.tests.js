import planetYears from "../src/planetYears";

describe('planetYears.mercYearsOld', () => {
    test.skip('should return a sentence describing the users age on mercury', () => {
        const mercConvert = new planetYears(20);
        expect(mercConvert.mercYearsOld()).toBe('You are 83.33 Mercury years old.')
    }).skip;
});

describe('planetYears.venusYearsOld', () => {
    test('should return a sentence stating the input age in venus years', () => {
        const venusConvert = new planetYears(20);
        expect(venusConvert.venusYearsOld()).toBe('You are 32.26 Venus years old.');
    }).skip;
});

describe('planetYears.marsYearsOld', () => {
    test('should return a sentence stating the input age in mars years', () => {
        const marsConvert = new planetYears(20);
        expect(marsConvert.marsYearsOld()).toBe('You are 10.64 Mars years old.');
    }).skip;
});

describe('planetYears.jupiterYearsOld', () => {
    test('should return a sentence stating the input age in jupiter years', () => {
        const jupiterConvert = new planetYears(20);
        expect(jupiterConvert.jupiterYearsOld()).toBe('You are 1.69 Jupiter years old.');
    });
});

describe('planetYears.yearsSince', () => {
    test("should display the years since the user's input previous age", () => {
        const timeSince = new planetYears(20);
        expect(timeSince.yearsSince(10)).toEqual({earthYears:'10 Earth years have passed.'});
    });
    test('should return the years since the previous age on mercury', () => {
        const timeSince = new planetYears(20);
        expect(timeSince.yearsSince(10)).toEqual({mercuryYears:'41.67 Mercury years have passed.'})
    })
})