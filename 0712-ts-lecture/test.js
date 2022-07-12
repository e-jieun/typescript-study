// let a: number = 1; 
// ?계속 블록범위 변수 에러가 뜨는 이유는 같은 레포지터리에 있는 파일을 모두 검사하기 때문에 다른 js 파일로 컴파일한 부분들에서 에러를 낸다
// 블록범위 변수 'a'어쩌고 에러
// 일부러 하위호환해주려고 var를 사용해주는 것
// 오히려 보기 편하고 코드 
// *command: tsc filename.ts -> compile
// *컴파일이 안되면 npm install -g typescript
// 전역변수: -g
// 지역변수: -i
// 환경변수: environment => 시작 프로그램, 키자마자 실행되는 프로그램들
// *function
// !point: 타입 명시만으로 상당히 편리해진다
var sum = function (a, b) {
    // 이 부분에 조건문을 달았었다
    return a + b;
};
// a('a', 10); //error sign: js에선 불친절하다, ts는 상세하게 에러
sum(1, 10);
// let arr = []; //js => 동적으로 챙겨줌
// *data를 가져와서 사용하게 될 때 유용
var arrOne = [1];
var arrTwo = [1, 2, 3];
// 생성자 함수 쓸 때 끝내준다
// 실무에서 많이 쓴다
var obj = {
    a: 1,
    b: 'hello'
};
// *정적으로 데이터타입을 명시하면서 개발 => 프로그래밍 언어 일반에 가까움
// ?enum
// ?enum이란 열거형 변수로 정수를 하나로 합칠 때 편리한 기능, 임의으 숫자, 문자열 할당, 하나의 유형으로 사용해 버그 줄임
var Color;
(function (Color) {
    // ?1. 배열처럼 인덱스가 존재
    // ?2. 임의의 숫자나 문자열을 할당할 수 있음
})(Color || (Color = {}));
// ?이렇게도 enum이 사용 가능하다고 한다
// ?https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
// const os: MOBILE_OS = MOBILE_OS.IOS
// function detectOSType(userAgent: string): MOBILE_OS {
//     // 생략
// }
// *any를 사용하면 기존의 js처럼 사용이 가능
var ageArr = [1, '마흔', '서른', 20, 30];
// *as
// ?혹시나 타입을 강제로 바꾸고 싶을 때 
// ?바꿀 것 as 바꾸고 싶은 타입
// ?상속관계에서는 unknown을 안 싸도 된다
var hello = 12;
hello;
