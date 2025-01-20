/*
문제. 등차수열의 특정한 항만 더하기
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
*/

//Case1
function solution(a, d, included) {
  const sequence = [];

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      sequence.push(a + i * d);
    }
  }
  return sequence.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(3, 4, [true, false, false, true, true])); //37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); //10

//Case2
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

//Case3
function solution(a, d, included) {
  var answer = 0;
  included.map((x, i) => {
    if (x) answer += a + d * i;
  });
  return answer;
}

//Case4
function solution(a, d, included) {
  return Array(included.length)
    .fill(a)
    .map((x, idx) => x + idx * d)
    .map((x, idx) => (included[idx] ? x : 0))
    .reduce((a, b) => a + b);
}
