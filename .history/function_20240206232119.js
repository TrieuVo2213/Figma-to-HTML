//cú pháp
//  function functionName(parameters)
//{
//your code here;
//}
//ko truyền đúng số lượng  đối số cho tham số thì nó cũng sẽ ko bị lỗi
// khi gọi hàm  truyền thiếu đối số cho tham số  thì tham số bị thiếu sẽ mang giá trị undefined
// khi  ko viết return cho function thì function  trả về giá trị undefined
//--------------------------------------------------
// Tham số là một  function????
// ta có thể gán hàm cho biến bằng ví dụ sau:

function add(a, b) {
  return a + b;
}
// add(a+b); đây là gọi hàm
// add(); đây là gọi hàm và nó bị lỗi do js chấp nhận lời gọi hàm thiếu đối số
