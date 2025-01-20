/*
문제. 조건에 맞게 수열 변환하기 2
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
*/

//Case1
function solution(arr) {
  const operate = (num) =>
    num >= 50 && num % 2 === 0
      ? num / 2
      : num < 50 && num % 2 !== 0
      ? num * 2 + 1
      : num;

  const stringifyArray = (arr) => arr.join(",");

  const visited = new Map();
  let x = 0;
  let currentArr = arr;

  while (!visited.has(stringifyArray(currentArr))) {
    visited.set(stringifyArray(currentArr), x);
    currentArr = currentArr.map(operate);
    x++;
  }

  return visited.get(stringifyArray(currentArr));
}

console.log(solution([1, 2, 3, 100, 99, 98])); //5

//Case2
function solution(arr, count = 0) {
  const temp = [...arr].map((n) =>
    n >= 50 && !(n % 2) ? n / 2 : n < 50 && n % 2 ? n * 2 + 1 : n
  );
  if (arr.every((n, i) => n === temp[i])) return count;
  return Math.max(count, solution(temp, count + 1));
}
