// 1. selector.classList.add("abc")
// const container = document.querySelector(".container");
// container.classList.add("is-active");
// 2. selector.classList.remove("abc")
// container.classList.remove("container");

// 3. selector.classList.contains("container")
//kiểm tra xem class container có trong node nào đó hay không,có trà về true ,ko có là false
// console.log(container.classList.contains("container")); // false
// console.log(container.classList.contains("is-active")); // false

// 4. selector.classList.toggle("is-active");
//nếu chưa có class mà ta thao tác,nó sẽ thêm class đó vào node đó,ngược lại nó sẽ xóa
// if (container.classList.contains("is-active")) {
//   container.classList.remove("is-active");
// } else {
//   container.classList.add("is-active");
// }
// container.classList.toggle("is-active");

// 5. selector.classname -> trả ra 1 chuỗi gồm tên các class của selector
// const title = document.querySelector(".title");
// console.log(title.className);
// title.className = "title";
// menu toggle class
const menu = document.querySelector(".menu");
// menu.classList.add("is-show");
// menu.classList.remove("is-show");
