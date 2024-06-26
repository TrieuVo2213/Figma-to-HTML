const now = new Date();
//trả về thời gian hiện tại:Thu Feb 08 2024 01:22:27 GMT+0700 (Indochina Time)
//timezone:GMT+0700 (Indochina Time)
//second = 27
//minutes = 22
//hour = 1
//year = 2024
//month = February
//day 8
//Day of the week:thursday
console.log(now);

//Timestamp và Epoch time
//unix tiem là thời gian bắt đầu của năm  1970
//Timestamp là giãy số nguyên biểu diễn số mili giây đã trôi qua kể từ unix time
//Epoch time có tính năng tương tự nhưng tính bằng giây
//cách dùng Timestamp: dùng var.getTime()
console.log(now.getTime());
//đổi sang Epoch Time
console.log(now.getTime / 1000); // đổi sang epoch time thành công
console.log(typeof now.getTime()); // đổi sang epoch time thành công
