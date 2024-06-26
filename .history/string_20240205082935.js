console.log("Bai 2");
const name = "MKhoa";
const job = "student";
console.log(name);
console.log(typeof name); // typeof kiểm tra kiểu dữ liệu của biến
console.log("I am M--Khoa I am teacher");
console.log("I am " + name + " I am " + job);
console.log(`I am ${name} I am ${job}`); // dùng dấu bantick có thể in giá trị của biến bằng cú pháp ${varriable}
const newString = `I am ${name} I am ${job}`;
console.log(newString);

// .length dùng để xem độ dài của xâu
console.log(newString.length);
// index là các chỉ số trong xâu,bắt đầu từ không.

const myStr = "Frondend Developer";
console.log(myStr.split(" "));
// Gõ như trên sẽ tách các từ trong xâu thành các phần tử của mảng,cắt xâu dựa vào khoảng trắng " ".
console.log(myStr.split(""));/Cắt xâu theo từng chữ cái