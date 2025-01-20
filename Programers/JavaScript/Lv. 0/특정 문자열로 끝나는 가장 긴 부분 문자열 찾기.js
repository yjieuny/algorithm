/*
문제. 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
*/

//Case1
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

console.log(solution("AbCdEFG", "dE")); //"AbCdE"
console.log(solution("AAAAaaaa", "a")); //"AAAAaaaa"

//Case2
function solution(myString, pat) {
  return myString.substring(0, myString.lastIndexOf(pat)) + pat;
}
