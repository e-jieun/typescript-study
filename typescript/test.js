let hi = 'hello world';
// hi = 123;
let arr = ['1', '2'];
// arr = [1, 2, 3];
// let obj: {name: string} = {name: 'jieunlee'};
let obj = { name: 'jieunlee' };
let hello = 'hello world';
hello = 123;
// ?매개변수도 타입 지정이 가능하다
// ?리턴의 타입을 정해주고 싶을 때? -> 매개변수를 작성하는 소괄호 끝에 타입을 작성해주면 된다
function sum(a, b) {
    return a + b;
}
let jieun = ['lee', 28];
let jimin = {
    name: 'lee',
    age: '23'
};
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
