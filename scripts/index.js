let searchBtn = document.getElementById('js-search-icon');
searchBtn.addEventListener('click', () => {
  alert("Don't Try to Search! You have no permission!!!")
});

<<<<<<< HEAD
=======

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
>>>>>>> 2c03c3916921ed2fae0e23b869ef0faf89fb48a9
