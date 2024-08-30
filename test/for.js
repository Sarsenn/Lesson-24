'use stritct';

/* for(let i = 0; i < 10; i++) {
	if(i %2 == 1) {
		console.log(i)
		if(i === 7) {
			break;
		}
	}
} */

/* let arr = [];

for (let i = 0; i < 10; i++) {
	if( i === 7) {
		continue;
		console.log('Hello!')
	} else {
		arr.push(i)
	}
}

console.log(arr); */

let arr = [180,156,167,190,179,182,185,191];

let arr2 = [];

for (let i = 0; i < arr.length; i++) {

	if (arr[i] >= 180) {
		arr2.push(arr[i]);
	}
}

console.log(arr2)