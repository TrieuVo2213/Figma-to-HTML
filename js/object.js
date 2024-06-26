// 2 cách khai báo object

//object literal
const objectLiteral = {};
//object constructor
const objectConstructor = new Object();

//Một đối tượng gồm key và value.Ngoài ra còn có thể chứa function(trong object gọi là phương thức:method)
//2 cách truy xuất giá trị của object
//cách 1:dùng dấu chấm(objectName.key)
// cách 2:Bracket notation  (objectName["key"]),dùng bracket notation để sử lý các key đặc biệt
//ví dụ key là một sâu "key-ex"key này có dấu trừ nên đặt trong dấu nháy kép,và khi gọi bằng dấy chấm sẽ lỗi,
//phải dùng bracket notation

//Thay đổi giả trị của object
//Xóa phần tử ra khỏi obj bằng delete: objName["key muốn xóa"]

//Lặp qua một obj,dùng for in
// for(let key in objName) {}

//

//các phương thức trong obj
//Object.keys(objName) -> trả về một mảng chứa tất cả các key của obj đó
//Object.values(objName) -> trả về một mảng chứa tất cả các giá trị của obj đó

//Object.entries(objName) -> trả về một mảng Nested(mỗi giá trị trong mảng là một mảng con chứa key và value)
//ví dụ: [[name,khoa],[age,8],[hi,f]]  (f trong obj biểu thị cho một phương thức trong obj)
//Các cách gọp obj
//Cách1:gọp với Object.assign(varName1,varName2)
//Cách 2:Dùng spread giống array : objName = {...obj1,..obj2};
//Object.freeze dùng để đóng băng obj,không cho thay đổi key và value của obj gốc sau khi dùng freeze
// ví dụ: const varName = Object.freeze(objName);
//lúc này varName sẽ mang giá trị của objName nhưng ko thể thay đổi giá trị bên trong
//Object.seal(objName) sau khi dùng đước phép thay đổi key or value nhưng ko được thêm key hay value mới vào

//

//KHI SAO CHÉP MỘT OBJ SANG MỘT BIẾN KHÁC thì: KO DÙNG PHÉP GÁN TRỰC TIẾP MÀ DÙNG SPREAD {...objName} ĐỂ KO BỊ LỖI
//Cách khác là dùng Object.assign({},objName)

//2 cách trên chỉ đúng khi dùng trong obj không có obj con ở bên trong,khi obj cần copy mà có obj con bên trong thì
//để copy chính xác ta dùng JSON:Ví dụ:     newObj = JSON.parse(JSON.stringify(objName));

//this nó sẽ truy cập đến obj gần nhất

//optional chaining
// dùng để check key có tồn tại trong obj ko khi muốn truy cập vào obj lồng nhau
//ví dụ: objName.fullName?.Name
//-> dùng optional chaining như vậy sẽ ko bị báo lỗi nếu như key fullName ko tồn tại
//destructuring object
// const { name, age, male,...rest } = students;
//rest là những phần còn lại,rest có cũng được ko có cũng chả sao
