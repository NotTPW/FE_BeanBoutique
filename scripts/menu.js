document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.querySelector(".search-input");
    const coffeeItems = document.querySelectorAll(".menu-item"); 

    searchInput.addEventListener("input", function () {
        event.preventDefault(); 

        const query = searchInput.value.trim().toLowerCase(); 

        coffeeItems.forEach(item => {
            const coffeeName = item.querySelector(".item-header h2").textContent.toLowerCase(); // Get coffee name
            
            if (coffeeName.includes(query)) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none"; 
            }
        });
    });
});

// menu-script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
  
    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease-out';
        observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.querySelector(".cart-count");

    function updateCartIcon() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems > 0 ? totalItems : "0"; 
    }

    // Function to add item to cart
    function addToCart(item) {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex !== -1) {
            // If the item already exists, increase its quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Otherwise, add a new item to the cart
            cart.push(item);
        }

        // Save the cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartIcon();
    }

    // Attach "Add to Cart" functionality to buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const menuItem = this.closest(".menu-item"); // Find the parent menu item container
            const itemName = menuItem.querySelector(".item-header h2").textContent;
            const itemPrice = parseFloat(menuItem.querySelector(".price").textContent.replace("$", ""));
            const itemImage = menuItem.querySelector(".item-image img").src;

            const item = {
                name: itemName,
                price: itemPrice,
                image: itemImage,
                quantity: 1,
            };

            addToCart(item);

            alert(`${itemName} has been added to your cart!`);
        });
    });

    updateCartIcon();
});

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("js-add-to-cart-icon");

    cartIcon.addEventListener("click", function () {
        window.location.href = "cart.html"; 
    });
});
