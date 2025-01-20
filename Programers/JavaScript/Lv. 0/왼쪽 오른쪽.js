/*
문제. 왼쪽 오른쪽
문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를,
먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
"l"이나 "r"이 없다면 빈 리스트를 return합니다.
*/

//Case1
function solution(str_list) {
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");

  if (lIndex === -1 && rIndex === -1) {
    return [];
  } else if (lIndex !== -1 && rIndex !== -1) {
    return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
  } else {
    return lIndex !== -1 ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
  }
}

console.log(solution(["u", "u", "l", "r"])); //["u", "u"]
console.log(solution(["l"])); //[]

//Case2
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}
