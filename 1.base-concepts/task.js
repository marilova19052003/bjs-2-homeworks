"use strict"
function solveEquation(a, b, c) {
  let discriminant = b**2 - 4 * a * c;
  let arr = [];
 
  if(discriminant < 0) {
    return arr;
  } else if ( discriminant === 0 ){
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    arr.push(root1,root2);
  }
  return arr;
}

console.log(solveEquation(1, -3, 2)); 
console.log(solveEquation(1, -2, 1)); 
console.log(solveEquation(1, 2, 3)); 


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return "Параметры содержат неправильное значение. Пожалуйста, введите числовые значения.";
  }

  if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
    return "Параметры не могут быть отрицательными. Пожалуйста, введите положительные значения.";
  }

  let monthlyInterestRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}


console.log(calculateTotalMortgage(10, 1000, 20000, 24)); 