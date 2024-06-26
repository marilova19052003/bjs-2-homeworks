function getArrayParams(...numbers) {
	if (numbers.length === 0) {
		return {
			min: undefined,
			max: undefined,
			avg: undefined
		};
	}

	const min = Math.min(...numbers);
	const max = Math.max(...numbers);
	const sum = numbers.reduce((acc, num) => acc + num, 0);
	const avg = Math.round((sum / numbers.length) * 100) / 100;
	const avgRounded = Math.round(avg * 100) / 100;

	return {
		min,
		max,
		avg: avgRounded
	};
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

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let data of arrOfArr) {
		const result = func(...data);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));