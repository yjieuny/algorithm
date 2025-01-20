/*
문제. 배열 만들기 6
0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.
i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.
만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.
단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
*/

//Case1
function solution(arr) {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    stack[stack.length - 1] === arr[i] ? stack.pop() : stack.push(arr[i]);
  }
  return stack.length ? stack : [-1];
}

console.log(solution([0, 1, 1, 1, 0])); //[0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); //[0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); //[-1]

//Case2
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
