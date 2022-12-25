export default function Mercury (earthAge, previousAge){
  this.mercYears = (earthAge * 0.24);
  console.log("this happened");
  this.mercYearsString = earthAge + ' Earth years is equal to ' + this.mercYears + ' Mercury years.'
  this.mercAge = 'You are ' + this.mercYears.toFixed(1) + ' Mercury years old.';
  this.mercYearsSince = ((earthAge - previousAge) * 0.24).toFixed(1)
}