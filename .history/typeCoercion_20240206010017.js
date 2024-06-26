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
