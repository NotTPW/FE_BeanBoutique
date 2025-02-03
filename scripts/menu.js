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