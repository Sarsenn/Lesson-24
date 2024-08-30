// 1 задача

let word = 'radar';
let arrWord = word.split('').reverse().join('');
console.log(arrWord == word)

//2 задача 

let arr2 = [1, 2, 3, 4, 3, 2, 1];

let choseEl = 2;

 let filterArr2 = arr2.filter((el) => el !== choseEl)

console.log(filterArr2);

//3 задача 
let sum = 0;

for ( let i = 0; i <= 100; i++) {
	if( i%3 == 0 || i%5 == 0) {
		sum += i;
	}
}

console.log(sum)


//4 задача 

let arithmetic = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let arithmeticSum = 0;

for ( let i = 0; i < arithmetic.length; i++) {
	arithmeticSum += arithmetic[i]
}

console.log(arithmeticSum/arithmetic.length)

//5 задача 
let number = 1234
let numeral = 0;

for ( let i = 0; i <= (number + '').length; i++) {
	numeral = i;
}
console.log(numeral)