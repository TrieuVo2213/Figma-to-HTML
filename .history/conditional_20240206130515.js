// câu điều kiện if else
// switch case

// Nội dung khác:
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

// confirm
