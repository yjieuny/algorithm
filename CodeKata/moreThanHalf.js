/*
# 문제
숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

예를 들어,
nums = [3,2,3]
return 3
nums = [2,2,1,1,1,2,2]
return 2

## 가정
`nums` 배열의 길이는 무조건 `2`개 이상
*/

function moreThanHalf(nums) {
  for (let i = 0; i < nums.length; i++) {
    let filteredArray = nums.filter((num) => num === nums[i]);
    if (filteredArray.length > nums.length / 2) {
      return nums[i];
    }
  }
  return undefined;
}

console.log(moreThanHalf([3, 2, 3])); //3
console.log(moreThanHalf([2, 2, 1, 1, 1])); //1
console.log(moreThanHalf([1, 2])); //undefined
