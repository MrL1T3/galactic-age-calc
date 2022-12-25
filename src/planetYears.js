export default class planetYears{
    constructor(earthAge){
        this.earthAge = earthAge;
    }
    mercYearsOld() {
        const mercAge = (this.earthAge / 0.24).toFixed(2);
        const mercAgeString = 'You are '+mercAge+' Mercury years old.'
        return mercAgeString;
    }
    venusYearsOld() {
        const venusAge = (this.earthAge / 0.62).toFixed(2);
        const venusAgeString = 'You are '+venusAge+' Venus years old.';
        return venusAgeString;
    }
    marsYearsOld() {
        const marsAge = (this.earthAge / 1.88).toFixed(2);
        const marsAgeString = 'You are '+marsAge+' Mars years old.';
        return marsAgeString;
    }
    jupiterYearsOld() {
        const jupiterAge = (this.earthAge / 11.86).toFixed(2);
        const jupiterAgeString = 'You are ' + jupiterAge + ' Jupiter years old.';
        return jupiterAgeString;
    }
    yearsSince (previousAge) {
        let passedTime = {
            earthYears: (this.earthAge-previousAge)+' Earth years have passed.',
            mercuryYears: ((this.earthAge-previousAge)/0.24).toFixed(2)+' Mercury years have passed.',
            venusYears: ((this.earthAge-previousAge)/0.62).toFixed(2)+' Venus years have passed.',
            marsYears: ((this.earthAge-previousAge)/1.88).toFixed(2)+' Mars years have passed.',
            jupiterYears: ((this.earthAge-previousAge)/11.86).toFixed(2)+' Jupiter years have passed.'
        };
        return passedTime;
    }
    yearsTill (futureAge) {
        let comingTime = {
            earthYears: 'It will be '+(futureAge-this.earthAge)+' Earth years until you are that old.',
            mercuryYears: 'It will be '+((futureAge-this.earthAge)/0.24).toFixed(2)+' Mercury years until you are that old.',
            venusYears: 'It will be '+((futureAge-this.earthAge)/0.62).toFixed(2)+' Venus years until you are that old.',
            marsYears: 'It will be '+((futureAge-this.earthAge)/1.88).toFixed(2)+' Mars years until you are that old.',
            jupiterYears: 'It will be '+((futureAge-this.earthAge)/11.86).toFixed(2)+' Jupiter years until you are that old.'
        }
        return comingTime;
    }
}