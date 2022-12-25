export default class planetYears{
    constructor(mercYearConvert, venusYearConvert, marsYearConvert, jupiterYearconvert){
        this.mercYearConvert = mercYearConvert;
        this.venusYearConvert = venusYearConvert;
        this.marsYearConvert = marsYearConvert;
        this.jupiterYearconvert = jupiterYearconvert;
    }
    mercYearsOld(earthAge) {
        const mercAge = (earthAge / this.mercYearConvert).toFixed(2);
        const mercAgeString = 'You are ' + mercAge + ' Mercury years old.'
        return mercAgeString;
    }
    venusYearsold(earthAge) {
        const venusAge = (earthAge / this.venusYearConvert).toFixed(2);
        const venusAgeString = 'You are ' + venusAge + ' Venus years old.'
        return venusAgeString;
    }
}