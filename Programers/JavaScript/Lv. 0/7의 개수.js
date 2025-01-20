/*
풀이. 7의 개수
 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

//Case1
function solution(array) {
  const joinedString = array.join("");
  const countOfSevens = (joinedString.match(/7/g) || []).length;

  return countOfSevens;
}

//Case2
function solution(array) {
  return array.join("").split("7").length - 1;
}

//Case3
function solution(array) {
  return Array.from(array.join("")).filter((v) => v === "7").length;
}
