
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("btn-checkout");

    function updateCartDisplay() {
        cartContainer.innerHTML = "";
        let subtotal = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
            subtotalElement.textContent = "$0.00";
            taxElement.textContent = "$0.00";
            totalElement.textContent = "$0.00";
            return;
        }

        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("row", "cart-item", "mb-3", "p-2", "border", "rounded");
            cartItem.innerHTML = `
                <div class="col-4">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-8">
                    <h5>${item.name}</h5>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button class="btn btn-sm btn-danger remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        let tax = subtotal * 0.05;
        let total = subtotal + tax;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;

        document.querySelectorAll(".remove-item").forEach((button) => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
                updateCartIcon();
            });
        });
    }

    function updateCartIcon() {
        let cartCount = document.querySelector(".cart-count");
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems > 0 ? totalItems : "";
    }

    updateCartDisplay();
    updateCartIcon();
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutButton = document.getElementById("btn-checkout");
    const modal = document.getElementById("checkout-modal");
    const closeModalButton = document.getElementById("close-modal");
    const closeButton = document.getElementById("close-button");

    checkoutButton.addEventListener("click", function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Your cart is empty. Add items before checkout.");
            return;
        }

        localStorage.setItem("cart", JSON.stringify([]));

        modal.classList.add("show");

        const cartContainer = document.getElementById("cart-items");
        const subtotalElement = document.getElementById("subtotal");
        const taxElement = document.getElementById("tax");
        const totalElement = document.getElementById("total");
        cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
        subtotalElement.textContent = "$0.00";
        taxElement.textContent = "$0.00";
        totalElement.textContent = "$0.00";
        const cartCount = document.querySelector(".cart-count");
        cartCount.textContent = "";
    });

    closeModalButton.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    closeButton.addEventListener("click", function () {
        modal.classList.remove("show");
    });
});


