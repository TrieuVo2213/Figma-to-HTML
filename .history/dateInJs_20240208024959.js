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
