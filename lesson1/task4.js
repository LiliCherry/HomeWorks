function calculateInterestRate(percent, credit, years) {
    var percentPerYear = credit * percent / 100;
    var percentPerAllYears = percentPerYear * years;
    var totalMoney = percentPerAllYears + credit;

    console.log('Percent per year: ' + percentPerYear);
    console.log('Percent per all years: ' + percentPerAllYears);
    console.log('Total: ' + totalMoney);
}

calculateInterestRate(2, 1000, 10);
