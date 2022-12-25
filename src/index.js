import '../css/styles.css';
import planetYears from './planetYears';

export default function spaceCalc(earthAge, previousAge, futureAge) {
    const spaceYears = new planetYears (earthAge, previousAge, futureAge);
    let ageArray = [];
    let timeSinceArray =[];
    ageArray.push(spaceYears.mercYearsOld(earthAge));
    ageArray.push(spaceYears.venusYearsOld(earthAge));
    ageArray.push(spaceYears.marsYearsOld(earthAge));
    ageArray.push(spaceYears.jupiterYearsOld(earthAge));
    console.log(ageArray);
    let result = spaceYears.yearsSince(10);
    timeSinceArray.push(result.earthYears, result.mercuryYears);
    console.log(timeSinceArray);
    return timeSinceArray;
}