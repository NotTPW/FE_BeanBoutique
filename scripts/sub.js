document.addEventListener("DOMContentLoaded", function () {
    const limitedStock = document.querySelector(".limited-stock");

    function blinkText() {
        limitedStock.style.opacity = (limitedStock.style.opacity === "0") ? "1" : "0";
    }

    setInterval(blinkText, 800); // Blinking effect every 800ms
});


document.addEventListener("DOMContentLoaded", () => {
    // Select all Subscribe buttons
    const subscribeButtons = document.querySelectorAll(".plan-card button");
    const modal = document.getElementById("subscription-modal");
    const closeModal = document.getElementById("close-modal");
    const subscriptionForm = document.getElementById("subscription-form");
  
    // Show modal on button click
    subscribeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    });
  
    // Close modal on clicking the close icon
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // Handle form submission
    subscriptionForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert("You have successfully subscribed!");
      modal.classList.add("hidden"); // Close modal after submission
      subscriptionForm.reset(); // Reset form fields
    });
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  