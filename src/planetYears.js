export default class planetYears{
    constructor(earthAge){
        this.earthAge =earthAge
    }
    mercYearsOld() {
        const mercAge = (this.earthAge / 0.24).toFixed(2);
        const mercAgeString = 'You are ' + mercAge + ' Mercury years old.'
        return mercAgeString;
    }
    venusYearsold() {
        const venusAge = (this.earthAge / 0.62).toFixed(2);
        const venusAgeString = 'You are ' + venusAge + ' Venus years old.'
        return venusAgeString;
    }
    marsYearsold() {
        const marsAge = (this.earthAge / 1.88).toFixed(2);
        const marsAgeString = 'You are ' + marsAge + ' Mars years old.'
        return marsAgeString;
    }
}