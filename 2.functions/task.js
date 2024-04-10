function getArrayParams(...arr) {
  if (arr.length === 0) {
      return { min: undefined, max: undefined, avg: undefined };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return { min, max, avg };
}

console.log(getArrayParams(-99, 99, 10)); 
console.log(getArrayParams(1, 2, 3, -100, 10)); 
console.log(getArrayParams(5)); 
console.log(getArrayParams()); 

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  arr.forEach(num => {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  });

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  arr.forEach(num => {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  });

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10)); 

console.log(differenceMaxMinWorker()); 
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 




function makeWork(...functions) {
  return function(...args) {
      const results = functions.map(func => func(...args));
      return {
          sum: results[0],
          diffMaxMin: results[1],
          diffEvenOdd: results[2],
          avgEven: results[3]
      };
  }
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  const sumEven = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  const sumOdd = arr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
  return Math.abs(sumEven - sumOdd);
}

function averageEvenElementsWorker(...arr) {
  const evenNums = arr.filter(num => num % 2 === 0);
  if (evenNums.length === 0) return 0;
  const sum = evenNums.reduce((acc, curr) => acc + curr, 0);
  return sum / evenNums.length;
}

const worker = makeWork(summElementsWorker, differenceMaxMinWorker, differenceEvenOddWorker, averageEvenElementsWorker);

console.log(worker(1, 2, 3, 4, 5)); 
