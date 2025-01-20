/*
문제. 문자열의 뒤의 n글자
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, n) {
  return Array.from(my_string).reverse().slice(0, n).reverse().join("");
}

console.log(solution("He110W0r1d", 5)); //"W0r1d"
