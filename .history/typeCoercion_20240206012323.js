//Đối với phép cộng khi cộng 1 giá trị với một xâu
// nó tự convert giá trị đó thành xâu rồi tiến hành ghép xâu
console.log(10 + "10"); // -> 1010
console.log(10 - "10"); // -> 0

//các phép cộng trừ nhân chia vẫn tính toán bình thường,
//nó sẽ cố gắng convert thành Number rồi tính toán bình thường
console.log(10 - "10"); // -> 0
console.log(null + ""); // -> null
console.log(null + undefined); // -> NaN

console.log("" - 1); // -> -1,nguyên nhân xâu rỗng (""") có giá trị Number = 0,
// lúc này phép tính ""-1 tương đương với 0 - 1 -> -1
console.log(true - false); // -> 1,nguyên nhân là:
//  phép trừ nên nó sẽ convert true và false thành kiểu number
//tương đương với 1 cho true và 0 cho false
// 1 - 0 -> 1
console.log(null + 10); // 0 + 10 -> 10

//Toán tử so sánh > <  >= <=
//  loose equality  == ; strict equality ===
// == so sánh chỉ dựa theo giá trị, === so sánh giá trị và cả kiểu dữ liệu.
//ví dụ
// so sánh ==
console.log(10 == "10"); // true
console.log(true == "1"); // true

//so sánh ===
console.log(10 === "10"); //false
console.log(true == "1"); // false
const numb = 5;
console.log((numb = 5)); // true
