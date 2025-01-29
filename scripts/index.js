// For mobile menu
document.getElementById('js-menu-icon').addEventListener('click', function() {
  const hamburgerMenu = document.getElementById('js-hamburger-menu');
  hamburgerMenu.classList.toggle('active');
});

// For dropdown in mobile view
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.querySelector('.dropdown-content').classList.toggle('active');
    }
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.classList.remove('active');
    });
  }
});

let searchBtn = document.getElementById('js-search-icon');
searchBtn.addEventListener('click', () => {
  alert("Don't Try to Search! You have no permission!!!")
});

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function changeSlide() {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
  }

  setInterval(changeSlide, 2500);
});


document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('js-menu-icon').addEventListener('click', () => {
    const menu = document.getElementById('js-hamburger-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

// for review

const reviews = [
  {
    rating: 5,
    title: "Amazing Coffee",
    text: " solid coffee, 10/10, highly recommend ! \n the best around the town ",
    person: "Tommy"
  },

  {
    rating: 3,
    title: "Good for Takeout",
    text: "Good coffee but seating is tight. \n Better for takeout than a long stay",
    person: "Sarah",
  },

  {
    rating: 4,
    title: "Slow Service, Good Mocha",
    text: "The mocha was rich and flavorful, though \n service was slow during peak hours",
    person: "Victoria"
  },

  {
    rating: 5,
    title: "Great Coffee, Great Atmosphere",
    text: "Loved the smooth pour-over and friendly service. \n A great spot to unwind",
    person: "Henry"
  },

  {
    rating: 4,
    title: "Decent but Lacking Variety",
    text: "Decent coffee but lacked the wow factor. Limited \n options for non-coffee drinkers",
    person: "Brian"
  },

  {
    rating: 5,
    title: "A Coffee Lover’s Dream",
    text: "A gem for coffee lovers! The single-origin espresso was exceptional",
    person: "Aurora"
  },
];

let currentReviewIndex = 0;

function displayReview(index) {
  const review = reviews[index];
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  document.querySelector('.review-star').innerHTML = stars;
  document.querySelector('.review-title').innerText = review.title;
  document.querySelector('.review-card div:nth-child(3)').innerText = review.text;
  document.querySelector('.review-person').innerText = review.person;
  document.querySelector('.review-counter').innerText = ( index + 1) + "/" + reviews.length;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview(currentReviewIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview(currentReviewIndex);
});

displayReview(currentReviewIndex);

// for add to cart icon
let totalPrice = 0;
let count = 0;

let addToCartIcon = document.getElementById('js-add-to-cart-icon');
let cartCounter = document.querySelector('.cart-count');
cartCounter.innerHTML = count;

function addToCart(price) {
  totalPrice += price;
  count += 1;
  cartCounter.innerHTML = count;
}

addToCartIcon.addEventListener('click', () => {
  alert("Count: " + count + "\nTotal Price: " + "$" +totalPrice);
});


function toggleText(event, textId) {
  event.preventDefault(); // Prevent default link behavior

  let extraText = document.getElementById(textId);
  let link = event.target;

  if (extraText.style.display === "none" || extraText.style.display === "") {
      extraText.style.display = "block";
      link.innerHTML = "▲ Show less";
  } else {
      extraText.style.display = "none";
      link.innerHTML = "▼ Discover more";
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   // Clear Filters functionality
//   const clearFiltersButton = document.querySelector('.clear-filters');
  
//   if(clearFiltersButton) {
//       clearFiltersButton.addEventListener('click', function(e) {
//           e.preventDefault();
          
//           // Select all checkboxes in the filter sidebar
//           const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
          
//           // Uncheck all checkboxes
//           checkboxes.forEach(checkbox => {
//               checkbox.checked = false;
//           });
//       });
//   }
// });


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
