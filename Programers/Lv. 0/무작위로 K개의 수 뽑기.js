/*
문제. 무작위로 K개의 수 뽑기
랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다.적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후,
지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.
이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.
정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 완성될 배열을 return 하는 solution 함수를 완성해 주세요.
단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.
*/

//Case1
function solution(arr, k) {
  const deduplicateValues = [...new Set(arr)];
  return deduplicateValues.length >= k ? deduplicateValues.slice(0, k) : deduplicateValues.slice(0, k).concat(Array(k - deduplicateValues.length).fill(-1));
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); //[0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); //[0, 1, -1, -1]
console.log(solution([0, 1, 2, 2, 3], 4)); //[0, 1, 2, 3]
console.log(solution([0, 1], 4)); //[0, 1, -1, -1]

//Case2
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}

//Case3
function solution(arr, k) {
  return [...Array.from(new Set(arr)), ...new Array(k).fill(-1)].slice(0, k);
}
