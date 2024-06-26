//cú pháp
//  function functionName(parameters)
//{
//your code here;
//}
//không truyền đúng số lượng  đối số cho tham số thì nó cũng sẽ ko bị lỗi
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
// ngoài ra còn có loại  function:
//  --> Anonymous function(function expression) :là những function không tên
//ví dụ

// tạo biến function không tên và lưu vào biến test
const test = function () {
  console.log("check,this is anonymous function");
};
// khi dùng function ko tên thì phải luôn gán nó vào một biến,nếu ko sẽ bị lỗi
// function không tên ko bị hoisting
console.log(test()); //khi gọi hàm luôn luôn có dấu (),thiếu nó hàm sẽ ko được gọi

// còn có loại function nữa là IIFE
//khi chương trình chạy gặp hàm này,thì HÀM NÀY SẼ CHẠY NGAY LẬP TỨC MÀ KHÔNG CẦN ĐẾN LỜI GỌI HÀM
// ví dụ
(function () {
  console.log("This is IEFE function");
})();
//bình thường 1 function ko tên bắt buộc phải dùng biến lưu lại function đó để gọi
//nhưng đối với function IEFE thì ko cần làm như thế
//bởi vì nó được thực thi ngay mà ko cần lời gọi hàm
//KHÔNG BẮT BUỘC PHẢI DÙNG FUNCTION KHÔNG TÊN BÊN TRONG FUNCTION IEFE

//--------------------------------------
// phạm vi của biến: variable scope
//có 3 loại chính
// global scope , function scope ,block scope
// global scope là biến có thể được sử dụng ở khắp mọi nơi.
//Khai báo biến ở bên ngoài hoặc dùng từ khóa var để tạo biến global
//biến global không phổ biến,ko nên dùng nhiều để tránh xung đột
//mà var khi khai báo biến luôn tạo biến(global) do ko bị hoisting -> ko nên dùng từ khóa var nhiều
//function scope là biến chỉ có thể dùng trong function mà nó khai báo
//block scope là biến chỉ có thể tồn tại trong một block code {} { block code tồn tại ở trong đây }
// lexical scope: liên quan đến closure:))
//-----------------------------------------
//closure được định nghĩa là function inner(function con nằm trong function cha) có thể truy xuất -
// - scope từ function cha.
// ví dụ
function parentFunction() {
  const temp = "Hey";
  function sayHey() {
    console.log(temp);
  }
  return sayHey;
  // trả về hàm sayHey
}

let hello = parentFunction(); // sau khi  chạy hàm parentFunction,kết quả trả về sẽ là hàm sayHey
// lúc này biến hello sẽ mang giá trị là hàm sayHey
// lúc này chương trình chưa in ra dòng "Hey"
//nguyên nhân vì trong js thì khi gọi hàm cha thì hàm con sẽ ko được thực thi
//nó chỉ thực thi khi:
// 1: gọi hàm con ngay bên trong hàm cha
// 2:dùng hàm IFEF để thực thi hàm con ngay lập tức
// 3:return hàm con về,gọi hàm cha để lấy hàm con được return về
//  rồi lưu lại trong một biến,dùng biến đó gọi hàm con ra.
// được trả về từ biến hello để thực thi các câu lệnh bên trong innerFunction
hello(); // lúc này dòng "Hey" mới được in ra
