//This variable is constant
const kelvin = 293;
// Convert Kelvin to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Math.floor() will round down fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Converting celsius to Newton
let Newton = celsius * (33/100);
// Rounding down
Newton = Math.floor(celsius);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${Newton} degrees Newton.`);
