document.getElementById('js-menu-icon').addEventListener('click', () => {
    const menu = document.getElementById('js-hamburger-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            date: "2025-02-15",
            time: "9:00 am - 12:00 pm",
            title: "Latte Art Masterclass",
            location: "Bean Boutique, Downtown",
            description: "Learn the secrets of creating beautiful latte art with our expert baristas.",
            price: "$25.00",
            image: "../img/latte art.jpg"
        },
        {
            date: "2025-03-05",
            time: "10:00 am - 1:00 pm",
            title: "Coffee Tasting & Roasting",
            location: "Bean Boutique Roastery",
            description: "Explore different coffee flavors and learn how roasting affects taste.",
            price: "$15.00",
            image: "../img/tasting.webp"
        },
        {
            date: "2025-04-10",
            time: "2:00 pm - 5:00 pm",
            title: "Brew Methods 101",
            location: "Bean Boutique, Workshop Room",
            description: "Master the pour-over, French press, and espresso brewing techniques.",
            price: "Free",
            image: "../img/brew101.jpg"
        },
        {
            date: "2025-05-12",
            time: "4:00 pm - 7:00 pm",
            title: "Espresso Perfection Workshop",
            location: "Bean Boutique Training Lab",
            description: "Learn the art of pulling the perfect espresso shot from top baristas.",
            price: "$30.00",
            image: "../img/espresso_w.jpg"
        },
        {
            date: "2025-06-22",
            time: "11:00 am - 2:00 pm",
            title: "Cold Brew Creations",
            location: "Bean Boutique, Rooftop Lounge",
            description: "Explore different cold brew methods and create your own custom blend.",
            price: "$20.00",
            image: "../img/cold brew w.jpg"
        },
        {
            date: "2025-07-08",
            time: "6:00 pm - 9:00 pm",
            title: "Barista Basics",
            location: "Bean Boutique, Training Center",
            description: "A beginner-friendly workshop covering coffee brewing, milk steaming, and machine handling.",
            price: "$40.00",
            image: "../img/Barista-Workshp.jpg"
        },
        {
            date: "2025-08-15",
            time: "2:00 pm - 5:00 pm",
            title: "The Science of Coffee",
            location: "Bean Boutique, Science Lab",
            description: "Discover how water temperature, grind size, and brew time impact coffee taste.",
            price: "$35.00",
            image: "../img/science coffee.jpg"
        },
        {
            date: "2025-09-25",
            time: "3:00 pm - 5:00 pm",
            title: "Home Brewing Essentials",
            location: "Bean Boutique, Home Barista Lab",
            description: "Learn how to make café-quality coffee at home with simple techniques.",
            price: "$18.00",
            image: "../img/home brew.jpg"
        },
        {
            date: "2025-10-30",
            time: "9:00 pm - 11:00 pm",
            title: "Signature Coffee Cocktails",
            location: "Bean Boutique, Cocktail Bar",
            description: "Craft coffee-based cocktails with expert mixologists and baristas.",
            price: "$50.00",
            image: "../img/event.jpg"
        }
    ];

    const eventsList = document.getElementById("events-list");

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        const date = new Date(event.date);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
        const year = date.getFullYear();

        eventDiv.innerHTML = `
            <div class="event-date">
                <div class="month">${month}</div>
                <div class="day">${day}</div>
                <div class="year">${year}</div>
            </div>
            <div class="event-details">
                <div class="event-time">${month} ${day} @ ${event.time}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-location">${event.location}</div>
                <div class="event-description">${event.description}</div>
                <p><strong>${event.price}</strong></p>
                <button class="register-btn" data-title="${event.title}">Register</button>
            </div>
            <img src="images/${event.image}" alt="${event.title}" class="event-image">
        `;

        eventsList.appendChild(eventDiv);
    });

    // Modal Functionality
    const modal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close");
    const registrationForm = document.getElementById("registrationForm");

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("register-btn")) {
            document.getElementById("eventName").value = event.target.getAttribute("data-title");
            modal.style.display = "block";
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(`You have successfully registered for ${document.getElementById("eventName").value}!`);
        modal.style.display = "none";
        registrationForm.reset();
    });
});
