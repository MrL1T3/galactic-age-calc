export default class planetYears{
    constructor(earthAge, futureYears){
        this.earthAge = earthAge;
        this.futureYears = futureYears;
    }
    mercYearsOld() {
        const mercAge = (this.earthAge / 0.24).toFixed(2);
        const mercAgeString = 'You are ' + mercAge + ' Mercury years old.'
        return mercAgeString;
    }
    venusYearsOld() {
        const venusAge = (this.earthAge / 0.62).toFixed(2);
        const venusAgeString = 'You are ' + venusAge + ' Venus years old.'
        return venusAgeString;
    }
    marsYearsOld() {
        const marsAge = (this.earthAge / 1.88).toFixed(2);
        const marsAgeString = 'You are ' + marsAge + ' Mars years old.'
        return marsAgeString;
    }
    jupiterYearsOld() {
        const jupiterAge = (this.earthAge / 11.86).toFixed(2);
        const jupiterAgeString = 'You are ' + jupiterAge + ' Jupiter years old.'
        return jupiterAgeString;
    }

    yearsSince (previousAge) {
        let temp = {
            earthYears: (this.earthAge-previousAge) + ' Earth years have passed.',
            mercuryYears: ((this.earthAge-previousAge) / 0.24).toFixed(2) + ' Mercury years have passed.',
            venusYears: ((this.earthAge-previousAge) / 0.62).toFixed(2) + ' Venus years have passed.',
            marsYears: ((this.earthAge-previousAge) / 1.88).toFixed(2) + ' Mars years have passed.'
        };
        return temp;
    }
}