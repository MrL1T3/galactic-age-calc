import '../css/styles.css';
import planetYears from './planetYears';
export function spaceCalc(earthAge, previousAge, futureAge) {
    const spaceYears = new planetYears (earthAge, previousAge, futureAge);
    let ageArray = [];
    let timeSinceArray = [];
    let timeTillArray = [];
    ageArray.push(spaceYears.mercYearsOld(earthAge),spaceYears.venusYearsOld(earthAge),spaceYears.marsYearsOld(earthAge),spaceYears.jupiterYearsOld(earthAge));
    const elementAge = document.createElement('div');
    let resultAge = `Results are ${JSON.stringify(timeTillArray)}`;
    let textAge = document.createTextNode(resultAge);
    elementAge.appendChild(textAge);
    let pastResult = spaceYears.yearsSince(previousAge);
    timeSinceArray.push(pastResult.earthYears, pastResult.mercuryYears, pastResult.venusYears, pastResult.marsYears, pastResult.jupiterYears);
    console.log(timeSinceArray);
    const elementPast = document.createElement('div-age');
    let resultPast = `Results are ${JSON.stringify(timeSinceArray)}`;
    let textPast = document.createTextNode(resultPast);
    elementPast.appendChild(textPast);
    let futureResult = spaceYears.yearsTill(futureAge);
    timeTillArray.push(futureResult.earthYears, futureResult.mercuryYears, futureResult.venusYears, futureResult.marsYears, futureResult.jupiterYears);
    console.log(timeTillArray)
    const elementFuture = document.createElement('div-past');
    let resultFuture = `Results are ${JSON.stringify(timeTillArray)}`;
    let textFuture = document.createTextNode(resultFuture);
    elementFuture.appendChild(textFuture);
    return ageArray;
}
function getResult() {
    let results = spaceCalc(45, 39, 52);
    const element = document.createElement('div-future');
    let resultStr = `Results are ${JSON.stringify(results)}`;
    let textElem = document.createTextNode(resultStr);
    element.appendChild(textElem);
    return element;
}
function main() {
    document.body.appendChild(getResult());
}
main();