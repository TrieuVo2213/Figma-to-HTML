const now1 = new Date();
//trả về thời gian hiện tại:Thu Feb 08 2024 01:22:27 GMT+0700 (Indochina Time)
//timezone:GMT+0700 (Indochina Time)
//second = 27
//minutes = 22
//hour = 1
//year = 2024
//month = February
//day 8
//Day of the week:thursday
console.log(now1);
//4 cách tạo ngày tháng năm với new Date()
// 1) mặc định
// 2) new Date(truyền Timestamp),nó sẽ in ra thời gian tương ứng với timestamp đó.
// 3) new Date("Thu Feb 08 2024 02:02:34 GMT+0700 (Indochina Time)"),nó sẽ in ra thời gian dựa vào đoạn string
// 4) new Date(year,months,day,hours,minutes,seconds,milisecons)
//cách 4 tương tự cách 3 nhưng thay vì truyền vào một string thì nó truyền trực tiếp các giá trị

// variable.toDateString(); chỉ trả về thông tin thứ ngày tháng năm sau khi dùng
// variable.toTimeString(); in ra giờ và muối giờ
// variable.toLocaleDateString(); in ra m-dd/yyyy
// variable.toLocaleDateString("vi-VI"); in ra dd-m-yyyy
// variable.ISOString();

//Timestamp và Epoch time
//unix tiem là thời gian bắt đầu của năm  1970
//Timestamp là giãy số nguyên biểu diễn số mili giây đã trôi qua kể từ unix time
//Epoch time có tính năng tương tự nhưng tính bằng giây
//cách dùng Timestamp: dùng var.getTime()
console.log(now1.getTime()); //or
console.log(Date.now());

//đổi sang Epoch Time
console.log(Date.now() / 1000); // đổi sang epoch time thành công
console.log(now1.getTime() / 1000); // đổi sang epoch time thành công

//Các hàm get trong Date
// variable.getFullYear();in năm
// variable.getMonth();in ra tháng,LƯU Ý:THÁNG TRONG JS CHẠY TỪ 0 (LÀ THÁNG 1) ĐẾN 11 (LÀ THÁNG 12)
// variable.getDate();in ra ngày
// variable.getDay();in ra thứ,Lưu ý chạy từ 0(chủ nhật) -> 6(thứ 7)
// variable.getHours();in ra giờ
// variable.getMinutes();in ra giờ
// variable.getMilliseconds();in ra mili giây

//Các hàm set trong Date:dùng để truyền và thay đổi giá trị của một biến lưu trữ thời gian.
// variable.setFullYear();
// variable.setMonth(); có thể truyền vào từ số 0 đến 11  tương đương từ tháng 1 đến tháng 12
// variable.setDate();
// variable.setHours();
// variable.setMinutes();
// variable.setMilliseconds();

// UTC giờ quốc tế
//cách dùng,thêm UTC vào vị trí sau chữ get hay set...
//ví dụ:getUTCFullYear;setUTCMonth.....

//setTimeout và setInterval
// setTimeout sẽ thực hiện một công việc gì đó sau một khoảng thời gian nhất định
// setInterval sẽ thực hiện một công việc gì đó cứ sau mỗi 1s
// ví dụ
setTimeout(function () {
  console.log("call me");
}, 3000);

setInterval(function () {
  console.log("call me");
});