// câu điều kiện if else
// switch case
const fruit = "apple";
switch (key) {
  case lemon:
    console.log("you like to eat lemon");
    break;
  case apple:
    console.log("you like to eat apple");
    break;
  default:
    console.log("you don't like fruit");
    break;
}

// ternary operator
const yourAge = 30;
let message = yourAge >= 18 ? "You are adult" : "You are still a child";
console.log(message);

// Nội dung khác:
//Gửi thông báo popup đến người dùng khi truy cập trang hay refresh trang

// alert("message") hiện thông báo đến người dùng,nội dung message sẽ hiện lên cho người dùng đọc được

// prompt("Nội dung thông báo:" , "Giá trị mặc định");  hoặc prompt("Nội dung thông báo:");
// prompt dùng để người dùng nhập giá trị từ bàn phím
// để lưu giá trị người dụng nhập thì lưa vào một biến
const x = prompt("Nhập tên của bạn:", "Minh Khoa");
console.log("Tên của người nhập:" + x);
const age = prompt("Nhập tuổi của bạn:");
// prompt trả về giá trị là kiểu String vì thế trước khi dùng phải convert nó sang Number
if (parseInt(age) < 18) {
  alert("Bạn chưa đủ tuổi để truy cập trang web");
}

// confirm("message") dùng để xác nhận,trả về true false
// khi gọi confirm thì nó sẽ hiện một thông báo popup đến người dùng
// và hiện ra lựa chọn là yes hoặc no
//nếu chọn yes trả về true,ngược lại là false
const isYourMoney = confirm("Day co phai la tien cua ban khong");
//dùng một biến lưu lại giá trị true false cùa confirm
console.log(isYourMoney);
