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
// variable.getMilliseconds();in ra giờ

//Các hàm set trong Date:dùng để truyền và thay đổi giá trị của một biến lưu trữ thời gian.
// variable.setFullYear();
// variable.setMonth();
// variable.setDate();
// variable.setHours();
// variable.setMinutes();
// variable.setMilliseconds();
