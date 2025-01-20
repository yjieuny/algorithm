/*
문제. 2차원으로 만들기
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
*/

//Case1
function solution(num_list, n) {
  let array = [];

  while (num_list.length) {
    array.push(num_list.splice(0, n));
  }

  return array;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); //[[100, 95, 2], [4, 5, 6], [18, 33, 948]]

//Case2
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
