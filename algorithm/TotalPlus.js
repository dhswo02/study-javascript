/*
	1 ~ n 까지의 합
*/

function add(num) {
	var idx = 1;
	var result = 0;

	while(idx <= num) {
		result += idx;
		idx += 1;
	}
	return result;
}

function add2(num) {
	return num * (num + 1) / 2;
}

console.log(add(10));
console.log(add2(10));