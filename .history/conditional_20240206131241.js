// câu điều kiện if else
// switch case

// Nội dung khác:
//Gửi thông báo popup đến người dùng khi truy cập trang hay refresh trang

// alert("message") hiện thông báo đến người dùng,nội dung message sẽ hiện lên cho người dùng đọc được

// prompt("Nội dung thông báo:" , "Giá trị mặc định");  hoặc prompt("Nội dung thông báo:");
// prompt dùng để người dùng nhập giá trị từ bàn phím
// để lưu giá trị người dụng nhập thì lưa vào một biến
const x = prompt("Nhâp tên của bạn:", "Minh Khoa");
console.log("Tên của người nhập:" + x);
const age = prompt("Nhập tuổi của bạn:");
if (age < 18) {
  alert("Bạn chưa đủ tuổi để truy cập trang web");
}

// confirm("message")
// khi gọi confirm thì nó sẽ hiện một thông báo popup đến người dùng
// và hiện ra lựa chọn là yes hoặc no
//nếu chọn yes trả về true,ngược lại là false
const isYourMoney = confirm("Day co phai la tien cua ban khong");
console.log(isYourMoney);
