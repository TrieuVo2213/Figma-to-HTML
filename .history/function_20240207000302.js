//cú pháp
//  function functionName(parameters)
//{
//your code here;
//}
//ko truyền đúng số lượng  đối số cho tham số thì nó cũng sẽ ko bị lỗi
// khi gọi hàm  truyền thiếu đối số cho tham số  thì tham số bị thiếu sẽ mang giá trị undefined
// khi  ko viết return cho function thì function  trả về giá trị undefined
//--------------------------------------------------
//Lưu function vào một biến????
// Tham số là một function????
// ta có thể gán hàm cho biến bằng ví dụ sau:

//tạo hàm sum
function add(a, b) {
  return a + b;
}
// add(a+b); đây là gọi hàm
// add(); đây là gọi hàm và nó không bị lỗi do js chấp nhận lời gọi hàm thiếu đối số
// add; đây ko phải là lời gọi hàm vì nó thiếu dấu đòng mở ngoặc tròn ()
// --> dùng cách này để gán function cho một biến
//ví dụ
let sum = add; //gán function add cho sum nhưng ko được gọi
console.log(sum(5, 5)); //sau khi sum được gán = hàm add,thì ta có thể dùng sum để gọi trực tiếp hàm add

// tính điểm trung bình,tái sử dụng hàm add và biến sum được gán = add
function average(a, b, fnSum) {
  var TOTAL = fnSum(a, b);
  //khi truyền đối số sum vào tham số fnSum thì nó sẽ mang giá trị là sum
  // mà sum được gán = add thì có thể gọi trực tiếp cho hàm add
  //TOTAL sẽ trả về tổng của a và b
  return TOTAL / 2;
}

console.log(average(6, 6, sum)); //truyền đối số sum vào tham số fnSum
// -- > Lúc này tham số fnSum là một function do nhận giá trị của biến sum mag giá trị của một function

//------------------------------------------------
//function declaration là function được khai báo như các function ở ví dụ trên
// ngoại ra còn có loại  function:
//  --> Anonymous function(function expression) :là những function không tên
//ví dụ

// tạo biến function và lưa vào biến test
const test = function () {
  console.log("check");
};
// function không tên ko bị hoisting
console.log(test()); //khi gọi hàm luôn luôn có dấu (),thiếu nó hàm sẽ ko được gọi

// còn có loại function nữa là IIFE
//khi chương trình chạy gặp hàm này,thì HÀM NÀY SẼ CHẠY NGAY LẬP TỨC MÀ KHÔNG CẦN ĐẾN LỜI GỌI HÀM
// ví dụ
(function () {
  console.log("This is IEFE function");
});
