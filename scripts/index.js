let searchBtn = document.getElementById('js-search-icon');
searchBtn.addEventListener('click', () => {
  alert("Don't Try to Search! You have no permission!!!")
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
    text: "* solid coffee. 10/10. highly recommend! the best around the town *",
    person: "Tommy"
  },

  {
    rating: 3,
    title: "Thet Phoo Wai 2",
    text: "* solid coffee. 10/10. highly recommend! the best around the town *",
    person: "Thet Phoo Wai",
  },

  {
    rating: 0,
    title: "Thet Phoo Wai 3",
    text: "* solid coffee. 10/10. highly recommend! the best around the town *",
    person: "Naing Ko Ko Lin"
  },

  {
    rating: 1,
    title: "Thet Phoo Wai 4",
    text: "* solid coffee. 10/10. highly recommend! the best around the town *",
    person: "Thet Phoo Wai"
  },

  {
    rating: 4,
    title: "Thet Phoo Wai 5",
    text: "* solid coffee. 10/10. highly recommend! the best around the town *",
    person: "Naing Ko Ko Lin"
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
  alert("Count: " + count + "\nTotal Price: " + totalPrice);
});

