import planetYears from "../src/planetYears";

describe('planetYears.yearsOld', () => {
    test('should return the users input earth age in mercury years', () => {
        const mercConvert = new planetYears(20, 10, 35);
        expect(mercConvert.yearsOld).toBe('83.33')
    })
})