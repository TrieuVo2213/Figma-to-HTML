// document.addEventListener("DOMContentLoaded")
// web load xong thì các phần bên trong sự kiện này mới chạy,có thể dùng để bọc những đoạn -
//-code cần phải load hết nội dung mới hoạt động đúng
window.addEventListener("load", function () {
  console.log("your web loaded");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});
// trong sự kiện này thì DOM load xong thì phần bên trong sự kiện mới chạy
// window.addEventListener("load")
// web fully loaded
