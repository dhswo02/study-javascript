# 1. 자바스크립트란?
> 자바스크립트란 무엇인가?
- 자바스크립트는 웹 페이지와 사옿작용 하도록 만들어진 스크립트 언어
- 브라우저 객체 모델(BOM)을 통해 브라우저와 상호작용하는 메서드와 인터페이스를 제공
- 자바스크립트는 스크립트 언어이며, 웹에서 사용하는 인터프리터 언어
- 컴파일이 필요 없으며, HTML 웹 페이지를 통해 스크립트를 삽입하면 웹 브라우저를 통해서 동작
- 자바스크립트는 클라이언트 측 스크립트 언어, 이는 자바스크립트가 웹 서버가 아닌 클라이언트 컴퓨터에 설치된 브라우저에서 실행된다는 의미

> 자바스크립트 특징

자바스크립트는 HTML 문서와 함께 처리되므로, 일반 프로그래밍 언어보다는 기능이 제한적

- 자바스크립트는 객체 기반의 언어, 하지만 상속과 클래스라는 개념이 없다.
- 자바스크립트는 인터프리터 언어로서 클라이언트의 웹 브라우저에 의해 해석되고 실행된다. 브라우저마다 약간의 차이가 존재
- 자바스크립트는 HTML 문서 내에 기술되고 HTML 문서와 함께 수행된다.
- 자바스크립트는 HTML 에 연산, 제어 등 프로그래밍적인 요소를 추가하고, 클라이언트의 자원을 활용할 수 있게 한다. 

> 자바스크립트로 구현되는 기능

자바스크립트로 구현할 수 있는 기능은 웹 페이지를 돋보이게 하는 동적 효과와 HTML 로는 처리할 수 없는 프로그래밍적인 기능
    
   1. 동적인 효과
   2. 기능적인 면: 입력 데이터 확인, cookie 처리, 브라우저 정보에 따른 처리, 새로운 window 열기 등
   
> 자바스크립트의 구성 요소

   1. 객체

    객체는 속성과 메소드를 가진다. 자바스크립트의 객체에는 세 가지 종류가 있다. 사용자가 정희하여 사용할 수 있는 사용자 정의 객체, 기본적으로 제공되는 내장 객체, 브라우저 지원을 이용하는 브라우저 객체, 이 중 내장 객체와 브라우저 객체를 많이 이용하게 된다.
   2. 문법
   
    자바스크립트의 문법에는 자료형, 변수, 제어문, 함수 등이 있다.
   3. 이벤트와 이벤트 핸들러
    
    웹 브라우저상에서 일어날 수 있는 동작에 대하여 자바스크립트를 수행할 수 있고, 이벤트 핸들러를 통해 지정하게 된다.
    이벤트 핸들러와 함께 자바스크립트를 사용하면 상호작용이 있는 동적인 웹 페이지를 만들 수 있다.
    
# 2. 기초 문법 간단 정리

- 기본 문법
   1. 자바스크립트에서 값을 만들어내는 간단한 코드를 '표현식' 이라고 부른다.
   2. 하나 이상의 표현식이 모여 '문자'이 된다.
   3. 이러한 문장이 모여서 '프로그램' 을 이룬다.
   4. 자바스크립트가 처음 만들어질 때 정해진 특별한 의미가 있는 단어를 '키워드' 라고 한다.
   5. 식별자는 자바스크립트에서 이름을 붙일 때 사용하는 단어, 예를 들어 변수명과 함수명이 있다.
   6. 식별자를 정하는 몇 가지 규칙 
      - 키워드를 사용하면 안된다.
      - 숫자로 시작하면 안된다.
      - 특수 문자는 _과 $만 허용한다.
      - 공백 문자를 포함할 수 없다.
   7. 주석은 프로그램을 진행하는 데 전혀 영향을 주지 않고 프로그램 코드를 설명하는 데 사용한다.
   
- 데이터 타입
   1. 자바스크립트에서 기본 타입은 숫자, 문자열, 불린값, null, undefined 가 있다.
   2. 위 타입들은 그 자체가 하나의 값을 나타낸다.
   3. 자바스크립트는 느슨한 타입 체크 언어이다. C, Java 계열 언어처럼 변수 선언시 데이터 타입을 지정하지 않아도 된다.
   4. 변수를 선언 할 땐, 타입을 미리 정하지 않고 var 키워드를 사용한다.
   5. 이렇게 선언된 변수는 어떠한 타입의 데이터라도 저장하는 것이 가능하다.
   6. 자바스크립트는 변수에 어떤 형태의 데이터를 저장하느냐에 따라 해당 변수의 타입이 결정된다.
   7. 선언되지 않거나 값이 할당되지 않은 변수를 나타내는 자료형을 undefined 자료형이라 하고 자료형인 동시에 값이 될 수 있다.
   8. null 타입 변수의 경우는 개발자가 명시적으로 값이 비어있음을 나타내는데 사용한다.
   9. 불린값에서 false 로 표현되는 값들은 0 , NaN , '' , null , undefined 가 있다.
   
- 연산자 
   1. \+ 연산자는 더하기 연산과 문자열을 연결하는 연산을 수행
   2. typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴한다. 자료형 검사를 할 때 쓰인다.
   3. 주의할 점은 null 과 배열이 Object 타입이며, 함수는 Function 타입이다.
   4. ==(동등) 연산자와 ===(일치) 연산자의 차이,
      - == 연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교한다.
      - === 연산자는 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 비교한다.
   5. 대부분의 자바스크립트 코딩 가이드에는 === 연산자를 사용하도록 권고하고 있다.
   6. !! 연산자는 피연산자를 불린값으로 변환할 때 쓰인다.
   
# 3. 배열
배열은 여러 개의 변수 또는 자료형들을 한꺼번에 다룰 수 있는 자료형이다.

자바스크립트의 배열은 굳이 크기를 지정하지 않아도 된다.
어떤 위치에 어느 타입의 데이터를 저장하더라도 에러가 발생하지 않는다.

배열 안에 입력된 값을 요소(element)라고 부른다.
배열의 요소 각각을 사용하려면 index 를 통해 접근해야 한다.
index 는 0번 부터 시작한다.

배열은 length 속성을 가지고 있으며 현재 배열에 요소가 몇 개 있는지 확인 할 수 있다.

배열의 선언은 리터럴 방법과 Array 객체를 이용하는 방법 2가지가 있다.
배열은 length 속성을 이용해 길이를 구하고 for 문을 통해 순회하며 요소에 접근하고 요소에는 인덱스 번호를 통해 접근한다.

    var array = [1, 2, 3, 4, 5];
    // var array = new Array(1, 2, 3, 4, 5);
    for (var i = 0; i < array.legnth; i++) {
        console.log(array[i]);  // 배열의 요소들이 출격
    }
    
Array 객체로 선언시 주의할 점은 수자를 1개만 삽입하면 배열의 크기로 인신되어 버린다.

    var array = new Array(3);
    console.log(array.legnth);  // 3
    
Array 객체를 통해 배열을 선언하는 것 보다 리터럴 방법을 더욱 권장하고 있다.

자바스크립트 배열은 굳이 크기를 지정하지 않아도 되며, 어떤 위치에 어느 타입의 데이터를 저장하더라도 에러가 발생하지 않는다.
자바스크립트 배열은 값을 순차적으로 넣을 필요 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.

    // 빈 배열 선언
    var arr = [];
    console.log(arr[0]);    // undefined
    // 배열 요소 동적 생성
    arr[0] = 100;
    arr[2] = true;
    arr[5] = 'hi javascript';
    
    console.log(arr);   // [100, undefined, undefined, true, undefined, undefined, 'hi javascript'] 가 출력
    console.log(arr.length) // 6
    
값이 없는 인덱스는 undefined 로 표현

자바스크립트는 배열의 크기를 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.
length 값은 배열의 마지막 인덱스에서 1을 더한 값

    var arr = [];
    console.log(arr.length);    // 0
    
    arr[0] = 0;
    arr[1] = 2;
    arr[2] = 3;
    arr[50] = 10;
    
    console.log(arr.length);    // 5
    
실제 메모리는 length 크기처럼 할당되지는 않는다.
직접 length 속성에 값을 부여해서 크기를 할당할 수도 있다.
    
    var arr = [1, 2, 3];
    console.log(arr.length);    // 3
    arr.length = 5;
    console.log(arr.length);    // 5
    
배열은 많은 메서드들을 지원하고 있다.
배열의 메서드들은 length 속성을 기반으로 동작하게 된다.
배열의 length 속성은 배열이 가진 메서드들의 동작에 많은 영향을 미치므로 사용에 주의를 기울여야 한다.

# 4. 배열(Array() 객체)의 속성과 메서드
> Array() 객체의 속성

- prototype (ex. Array.prototype)    

객체를 하나 생성해서 객체를 통해서 변수의 데이터와 각 메소드간 기능을 공유하고 재정의 하는 기능 제공
    
> Array() 객체 인스턴스 속성

- constructor

어떤 생성자 객체를 통해 생겨난 인스턴스인지를 알려주는 매우 유용한 속성
  
- length

배열의 길이에 대한 정보
  
> Array() 객체 인스턴스 메서드
     
- pop()

배열에서 마지막 원소를 제거한 후에 이를 리턴한다.<br/>
원본 데이터의 값이 변경된다.
  
   
    var jobs = ['programmer', 'designer', 'planner'];
    var job = jobs.pop();
    
    console.log(job);   // string, 'planner'
    console.log(jobs); 
    // array, ['programmer', 'designer']. 원본 jobs의 값이 변경 되었다.
    
- push()

배열에 값을 추가한다. 추가된 배열은 마지막 원소가 된다.<br/>
인자로 배열에 추가될 데이터를 넘긴다.<br/>
원본 데이터의 값이 변경된다.
  
  
    var jobs = ['programmer', 'designer', 'planner'];
    var job = jobs.push('sajang');
    
    console.log(job);   // number, 4
    console.log(jobs);
    // array, ['programmer', 'designer', 'planner', sajang'], 원본 jobs의 값이 변경 되었다.
    
- reverse()

원소들의 순서를 뒤집는다.
  
    
    var jobs = ['programmer', 'designer', 'planner'];
    jobs.reverse(); // array, ['planner', 'designer', 'programmer']
    
- shift()

배열에서 처음 원소를 제거한 후에 이를 리턴한다.<br/>
원본 데이터의 값이 변경된다.
  
  
    var jobs = ['programmer', 'designer', 'planner'];
    var jos = jobs.shift();
    
    console.log(job);
    // string, 'programmer'
    console.log(jobs)
    
- sort()

배열을 정렬한다.<br/>
알파벳 순서로 정렬한다.<br/>
숫자의 경우 암시적으로 문자열로 형변환 하기 때문에 숫자 1이 숫자 10보다 먼저 나온다.<br/>
sortfunc 로 비교 대상인 두개의 인자를 전달하는데, 리턴 값에 따라서 선후를 판단한다.
  
  
    var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    console.log(numbers.sort()); // array, [1,2,3,4,5,6,7,8,9]
    console.log(numbers);   // array, [1,2,3,4,5,6,7,8,9] 원본이 변경된다.
    console.log(numbers.sort() === numbers);    // boolean, true, 원본과 반환값이 같다.
    
    var numbers = [20,10,9,8,7,6,5,4,3,2,1];    
    console.log(numbers.sort());    // array, [1,10,2,20,3,4,5,6,7,8,9], 암시적으로 원소를 문자로 형변환 하기 떄문에 10이 1뒤에 온다.
    
    function sortNumber(a, b) {
        // 비교 대상인 a 와 b 가 인자로 전달된다.
        // alert('a: ' + a + ', b: ' + b);
        // a 에서 b 를 뺀 결과가 음수면 a 가 b 보다 작고, 0 이면 같다.
        // sort 메소드는 return 값이 음수, 양수, 0 인지에 따라서 순서를 정한다.
        return a - b; 
    }
    
    var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
    consoole.log(numbers.sort(sortNumber)); // array, [1,2,3,4,5,6,7,8,9,10,20]
    
    function sortNumber(a, b) {
        // 위의 예제와 비교해서 a 와 b 의 순서를 바꾸면 정렬순서가 반대가 된다.
        return b - a;
    }
    
    var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
    console.log(numbers.sort(sortNumber));  // array, [20, 10, 9,8,7,6,5,4,3,2,1];
    
- slice()

배열의 원소 중 특정 구간에 해당하는 것들을 추출<br/>
array.splice(start, end); <br/>
start: 추출 구간의 시작점 <br/>
end: 추출 구간의 종료점, 생략하면 배열의 끝점까지를 추출 구간으로 지정 <br/>
추출구간에 해당하는 원소들을 배열로 패키징해서 리턴한다. <br/>
원본을 수정하지 않는다.
  
    
    var jobs = ['programmer', 'designer', 'planner'];
    console.log(jobs.slice(1, 3) 
    
- unshift()
    
배열에 값을 추가한다. 추가된 배열은 첫 번째 원소가 된다.<br/>
원본 데이터의 값이 변경된다.

    var jobs = ['programmer', 'designer', 'planner']
    var job = jobs.unshift('sajang');
    
    console.log(job);   // number, 4
    console.log(jobs);
    // array, ['sajang', 'programmer', 'designer', 'planner'], 원본 jobs의 값이 변경 되었다.
    
- concat()

복수의 배열을 결합해서 리턴한다.<br/>
원본 데이터의 값을 변경하지 않는다.    

    var a = new Array(1, 2, 3);
    var b = new Array(4, 5, 6);
    var c = new Array(7, 8, 9);
    
    a.concat(b, c); // [1,2,3,4,5,6,7,8,9]
    
- join()

배열의 원소를 겹합해서 하나의 문자열로 만든다.<br/>
array.join(separator)<br/>
인자는 배열의 원소를 하나의 문자열로 결합할 때 원소와 원소 사이에 위치할 문자열이다.<br/>
첫 번째 인자(separator)로 배열의 원소를 겹합해서 하나의 문자열을 만든다.<br/>
string.split 와 반대되는 기능

    var a = new Array('welcome','coding', 'everybody');
    // join의 첫 번째 인자로 ''를 전달했기 때문에 반환 값은 원소와 원소 사이에 공백이 들어간 결과가 반환된다.
    console.log(a.join(' '));    // string, welcome coding everybody
    
- splice()

배열의 특정 구간을 추출하거나, 특정 구간에 특정 배열을 추가함     
array.splice(index, howmany, element1, .., elementN);

index: 배열에 추가할 특정 배열의 위치를 가르키는 index

howmany: index 에서 부터 제거될 원소들의 수, index 부터 index \+ howmany 에 해당하는 원소들은 삭제 된다. 이 값이 0이면 어떠한 원소도 삭제되지 않는다.

element: index 와 index \+ howmany 사이에 추가될 값.

배열에 배열을 추가하거나, 삭제할 때 사용. 대상 구간에 해당하는 삭제될 원소들은 리턴된다.<br/>
원본이 수정된다. slice가 원본이 유지되는 것과 다르다.

    var numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers.splice(2));
    // array, [3,4,5,6,7,8,9,10], 시작점 2부터 배열의 마지막 원소까지를 대상으로 한다.
    console.log(numbers);   // array, [1,2], 원본이 수정된다.
    
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers.splice(2, 4));  // array, [3,4,5,6]
    
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers.splice(2, 4, 'three', 'four', 'five', 'six'));  // array, [3,4,5,6]
    console.log(numbers);   // array, [1,2,three,four,five,six,7,8,9,10]
    
<ECMAScript5에서 추가된 Array() 인스턴스의 메서드>
- isArray()

typeof 키워드를 사용해서 Array 객체의 자료형을 확인하면 'object'가 나온다.<br/>
Array 객체임을 확인하려면 constructor() 메서드를 사용해 자료형을 비교하는 것을 응용해야 한다.<br/>
만약 ECMAScript5를 사용할 수 있는 환경이라면,<br/>
isArray() 메서드를 사용해서 해당 변수가 Array 객체인지 확인할 수 있다.

    var arr = [1,2,3];
    var arr2 = {};
    var arr3 = 1;
    
    console.log(Array.isArray(arr));    // true
    console.log(Array.isArray(arr2));   // false
    console.log(Array.isArray(arr3));   // false
    
- filter()

배열의 요소가 특정 조건을 모두 만족하는지 확인한다.

    var array = [1,2,3,4,5,6,7,8,9,10];
    
    // 메서드를 사용합니다.
    array = array.filter(function (element, index, array) {
        return element <= 5;
    });    
    
    // 출력, [1,2,3,4,5]
    console.log(array);
    
filter() 메서드는 매개변수로 입력한 함수는 불리언을 리턴해야 한다.<br/>
이 때, 리턴하는 값이 true 인 배열의 요소만을 골라 새로운 배열을 만든다.<br/>
요소의 크기가 5이하인 숫자를 골랐으므로 새로운 배열이 생성한다.     

- forEach()

배열의 각각의 요소를 사용해 특정 함수를 for in 반복문처럼 실행한다.<br/>
메서드의 매게 변수로 입력한 함수는 element, index, array 매개변수를 갖는다.<br/>
매개변수 element 는 현재 반복에서 배열의 요소를 뜻한다.<br/>
매개변수 index 는 현재 반복에서 배열 요소의 인덱스를 뜻한다.<br/>
매개변수 array 의 경우는 현재 반복을 수행하는 배열 자체를 뜻한다.

    var array = [1,2,3,4,5,6,7,8,9,10];
    
    var sum = 0;
    var output = '';
    array.forEach(function (element, index, array) {
        sum += element;
        output += index + ': ' + element + ' -> ' + sum +  '\n';
    });
    
    console.log(output);
    
- every()

배열의 요소가 특정 조건을 모두 만족하는지 확인한다.

- some()

배열의 요소가 특정 조건을 적어도 하나 만족하는지 확인한다.<br/>
매개변수로 입력한 함수는 filter() 메서드와 마찬가지로 불리언을 리턴해야 한다.
every() 메서드는 배열의 모든 요소가 true 를 리턴하면 true 를 리턴하고 그 이외에 경우는 false 를 리턴한다.<br/>
some() 메서드는 배열의 요소 중 적어도 하나 이상 함수에 true 를 리턴할 경우에 true 를 리턴한다.

    var array = [1,2,3,4,5,6,7,8,9,10];
    
    function lessThanFive(element, index, array) {
        return element < 5;
    }
    
    function lessThanTwenty(element, index, array) {
        return element < 20;
    }
    
    var output1 = array.every(lessThanFive);
    var output2 = array.every(lessThanTwenty);
    var output3 = array.some(lessThanFive);
    var output4 = array.some(lessThanTwenty);
    
    // 출력
    var output = '';
    output += output1 + ' : ' + output2 + '\n';
    output += output3 + ' : ' + output4 + '\n';
    console.log(output);
    
- map()

기존 배열에 특정 규칙을 적용해 새로운 배열을 만든다. <br/>
map() 메서드는 지금까지 보았던 메서드와 달리 간단한 형태의 매개변수로 넣는다.<br/>
map() 메서드는 배열의 요소를 변경해 새로운 배열을 리턴하는 메서드이다.

     var array = [1,2,3,4,5,6,7,8,9,10];
     
     var output = array.map(function (element) {
        return element * element;
     });
     
     console.log(output);

- indexOf();

특정 요소를 앞쪽부터 검색한다.

- lastIndexOf()

특정 요소를 뒤쪽부터 검색한다.<br/>
indexOf() 메서드와 lastIndexOf() 메서드는 모두 매개변수에 검색하려는 요소를 입력한다.
만약 내부에 검색하려는 요소가 있으면 해당 요소가 위치하는 인덱스를 리턴하고 없으면 -1를 리턴한다.
    
    var array = [1,2,3,4,5,6,7,8,9,10];
    
    var output1 = array.indexOf(4);
    var output2 = array.indexOf(8);
    var output3 = array.lastIndexOf(4);
    var output4 = array.lastIndexOf(8);
    
    // 출력
    var output = '';
    output += output1 + ' : ' + output2 + '\n';
    output += output3 + ' : ' + output4;
    
    console.log(output);
    
- reduce()

배열의 요소가 하나가 될 때까지 요소를 왼쪽부터 두 개씩 묶는 함수

- reduceRight()

배열의 요소가 하나가 될 때까지 요소를 오른쪽부터 두 개씩 묶는 함수<br/>
처음에는 배열의 요소 다섯 개에서 두 개를 검사하고 이를 하나로 합친다.<br/>
이제 배열의 요소가 네 개가 되고 이어서 하나로 합친 값을 다음 요소와 비교해 또 하나로 합친다.
이렇게 배열의 요소를 하나가 될 때까지 줄여나가므로 reduce() 메서드라는 이름이 붙었다.

    var array = [1,2,3,4,5];
    
    // 출력
    var result = array.reduce(function (previousValue, currentValue, index, array) {
        console.log(previousValue);
        console.log(currentValue);
        return previousValue + currentValue;
    });

    console.log(result);
    
# 5. 자바스크립트의 배열과 객체 차이점
자바스크립트 배열과 객체는 유사점과 차이점을 가지고 있다.

    // 배열
    var colorsArray = ['orange', 'yellow', 'green'];
    console.log(colorsArray[0]);    // orange
    console.log(colorsArray[1]);    // yellow
    console.log(colorsArray[2]);    // green
    
    // 객체
    var colorsObj = {
        '0': 'oragne',
        '1': 'yellow',
        '2': 'green'
    };
    
    console.log(colorsObj[0]);    // orange
    console.log(colorsObj[1]);    // yellow
    console.log(colorsObj[2]);    // green
    
    // typeof 연산자 비교
    console.log(typeof colorsArray);    // object
    console.log(typeof colorsObj);      // object
    
    // length 프로퍼티
    console.log(colorsArray.length);    // 3
    console.log(colorsObj.length);      // undefined
    
    // 배열 표준 메서드
    colorsArray.push('red');    // ['orange', 'yellow', 'green', 'red']
    colorsObj.push('red')       // Uncaught TypeError
    
배열과 객체 둘다 리터럴 방식으로도 선언과 초기화가 가능하다.<br/>
하지만 배열의 원소와 객체의 속성에 접근하는 방식이 조금은 다르다. <br/>
배열은 colorsArray[0] 이렇게 접근하지만 객체는 colorsObj['0'] 형태로 접근해야 한다.
위 예제에서는 자바스크립트 엔진이 colorsObj[0]으로 접근해도 <br/>
0을 문자열 형태로 자동으로 변경해주기 때문에 에러는 발생하지 않는다.

typeof 연산자의 결과가 배열과 객체 모두 Object 로 나온다.<br/>
자바스크립트는 배열도 객체라고 생각한다.

객체에는 length 속성이 없다.<br/>
객체는 배열이 가지고 잇는 표준 메서드들을 사용 할 수 없다.<br/>
배열과 객체가 가진 자신의 부모인 프로토타입 객체가 서로 다르기 때문에 사용 할 수 없다.<br/>
객체는 Object.prototype 객체가 프로토타입이다.<br/>
배열의 경우 Array.prototype 객체가 부모 객체인 프로토타입이 된다.

    var emptyArray = [];
    var emptyObj = {};
    
    console.dir(emptyArray.__proto__);    // 배열의 프로토타입(Array.prototype) 출력
    console.dir(emptyObj.__proto__);    // 객체의 프로토타입(Object.prototype) 출력  
    
배열도 객체이므로 속성을 동적으로 생성 할 수 있다.

    var arr = ['zero', 'one', 'two'];
    console.log(arr.length);
    
    // 프로퍼티 동적 추가
    arr.color = 'blue';
    arr.name = 'number_array';
    console.log(arr.length);    // 3
    
    // 배열 원소 추가
    arr[3] = 'red';
    console.log(arr.length);    // 4
    
    // 배열 객체 출력
    console.dir(arr);
    
배열의 속성을 추가해도 length 의 값은 요소를 추가한 것이 아니므로 변하지 않는다.<br/>
가장 큰 인덱스가 변했을 경무낭 변경된다.<br/>
그리고 출력 결과를 보면, 배열도 객체처럼 key: value 형태로 배열 원소 및 프로퍼티 등이 있음을 알 수 있다.

배열 요소 삭제에는 2가지 방법이 쓰일 수 있다.<br/>
첫번째는 delete 연산자를 사용하는 방법

    var arr = ['zero', 'one', 'two', 'three'];
    delete arr[2];
    
    console.log(arr);           // ['zero', 'one', undefined * 1, 'three']
    console.log(arr.length);    // 4

delete 연산자는 해당 요소의 값을 undefined 로 설정할 뿐 원소 자체를 삭제하지 않는다.

    var arr = ['zero', 'one', 'two', 'three'];
    
    arr.splice(2, 1);   // 2번째 요소를 시작점으로 1개의 원소를 삭제한다.
    console.log(arr);   // ['zero', 'one', 'three'];
    console.log(arr.length);    // 3
    
원소를 완전히 삭제 할 경우 자바스크립트에서는 splice() 배열 메서드를 사용한다.

splice(start, deleteCount, item..)<br/>
start - 배열에서 시작 위치<br/>
deleterCount - start 에서 지정한 시작 위치부터 삭제할 요소의 수<br/>
item - 삭제할 위치에 추가할 요소

자바스크립트에서는 배열처럼 length 속성을 가진 객체를 '유사 배열 객체'라고 부른다.<br/>
이러한 유사 배열 객체들은 객체임에도 불구하고 자바스크립트 배열의 표준 메서드들을 사용 할 수 있다.

    var arr = ['bar'];
    var obj = {
        name: 'foo',
        length: 1 
    };
    
    arr.push('baz');
    console.log(arr);   // ['bar', 'baz']
    
    Array.prototype.push.apply(obj, ['baz']);
    console.log(obj);   // { '1': 'baz', name: 'foo', length: 2 }

# 6. String() 객체의 속성과 메서드
    // new 키워드와 String() 생성자를 사용해 문자열 객체를 만든다.
    var stringObj = new String('foo');
    console.log(stringObj); // foo {0 = 'f', 1 = 'o', 2 = 'o'}
    console.log(typeof stringObj);  // object
    
    // new 키워드 없이 생성자만 사용해 리터럴/원시 문자열 만든다.
    var stringObjWithOutNewKeyword = String('foo'); // new 키워드 사용하지 않음.
    console.log(stringObjWithOutNewKeyword);    // foo
    console.log(typeof stringObjWithOutNewKeyword); // string
    
    // 리터럴/원시 문자열을 만든다(생성자가 암묵적으로 사용됨)
    var stringLiteral = 'foo';
    console.log(stringLiteral); // foo
    console.log(typeof stringLiteral);  // string
    
예제 코드와 같이 String() 생성자에 만들 객체가 가질 문자열 값을 매개변수로 전달 가능하다.<br/>
하지만 코딩 가이드에서는 리터럴/원시값 으로 문자열을 생성하도록 권장한다.<br/>
new String() 으로 생성하였을 시에는 typeof 연산자로 검사한 결과 Object 로 나오기 때문에 좋지 못하다.

사용빈도가 높은 몇 가지만 예지코드로 정리하고 나머지 짦은 설명만..

> <a href="http://programmer-seva.tistory.com/19?category=615259"><<<<<<<<<<<<< 메서드 다시보기</a>

# 7. Number() 객체의 속성과 메서드

    // new 키워드와 Number() 생성자를 사용해 숫자 객체 만든다.
    var numberObj = new Number(1);
    console.log(numnberObj);    // 1
    console.log(typeof numberObj)   // object
    
    // new 키워드 없이 생성자만 사용해 리터럴/원시 숫자값을 만든다.
    var numberObjWithOutNew = Number(1);
    console.log(numberObjWithOutNew);   // 1
    console.log(typeof numberObjWithOutNew);    // number
    
    // 리터럴/원시 숫자값을 만든다.(생성자가 암묵적으로 사용됨)
    var numberLiteral = 1;
    console.log(nubmerLiteral); // 1
    console.log(typeof numberLiteral);  // number
    
예제 코드와 같이 Number() 생성자에 만들 객체가 가질 문자열 값을 매개변수로 전달 가능하다.<br/>
하지만 코딩 가이드에서는 리터럴/원시값 으로 문자열을 생성하도록 권장한다.<br/>
new Number() 으로 생성하였을 시에는 typeof 연산자로 검사한 결과 Object 로 나오기 때문에 좋지 못하다.

> <a href="http://programmer-seva.tistory.com/20?category=615259"><<<<<<<<<<<<< 메서드 다시보기</a>

# 8. Date 객체를 활용한 시간 구하기

Date 객체는 날짜와 시간을 표시하는 객체이다.

    var date = new Date();  // 시스템의 현재 날짜를 자동으로 지정
    
    console.log(date);
    
이렇게 생성자 함수에 어떠한 매개변수도 입력하지 않으면 현재 시간으로 초기화 한다.<br/>
코드를 실행하면 현재 시간이 출력된다. 또한 실행 위치가 한국이므로 GMT+ 0900 or UTC+ 0990 의 표준 시간으로 표시된다.

수를 입력할 때에는 (월 - 1) 값을 입력해야 한다.

> <a href="http://programmer-seva.tistory.com/21?category=615259"><<<<<<<<<<<<< 메서드 다시보기</a> 
    
# 9. Math 객체를 황용한 수학적 계산기

> <a href="http://programmer-seva.tistory.com/22?category=615259"><<<<<<<<<<<<< 메서드 다시보기</a>

# 10. 자바스크립트의 3가지 함수 생성법

자바스크립트에서 함수는 function 키워드를 통해 생성 할 수 있다.<br/>
함수는 코드의 집합을 나타내는 자료형이며 특정 기능을 수행하기 위해 만들어진 코드 block 이다.<br/>
자바스크립트 function 은 '무엇' 인가가 그것을 호출 시킬때 수행된다.

자바스크립트에서 함수를 생성하는 3가지

- 함수 선언문
- 한수 표현식
- Function() 생성자 함수

자바스크립트에서는 함수도 일반 객체처럼 취급된다.

자바스크립트에서는 함수 리터럴을 이용해 함수를 생성 할 수 있다.
    
    function add(x, y) {
        return x + y;
    } 
    
    console.log(add(3, 4)); // 7
    
함수 리터럴은 function 키워드로 시작한다.<br/>
함수를 구분 할 수 있는 식별자로 함수명을 사용한다. 중요한 점은 함수명은 선택사항이다.<br/>
함수 이름이 없는 함수를 '익명함수' 라고 한다.<br/>
매개변수는 변수의 데이터타입을 기술하지 않아도 된다.

위 리터럴 설명 예제에서 나온 방식이 바로 함수 선언문 방식이다.<br/>
함수 선언문 방식은 반드시 함수명이 정의되어 있어야 한다.


자바스크립트에서는 함수도 하나의 값처럼 취급된다.<br/>
따라서, 함수도 숫자나 문자열처럼 변수에 할당하는 것이 가능하다.<br/>
이런 방식으로 함수 리터럴로 하나의 함수를 만들고,<br/>
여기서 생성된 함수를 변수에 할당하여 함수를 생성하는 것을 '함수 표현식' 이라고 말한다.<br/>
아래 예제에서 함수 리터럴로 생성한 함수는 함수명이 없으므로 익명함수에 속한다.

    var add = function (x, y) {
        return x + y;
    }
    
    var plus = add;
    
    console.log(add(3, 4));  // 7
    console.log(plus(5, 6));    // 11
    
함수 표현식은 함수 선언문 문법과 거의 유사하다.<br/>
유일한 차이점은 함수 표현식 방법에는 함수 이름이 선택사항이며, 보통 사용하지 않는다는 것 이다.<br/>
앞서 설명했듯이 이렇게 이름이 없는 함수 형태를 자바스크립트에서는 익명 함수라고 부른다.<br/>
위 예제와 같은 형태를 익명 함수 표현식이라고 부른다.

위에서 설명한 함수 선언문 형식의 함수는 자바스크립트 엔진에 의해 다음과 같이 표현식 형태로 변경되어 호출된다.

    var add = function add(x, y) {
        return x + y; 
    }
    
함수 이름과 함수 변수의 이름이 add 로 같으므로, 함수 이름으로 함수가 호출되는 것처럼 보이지만, 실제로는 add 함수 변수로 함수 외부에서 호출이 가능하게 된 것이다.

    var factorialVar = function fatorial(n) {
        if(n <= 1) {
            return 1;
        }
        return n * factorial(n-1);
    }   
    
    console.log(factorialVar(#));   // 6
    console.log(factorial(3));  // Uncaught ReferenceError: factorial is not defined 에러 발생
    
함수 외부에서는 함수명인 factorial() 을 사용해서 호출 할 수 없다.<br/>
함수 변수명으로는 호출 가능하다.    

일반적으로 자바스크립트 코드를 작성할 때 함수 선언문 방식으로 선언된 함수의 경우는 함수 끝에 세미콜론(;)을 붙이지 않지만 함수 표현식 방식의 경우는 세미콜론(;)을 붙이는 것을 권장한다.

# 11. 함수 생성법에 따른 동작 방식의 차이

> 함수 호이스팅

많은 코딩 가이드들은 함수 표현식의 생성법을 사용하도록 권하고 있다.

    console.log(add(2, 3)); // 5
    
    // 함수 선언문 형태로 add() 함수 정의
    fucntion add(x, y) {
        return x + y;
    }
    
    console.log(add(3, 4)); // 7
    
1번 라인에서 adD() 할수가 정의되지 않았음에도 add() 함수 호출이 가능하다.<br/>
선언된 위치와 상관없이 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다는 것을 알 수 있다.<br/>
위와 같은 상황을 '함수 호이스팅' 이라고 한다.

이러한 함수 호이스팅은 함수를 사용하기 전에 반드시 선언해야 한다다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있다.

    add(2, 3)   // Uncaugth type Error
    
    // 함수 표현식 형태로 add() 함수 정의
    var add = function(x, y) {
        return x + y;
    }
    
    add(3, 4);
    
위 코드는 호이스팅이 일어나지 않는다.<br/>
함수 표현식 형태는 함수 호이스팅이 일어나지 않는 다는 것을 위 코드를 통해 알 수 있다.

위와 같은 함수 호이스팅의 발생 원인은 변수 생성과 초기화의 작업이 분리돼서 진행되기 때문이다.

# 12. 함수도 객체

자바스크립트에서는 함수도 객체이다.<br/>
함수의 기본 기능인 코드 실행뿐만 아니라, 함수 자체가 일반 객체처럼 프로터피들을 가질 수 있다.

    function add(x, y) {
        return x + y;
    }
    
    add.result = add(3, 2);
    add.status = 'OK';
    
    console.log(add.result);    // 5
    console.log(add.status);    // 'OK'
    
- 리터럴에 의해 생성
- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
- 함수의 인자로 전달 가능
- 함수의 리턴값으로 리턴 가능
- 동적으로 프로퍼티를 생성 및 할당 가능

이와 같은 특징이 있으므로 자바스크립트에서는 함수를 '일급 객체'라고 한다.<br/>

> 자바스크립트 함수는 변수나 프로퍼티의 값으로 할당이 가능하다.
    
    var foo = 100;
    var bar = function () { return 100; }
    console.log(bar()); // 100
    
    var obj = {};
    obj.baz = function () { return 200; }
    console.log(obj.baz()); // 200
    
> 자바스크립트 함수는 인자로 전달이 가능하다.

    var foo = function(func) {
        func(); // 인자로 받은 fuync() 함수 호출
    };
    
    foo(function() {
        console.log('Function can be used as the argument.');
    });

자바스크립트 함수는 객체의 기능에 추가로 호출됐을 때 정의된 코드를 실행하는 기능을 가지고 있다. <br/>
또한, 일반 객체와는 다르게 추가로 함수 객체만의 표준 프로퍼티가 정의되어 있다.

ECMA5 명세서에는 모든 함수가 length 와 prototype 프로퍼티를 가져야 한다고 기술되어 있다.

나머지 name, caller, arguments, \_\_proto\_\_ 프로퍼티들은 ECMA 표준이 아니다. 

- name 

함수의 이름을 나타낸다.

- caller

자신을 호출한 함수를 나타낸다.

- arguments

함수를 호출할 때 전달된 인자값을 나타낸다.<br/>
arguments 객체가 함수를 호출할 때 호출된 함수의 내부로 인자값과 함께 전달된다.<br/>
arguments 객체를 통해 전달 인자값의 정보를 제공받을 수 있다.

- \_\_proto\_\_

자바스크립트 객체는 자신의 프로토타입을 가리키는 \[\[Prototype\]\] 라는 내부 프로퍼티를 갖는다.<br/>
크롬 브라우저에서는 \[\[Prototype\]\] 이라는 내부 프로퍼티가 바로 \_\_proto\_\_ 프로퍼티로 구현되어 있다.<br/>
이를 통해 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.<br/>
함수 객체의 부모 역할을 하는 프로토타입 객체를 Function.prototype 객체라고 명명한다. 이것 역시 함수를 객체라고 정의하는 바 이다.

> Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체이다.Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체이다.<br/>위 결과를 살펴보면, Function Prototype 객체의 \_\_proto\_\_ 프로퍼티는 Object.prototype 객체를 가리키고 있다.

Function.prototype 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체이다.
모든 함수는 Function Prototype 객체가 가지고 있는 프로퍼티나 메서드를 마치 자신의 것처럼 상속받아 그대로 사용 가능하다.Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체이다.<br/>
위 결과에서 알 수 있듯이, Function.prototype 객체가 가지는 프로퍼티나 메서드들을 확인 할 수 있다.

    - constructor
    - toString()
    - apply(thisArg, argArray)
    - call(thisArg, [,arg1 [,arg2 ,]])
    - bind(thisArg, [,arg1 [,arg2 ,]])

- length 프로퍼티

함수를 작성할 때 정의한 인자 개수를 나타내고 있다.

- prototype 프포퍼티

함수 객체의 prototype 프로퍼티는 앞서 설명한 모든 객체의 부모를 나타내는 내부 프로퍼티인 \[\[Prototype\]\]와는 다르다.<br/>
두 프로퍼티 모두 프로토타입 객체를 가리킨다는 점에서는 공통적이고 관점적인 면에서 차이를 찾을 수 있다.<br/>

모든 객체에 있는 내부 프로퍼티인 \[\[Prototype\]\]은 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.<br/>

함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 때, 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.<br/>
즉, 자바스크립트에서는 함수를 생성할 때, 함수 자신과 연결된 프로토타입 객체를 동시에 생성하며, 이 둘은 prototype 과 constructor 라는 프로퍼티를 서로 참조하게 된다.

# 13. 함수의 다양한 형태

> 콜백 함수

익명 함수의 대표적인 용도가 바로 '콜백 함수' 이다.<br/>
코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수를 말한다.<br/>
특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수 또한 콜백 함수가 될 수 있다.

대표적인 콜백 함수의 사용 예가 자바스크립트에서의 이벤트 핸들러 처리이다.<br/>
웹 페이자가 포드되거나 키보드가 입력되는 등의 DOM 이벤트가 발생할 경우, 브라우저는 정의된 DOM 이벤트에 해당하는 이벤트 핸들러를 실행 시킨다.<br/>
만약 이벤트 핸들러에 콜백 함수가 등록되 있다면 이벤트가 일어날 때마다 브라우저에 의해 실행된다.

    // 페이지 로드시 호출될 콜백 함수
    window.onload = function() {
        alert('This is the callback function.');
    }

window.onload 는 이벤트 핸드러로서, 웹 페이지의 로딩이 끝나느 시점에 load 이벤트가 발생하면 실행된다.

> 즉시 실행 함수

함수를 정의함과 동시에 바로 실행하는 함수를 '즉시 실행 함수' 라고 한다.<br/>
이 함수도 익명 함수를 응용한 형태이다.

    (function (name) {
        console.log('This is the immediate function --> ' + name);
    })('foo');
    
즉시 실행 함수의 이러한 특징을 이용한다면, 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분등에 사용 할 수 있다.

즉시 실행 함수는 jQuery 와 같은 자바스크립트 라이브러리나 프레임웤 소스들에서 사용된다.

즉시 실행 함수 내에 라이브러리 코드를 추가하면 전역 네임스페이스를 더럽히지 않으므로, 이후 다른 자바스크립트 라이브러리들이 동시에 로드가 되더라도 라이브러리 간 변수 이름 충돌 같은 문제를 방지 할 수 있다.

> 내부 함수

자바스크립트에서는 함수 코드 내부에서도 다시 함수 정의가 가능하다.<br/>
내부 함수는 자바스크립트의 기능을 보다 강력하게 해주는 '클로저' 를 생성하거나 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현하는 용도 등으로 사용한다.

    function parent() {
        var a = 100;
        var b = 200;
        
        // 내부 함수
        function child() {
            var b = 300;
            console.log(a);
            console.log(b);
        }
        child();
    }
    
    parent();
    child();
    
   - 내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.<br/>
   이것이 가능한 이유는 자바스크립트의 스코프 체이닝 때문이다.<br/>
   함수 내부에서는 함수 밖에서 선언된 변수나 함수의 접근이 가능하다.
   
   - 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다.<br/>
   이것은 자바스크립트의 함수 스코프 때문이다.<br/>
   부모 함수 안에서 내부 함수를 호출하는 것은 내부 함수 호출 부분과 정의 부분이 부모 함수 내부에 있기 때문에 가능하다.
   
   부모 함수에서 내부 함수를 외부로 리턴하면, 부모 함수 밖에서도 내부 함수를 호출하는 것이 가능하다.
   
    function parent() {
        var a = 100;
        
        // 내부 함수
        var child = function() {
            console.log(a);
        }
        
        return child;
    }
    
    var inner = parent();
    inner();
   
   위 예제에서 parent() 함수가 호출되면, inner 변수에 child 함수 변수가 전달되고 child 함수 변수는 내부 함수의 참조값을 가진다.<br/>
   결론적으로 inner 도 내부 함수를 참조 할 수 있게 된다.
   
   inner() 를 호출하게 되면 parent() 함수 스코프 밖에서도 내부 함수 child() 가 호출된다.<br/>
   a 변수가 정의되어 있지 않아, 스코프 체이닝으로 부모 함수에 a 변수가 정의되어 있는지 확인하게 되고, a를 출력한다.<br/>
   inner() 와 같은 형태를 '클로저' 라고 한다. 클로저는 차후에 더 자세히 다루도록 한다.
   
> 함수를 리턴하는 함수

자바스크립트에서는 함수도 일급 객체이므로 일반 값처럼 함수 자체를 리턴 할 수도 있다.<br/>
함수를 호출함과 동시에 다른 함수로 바꾸거나, 자기 자신을 재정의하는 함수를 구현할 수 있다.<br/>
자바스크립트의 언어적인 유연성을 보여주는 좋은 예이다.

    var self = function() {
        console.log('a');
        return function() {
            console.log('b');
        }
    }
    
    self = self();  // a
    self(); // b
    
처음 self() 함수가 호출 될 때, 'a'가 출력된다.<br/>
그리고 다시 self 함수 변수에 self() 함수 호출 리턴값으로 내보낸 함수가 저장된다.<br/>
두 번째로 self() 함수가 호출됐을 때는 'b'가 출력된다.<br/>
즉, 첫 번째 self() 함수 호출 후에, self 함수 변수가 가리키는 함수가 원래 함수에서 리턴 받은 새로운 함수로 변경됐기 때문이다.

# 14. arguments 객체를 활용한 가변 인자 함수

자바스크립트에서는 함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발생하지 않는다.

    function func(arg1, arg2) {
        console.log(arg1, arg2);
    }    
    
    func();         // undefined undefined
    func(1);        // 1 undefined
    func(1, 2);     // 1 2
    func(1, 2, 3);  // 1 2
    
함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined 값이 할당된다.<br/>         
인자 개수보다 많게 함수를 호출했을 경우는 에러가 발생하지 않고, 초과된 인수는 무시된다.

함수 코드를 작성할 대, 런타임 시에 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줘야 할 경우가 있다.<br/>
이를 가능케 하는게 바로 'arguments 객체' 이다.

자바스크립트에서는 함수를 호출할 때 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달되기 때문이다.<br/>
arguments 객체는 함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체를 의미한다.<br/>
이 객체는 실제 배열이 아니고 '유사 배열 객체' 이다.

    function add(a, b) {
        // arguments 객체 출력
        console.dir(arguments);
        return a + b;
    }
    
    console.log(add(1));        // NaN
    console.log(add(1, 2));     // 3
    console.log(add(1, 2, 3,)); // 3
    
> arguments 객체의 구성

- 함수를 호출할 때 넘겨진 인자 (배열 형태)

함수를 호출할 때 첫 번째 인자는 0번 인덱스, 두 번째 인자는 1번 인덱스, ...

- length 프로퍼티

호출할 때 넘겨진 인자의 개수를 의미

- callee 프로퍼티

현재 실행 중인 함수의 참조값

length 프로퍼티가 있어 배열과 유사하게 동작하지만 유사 배열 객체이므로 배열 메서드를 사용할 수 없다는 점을 주의<br/>
arguments 객체는 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나, 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 개발하는데 유용하게 사용 할 수 있다.

'가변인자 함수' 는 매개변수의 개수가 변할 수 있는 함수이다.<br/>
물론, 자바스크립트는 매개변수의 개수를 정의된 것과 다르게 사용해도 괜찮지만, 여기서 말하는 가변인자 함수는 매개변수를 선언된 형태와 다르게 사용했을 때도 매개변수를 모두 활용 하는 함수이다.

    var print = function() {
        // 매개변수의 개수를 가져온다.
        var length = arguments.length;
        
        // 조건을 나눈다
        if (length === 0) {
            console.log('전달된 인자 없음');
        } else if (length === 1) {
            console.log(arguments[0]);
        } else {
            console.log(arguments[0], arguments[1]); 
        }
    } 
    
    print();
    print(1);
    print(1, 2);
    
# 15. 함수 호출과 this

this 인자는 자바스크립트의 여러 가지 함수가 호출되는 방식(호출 패턴)에 따라 this 가 다른 객체를 참조(this 바인딩) 한다.

> 객체의 메서드 호출할 때 this 바인딩

메서드를 호출할 때, 메서드 내부 코드에서 사용된 this 는 해당 메서드를 호출한 객체로 바인딩된다.
    
    var myObj = {
        name: 'foo',
        sayName: function() {
            console.log(this.name);
        }
    };
    
    var otherObj = {
        name: 'bar'
    }
    
    otherObj.sayName = myObj.sayName;
    
    myObj.sayName();
    otherObj.sayName();
    
> 함수를 호출할 때 this 바인딩

자바스크립트에서는 함수를 호출하면, 해당 함수 내부 코드에서 사용된 this 는 전역 객체에 바인딩된다.<br/>
브라우저에서 자바스크립트를 실행하는 경우 전역 객체는 window 객체가 된다.

자바스크립트의 모든 전역 변수는 실제로는 이러한 전역 객체의 프로퍼티들이다.

    var test = 'This is test';
    console.log(window.test);
    
    // sayFoo() 함수
    var sayFoo = function() {
        console.log(this.test); // sayFoo() 함수 호출 시 this 는 전역 객체에 바인딩된다.        
    };
    
    sayFoo();   // this.test 출력

test 는 전역 변수이므로 전역 객체인 window 의 프로퍼티로 접근이 가능하다.<br/>
sayFoo() 함수 호출시, this 는 전역 객체에 바인딩 된다.

하지만 이러한 함수 호출에서의 this 특성은 '내부 함수' 를 호출했을 경우에도 그대로 적용된다.<br/>
내부 함수에서 this 를 이용할 때는 매우 주의해야 한다.

    var value = 100;
    
    var myObject = {
        value: 1,
        func1: function() {
            this.value += 1;
            console.log('func1() called. this.value : ' + this.value);
            
            // func2() 내부 함수
            func2 = function() {
                this.value += 1;
                console.log('func2() called. this.value : ' + this.value);
                
                func3 = function() {
                    this.value += 1;
                    console.log('func3() called. this.value : ' + this.value);
                }
                
                func3(); 
            }
            func2();
        }
    }    
    myObject.func1()

결과가 이상하게 나온 이유는 자바스크립트에서는 내부 함수 호출 패턴을 별도로 정의해 놓지 않기 때문이다.<br/>
내부 함수도 결국 함수이므로 이를 호출할 때는 함수 호출로 취급한다.<br/>
함수 호출 패턴 규칙에 따라 내부 함수의 this 는 전역 객체(window)에 바인딩 된다.

내부 함수가 this 를 참조하는 자바스크립트의 한계를 극복하려면,<br/>
부모 함수의 this 를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법이 상용된다.

    var value = 100;
    var myObject = {
        value: 1,
        func1: function() {
            var _this = this;
            
            this.value += 1;
            console.log('func1() called. this.value : ' + this.value);
            
            func2 = function() {
                _this.value += 1;
                console.log('func2() called. this.value : ' + _this.value);
                
                func3 = function() {
                    _this.value += 1;
                    console.log('func3() called. this.value : ' + _this.value);
                }
                
                func3();
            }
            func2();
        }
    } 
    myObject.func1()
    
> 생성자 함수를 호출할 때 this 바인딩

기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.<br/>
반대로 생각하면 일반 함수에 new 를 붙여 호출하면 원치 않는 생성자 함수처럼 동작 할 수 있다.<br/>
따라서 대부분의 자바스크립트 코딩 가이드에서는 특정 함수가 생성자 함수로 정의되어 있음을 알리려고 함수 이름의 첫 문자를 대문자로 쓰기를 권한다.

생성자 함수 코드 내부에서 this 는 앞서 알아본 메서드와 함수 호출 방식에서의 this 바인딩과는 다르게 동작한다.

new 연산자로 자바스크립트 함수를 생성자로 호출하면

 1) 빈 객체 생성 및 this 방인딩
    
    생성자 함수 코드가 실행되기 전 빈 객체가 생성된다.<br/>
    바로 이 객체가 생성자 함수가 새로 생성하는 객체이며, 이 객체는 this 로 바인딩된다.<br/>
    이후 생성자 함수의 코드 내부에서 사용된 this 는 이 빈 객체를 가리킨다.<br/>
    생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.
    
 2) this 를 통한 프로퍼티 생성
 
    함수 코드 내부에서 this 를 사용, 앞서 생성된 빝 객체에 동적으로 프로퍼티나 메서드가 생성 가능하다.
    
 3) 생성된 객체 리턴
 
    특별하게 리턴문이 없을 경우, this 로 바인딩된 새로 생성한 객체가 리턴된다.<br/>
    일반 함수는 리턴문이 없을 경우 undefined 가 리턴되지만 생성자 함수는 새로 생성한 객체가 리턴된다.<br/>
    하지만, 리턴값이 새로 생성한 객체(this)가 아닌 다른 객체를 반환하는 경우, this 가 아닌 다른 객체가 리턴되어 버린다.
    
        var Person = function(name) {
            this.name = name;
        } 
        
        var foo = new Person('foo');
        console.log(foo.name);  // foo

    새롭게 객체를 생성하고 생성자 함수 코드에서 사용되느 this 로 바인딩된다.<br/>
    this 가 가리키는 빈 객체에 name 이라는 동적 프로퍼티를 생성했다.<br/>
    리턴값이 특별히 없으므로 this 로 바인딩한 객체가 생성자 함수의 리턴값으로 반환돼서, foo 변수에 저장된다.
    
    **※객체 리터럴 방식과 생성자 함수를 통한 객체 생성 방식의 차이**
    
        // 객체 리터럴 방식으로 foo 객체 생성
        var foo = {
            name: 'foo',
            age: 26,
            gender: 'man'
        };
        console.dir(foo);
            
        // 생성자 함수
        function Person(name, age, gender, position) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        
        // Person 생성자 함수를 이용해 bar 객체, baz 객체 생성
        var bar = new Person('bar', 22, 'woman');
        console.dir(bar);
        
        var baz = new Person('baz', 24, 'woman');
        console.dir(baz);
        
       객체 리터럴 방식과 생성자 함수 방식의 차이가 프로토타입 객체(\_\_proto\_\_ 프로퍼티)에 있을을 알 수 있다.<br/>
       객체 리터럴 방식의 경우는 자신의 프로토타입 객체가 Object(Object.prototype)로, 생성자 함수 방식의 경우 Person(Person.prototype)으로 서로 다른다.
       
       위와 같은 차이가 발생하는 이유는, 자바스크립트 객체 생성 규치 때문이다.<br/>
       자바스크립트 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.<br/>
       객체 리터럴 방식에서는 객체 생성자 함수는 Object()이다. 생성자 함수 방식의 경우는 생성자 함수 자체, 예제에서느 Person() 이다.
       
    **※생성자 함수를 new 를 붙이지 않고 호출할 경우**
    객체 생성을 목적으로 작성한 생성자 함수를 new 없이 호출하거나 일반 함수를 new 를 붙여서 호출 할 경우 코드에서 오류가 발생 할 수 있다. 이유는 this 바인딩 방식이 다르기 때문이다.
    
        // 생성자 함수
        function Person(name, age, gender, position) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        
        var qux = Person('qux', 20, 'man');
        console.log(qux);   // undefined
        
        console.log(window.name);   // qux
        console.log(window.age);    // 20
        console.log(window.gender); // man
        
       Person 생성자 함수를 new 없이 호출할 경우, this 는 함수 호출이므로 전역 객체인 window 객체로 바인딩된다.<br/>
       의도와 다르게 window 객체에 동적으로 name, age, gender 프로퍼티가 생성된다.<br/>
       생성자 함수는 별도의 리턴값이 없을 경우, 새로 생성된 객체가 리턴된다.<br/>
       하지만 new 없이 일반 함수를 호출할 때 처럼 호출하면 undefined 가 리턴된다.
       
    **※생성자 함수를 강제로 인스턴스하여 new 없이 사용되는 위험을 피하기**
    
        function A(arg) {
            if (!(this instanceof arguments.callee)) return new arguments.callee(arg);
            this.value = arg ? arg : 0;
        }
        
        var a = new A(100);
        var b = A(10);
        
        console.log(a.value);
        console.log(b.value);
        console.log(window.value);
        
> call 과 apply 메서드를 이용한 명시적인 this 바인딩

this 를 특정 객체에 명시적으로 바인딩시키는 방법도 제공한다.<br/>
이를 가능하게 하는 것이 바로 apply() 와 call() 메서드이다.<br/>
모든 함수의 부모 객체인 Function.prototype 객체의 메서드이다.

    function.apply(thisArg, argArray)
    
call() 과 apply() 메서드는 기능이 같고 단지 넘겨받는 인자의 형식만 다르다.<br/>
apply() 메서드를 호출하는 주체가 함수고, apply() 메서드도 this 를 특정 객체에 바인딩할 뿐 결국 본질적인 기능은 함수 호출이라는 것이다.

만일 Person.apply() 이렇게 호출한다면 이것의 기본적인 기능은 Person() 함수를 호출하는 것이다.<br/>
apply() 메서드의 첫 번째 인자 thisArg 는 apply() 메서드를 호출한 하수 내부에서 사용한 this 에 바이딩할 객체를 가리킨다.<br/>
첫 번째 인자로 넘긴 객체가 this 로 명시적으로 바인딩되는 것이다.<br/>
두 번째 argArray 인자는 함수를호출할 때 넘길 인자들의 배열을 가리킨다.<br/>
apply() 메서드의 기능도 결국 함수를 호출하는 것이므로, 함수에 넘길 인자를 argArray 배열로 넘긴다.

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }    
    
    var foo = {};
    
    // apply() 메서드 호출
    Person.apply(foo, ['foo', 30, 'man']);
    console.dir(foo);
    
위 코드는 Person('foo', 30, 'man') 함수를 홀추하면서, this 를 foo 객체에 명시적으로 바인딩 한다는 것이다.<br/>
call() 메서드의 경우는 apply() 와 기능은 같지만, apply() 의 두 번째 인자에서 배열 형태로 넘긴 것을 각각 인자로 넘긴다.

    Person.call(foo, 'foo', 30, 'man');
    
이러한 apply() 나 call() 메서드는 this 를 원하는 값으로 명시적으로 매핑해서 특정 함수나 메서드를 호출 할 수 있다.<br/>
아래는 유사 배열 객체에서 배열 메서드를 사용하는 코드

    function myFunction() {
        console.dir(arguments);
        
        // arguments.shift();   // Error
        
        // arguments 객체를 배열로 변환
        var args = Array.prototype.slice.apply(arguments);
        console.dir(args);
    }    

    myFunction(1,2,3)
    
'Array.prototype.slice() 메서드를 호출해라. 이때 this 는 arguments 객체로 바인딩해라.'<br/>
결국 이 말은 arguments 객체가 Array.prototype.slice() 메서드를 마치 자신의 메서드인 양 arguments.slice() 와 같은 형태로 메서드 호출하라는 것이다.

# 16. 함수의 리턴
자바스크립트 함수는 항상 리턴값을 반환한다.<br/>
특히, return 문을 사용하지 않더라도 항상 리턴값을 전달하도록 되어 있다.

> 일반 함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴된다.

    var noReturnFunc = function() {
        console.log('This function has no return statement.');
    };
    
    var result = noReturnFunc();
    console.log(result);    // undefiend
    
> 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.

생성자 함수에서 별도의 리턴값을 지정하지 않을 경우 this 로 바인딩된 새로 생성된 객체가 리턴된다.<br/>
때문에 생성자 함수에서는 일반적으로 리턴값을 지정하지 않는다.

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        
        // 명시적으로 다른 객체 반환
        return {name:'bar', age:20, gender: 'woman'};
    }    
    
    var foo = new Person('foo', 30, 'man');
    console.dir(foo);
    
생성자 함수의 리턴값으로 넘긴 값이 객체가아닌 불린, 숫자, 문자열일 경우는 이러한 리턴값을 무시하고 this 로 바인딩된 객체가 리턴된다.

# 17. 자바스크립트 프로토타입
자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다.

모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다.<br/>
여기서 주의할 것은 함수 객체의 prototype 프로퍼티는 모든 객체의 부모를 나타내느 내부 프로퍼티인 \[\[Prototype\]\] 과 혼동하지 말아야한다.

두 프로퍼티 모두 프로토타입 객체를 가리킨다는 점에서 공통점이 있다.<br/>
\[\[Prototype\]\] 는 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.

함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.

정리하자면, <br/>
자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 \[\[Prototype\]\] 링크로 연결한다.

    function Person(name) {
        this.name = name;
    }
    
    var foo = new Person('foo');
    
    console.dir(Person);
    console.dir(foo);
    
Person() 생성자 함수는 prototype 프로퍼티로 자신과 링크된 프로토타입 객체를 가리킨다.<br/>
Person() 생성자 함수로 생성된 foo 객체는 Person() 함수의 프로토타입 객체를 \[\[Prototype\]\] 링크로 연결한다.

**\[\[Prototype\]\] 링크(크롬 브라우저에선 \_\_proto\_\_)는 객체의 입장에서 자신의 부모 객체인 프로토타입 객체를 내부의 숨겨진 링크로 가리키고 있다.**

결국 자바스크립트에서 객체를 생성하는 건 생성자 함수의 역할이지만, 생성된 객체의 실제 부모 역할을 하는 건 생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는 프로토타입 객체다.

# 18. 프로토타입 체이닝

자바스크립트에서 객체는 자기 자신의 프로퍼티뿐만 아니라, 자신의 부모역할을 하는 프로토타입 객체의 프로퍼티 또한 마치 자신의 것처럼 접근하는 게 가능하다.<br/>
이것을 바로 '프로토타입 체이닝'이다.

> 객체 리터럴 방식에서의 프로토타입 체이닝

    var myObj = {
        name: 'foo',
        sayName: function() {
            console.log('My Name is ' + this.name);
        }
    };
    
    myObj.sayName();
    console.log(myObj.hasOwnProperty('name'));
    console.log(myObj.hasOwnProperty('nickName'));
    myObj.sayNickName();    

객체 리터럴 방식은 Object() 라는 내장 생성자 함수로 생성된 것이다.<br/>
Object() 생성자 함수도 함수 객체이므로 prototype 이라는 프로퍼티 속성이 있다.<br/>
따라서, Object() 함수의 prototype 프로퍼티가 가리키는 Object.prototype 객체를 자신의 프로포타입 객체로 연결한다.

<img src="http://cfile22.uf.tistory.com/image/2761F23B56AB067F08A06D">

   - *프로토타입 체이닝 개념*<br/>
     **자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 \[\[Prototype\]\] 링크를 따라 자신의 부모 역할을 하는 프로포타입 객체의 프로퍼티를 차례대로 검색하는 것**
     
> 생성자 함수로 생성된 객체의 프로토타입 체이닝

자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체(부모 객체)로 취급한다.

    function Person(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    
    var foo = new Person('foo', 30, 'tennis');
    
    console.log(foo.hasOwnProperty('name'));    // true
    
    console.dir(Person.prototype);
    
위 예제에서 foo 객체의 프로토타입 객체는 Person.prototype 이 된다.<br/>
hasOwnProperty() 메서드가 호출 될 때, foo 객체는 자신에게 없어서 프로토타입 체이닝으로 부모 객체인 Person.prototype 객체에서 hasOwnProperty() 메서드를 찾는다.<br/>
하지만 Person.prototype 에는 constructor 프로퍼티만을 가진 객체이므로 메서드가 없다.<br/>
Person.prototype 객체도 자바스크립트 객체이므로 Object.prototype 을 프로토타입 객체로 가진다.<br/>
프로토타입 체이닝은 Object.prototype 객체로 계속 이어진다. hasOwnProperty() 메소드를 찾고 실행 시킨다.
    
<img src="http://cfile27.uf.tistory.com/image/25476B3B56AB067F207AAE">

*※ 프로토타입 체닝의 종점*<br/>
**자바스크립트에서 Object.prototype 객체는 프로토타입 체이닝의 종점이다.<br/>
모든 자바스크립트 객체는 프로토타입 체이닝으로 Object.prototype 객체가 가진 프로퍼티와 메서드에 접근하고 서로 공유가 가능하다.**

# 20. 프로토타입 메서드와 this 바인딩

메서드 호출 패턴에서의 this 는 그 메서드를 호출한 객체에 바인딩 된다.<br/>
프로토아비 객체 내의 메서드 또한 규칙이 그대로 적용된다.

    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.getName = function() {
        return this.name;
    }
    
    var foo = new Person('foo');
    console.log(foo.getName()); // foo
    
    Person.prototype.name = 'person';
    console.log(Person.prototype.getName());    // person
    
getName() 메서드를 호출한 객체는 foo 이므로, this 는 foo 객체에 바인딩된다.<br/>
따라서 foo.getName() 의 결과값으로 foo 가 출력된다.<br/>
Person.prototype.getName() 와 같이 메서드를 바로 호출하면,<br/>
이때는 getName() 메서드를 호출한 객체가 Person.prototype 이므로 this 도 여기에 바인딩된다.    


# 22. 자바스크립트 실행 컨텍스트

> 실행 컨텍스트의 개념

기존 여러 언어들에는 '콜 스택' 이란 것이 존자한다.<br/>
콜 스택이란 함수를 호출할 때 해당 함수의 호출 정보가 차곡차곡 쌓여있는 스택을 의미한다.

**실행 가능한 자바스크립트 코드 블록이 실행되는 환경**

실행 컨텍스트가 형성되는 경우를 세 가지로 규정
 - 전역 코드
 - eval() 함수로 실행되는 코드
 - 함수 안의 코드를 실행 할 경우

        console.log('This is global context');
        
        function ExContext1() {
            console.log('This is ExContext1');
        };
        
        function ExContext2() {
            ExContext1();
            console.log('This is Excontext2');
        }; 
        
        ExContext2();
    
> 실행 컨텍스트 생성 과정

1) 활성 객체 생성
    
   <img src="http://cfile21.uf.tistory.com/image/272B2C3A56AB10C62D16CA" style="max-width:100%;height:auto" width="263" height="229" filename="컨텍스트2.png" filemime="image/jpeg">
   
   실행 컨텍스트가 생성되면 자바스크립트 엔진은 해당 컨텍스트에서 실행에 필요한 여러가지 정보를 담은 객체를 생성한다.<br/>
   이를 '활성객체'라고 한다.<br/>
   이 객체에 앞으로 매개변수나 사용자가 정의한 변수 밑 객체를 저장하고, 새로 만들어진 컨텍스트로 접근 가능하게 되어있다.<br/>
   이는 엔진 내부에서 접근할 수 있다는 것이지 사용자가 접근할 수 있다는 것은 아니다.
   
2) arguments 객체 생성
   
   <img src="http://cfile26.uf.tistory.com/image/2445E03A56AB10C6206385" style="max-width:100%;height:auto" width="258" height="236" filename="컨텍스트3.png" filemime="image/jpeg">
   
   앞서 만들어진 활성 객체는 arguments 프로퍼티로 이 arguments 객체를 참조한다.
   
3) 스코프 정보 생성   
   
   <img src="http://cfile22.uf.tistory.com/image/2660123A56AB10C7122D1D" style="max-width:100%;height:auto" width="261" height="237" filename="컨텍스트4.png" filemime="image/jpeg">
   
   현재 컨텍스트의 유효 범위를 나타내는 스코프 정보를 생성한다.<br/>
   이 스코프 정보는 현재 실행 중인 실행 컨텍스트 안에서 연결 리스트와 유사한 형식으로 만들어진다.<br/>
   현재 컨텍스트에서 특정 변수에 접근해야 할 경우, 이 리스트를 활용한다.<br/>
   이 리시트로 현재 컨텍스트의 변수뿐 아니라, 상위 실행 컨텍스트의 변수도 접근이 가능하다.<br/>
   이 리스트에서 찾지 못한 변수는 결국 정의되지 않은 변수에 접근하는 것으로 판단하여 에러를 검출한다.<br/>
   이 리스트를 스코프 체인이라고 하는데, \[\[Scope\]\] 프로퍼티로 참조한다.<br/>
   현재 생성된 활성 객체가 스코프 체인의 제일 앞에 추가되며 함수의 인자나 지역 변수 등에 접근 가능하다.
   
4) 변수 생성
    
   <img src="http://cfile22.uf.tistory.com/image/2548383A56AB10C81E149C" style="max-width:100%;height:auto" width="256" height="332" filename="컨텍스트5.png" filemime="image/jpeg">
   
   현재 실행 컨텍스트 내부에서 사용되는 지역 변수의 생성이 이루어진다.<br/>
   실제적으로 앞서 생성된 활성 객체가 변수 객체로 사용된다.<br/>
   활성 객체나 변수 객체는 같은 말이다.<br/>
   이 과정에서 함수 안에 정의된 지역 변수나 내부 함수가 생성된다.<br/>
   주의할 점은 변수나 내부 함수들은 단지 메모리에 생성되는 것이지 초기화는 각 변수나 함수에 해당하는 표현식이 실행되기 전까지 이루어지지 않는 다는 점이다.<br/>
   함수 호이스팅이 궁금증이 풀리는 부분이다.
   
5) this 바인딩

   <img src="http://cfile29.uf.tistory.com/image/2545AF3A56AB10C921D70C" style="max-width:100%;height:auto" width="260" height="336" filename="컨텍스트6.png" filemime="image/jpeg">
   
   마지막 단계에서 this 키워드를 사용하는 값이 할당된다.<br/>
   this 가 참조하는 객체가 없으면 전역 객체를 참조한다. 

6) 코드 실행

   위 과정으로 하나의 실행 컨텍스트가 생성되고, 변수 객체가 만들어 진 후에, 코드에 있는 여러 가지 표현식 실행이 이루어진다.<br/>
   이렇게 실행되면서 변수의 초기화 및 연산, 또 다른 함수 실행 등이 이루어진다.<br/>
   여기서 전역 실행 컨텍스트는 arguments 객체가 없으며, 전역 객체 하나만을 포함하는 스코프 체인이 있다.<br/>
   
# 23. 스코프 체인

자바스크립트도 다른 언어와 마찬가지로 스코프, 즉 유효 범위가 있다.<br/>
오직 함수만이 유효 범위의 한 단위가 된다.

유효 범위를 나타내는 스코프가 \[\[Scope\]\] 프로퍼티로 각 함수 객체 내에서 연결리스트 형식으로 관리되는데 이를 '스코프 체인' 이라 한다.

각각의 함수는 \[\[Scope\]\] 프로퍼티로 자신이 생성된 샐행 컨텍스트의 스코프 체인을 참조한다.<br/>
함수가 실행되는 순간 실행 컨텍스트가 만들어지고, 이 실행 컨텍스트는 실행된 함수의 \[\[Scope\]\] 프로퍼티를 기반으로 새로운 스코프 체인을 만든다.

1) 전역 실행 컨텍스트의 스코프 체인
    
        var var1 = 1;
        var var2 = 2;
        console.log(var1);
        console.log(var2);

    위 예제에는 현재 전역 실행 컨텍스트 단 하나만 실행되고 있어 참조할 상위 컨텍스트가 없다.<br/>
    자신이 최상위에 위차하는 변수 객체인 것이다.<br/>
    따라서 이 변수 객체의 스코프 체인은 자기 자신만을 가진다.<br/>
    다시 말해서, 변수 객체의 \[\[Scope\]\] 는 변수 객체 자신을 가리킨다.<br/>
    이 변수 객체가 곧 전역 객체가 되는 것이다.
    
2) 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인
    
        var var1 = 1;
        var var2 = 2;
        function func() {
            var var1 = 10;
            var var2 = 20;
            console.log(var1);  // 10
            console.log(var2);  // 20
        }                
        func();
        console.log(var1);  // 1
        console.log(var2);  // 2
    
    함수 객체가 생성될 때, 그 함수 객체의 \[\[Scope\]\]는 현재 실행되는 컨텍스트의 변수 객체에 있는 \[\[Scope\]\]를 그대로 가진다.<br/>
    따라서, func 함수 객체의 \[\[Scope\]\]는 전역 변수 객체가 된다.
    
    func() 함수를 실행하면 새로운 컨텍스트가 만들어진다.<br/>
    func() 함수 컨텍스트의 스코프 체인은 실행된 함수의 \[\[Scope\]\] 프로퍼티를 그대로 복사한 후, 현재 생성된 변수 객체를 복사한 스코프 체인의 맨 앞에 추가한다.
    
    - 각 함수 객체는 \[\[Scope\]\] 프로퍼티로 현재 컨텍스트의 스코프 체인을 참조한다.
    - 한 함수가 실행되면 새오룬 실행 컨텍스트가 만들어지는데, 이 새로운 실행 컨텍스트는 자신이 사용할 스코프 체인을 다음과 같은 방법으로 만든다.
        - 현재 실행되는 함수 객체의 \[\[Scope\]\] 프로퍼티를 복사하고,
        - 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 추가한다.
    - 요약 하면, 스코프 체인 = 현재 실행 컨텍스트의 변수 객체 + 상위 컨텍스트의 스코프 체인
    
    ex)
       
        var value = 'value1';
        
        function printFunc(func) {
            var value = 'value2';
            
            function printValue() {
                return value;
            }
            console.log(printValue());
        }
        
        printFunc();
        
    <img src="http://cfile22.uf.tistory.com/image/22236F4456AB1945024C29" style="max-width:100%;height:auto" width="687" height="501" filename="스콥체인1.png" filemime="image/jpeg">
     
        var value = 'value1';
        
        function printValue() {
            return value;
        }
        
        function printFunc(func) {
            var value = 'value2';
            console.log(func());
        }
        
        printFunc(printValue);
        
    위 예제는 각 함수 객체가 처음 생성될 당시 실행 컨텍스트가 무엇인지를 생각해야 한다.<br/>
    각 함수 객체가 처음 생성될 때 \[\[Scope\]\]는 전역 객체의 \[\[Scope\]\]를 참조한다.<br/>
    따라서, 각 함수가 실행될 때 생성되는 실행 컨텍스트의 스코프 체인은 전역 객체와 그 앞에 새롭게 만들어진 변수 객체가 추가된다.            
    <img src="http://cfile2.uf.tistory.com/image/246B544456AB1946303FB3" style="max-width:100%;height:auto" width="684" height="501" filename="스콥체인2.png" filemime="image/jpeg">
    
    함수를 호출할 때 스코프 체인의 가장 앞에 있는 객체가 변수 객체이므로, 이 객체에 있는 공식 인자, 내부 함수, 지역 변수에 대응되는지 먼저 확인한다.<br/>
    대응 되는 이름의 프로퍼티를 찾을 때까지 계속해서 다음 객체로 이동하며 찾는다.    
    
# 24. 클로저

    function outerFunc() {
        var x = 10;
        var innerFunc = function() { console.log(x); }
        return innerFunc;
    }    
    
    var inner = outerFunc();
    inner()

<img src="http://cfile28.uf.tistory.com/image/252BCF3756AB1B77300820" style="max-width:100%;height:auto" width="683" height="480" filename="클로저1.png" filemime="image/jpeg">

예제와 그림을 보면 알 수 있듯이 outerFunc 실행 컨텍스트는 사라졌지만, outerFunc 변수 객체는 여전히 남아있고, innerFunc 의 스코프 체인으로 참조되고 있다.<br/>
이게 바로 자바스크립트에서 구현한 '클로저' 개념이다

자바스크립트 함수는 일급 객체로 취급된다.<br/>
이는 함수를 다른 함수의 인자로 넘길 수도 있고, return 으로 함수를 통째로 반환받을 수도 있다.<br/>
앞의 예제에서 중요하게 볼 점은 최종 반환되는 함수가 외부 함수의 지역변수에 접근하고 있다는 것이 중요하다.     

**이 지역변수에 접근하려면, 함수가 종료되어 외부 함수의 컨텍스트가 반환되더라도 변수 객체는 반환되는 내부 함수의 스코프 체인에 그대로 남아있다면 접근할 수 있다.**

쉽게 풀어 말하면, **'이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다'**

    function outerFunc(arg1, arg2) {
        var local = 8;
        function innerFunc(innerArg) {
            console.log((arg1 + arg2)/(innerArg + local));
        }
        
        return innerFunc;
    }
    
    var exam1 = outerFunc(2, 4);
    exam1(2);
    
위 예제에서는 outerFunc() 함수를 호출하고 반환되는 함수 객체인 innerFunc() 가 exam1 으로 참조된다.<br/>
이것은 exam1(n)의 형태로 실행될 수 있다.

여기서 outerFunc()가 실행되면서 생성되는 변수 객체가 스코프 체인에 들어가게 되고, 이 스코프 체인은 innerFunc 의 스코프 체인으로 참조된다.

즉, outerFunc() 함수가 종료되었지만, 여전히 내부 함수(innerFunc())의 \[\[Scope\]\]으로 참조되므로 가비지 컬렉션의 대상이 되지 않고 여전히 접근이 가능하게 살아있다.

innerFunc()에서 참조하고자 하는 변수 local 에 접근이 가능하도록 클로저가 만들어진다.<br/>
outerFunc 변수 객체의 프로퍼티 값은 여전히 읽기 및 쓰기까지 가능하다.

<img src="http://cfile1.uf.tistory.com/image/2741983756AB1B791D14B7" style="max-width:100%;height:auto" width="684" height="508" filename="클로저2.png" filemime="image/jpeg">

**※ 클로저에서 접근하는 변수는 대부분이 스코프 체인 첫 번째 객체가 아닌 그 이후 객체에 존재한다. 이는 성능적인 면과 자원적인 면에서 문제를 유발시킬 수 있는 여지가 있다. 이러한 성능 이슈를 잘 해결하여 클로저를 사용해야한다.**

# 25. 클로저의 활용

1. 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

        function HelloFunc(func) {
            this.greeting = 'hello';
        }
        
        HelloFunc.prototype.call = function(func) {
            func ? func(this.greeting) : this.func(this.greeting);
        }
        
        var userFunc = function(greeting) {
            console.log(greeting);
        }
        
        var objHello = new HelloFunc();
        objHello.func = userFunc;
        objHello.call();
    위 예제에서 HelloFunc()는 greeting 만을 인자로 넣어 사용자가 인자로 넘긴 함수를 실행시킨다.<br/>
    그래서 사용자가 정의한 함수도 한 개의 인자를 받는 함수를 정의할 수 밖에 없다.
    
    아래의 코드는 여러 개의 인자를 받아서 클로저로 처리할 수 있도록 구현하였다.
    
        function HelloFunc(func) {
            this.greeting = 'hello';
        }        
        
        HelloFunc.prototype.call = function(func) {
            func ? func(this.greeting) : this.func(this.greeting);
        }
        
        var userFunc = function(greeting) {
            console.log(greeting);
        }
        
        var objHello = new HelloFunc();
        objHello.func = userFunc;
        objHello.call();
        
        function saySomething(obj, methodName, name) {
            return (function(greeting) {
                return obj[methodName](greeting, name);
            });
        }
        
        function newObj(obj, name) {
            obj.func = saySomething(this, 'who', (name || 'everyone'));
            
            return obj;
        }
        
        newObj.prototype.who = function(greeting, name) {
            console.log(greeting + '' + (name || 'everyone') );
        }
        
        var obj1 = new newObj(objHello, 'zzoon');
        obj1.call();
        
    위 코드에서는 obj1.call() 을 실행하게 되면 newObj.prototype.who 함수가 호출되어 사용자가 원하는 결과인 'hello zzoon'을 출력한다.
    
    여기서 saySomethng() 함수는 <br/>
    첫 번째 인자로 newObj 객체를<br/>
    두 번째 인자로 사용자가 정의한 메서드 이름인 'who' 를<br/>
    세 번째 인자로 사용자가 원하는 사람 이름 값 'zzoon' 을
    
    반환하는 값으로는 사용자가 정의한 newObj.prototype.who() 함수를 반환하는 helloFunc() 함수를 반환한다.
    
    이렇게 반환되는 함수가 HelloFunc 이 원하는 function(greeting) {} 형식의 함수가 되는데, 이것이 HelloFunc 객체의 func 로 참조된다.<br/>
    obj1.call() 로 실행되는 것은 실질적으로 newObj.prototype.who() 가 된다.
    
    이러한 방식으로 사용자는 자신의 객체 메서드인 who 함수를 HelloFunc 에 연결시킬 수 있다.<br/>
    이 코드의 클로저는 saySomething() 에서 반환되는 function(greeting) {} 이 되고,<br/>
    이 클로저는 자유 변수 obj, methodName, name 을 참조한다.
    
    **앞 예제는 브라우저의 onclick, onmouseover 와 같은 프로퍼티에 해당 히벤트 핸들러를 사용자가 정의해 놓을 수가 있는데 이벤트 핸들러의 형식은 function(event) {} 이다.<br/>
    이를 통해 브라우저는 발생한 이벤트를 event 인자로 사용자에게 넘겨주는 형식이다.<br/>
    여기에 event 외의 원하는 인자를 더 추가한 이벤트 핸들러를 사용하고 싶을 때, 앞과 같은 방식으로 클로저를 적절히 활용해줄 수 있다.**  
    
2. 함수의 캡슐화

   자바스크립트에서 캡슐화는 다른 함수의 접근으로 쉽게 값이 바뀌고 실수로 같은 이름의 변수를 만들어 버그가 생기는 등의 문제를 행결하기 위해 사용된다.<br/>
   이런 문제를 해결하지 않으면 다른 JS 코드들과의 통합이나 라이브러리 제작 시에 문제를 야기할 수가 있다.

        var buffAr = [
            'I am ',
            '',
            ', I live in ',
            '',
            ', I\'am ',
            '',
            ', yaers old.'
        ];
    
        function getCompletedStr(name, city, age) {
            buffAr[1] = name;
            buffAr[3] = city;
            buffAr[5] = age;
            
            return buffAr.join('');
        }          
        
        var str = getCompletedStr('zzoon', 'seoul', 16);
        console.log(str);
    
    위 코드는 캡슐화가 제대로 되지 못하는 예제이므로, buffAr 배열은 전역 변수로서, 외부에 노출되어 있다. 이를 클로저를 통해 코쳐보자.

        var getCompletedStr = (function() {
            var buffAr = [
                'I am ',
                '',
                ', I live in ',
                '',
                ', I\'am ',
                '',
                ', yaers old.'
            ];
            
            return (function getCompletedStr(name, city, age) {
                       buffAr[1] = name;
                       buffAr[3] = city;
                       buffAr[5] = age;
                       
                       return buffAr.join('');
                   }); 
        })();
        
        var str = getCompletedStr('zzoon', 'seoul', 16);
        console.log(str);
    
    가장 먼저 주의해서 봐야 할 점은 변수 getCompletedStr 에 익명 함수를 즉시 실행시켜 반환되는 함수를 할당하는 것이다.<br/>
    이 반환되는 함수가 클로저가 되고, 이 클로저는 자유 변수 buffAr 을 스코프 체인해서 참조할 수 있다.

    <img src="http://cfile4.uf.tistory.com/image/2626A24F56AB1F8B332EB7" style="max-width:100%;height:auto" width="673" height="512" filename="클로저 활용.png" filemime="image/jpeg" ""="">

3) setTimeout() 에 지정되는 함수의 사용자 정의 
    
    setTimeout 함수는 웹 브라우저에서 제공하는 함수이다.<br/>
    첫 번째 인자로 넘겨지는 함수 실행의 스케쥴링을 할 수 있다.<br/>
    두 번째 인자인 밀리 초 단위 숫자만큼의 시간 간격으로 해당 함수를 호출한다.
    
        function callLater(obj, a, b) {
            return (function() {
                obj['sum'] = a + b;
                console.log(obj['sum']);
            });
        }
        
        var sumObj = {
            sum: 0
        }
        
        var func = callLater(sumObj, 1, 2);
        setTimeout(func, 500);
     
# 26. 클로저를 활용할 때 주의사항

1. 클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러번 호출에 의해 항상 변할 수 있을에 유의해야 한다.

        function outerFunc(argNum) {
            var num = argNum;
            return function(x) {
                num += x;
                console.log('num: ' + num);
            }
        }      
        
        var exam = outerFunc(40);
        
        exam(5);
        exam(-10);
        
    exam(n) 이 여러번 호출됨에 따라, 자유 변수 num 의 값은 계속 변하니 주의하기 바란다.
    
2. 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우 유의

        function func() {
            var x = 1;
            return {
                func1: function() { console.log(++x); },
                func2: function() { console.log(-x); }
            };
        }
        
        var exam = func();
        exam.func1();
        exam.func2();
        
    반환되는 객체에 2개의 함수가 정의되어 있는데, 두 함수 모두 자유 변수 x를 참조한다.<br/>
    두 함수를 호출할 때마다 x 값이 변하므로 유의해야 한다.
    
3. 루프 안에서 클로저를 활용할 때는 주의

        function countSeconds(howMany) {
            for (var i = 1; i <= howMany; i++) {
                setTimeout(function() {
                    console.log(i);
                }, i * 1000);
            }
        }            
        countSeconds(3);
    
    1초 간격으로 출력을 의도하고 만들어진 예제이지만, 결과는 4가 연속 3번 1초 간격으로 출력된다.<br/>
    setTimeout 함수가 실행되는 시점은 countSecondes() 함수의 실행이 종료된 이후이고, i 값은 이미 4가 된 상태이다.
    
    원하는 결과를 얻기 위해 아래와 같이 코드를 수정해 보았다.<br/>
    
        function countSeconds(howMany) {
            for (var i = 1; i <= howMany; i++) {
                (function (currentI) {
                    setTimeout(function() {
                        console.log(currentI);
                    }, currentI * 100);
                }(i));
            }
        }        
        
        countSeconds(3);
        
    즉시 실행 함수를 실행시켜 루프 i 값을 currentI 에 복사해서 setTimeout() 에 들어갈 함수에서 사용하면, 원하는 결과를 얻을 수 있다.        

# 27. 문서 객체 모델

문서 객체 모델은 넓은 의미로 웹 브라우저 HTML 페이지를 인식하는 방식이고 좁은 의미로는 document 객체와 관련된 객체의 집합이다.

HTML 페이지를 트리 모양으로 나타낼 수 있으며, 각 요소를 '노드' 라고 부른다.

노드는 '요소 노드(Element node)' 와 '텍스트 노드(Text node)' 로 구분할 수 있다.

요소 노드: HTML 태그를 의미<br/>
텍스트 노드: 요소 노드 안에 들어있는 글자를 의미

웹 페이지가 처음 HTML 페이지에 적혀 있는 태그들을 읽으며 생성하는 것을 '정적으로 문서를 객체를 생성한다.' 라고 표현한다.<br/>
페이지의 내용을 특별한 변화 없이 생성하기에 붙은 이름이다.<br/>
반면 자바스크립트를 이용해 원래 HTML 페이지에는 없던 객체를 생성하는 것을 '동적으로 문서 객체를 생성한다.' 라고 표현한다.

# 28. 문서 객체 만들기

문서 객체는 가장 기본적으로 텍스트 노드를 같는 문서 객체와 텍스틑 노드를 갖지 않는 문서 객체로 구분할 수 있다.

1. 텍스트 노드를 갖는 문서 객체 생성
    
    텍스트 노드를 갖는 문서 객체를 생성하려면 요소 노드와 텍스트 노드를 생성한 후에 텍스트 노드를 요소 노드에 붙여준다.<br/>
    document 객체가 가지는 메서드를 사용해 요소 노드와 텍스트 노드를 생성할 수 있다.<br/>
    화면에 문서 객체를 출력하려면 생성한 문서 객체를 body 문서 객체에 연결해야 한다. 또한 생성한 요소 노드와 텍스트 노드도 연결해야 한다.
    
    - createElement(tagName) : 요소 노드를 생성
    - createTextNode(text) : 텍스트 노드를 생성
    - appendChild(node) : 객체에 노드를 연결
    
    
    window.onload = function() {
        var header = document.createElement('h1');
        var textNode = document.createTextNode('Hello DOM');
        // 노드 연결
        header.appendChild(textNode);
        document.body.appendChild(header);
    }

2. 텍스트 노드를 갖지 않는 문서 객체 생성

    텍스트 노드를 갖지 않는 대표적인 HTML 태그는 img 이다. img 태그는 텍스트 노드 대신에 많은 속성을 가지고 있는데, DOM 에서는 속성도 하나의 노드이다. 따라서, 노드를 생성해 요소 노드에 붙이는 것처럼 속성 노드를 생성해 요소 노드에 붙어야 한다.
    
        window.onload = function() {
            var img = document.createElement('img');
            img.src = img.jpg';
            img.width = 500;
            img.height = 350;
            // 노드 연결
            document.body.appendChild(img);
        }    
        
    img 태그를 생성하고 body 문서 객체에 연결한다. img 태그에 이미지를 넣으려면 src 속성을 지정해야한다.<br/>
    위 예제 코드와 같이 지정할 수 있다. 하지만, 방법은 웹 표준이 정의하거나 웹 브라우저가 지원하는 태그의 속성에만 사용할 수 있다.<br/>
    웹 브라우저가 지원하지 않는 속성은 다음과 같은 메서드를 사용해야 속성을 넣을 수 있다.
    
    - setAttribute(name, value) : 객체의 속성을 지정
    - getAttribute(name) : 객체의 속성을 가져온다.
    
        window.onload = function() {
            var img = document.createElement('img');
            img.setAttribute('src', 'img.jpg');
            img.setAttribute('width', 500);
            img.setAttribute('height', 350);
            
            // setAttribute() 메서드를 사용하지 않으면 불가능하다.
            img.setAttribute('data-property', 350);
            
            document.body.appendChild(img);
        }            

3. 문서 객체의 innerHTML 속성

    innerHTML 속성은 문자열을 선언하고 body 문서 객체의 innerHTML 속성에 넣기만 하면 문서 객체가 생성된다.
    
        window.onload = function() {
            var output = '';
            output += '<ul>';
            output += ' <li>JavaScript</li>';
            output += ' <li>jQuery</li>';
            output += ' <li>Ajax</li>';
            output += '</ul>';
            
            document.body.innerHTML = output;
        }            
        
인터넷 익스플로러를 제외한 브라우저는 모든 문서 객체의 innerHTML 속성을 바꿀 수 있지만, 인터넷 익스플로러는 col, colgroup, head, html, style, table, tbody, tfoot, thead, title, tr 태그의 innerHTML 속성을 바꿀 수 없다. innerHTML 속성을 응용하면서 문서 객체를 생성하는 것 외에는 문서 객체를 수정하거나 삭제할 수도 있다.            

# 29. 문서 객체 가져오기

document 객체가 가지는 메서드를 사용하면 이미 웹 페이지에 존재하는 문서 객체를 가져올 수 있다.

- getElementById(id) : 태그의 id 속성이 id 와 일치하는 문서 객체를 가져온다.

        window.onload = function() {
            var header1 = document.getElementById('header_1);
            var header2 = document.getElementById('header_2);
            
            header1.innerHTML = 'with getElementById()';
            header2.innerHTML = 'with getElementById()';
        }

  document 객체의 getElementById() 메서드는 한 번에 한 가지 문서 객체만 가져올 수 있다.<br/>
  Elements 메서드를 사용하면 한 번에 여러 개의 문서 객체를 가져올 수 있다.
  
- getElementsByName(name) : 태그의 name 속성이 name 과 일치하는 문서 객체를 배열로 가져온다.
- getElementsByTagName(tagName) : tagName 과 일치하는 문서 객체를 배열로 가져온다.

        window.onload = function() {
            var headers = document.getElementsByTagName('h1');
            for(var i = 0; i < headers.length; i++) {
                headers[i].innerHTML = 'With getElementsByTagName()';
            }
        }     
  변수 headers 는 문서 객체를 가지는 배열이며, HTML 페이지의 h1 태그가 순서대로 들어간다.<br/>
  headers 는 배열이므로 반복문을 사용할 수 있으며, 주의할 점은 for in 반복문을 사용해서는 안된다든 점이다.<br/>
  for in 반복문을 사용하면 문서 객체 이외의 속성에도 접근하기 때문이다.<br/>
  
CSS 선택자로도 문서 객체를 선택할 수 있다.

- document.querySelector(선택자) : 선택자로 가장 처음 선택되는 문서 객체를 가져온다.
- document.querySelectorAll(선택자) : 선택자로 선택되는 문서 객체를 배열로 가져온다.
        
        <script>
            window.onload = function() {
                var header1 = document.querySelector('#header_1');
                var header2 = document.querySelector('header_2');
                
                header1.innerHTML = 'with getElementById()';
                header2.innerHTML = 'with getElementById()';
            }
        </script>
        <body>
            <h1 id='header_1'>Header</h1>
            <h1 id='header_2'>Header</h1>
        </body>                    
        
        
        