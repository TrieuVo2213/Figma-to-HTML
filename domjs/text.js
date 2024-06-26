// 1. textContent -> lấy ra nội dung(only text) bao gồm text trong html tag(nếu có) của selector
//nó sẽ in và giữ nguyên định dạng của text bao gồm các dấu cách và các thẻ tag cũng được hiểu là một text
const spinner = document.querySelector("#spinner");
// Thay đổi text content
// 2. innerText
console.log(spinner.textContent);
console.log(spinner.innerText);

spinner.innerHTML = `<div class="demo">hello html</div>`;
//->nó sẽ in ra như sau:<div class="demo">hello html</div>,vì nó chỉ hiểu được text và ko nhận diện tag html

// 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML
//innerText sẽ xóa các khoảng trắng thừa và không hiển thị các node có thuộc tính là none,(ít được ứng dụng)
console.log(spinner.innerHTML);
// innerHTML có thể in ra được các thẻ tag html bên trong cùng với nội dung lên màn hình console
// ->làm thay đổi văn bản và các thuộc tính(class="demo") của node spinner

// parse
