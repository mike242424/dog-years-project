// My age
const myAge = 34;

// The first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// already accounted for the first two years
let laterYears = myAge - 2;

// Number of dog years accounted for by your later years
laterYears *= 4;

// Checking code
console.log(earlyYears);
console.log(laterYears);

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// Lowercase string method
const myName = "Michael".toLowerCase();

// String interpolation using myName, myAge, and myAgeInDogYears
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
