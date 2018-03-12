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
    
filter() 메서드는 매개 변수로 입력한 함수는 불리언을 리턴해야 한다.<br/>
이 때, 리턴하는 값이 true 인 배열의 요소만을 골라 새로운 배열을 만든다.<br/>
요소의 크기가 5이하인 숫자를 골랐으므로 새로운 배열이 생성한다.     

- forEach()

배열의 각각의 요소를 사용해 특정 함수를 for in 반복문처럼 실행한다.<br/>
메서드의 매게 변수로 입력한 함수는 element, index, array 매개 변수를 갖는다.<br/>
매개 변수 element 는 현재 반복에서 배열의 요소를 뜻한다.<br/>
매개 변수 index 는 현재 반복에서 배열 요소의 인덱스를 뜻한다.<br/>
매개 변수 array 의 경우는 현재 반복을 수행하는 배열 자체를 뜻한다.

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
매개 변수로 입력한 함수는 filter() 메서드와 마찬가지로 불리언을 리턴해야 한다.
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
map() 메서드는 지금까지 보았던 메서드와 달리 간단한 형태의 매개 변수로 넣는다.<br/>
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
indexOf() 메서드와 lastIndexOf() 메서드는 모두 매개 변수에 검색하려는 요소를 입력한다.
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
    
예제 코드와 같이 String() 생성자에 만들 객체가 가질 문자열 값을 매개 변수로 전달 가능하다.<br/>
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
    
예제 코드와 같이 Number() 생성자에 만들 객체가 가질 문자열 값을 매개 변수로 전달 가능하다.<br/>
하지만 코딩 가이드에서는 리터럴/원시값 으로 문자열을 생성하도록 권장한다.<br/>
new Number() 으로 생성하였을 시에는 typeof 연산자로 검사한 결과 Object 로 나오기 때문에 좋지 못하다.

> <a href="http://programmer-seva.tistory.com/20?category=615259"><<<<<<<<<<<<< 메서드 다시보기</a>

# 8. Date 객체를 활용한 시간 구하기

Date 객체는 날짜와 시간을 표시하는 객체이다.

    var date = new Date();  // 시스템의 현재 날짜를 자동으로 지정
    
    console.log(date);
    
이렇게 생성자 함수에 어떠한 매개 변수도 입력하지 않으면 현재 시간으로 초기화 한다.<br/>
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
매개 변수는 변수의 데이터타입을 기술하지 않아도 된다.

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

/* Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체이다.Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체이다.<br/>위 결과를 살펴보면, Function Prototype 객체의 __proto__ 프로퍼티는 Object.prototype 객체를 가리키고 있다. */
