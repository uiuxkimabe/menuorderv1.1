/*? no js js needed from me */

// qty counter

const minBtn = document.querySelectorAll(".minQty");
const qtyValue = document.querySelectorAll(".qtyValue");
const addBtn = document.querySelectorAll(".addQty");
const addToCart = document.querySelectorAll(".addToCart");

// Menambahkan & Mengurangi Qty Pesanan
function qty(params) {
  let count = 0;
  // Menambahkan Qty
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
  // Mengurangi Qty
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
  addToCart.forEach((element) => {
    element.addEventListener("click", () => {
      let result = count + 1;
      count++;
      document.querySelector(".cart .qtyInCart").innerHTML = result;
      console.info("okeg");
    });
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

// Filter Menu
const filterBtn = document.querySelectorAll("header ul li");
const filterItems = document.querySelectorAll("main .menu");
// destructuring filter button
const [all, appetizer, mainCourse, dessert] = filterBtn;

// Filter Menu
filterItems.forEach((element) => {
  all.addEventListener("click", () => {
    element.style.display = element.classList.contains("all") ? "flex" : "none";
    console.info("all");
  });
  appetizer.addEventListener("click", () => {
    element.style.display = element.classList.contains("appetizer")
      ? "flex"
      : "none";
    console.info("appetizer");
  });
  mainCourse.addEventListener("click", () => {
    element.style.display = element.classList.contains("mainCourse")
      ? "flex"
      : "none";
    console.info("mainCourse");
  });
  dessert.addEventListener("click", () => {
    element.style.display = element.classList.contains("dessert")
      ? "flex"
      : "none";
    console.info("dessert");
  });
});
