const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find(p => p.id === productId);

if (!product) {
  document.body.innerHTML = "<h2>Product not found</h2>";
}

document.getElementById("productImage").src = product.image;
document.getElementById("productName").textContent = product.name;
document.getElementById("productDescription").textContent = product.discription;
document.getElementById("productPrice").textContent = `$${product.price}`;


const addToCartBtn = document.getElementById("addToCart");
const cartCount = document.querySelector(".cart-count");

let count = 0;

addToCartBtn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    cartCount.classList.add("active");

    cartCount.style.transform = "scale(1.3)";
    setTimeout(() => {cartCount.style.transform = "scale(1)";}, 150);

     addToCartBtn.innerHTML = "Added ✔";
});

document.getElementById("buyNow").addEventListener("click", () => {
    window.location.href = "orders.html";
});
