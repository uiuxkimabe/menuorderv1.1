/*? no js js needed from me */

// qty counter

const minBtn = document.querySelectorAll(".minQty");
const qtyValue = document.querySelectorAll(".qtyValue");
const addBtn = document.querySelectorAll(".addQty");

// Menambahkan & Mengurangi Qty Pesanan
function qty(params) {
  let count = 0;
  addBtn[params].addEventListener("click", () => {
    let result = count + 1;
    count++;
    qtyValue[params].value = result;
    if (count > 0) {
      minBtn[params].disabled = false;
    }
    if (count >= 10) {
      addBtn[params].disabled = true;
      alert("Pesanan Ada Sudah Maksimal");
    }
  });
  minBtn[params].addEventListener("click", () => {
    let result = count - 1;
    count--;
    qtyValue[params].value = result;
    if (count < 10) {
      addBtn[params].disabled = false;
    }
    if (count <= 0) {
      minBtn[params].disabled = true;
      alert(`Jumlah Pesanan Anda Masih ${count}`);
    }
  });
}

// Back to Cart
document.querySelector(".back__cart").addEventListener("click", () => {
  document.getElementById("detail__cart").classList.add("back");
});

// card eksekusi function
qty(0);
qty(1);
qty(2);
qty(3);
qty(4);
qty(5);
qty(6);
qty(7);
qty(8);
qty(9);
