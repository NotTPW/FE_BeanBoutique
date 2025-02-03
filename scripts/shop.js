document.addEventListener("DOMContentLoaded", function () {
    const clearFiltersBtn = document.querySelector(".clear-filters"); // Select the Clear Filters button
    const checkboxes = document.querySelectorAll(".filter-sidebar input[type='checkbox']"); // Select all checkboxes

    clearFiltersBtn.addEventListener("click", function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.querySelector(".cart-count");
    const cartIcon = document.querySelector("#js-add-to-cart-icon");

    function updateCartCount() {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems > 0 ? totalItems : "";
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");
            const productName = productCard.querySelector("h2").textContent;
            const productPrice = parseFloat(productCard.querySelector("p").textContent.replace("$", ""));
            const productImage = productCard.querySelector("img").src;

            let existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
            }

            saveCart();
            updateCartCount();
        });
    });

    cartIcon.addEventListener("click", function () {
        window.location.href = "cart.html"; // Redirect to Cart Page
    });

    updateCartCount();
});
