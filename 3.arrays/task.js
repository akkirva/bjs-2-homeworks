function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(n => n > 0).filter(n => n % 3 === 0).map(n => n * 10);

  // Ваш код

  return resultArr; // array
}
