/*
 10 미만의 자연수에서 3과 5의 배수를 구하면 3, 5, 6, 9 이다. 이들의 총합은 23이다.
 1000 미만의 자연수에서 3의 배수와 5의 배수의 총합을 구하라.
*/

function add(num) {
	var result = 0; // 결과 값이 number type 이란 것을 명시해준다.
	var idx = 0;
	while(idx < num) {
		if(idx % 3 === 0 || idx % 5 === 0) {
			result += idx;
		}
		idx += 1;
	}
	return result;
}

console.log(add(10)); // 23
console.log(add(20)); // 78