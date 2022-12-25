import '../css/styles.css';
import planetYears from './planetYears';
export default function spaceCalc(earthAge, previousAge, futureAge) {
    const spaceYears = new planetYears (earthAge, previousAge, futureAge);
    let ageArray = [];
    let timeSinceArray = [];
    let timeTillArray = [];
    ageArray.push(spaceYears.mercYearsOld(earthAge),spaceYears.venusYearsOld(earthAge),spaceYears.marsYearsOld(earthAge),spaceYears.jupiterYearsOld(earthAge));
    console.log(ageArray);
    let pastResult = spaceYears.yearsSince(previousAge);
    timeSinceArray.push(pastResult.earthYears, pastResult.mercuryYears, pastResult.venusYears, pastResult.marsYears, pastResult.jupiterYears);
    console.log(timeSinceArray);
    let futureResult = spaceYears.yearsTill(futureAge);
    timeTillArray.push(futureResult.earthYears, futureResult.mercuryYears, futureResult.venusYears, futureResult.marsYears, futureResult.jupiterYears);
    console.log(timeTillArray)
    return timeTillArray;
}