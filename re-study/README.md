### 리터럴
코드상에서 데이터를 표현하는 방식을 리터럴이라고 한다.

```aidl
var aa = 2; // 숫자
var bb = '2'    // 문자
var cc = true;  // 불린
var dd = [1, 2, 3, 4]   // 배열
var ee = {p1: 2, p2: '2'}   // 객체
var ff = null   // null
var gg = undefined  // undefined
var hh = function() {alert('zzz');} // 함수
```

### 파싱과 이름
자바스크립트는 먼저 파싱 과정을 거치게 된다.<br/>
따라서 함수의 위치에 관계없이 호출 가능하다.<br/>
또한 함수명과 변수명이 같은 경우 순서에 따라 덮혀 씌워진다.

### 참과 거짓
모든 개체는 true 인 것으로 간주.<br/>
문자열은 비어 있는 경우 false 인 것으로 간주.<br/>
null 및 undefined 인 것으로 간주.<br/>
숫자는 0 인 경우 false.<br/>
NaN 도 false.

### typeof, Infinity, Nan
```aidl
var aa = 10;
typeof aa;  // number 를 반환

var a = 10 * 'f';   // 잘못된 수식의 결과는 NaN 을 반환
NaN == NaN; // 이렇게 물어보면 false가 나온다.
isNaN(10*'f');  // true
isFinity(10);   // 유한값이므로 true
```

### 비교연산자
```aidl
// equal 비교
1=='1'; // true, 자바스크립트는 먼저 타입변환을 한 후에 비교하기 때문에 같다고 반환한다.

// identical 비교
1==='1'; // false
```
=== 를 해야 정상적인 타입변환 없이 비교가 가능하다.

### 디폴트값을 가져오는 꼼수
```aidl
var aa = false || '기본값';    // 앞에가 false면 뒤에 기본값 스트링이 들어간다.
var bb = ture || '애는 무시되는 값'    // 이런 경우에는 항상 true가 들어간다.
var cc = '' || '빈 값을 입력하셨네요ㅠ'   // 이런 식으로 응용도 가능하다.
```

### try/catch/finally
```aidl
try {
    // 무언가 수행
}
catch(error) {
    console.log(error.message);
}
finally {
    // 여기에 finally
}
```
try 이후 catch 혹은 finally 등 중 하나는 반드시 존재해야 한다.

> ※ argument와 parameter의 차이
***argument*** 함수를 호출할 때 인자로 넣어주는 값
***parameter*** 호출받은 함수가 요소로 받는 값

### 함수의 인자는 arguments 라는 객체에서 관리한다.
```aidl
function sumOf(x, y) {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

sumOf(1);   // 1
sumOf(1,2);   // 3
sumOf(1,2,3);   // 6
sumOf(1,2,3,4,5);   // 15
```

자바스크립트의 유연함이 드러난다. 함수에서 선언하지 않은 파라메터까지도 모두 받아서 연산이 가능하다.<br/>
파라메터들은 arguments 라는 객체가 관리하기 때문에 가능한 일이다.<br/>
또한 ***argumenst.callee 는 자기 자신을 참조해서 재귀 호출을 구현할 수 있다.***
```aidl
function factorial(x) {
    if(x <= 1) {
        return 1;
    } else {
        return x * arguments.callee(x-1);
    }    
}
```

함수는 다른 타입의 값처럼 다른 함수를 호출하는 인자 반환값으로 사용될 수 있고 다른 변수에 할당될 수도 있다.
```aidl
var test = { name: 'Joe', speak: function() {return 'Ha Ha Ha';} };

test.name;  // 'Joe'

test.speak; // function() { retrun 'Ha Ha Ha'; }

test.speak(); // 'Ha Ha Ha'
```

### 익명함수
```aidl
var v = function(x, y) { retrun x + y; };
// 함수를 정의하고 변수에 저장

o.func(function(x, y) {return x + y; });
// 함수를 정의하고 다른 함수에 인자로 전달

var added = (function(x, y) { return x + y; }) (1, 2);
// 함수를 정의하고 바로 호출한다.
```

첫 번째 경우는 가장 일반적인 경우이다.

두 번째 경우는 함수를 정의하면서 그 함수의 주소값을 바로 인자로 전달하는 형태이다.

세 번째 경우는 함수를 정의하면서 바로 실행까지 하는 형태이다.

### Callback 함수
```aidl
// 메인 프로그램
function MainProgram {
    var arg;
    LibFunc(arg, CallbackFunc);
}

// 콜백함수
function CallbackFunc(result) {
    // result 이용
}

// 라이브러리 함수
function LibFunc(arg, callback) {
    var data;   // 작업수행
    callback(data);
}
```
메인 프로그램에서는 어떤 작업을 수행한 뒤에 생성된 데이터를 callback 함수에서 결과 처리를 하기를 원할 때 위와 같은 구조로 처리한다.<br/>
callback 함수 객체를 인자로 보내면 라이브러리 함수에서 callback 함수 객체를 받아서 작업 처리한 결과를 callback 함수를 호출해 인자로 보내게 된다. callback 함수는 인자로 받은 결과를 최종적으로 이용해 작업한다.

### 변수 Scope
자바스크립트는 함수 단위로 변수를 관리한다.

```aidl
var a = 1;
function f() {
    if(true) {
        var c = 2;  // if블럭 안에서 c를 선언한다.
    }
    return c;   // if블럭 밖에서 c값을 참조해 리턴한다.
}

f(); // 2
```

매우 특이하지만, if블럭 안에서 정의된 변수도 함수 내에서는 얼마든지 참조가능하다.

```aidl
function f() {
    g = 'global';   // var 업이 변수명에 값을 넣으면 전역변수로 자동선언된다.
}

f();
alert(g); // global
```

var 를 제외하고 변수를 사용하면 런타임에 전역변수에 값이 할당되어 어디서든 참조가 가능하게 된다.<br/>
자바스크립트만의 특징이자 유연함이 보인다. 그러나 되도록 var 로 선언해주어 scope 를 명확하게 해주는 습관이 잡재적 오류 발생 원인을 줄여줄 것이다.

즉, 사용할 변수를 되도록 함수 앞부분에 선언해두는 습관이 필요하다.

### 렉시컬(lexical) 특성
자바스크립트는 컴퓨터의 실행을 고려하는 것이 아니라 '코드 그대로의 환경'을 기준으로 정의한 변수 스코프에서 검색한다.
```aidl
var x = 'global';

function f() {
    alert(x);   // undefined
    var x = 'local';
    alert(x);   // local
}

f();
```
함수 중간에 var x 가 존재하므로 전역 레벨을 파싱하고 그 후에 함수 레벨에서 파싱했을 때 함수레벨 상에 x 가 undefined 로 생성된다.<br/>
이름이 동일하므로 전역 레벨보다 함수레벨의 x 가 먼저 참조되므로 첫 alert에서 global이 아니라 undefined가 출력된다.<br/>
만약 함수부에 var x 가 없다면 함수 레벨에서 참조할만한 x 값이 없으므로 정상적으로 global이 출력된다.

### 루트객체
모든 객체는 전역 객체라고도 하며 전역 변수 스코프라고도 한다. 웹 페이지 실행환경에서는 Window가 루트 객체이다.<br/>
(this === window // true);<br/>
wondiw.String 등 객체들은 루트 객체에 속해있다.

### 클로저

매우 중요한 클로저는 어떤 눈에 보이는게 아니라 '구조' 혹은 '패턴' 이다.

```aidl
function outer() {
    var x = 0;
    return function() { return ++x; }
}

var x = -1;
var f = outer();

console.log(x);
console.log(f());
console.log(f());
console.log(f());
```
함수 내의 x 변수에 접근하기 위해 return function() {retrun ++x;}를 사용

```aidl
function outer() {
    var x = 0;
    retrun function() {return ++x;}
}
var x = -1;
outer(); // function() {retrun ++x;}
console.log(x); // -1
console.log(outer()()); // 1
console.log(outer()()); // 1
console.log(outer()()); // 1
```
이렇게 하면 항상 초기화 된다.

```aidl
function outer() {
    var x = 0;
    return function() {return ++x;}
}
var x = -1;
var f = outer();    // 인스턴스 생성
var g = outer();    // 별도의 인스턴스 생성

console.log(x); // -1
console.log(f());   // 1
console.log(f());   // 2
console.log(f());   // 3

console.log(g());   // 1    새롭게 1부터 시작하는 것을 볼 수 있다.
console.log(g());   // 2
console.log(g());   // 3
```

***클로저는 비공개 내부 변수를 갖는 함수 인스턴스 생성자***이다.<br/>
***클로저로 생성한 독립된 변수 공간을 가진 인스턴스***를 ==클로저 인슨터스==라고 한다.

### 객체를 생성하는 함수(생성자 함수)
선언한 함수 내의 this는 새로 생성된 객체를 가리킨다.

```aidl
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.increaseAge = function(i) {this.age = this.age + i;}
}

var newObject = new Person('홍길동', 30);

// age: 30
// increaseAge: function(i) {this.age = this.age + i;}
// name: 홀길동
```

### 멤버 관리 구조와 prototype
```aidl
function Person(name) {
    var firstName = '홍';
    this.name = name;
    this.speak = function() {alert(firstName + this.name);}
}

Person.firstName;   // undefined, 접근할 수 없다.
var p = new Person('길동');   // 생성자 함수를 통해 객체 생성
p.firstName;    // undefined, 역시 접근할 수 없다.
p.name; // '길동', 접근 가능

Person.prototype.tellme = function() {alert('zz');} // 메서드 추가
p.tellme();    // zz 팝업, 즉 객체 프로토타입 변경 가능
```

### 객체 맴버의 추가/제거
```aidl
var obj = {propertyB: 'b', propertyC: 'c'};
obj.propertyA = new Date(); // 멤버 추가
delete obj.prepertyB;   // 멤버 삭제
obj.propertyC = 'cc';   // 멤버 대체
```

### 비공개 멤버 구현
```aidl
function A() {
    // 내부 지역 변수
    var _localX = 7;
    
    // 공개 접근 메서드
    this.getX = function() {return _localX;}
    
    // 10보다 작은 수만 속성값으로 입력받는다.
    this.setX = function(x) {
        if(x < 10) {
            _localX = x;
            retrun _localX;
        }
    }
}

var aaa = new A();  // 객체 생성
aaa.getX(); // 7
aaa.setX(0);    // 0 할당
aaa.getX(); // 0
```