document.addEventListener("DOMContentLoaded", function () {
    loadDestinations();
    setupEventListeners();
    setupLogin();
});

// Load dynamic destinations
function loadDestinations() {
    const destinations = [
        { name: "Paris", image: "Paris1.jpg" },
        { name: "Tokyo", image: "_DSF5280-Enhanced-NR.jpg" },
        { name: "New York", image: "new-york-statue-of-liberty.avif" },
        { name: "London", image: "images.jpeg" },
        { name: "Sydney", image: "Sydney_Opera_House_-_Dec_2008.jpg" },
    ];

    const container = document.querySelector(".destination-grid");
    container.innerHTML = "";

    destinations.forEach((dest) => {
        const card = document.createElement("div");
        card.classList.add("destination");
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <p>${dest.name}</p>
        `;
        container.appendChild(card);
    });
}

// Setup login button
function setupLogin() {
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener("click", function () {
        alert("🔐 Login functionality will be implemented here!");
    });
}

// Smooth scrolling for navigation
function setupEventListeners() {
    document.querySelectorAll("nav ul li a").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
}
