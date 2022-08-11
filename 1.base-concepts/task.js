"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2)-4*a*c;
  let root1, root2;

    if (d < 0) {
      arr = [];
    }
    else if (d === 0) {
      root1 = -b/(2*a);
      arr = [root1];
    }
    else if (d > 0) {
      root1 = (-b + Math.sqrt(d))/(2*a);
      root2 = (-b - Math.sqrt(d))/(2*a);
      arr = [root1, root2];
    }

    return arr;
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  
  return totalAmount;
}
