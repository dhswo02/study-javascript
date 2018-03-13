/*
	팩토리얼을 구현하세요.
*/

var result = 0,
		end_num = 1;
function factorial(num) {
	if(num === end_num) return end_num;
	else return result = num * factorial(num - 1);
}

console.log(factorial(4));  //  1*2*3*4 = 24;
console.log(factorial(5));  //  1*2*3*4*5 = 120;
console.log(factorial(6));  //  1*2*3*4*5*6 = 720;
