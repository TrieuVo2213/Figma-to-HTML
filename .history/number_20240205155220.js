//số khi in ra màn hình consol thì có màu xanh khác với chuỗi là màu đen
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5"; // số đang ở kiểu string
const number2 = "4.8"; //số đang ở kiểu string
console.log(parseInt(number1)); //ép lại thành kiểu int
console.log(parseFloat(number2)); // ép lại thành kiểu float

// Một số hàm số học
// Math.abs(val) giá trị tuyệt đối
// Math.floor(val) làm tròn xuống
// Math.cell(val) làm tròn lên
// Math.round(val) làm tròn gần nhất
// toFixed rút gọn số thập phân sau dấu chấm động.Cú pháp: (số thập phân cần rút gọn).toFixed(Số
// lượng số hiển thị sau dấu chấm động).Ví dụ:
console.log(1 / 3);
console.log((1 / 3).toFixed(2));
//sau khi dùng toFixed thì nó thành String,dùng parstFLoat hay kết hợp hàm round và partInt để đổi lại thành kiểu number

//Math.random() random một số thực ngẫu nhiên từ khoản từ 0 đến 1
//Để random từ 0 đến n ta làm như sau console.log(Math.random()*n+1); .Ví dụ:
console.log(Math.random() * 11);
//Hàm Math.max(val1,val2,val3); trả ra con số lớn nhất
//Hàm Math.min(val1,val2,val3); trả ra con số nhỏ nhất
//Math.pow(val1,val2) tức là val1^val2

//isNaN  vs Number.isNaN
//NaN -> là những thứ không phải số(Not a Number)
