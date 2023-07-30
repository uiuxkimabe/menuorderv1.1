/*? no js js needed from me */

// qty counter

const minBtn = document.querySelectorAll(".minQty");
const qtyValue = document.querySelectorAll(".qtyValue");
const addBtn = document.querySelectorAll(".addQty");

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
}

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

// Filter Menu Function
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
    console.info("all");
  });
  appetizer.addEventListener("click", () => {
    element.style.display = element.classList.contains("dessert")
      ? "flex"
      : "none";
    console.info("appetizer");
  });
  mainCourse.addEventListener("click", () => {
    element.style.display = element.classList.contains("dessert")
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

// Btn Cart
const detailCart = document.getElementById("detail__cart");
const btnBackCart = document.querySelector(".back__cart");
const btnCart = document.querySelector("header button.cart");
const detailCartRow = document.querySelector("#detail__cart .row");
const setQty = document.querySelectorAll(".menu figcaption .btn input");
const addToCart = document.querySelectorAll(".addToCart");
const qtyInCart = document.querySelector(".qtyInCart");

// function add item to detail cart
function addItems(params) {
  const createFigcaption = document.createElement("figcaption");
  const isiFigcaption = document.createElement("div");
  const qtyDiv = document.createElement("div");
  const innerQtyDiv = document.createTextNode(setQty[params].value);
  const subTotal = document.createElement("div");
  const innerSubTotal = document.createTextNode("0");
  isiFigcaption.style.padding = "1em";
  isiFigcaption.style.background = "black";
  createFigcaption.appendChild(isiFigcaption);
  createFigcaption.setAttribute("class", "d-flex");
  detailCartRow.appendChild(createFigcaption);
  qtyDiv.appendChild(innerQtyDiv);
  createFigcaption.appendChild(qtyDiv);
  subTotal.appendChild(innerSubTotal);
  createFigcaption.appendChild(subTotal);
  console.info("oke");
  // return createFigcaption;
}

function cartCounter(params) {
  let count = 0;
  addToCart[params].addEventListener("click", () => {
    let result = count + 1;
    count++;
    qtyInCart.style.display = "block";
    qtyInCart.innerHTML = result;
    addItems(params);
  });
}

cartCounter(0);
cartCounter(1);
cartCounter(2);
cartCounter(3);
cartCounter(4);
cartCounter(5);
cartCounter(6);
cartCounter(7);
cartCounter(8);
cartCounter(9);

// Menampilkan Detail Cart
btnCart.addEventListener("click", () => {
  detailCart.classList.add("show");
});

// Menutup Detail Cart
btnBackCart.addEventListener("click", () => {
  detailCart.classList.remove("show");
});
