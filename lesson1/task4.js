var percent = 2;
var credit = 1000;
var years = 10;

var percentPerYear = credit * percent / 100;
var percentPerAllYears = percentPerYear * years;
var totalMoney = percentPerAllYears + credit;

console.log('Percent per year: ' + percentPerYear);
console.log('Percent per all years: ' + percentPerAllYears);
console.log('Total: ' + totalMoney);
