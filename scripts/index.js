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