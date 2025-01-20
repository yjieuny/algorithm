/*
문제. 문자열 반복해서 출력하기
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
*/

//Case1
const str = "string";
const n = 5;

console.log(str.repeat(n)); //"stringstringstringstringstring"

//Case2
function repeatString(str, n) {
  let repeatedString = "";

  for (let i = 0; i < n; i++) {
    repeatedString += str;
  }
  return repeatedString;
}
