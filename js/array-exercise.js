console.log("Bài 1!");

let a = "Nguyen Tran Minh KHoa";

function reverseString() {
  let temp = a.split(" ");
  temp = temp.reverse();
  temp = temp.join(" ");
  return temp;
}

console.log(reverseString());

console.log("Bài 2!");

// function reverseString2() {
//   let temp = a.split(" ");
//   temp = temp.reverse();
//   for (let i = 0; i < temp.length; i++) {
//     let str = temp[i];
//     let b = str.split("");
//     b = b.reverse();
//     temp[i] = b.join("");
//   }
//   temp = temp.join(" ");
//   return temp;
// }

// console.log(reverseString2());
console.log("Bài 2 Cách 2!");

function reverseString2() {
  let temp = a
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" ");
  return temp;
}
console.log(reverseString2());

//so sánh mảng === js luôn trả về giá trị là false ,nên trước khi so sánh thì phải chuyển sang string JSON mới
// cho ra kết quả so sánh chính xác

//các cách sao chép một mảng(clone)

const arrays = ["a", "b", "c", "d"];
// cách 1:dùng slice()
const sliceArrays = arrays.slice(); //slice dùng để cắt mảng,nếu ko truyền đối số vào nó sẽ cắt hết mảng
console.log(sliceArrays);
//cách 2: dùng spread:cú pháp: [...varName]; spread dùng để gọp các mảng lại và lưu vào mảng mới
const spreadArr = [...arrays];
console.log(spreadArr);
//CÁC CÁCH ĐỂ GỌP MẢNG
// cách 1:concat.Ví dụ newArray = array1.concat(array2,array3);
//cách 2:dùng spread.Ví dụ: newArray = [...array1...array2...array3];

//destructuring array
//dùng để gán các giá trị trong mảng cho nhiều biến khác nhau,code sẽ ngắn gọn hơn so với việc lấy từng biến
//gán từng giá trị trong mảng
//ví dụ:
number = [1, 2, 3, 4, 5, 6];
//destructuring array ->
const [a1, b, c] = number;
// console.log(a1, b, c);

//rest parameter,cách dùng tương tự như spread nhưng ở vế bên trái,dùng để tạo mảng mới lưu các giá trị
//còn sót lại sau khi dùng destructuring array,rest chỉ là tên parameter có thể thay rest bằng một tên khác
const [aa, bb, cc, ...rest] = number;
console.log(aa, bb, cc, rest);
