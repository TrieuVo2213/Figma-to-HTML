// *******NUMBER FUCTION
// dùng để ép kiểu dữ liệu sang number(thay vì sùng partInt hay partFloat).Ví dụ
console.log(Number("4.5")); // ở đây xâu 4.5 đã được gán thành 4.5
// NUMBER VALUES

//NOT A NUMBER
console.log(Number("asdff")); // console trả vể NaN(not a number) do xâu không thể thành kiểu number
console.log(Number(undefined)); // console trả vể NaN(not a number) <- ko có giá trị xác định
console.log(NaN); // trả về NaN

// FALSY VALUES
console.log(Number(null)); // console trả vể 0
console.log(""); //trả về giá trị là ko
console.log(Number(false)); // console trả vể 0 do mặc định giá trị của false là 0
//
console.log(Number(true)); // console trả vể 1 do mặc định giá trị của true là 1

// *******STRING FUNCTION
console.log(4.5); // trả về "4.5"
console.log(true); // trả về "true"
console.log(null); // trả về "null"
//hàm string luôn trả về STRING

// *******BOOLEAN FUNCTION
// trả về true or false ,khi truyền vào các giá trị falsy thì trả về false,ngược lại trả về true
console.log(`Boolean of zero: ${Boolean(0)}`);
