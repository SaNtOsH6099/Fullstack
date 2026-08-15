let amount = 0;
let principal = 1000;
let rateInterest = 10;
let n = 2;
let timeYears = 2;
rateInterest = rateInterest / 100;

amount = principal * (1 + (rateInterest / n)) ** (n * timeYears)
console.log(amount);
