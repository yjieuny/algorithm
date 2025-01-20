/*
문제. 한번만 등장한 문자
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

//Case1
function solution(inputString) {
  let result = [];

  for (let char of inputString) if (inputString.indexOf(char) === inputString.lastIndexOf(char)) result.push(char);

  return result.sort().join("");
}

console.log(solution("abcabcadc")); //"d"
console.log(solution("abdc")); //"abcd"
console.log(solution("hello")); //"eho"

//Case2
function solution(s) {
  return [...s]
    .filter(function (c) {
      return s.match(new RegExp(c, "g")).length == 1;
    })
    .sort()
    .join("");
}
