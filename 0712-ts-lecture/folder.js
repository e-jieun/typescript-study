// file system
const fs = require('fs'); //node.js에 fs 요청

const pokemon = require('pokemon');  
//fe에서 하려면 서버를 돌려야 한다, be에서 node.js로 하면 간단

const spotify = require('spotify');

let test = ['임성민', '이지은', '권수연', '이성윤', '정수임', '김준식', '오요섭'];

for(let i = 0; i < test.length; i++){
  //mkdir: make directory
  // 매개변수(경로, 콜백)
  fs.mkdir(`${test[i]}`, function (err) {
    if (err === true) {
      console.log('error!');
    }
  });
}

// *node.js
// *server가 내장
// *사진첩 백업 등
// *npm이라는 강력한 기능 => 실행창용이 아니라 프로그래밍용
// *언어만 js
// *node.js 설치하면 자동으로 npm도 설치, 뭐가 있는지 알면 설치 가능
