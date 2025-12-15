const productGrid = document.querySelector(".product-grid");

function renderProducts(list) {
  productGrid.innerHTML = "";

  list.forEach(product => {
    productGrid.innerHTML += `
      <div class="product-card" onclick="openProduct(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="product-img">

        <div class="product-details">
          <h2 class="product-title">${product.name}</h2>

          <div class="rating">
            <h3>$${product.price}</h3>
            <span>⭐ ${product.rating}</span>
          </div>

          <p class="product-description">${product.discription}</p>
          <button class="product-button">Shop Now</button>
        </div>
      </div>
    `;
  });
}

renderProducts(products);

function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// sorting functionality

document.getElementById("sortSelect").addEventListener("change", function () {
  let value = this.value;
  let sorted = [...products];

  if (value === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (value === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  }
  if (value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  renderProducts(sorted);
});

// Fillter by rating functionality

const ratingFilters = document.querySelectorAll(".ratingFilter");

ratingFilters.forEach(filter => {
  filter.addEventListener("change", () => {
    let selectedRatings = [...ratingFilters]
      .filter(f => f.checked)
      .map(f => Number(f.value));

    let filtered = products.filter(p =>
      selectedRatings.length === 0 || selectedRatings.includes(p.rating)
    );

    renderProducts(filtered);
  });
});

// Fillter togle
const filterBtn = document.getElementById("filterToggle");
const filterPanel = document.getElementById("filterPanel");

filterBtn.addEventListener("click", () => {
  filterPanel.style.display =
    filterPanel.style.display === "block" ? "none" : "block";
});