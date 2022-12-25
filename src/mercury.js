export default function Mercury (earthYears){
  this.mercYears = (earthYears * 0.24);
  console.log("this happened");
  this.mercYearsString = earthYears + ' Earth years is equal to ' + this.mercYears + ' Mercury years.'
}