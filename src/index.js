import '../css/styles.css';
import planetYears from './planetYears';

export default function spaceCalc(earthAge, previousAge, futureAge) {
    const spaceYears = new planetYears (earthAge, previousAge, futureAge);
    return spaceYears.mercYearsOld();
}