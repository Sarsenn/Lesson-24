'use strict';

// 1 задача

for (let i = 0; i <= 20; i++) {
	if( i % 2 == 0) {
		console.log(i)
	}
}

//2 задача 

let count = 0;

for (let i = 0; i <= 10; i++) {
	count += i;
}
console.log(count)

//3 задача 

let factorial = 1;

for (let i = 1; i <= 5; i++) {
	factorial *= i;
}

console.log(factorial)

//4 задача 

let word = 'Hello,world!'
let arr = word.split('')

for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i])
}

// 5 задача 

let arr2 = [1, 2, 3, 4, 5]

for (let i = 0; i <= arr2.length; i++) {
	console.log(i);
} 

// 6 задача 
let arrSum = [1, 2, 3, 4, 5]
let sum = 0;

for (let i = 0; i <= arrSum.length - 1; i++) {
		sum += arrSum[i];
} 

console.log(sum)

// 7 задача 

let bigEl = [1, 2, 3, 4, 5];
let result = 0;

for (let i = 0; i <= bigEl.length - 1; i++) {
	
	if (result <= bigEl[i]) {
		result = bigEl[i]
	}
} 
console.log(result)


// 8 задача 

let same = [1, 2, 3, 1, 2, 1];
let resultSame = 0;

for (let i = 0; i <= same.length - 1; i++) {
	if( same[i] == 1) {
		resultSame++;
	}
} 
console.log(resultSame)


// 9 задача 

let someNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = []

for (let i = someNumber.length - 1; i >= 0; i--) {
	square.push(someNumber[i] * someNumber[i])
} 
console.log(square)

// 10 задача 

for (let i = someNumber.length - 1; i >= 0; i--) {
	console.log(someNumber[i])
} 

//11 задача 

let powersOfTwo = []
let currentNumber = 1;

for (let i = 0; i <= 10; i++) {
	powersOfTwo[i] = currentNumber;
	currentNumber *= 2;
}
console.log(powersOfTwo)

//12 задача 
let smallNumber = [5, 9, 3, 7, 2, 8, 1, 6, 4]
let resultSmall = smallNumber[0];

for (let i = 0; i <= smallNumber.length; i++) {
	if ( resultSmall > smallNumber[i]) {
		resultSmall = smallNumber[i]
	}
}

console.log(resultSmall)

//13 задача 

let str = 'Hellow, World!';
let arrStr = str.split('').reverse().join("");

console.log(arrStr)

//14 задача 

let index = [10, 12, 31, 40, 15];
let el = 31;

for ( let i = 0; i < index.length; i++) {
	if( el == index[i]) {
		console.log(i)
	}
}

//15 задача 

let arr15 = [1, 1, 1, 1, 1];
let p = true;

for ( let i = 0; i < arr15.length; i++) {
	if(arr15[i] !== arr15[0]) {
		p = false
		break;
	}
}
console.log(p)