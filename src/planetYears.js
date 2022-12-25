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
}