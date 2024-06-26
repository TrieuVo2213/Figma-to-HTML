const number = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < number.length; i++) {
  console.log(`Giá trị phần tử thứ ${i + 1} = ${number[i]}`);
}

// while(condition){ } và do{ }while(condition)

//khái niệm về for of,chỉ vòng lặp của một đối tượng nào đó ví dụ như mảng,sâu hay object
//ví dụ:
let varTemp = [];
for (let value of number) {
  value += 10;
  varTemp.push(value);
}
console.log(varTemp);
//Bài tập1

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const temp = new Array();
for (let i = 0; i < a.length; i++) {
  temp.push(a[i]);
}

console.log(temp);

//Bài tập 2
//đảo ngược một sâu
const str = "nguyen tran minh khoa";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);
