//viết hàm so sáh 2 số a và b ,tìm ra số lớn hơn

function compare(a, b) {
  if (a !== "number" || b !== "number") return 0;
  if (a < b) return b;
  return a;
}

let aNumber = prompt("nhập số a:", "0");
let bNumber = prompt("nhập số b:", "0");
console.log(
  `Số lớn hơn giữa ${aNumber} và ${bNumber} là ${compare(aNumber, bNumber)}`
);
