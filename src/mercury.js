export default function Mercury (earthAge, previousAge, comingAge){
  this.mercYears = (earthAge / 0.24).toFixed(2);
  console.log("this happened");
  this.mercYearsString = earthAge + ' Earth years is equal to ' + this.mercYears + ' Mercury years.'
  this.mercAge = 'You are ' + this.mercYears + ' Mercury years old.';
  this.mercYearsSince = ((earthAge - previousAge) / 0.24).toFixed(2);
  this.mercYearsSinceString = 'It has been ' + ((earthAge - previousAge) / 0.24).toFixed(2) + ' Mercury years since you were that old.'
  this.mercYearsUntil = ((comingAge - earthAge) / 0.24).toFixed(2);
}