/*
	리스트에서 최대값 찾기
*/

var arr = [1, 2, 3, 4, 5],
		max;
function max(arr) {
	max = arr[0];
	for(var i = 1, len = arr.length; i < len; i += 1) {
		if(max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

console.log(max(arr));