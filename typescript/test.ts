let hi: string = 'hello world';
// hi = 123;

let arr:string[] = ['1', '2'];
// arr = [1, 2, 3];

// let obj: {name: string} = {name: 'jieunlee'};
let obj: {name?: string} = {name: 'jieunlee'};
// ?속성이 옵션일 때 정해지지 않았을 때 물음표를 적어서 불확실할 때 에러를 내지 않도록 도와준다

// ?union type
// ?만약 하나의 변수를 두가지 타입으로 사용하거나 문자열로 지정했는데 숫자로도 값을 재할당할 때 에러가 나지 않도록 해주는 방법 |연산자를 사용한다
// ?그런데 |연산자를 ||로 사용하면 에러가 나므로 주의할 것
// let hello: string | number = 'hello world';
// hello = 123;

// 만약에 위에서처럼 타입 지정이 길어질 때 변수로 타입을 만들어둔 뒤에 타입 지정도 가능하다
// ?type이라고 변수 선언을 해줘야 한다
// ?보통 파스칼 케이스로 작성한다 
type HelloType = string | number;
let hello:HelloType = 'hello world';
hello = 123;

// ?매개변수도 타입 지정이 가능하다
// ?리턴의 타입을 정해주고 싶을 때? -> 매개변수를 작성하는 소괄호 끝에 타입을 작성해주면 된다
function sum(a:number, b:number):number{
  return a+b;
}
// => 무조건 넘버로 매개변수를 받고 반환값 타입이 무조건 넘버로 리턴되는 함수를 작성하게 됐다

// ?tuple type => arr에 사용가능
type Person = [string, number];
let jieun:Person = ['lee', 28];

// ?하나의 속성만 사용한다면 키의 이름과 값 타입으로 지정해줘도 되지만 
// ?보통 객체는 여러개의 속성을 사용하기 위해 사용하는 경우가 많다
// ?일일이 타입을 지정하지 않고 한꺼번에 지정해두고 사용하는 방법은 없을까?
type Member = {
  // name:string
  [key:string]:string
}
let jimin:Member = {
  name: 'lee',
  age: '23'
};
