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
    test.skip("should display the years since the user's input previous age", () => {
        const timeSince = new planetYears(20);
        let result = timeSince.yearsSince(10);
        let earthYears = result.earthYears;
        expect(earthYears).toEqual('10 Earth years have passed.');
    }),
    test.skip('should return the years since the previous age on mercury', () => {
        const timeSince = new planetYears(20);
        let result = timeSince.yearsSince(10);
        let mercuryYears = result.mercuryYears;
        expect(mercuryYears).toEqual('41.67 Mercury years have passed.');
    }),
    test.skip('should return the years passed on Venus', () => {
        const timeSince = new planetYears(20);
        let result = timeSince.yearsSince(10);
        let venusYears = result.venusYears;
        expect(venusYears).toEqual('16.13 Venus years have passed.');
    }),
    test.skip('should return the years passed on Mars', () => {
        const timeSince = new planetYears(20);
        let result = timeSince.yearsSince(10);
        let marsYears = result.marsYears;
        expect(marsYears).toEqual('5.32 Mars years have passed.');
    }),
    test.skip('should return the years passed on Jupiter', () => {
        const timeSince = new planetYears(20);
        let result = timeSince.yearsSince(10);
        let jupiterYears = result.jupiterYears;
        expect(jupiterYears).toEqual('0.84 Jupiter years have passed.');
    })  
})
describe('planetYears.YearsTill', () => {
    test.skip('should return the years until a future age on Earth', () => {
        const timeTill = new planetYears(15);
        let result = timeTill.yearsTill(20);
        let earthYears = result.earthYears;
        expect(earthYears).toEqual('It will be 5 Earth years until you are that old.')
    }),
    test.skip('should return the years until a future age on Mercury', () => {
        const timeTill = new planetYears(15);
        let result = timeTill.yearsTill(20);
        let mercuryYears = result.mercuryYears;
        expect(mercuryYears).toEqual('It will be 20.83 Mercury years until you are that old.')
    }),
    test.skip('should return the years until a future age on Venus', () => {
        const timeTill = new planetYears(15);
        let result = timeTill.yearsTill(20);
        let venusYears = result.venusYears;
        expect(venusYears).toEqual('It will be 8.06 Venus years until you are that old.')
    }),
    test.skip('should return the years until a future age on Mars', () => {
        const timeTill = new planetYears(15);
        let result = timeTill.yearsTill(20);
        let marsYears = result.marsYears;
        expect(marsYears).toEqual('It will be 2.66 Mars years until you are that old.')
    }),
    test('should return the years until a future age on Jupiter', () => {
        const timeTill = new planetYears(15);
        let result = timeTill.yearsTill(20);
        let jupiterYears = result.jupiterYears;
        expect(jupiterYears).toEqual('It will be 0.42 Jupiter years until you are that old.')
    })
})