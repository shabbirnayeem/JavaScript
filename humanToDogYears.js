// My Age var
const myAge = 30;
// first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;
//subtract 2 from myAge
let laterYears = myAge - 2;
//calculate the number of dog years accounted for by your later years
laterYears *= 4;
//calculateing my age in Dog Years
const myAgeinDogYears = earlyYears+laterYears
//Name
let myName = 'Adams'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`)
