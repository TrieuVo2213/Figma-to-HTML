// number function
// dùng để ép kiểu dữ liệu sang number(thay vì sùng partInt hay partFloat).Ví dụ
console.log(Number("4.5")); // ở đây xâu 4.5 đã được gán thành 4.5
console.log(Number("asdff")); // console trả vể NaN(not a number) do xâu không thể thành kiểu number
console.log(Number(undefined)); // console trả vể NaN(not a number) <- ko có giá trị xác định
console.log(Number(null)); // console trả vể 0
console.log(Number(false)); // console trả vể 0
console.log(Number(true)); // console trả vể 1
