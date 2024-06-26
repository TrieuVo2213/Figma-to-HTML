//2 cách tạo mảng

//cách 1
// const student1 = [];

//cách 2
// const student1 = new Array();

//mảng trong js có thể chứa nhiều kiểu dữ liệu khác nhau,thậm chí một mảng có thể chứa một mảng khác

//truy xuất vào mảng: variable[index];
//truy xuất vào cuối mảng : variable[variable.length-1]

//Phương thức hay dùng của mảng
// length sẽ trả về độ dài của mảng
// reverse đạo ngược mảng.Cách dùng: variable.reverse()
// join nối các thành phần trong mảng thành chuỗi.Cách dùng variable.join()
// có thể truyền giá trị vào trong dấu ().Ví dụ var.join(" ") --> các giá trị khi vào xâu cách nhau dấu cách
//include kiểm tra giá trị đó có tồn tại trong xâu không.Ví dụ: variable.include("check")
// indexOf:trả về vị trí đầu tiên xuất hiện trong mảng của giá trị nào đó.VD:var.indexOf("check");
// lastIndexOf:trả về vị trí cuối cùng xuất hiện trong mảng của giá trị nào đó.VD:var.lastIndexOf("check");
// push:thêm phần tử mới vào cuối mảng.VD: var.push("newValue")
// unshift:thêm phần tử mới vào đầu mảng.VD: var.unshift("newValue")
//pop:xóa phần tử cuối cùng trong mảng.VD: var.pop("delValue")
//pop:xóa phần tử cuối cùng trong mảng.VD: var.pop("delValue")
//shift:xóa phần tử đầu tiên trong mảng.VD:var.shift("delValue")
//slice:cắt mảng,GIỐNG HỆT với slice trong string.VD:var.slice()->in ra full mảng

// Array.isArray(varName) để kiểm tra xem một biến có phải là mảng

//splice:cách dùng:splice(start,deleteCount,item1,item2,itemN..)
//deleteCount là số kí tự cần xóa.
//item1 hay 2,...or itemN là những phần tử muốn truyền vào đầu mảng

//

// sort: sắp xếp mảng theo chuẩn unicode-16
// hàm sort trước khi sắp xếp sẽ convert sang string rồi sx theo bảng uni-16
//muốn sắp xếp lơn bé theo thứ tự tăng dần phải truyền một function vào tham số.Ví dụ:
const a = [1, 5, 7, 2, 4];
const varSort = a.sort((a, b) => (a > b ? 1 : -1));
console.log(varSort);
// trong function trên nếu return số dương(cụ thể là  1) thì đảo vị trí a và b
//ngược lại nếu return số âm thì ko đảo vị trí
//cách viết khác hàm sort để sắp xếp tăng dần, return  a - b
//nếu a > b trừ thì sẽ return số dương -> đảo. Ngược lại return số âm,ko đảo
// return b - a để sắp xếp giảm dần

// find:Nó sẽ trả về giá trị phần tử đầu tiên trong mảng nếu nó thỏa mãn điều kiện nào đó
//Ví dụ:     variable.find((elements) => elements > 10)
//Hàm find sẽ trả về giá trị của elements nếu thỏa  điều kiện,nếu ko có elements nào trong
// mãng thỏa điều kiện thì nó sẽ trả về undefined

//findIndex trả về vị trí của phần tử đầu tiên trong mảng nếu nó thỏa mãn điều kiện nào đó
//Ví dụ: variable.findIndex((elements) => elements > 10)
//Nếu ko có giá trị nào thỏa mãn thì nó trả về giá trị Index là -1

//map: sẽ duyệt qua từng phần tử trong mảng và "trả về mảng mới" mà ko thay đổi mảng ban đầu

//forEach:sẽ được dùng cho DOM

//phân biệt forEach và map(câu hỏi phỏng vấn)
// map có return, forEach thì ko return được
//map tạo mảng mới ko ảnh hưởng đến mảng cũ,forEach thì ko
// hàm forEach sẽ ko dừng vì nó ko có return

//filter(sàng lọc):sàng lọc các phần tử trong mãng thỏa mãn điều kiện nào đó
//nếu ko có giá trị nào trong mãng thỏa mãn điều kiện của filter thì nó sẽ trả về mảng rỗng []
console.log(a.filter((value, index, array) => index >= 2));

// array.some()
// trả về true khi một trong các phần tử trong mảng đạt điều kiện
//ví dụ: variable.some((value) => value > 0 )

//array.every
//trả về true khi tất cả  phần tử trong mảng thỏa điều kiện
//ví dụ variable.every((value) => value > 0)

//array.reduce dùng để thao tác trên mảng,ví dụ cộng các giá trị trong mảng hay nhân,chia...

/* 
    variable.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0); 
*/
