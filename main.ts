let title = document.getElementById('title');
// *1.
// ?개체가 null인 것 같습니다 => narrowing 
// if(title !== null){
//   title.innerHTML = 'hello jieun';
// }
// *2.
// ?instancof 연산자
// ? objectname instanceof classname => 이 오브젝트가 클래스의 인스턴스(붕어빵)이냐
// if(title instanceof Element){
//   title.innerHTML = 'hello jieun';
// }
// *3.
// ?as? => null이 들어와도 Element 타입으로 확정될 수가 있다
// !100% 확신을 할 때, 타입 스크립트 쓰는 의미가 없어질 수도 있음
// let title = document.getElementById('title') as Element;
// *4.
// ?innerHTML이 있으면 출력해주고 없으면 undefined를 뱉어준다
// ?optional chaining
if(title?.innerHTML){
  title.innerHTML = 'hello jieun';
}
// *5.
// ?"strictNullChecks": true를 false로 바꿔준다

const link = document.querySelector('a');
console.log(link);
// ?element 타입은 정의된 것이 없음
// ?element type 상세한 태그별 타입이 존재한다
// ?태그별 타입은 속성을 상세하게 제어가 가능하다
// ?정확하게 narrowing을 해줘야 태그의 속성을 정확하게 사용이 가능하다
// if(link instanceof HTMLAnchorElement){
  //   link.textContent = 'NAVER';
  //   link.href = 'http://www.naver.com';
  // }
// link?.href = 'www.naver.com';
// ?=> error msg => main.ts:47:1 - error TS2779: The left-hand side of an assignment expression may not be an optional property access.

// !수정함
if(link?.href){
  link.href = 'http://www.naver.com';
}
// link?.href ? link.href = 'http://www.naver.com' : null;


const button = document.getElementById('btn');
console.log(button);
// ?왜 물음표를 사용하는지? => 내가 찾은 것이 htmlelement인지 
// ?물음표 연산자 => 오브젝트에 속성이 포함이 되어있는지 체크하는 연산자, 포함이 안됐다면 undefined를 리턴
// button?.addEventListener('click', () => {
//   button.textContent = 'don\'t click!';
// })
button?.addEventListener('click', () => {
  button.innerHTML = 'hi';
})