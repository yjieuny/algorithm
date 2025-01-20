/*
문제. n보다 커질 떄까지 더하기
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(numbers, n) {
  let sum = 0;
  for (let i = 1; i <= numbers.length; i++) {
    const arr = numbers.slice(0, i);
    const sum = arr.reduce((a, c) => a + c, 0);
    if (sum > n) {
      return sum;
    }
  }
}

console.log([34, 5, 71, 29, 100, 34], 123); //139
