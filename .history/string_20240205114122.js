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
console.log(myStr.split("")); //Cắt xâu thành từng chữ cái và đưa vào mảng

// .toLowerCase chuyển đổi chữ in thường
console.log(myStr.toLowerCase());
// .toUpperCase chuyển đổi sang in hoa
console.log(myStr.toUpperCase());
//  {
//kiểm tra xem xâu có bắt đầu bằng chữ muốn check hay không: varName.starsWith("stringCheck")
//nguoc lai voi .endsWith
//tương tự vơi .includes:kiểm tra xem chữ cần check có nằm trong xâu hay không
//kiểu dữ liệu trả về xẽ là true/false
//  }

// {
//     .indexOf("chữ/từ  cần check")
//     trả về thứ tự lần đầu tiên xuất hiện của chữ cần check
//     .lastIndexO("chữ/từ cần check")
//     trả về thứ tự lần cuối cùng xuất hiện của chữ cần check
// }

// {
//     .replace dùng để thay thế một từ trong xâu thành một từ khác
//      cú pháp .replace("từ trong xâu cần thay thế","từ thay thế")
console.log(myStr.replace("Developer", "Designer"));
// }

//{ .repeat dùng để lặp sâu nhiều lần: cs.log("myStr.repeat(số lần )")}

/*{
    slice dùng để cắt sâu
    cú pháp varName.slice(start,end+1)
    nếu không truyền tham số end,thì nó sẽ cắt xâu từ start đến hết sâu
   }   */
console.log(myStr.slice(0, 8));

/*{
    cắt sâu từ phải sang trái
    .slice(tham số bắt đầu từ -1)
    xâu sẽ cắt từ phải sang trái,và tham số bằng bao nhiêu thì sẽ cắt bấy nhiêu chữ
} */
console.log(myStr.slice(-9));

//{ cắt bỏ khoảng trống ở 2 bên:  .trim()
// .trimStart() loại bỏ khoảng trốn ở bên trái
// .trimEnd() loại bỏ khoảng trắng ở bên phải
// }
