/*
    알고 넘어 가야할 것
    1. Math.random()
      아무런 인자 없이 Math.random(); 하면 0 <= x < 1 의 x값이 나온다.
      그 값에다 10을 곱하면, 0 <= x < 10 의 값이 나온다.

    2. Math.floor(숫자)
      숫자 내림하는 함수, 내림 값을 통해서 0 ~ 9 사이의 정수가 나온다.

    3. 배열.splice(시작위치, 길이)
      배열의 시작위치(0부터 시작)부터 주어진 길이만큼 잘라서 원래 배열에서 빼낸다. 그리고 빼낸 배열을 반환한다.

    4. 문자열.split(구분자)
      문자열을 쪼개서 배열로 만드는 역할을 한다.

      '1234'.split('') == ['1', '2', '3', '4']
  */

var list = [0,1,2,3,4,5,6,7,8,9];
var number = [];
for (var i = 0; i < 4; i++) {
	var select = Math.floor(Math.random() * list.length);
	number[i] = list.splice(select, 1)[0];
}
var count = 1;
var strike = 0;
var ball = 0;
while (count <= 10) {
	var input = prompt('숫자를 입력하세요');
	var inputArray = input.split('');
	strike = 0;
	ball = 0;
	count++;
	for (var j = 0; j < 4; j++) {
		for (var k = 0; k < 4; k++) {
			if (number[j] == inputArray[k]) {
				if (j === k) {
					strike++;
				} else {
					ball++;
				}
				break;
			}
		}
	}
	if (strike === 4) {
		console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
		break;
	} else if (count > 10) {
		console.error('시도 횟수를 초과하셨습니다.');
	} else {
		console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
	}
	console.info(count-1 + '번째 시도중입니다.')
}