import planetYears from "../src/planetYears";

describe('planetYears.yearsOld', () => {
    test('should return the users input earth age in mercury years', () => {
        const mercConvert = new planetYears(0.24, 0.62, 1.88, 11.86);
        expect(mercConvert.yearsOld(20)).toBe('83.33')
    })
    test('should return a sentence describing the users age on mercury', () => {
        const mercConvert = new planetYears(0.24, 0.62, 1.88, 11.86);
        expect(mercConvert.yearsOld).toBe('You are 83.33 Mercury years old.')
    })
})