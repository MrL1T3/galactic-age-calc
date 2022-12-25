import '../css/styles.css';
import planetYears from './planetYears';

export default function spaceCalc(earthAge, previousAge, futureAge) {
    const spaceYears = new planetYears (earthAge, previousAge, futureAge);
    let ageArray = [];
    let timeSinceArray =[];
    ageArray.push(spaceYears.mercYearsOld(earthAge),spaceYears.venusYearsOld(earthAge),spaceYears.marsYearsOld(earthAge),spaceYears.jupiterYearsOld(earthAge));
    console.log(ageArray);
    let result = spaceYears.yearsSince(10);
    timeSinceArray.push(result.earthYears, result.mercuryYears, result.venusYears, result.marsYears, result.jupiterYears);
    console.log(timeSinceArray);
    return timeSinceArray;
}