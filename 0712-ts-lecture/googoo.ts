function googoo(dan: number, count: number){
  for(let i = 1; i <=count; i++){
    console.log(dan*i);
  }
}
googoo(8, 20);  // 프로젝트 전체를 확인해준다

// *적응법: 매개변수 설정할 때 미리 지정할 수 없나라는 물음을 떠올리기
// *숫자를 문자로 바꾸는 경우, 문자를 배열로 바꾸는 경우
// *형변환: 그렇게 많지 않다
// 혹시 이거 지정할 수 있지 않은가 생각해보기