// scripts.js

// Function to show the Query form
function showQueryForm() {
    document.getElementById("query-form")?.classList.remove("hidden");
    document.getElementById("admission-form")?.classList.add("hidden");
}

// Function to show the Admission form
function showAdmissionForm() {
    document.getElementById("admission-form")?.classList.remove("hidden");
    document.getElementById("query-form")?.classList.add("hidden");
}

// By default, show the Query form
document.addEventListener("DOMContentLoaded", function () {
    showQueryForm(); // Ensure the Query form is visible on page load
    showSlides(); // Initialize the image slider
});

// 1️⃣ Image Slider Functionality
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return; // Prevent errors if slides don't exist

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 3000); // Change slide every 3 seconds

// 2️⃣ Form Validation
document.querySelector("#query-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("input[name='full-name']")?.value.trim();
    let email = document.querySelector("input[name='email']")?.value.trim();
    let message = document.querySelector("textarea[name='message']")?.value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email address!");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});

// 3️⃣ FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", function () {
        this.classList.toggle('active'); // Toggle active class
        const answer = this.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block"; // Toggle answer visibility
    });
});

// 4️⃣ Google Maps Initialization
function initMap() {
    if (!document.querySelector("#map")) return; // Prevent errors if #map is missing

    let mapOptions = {
        center: { lat: 13.646075686734907, lng: 79.42265267508834 }, // Example: Coordinates for Tirupati
        zoom: 15,
    };
    new google.maps.Map(document.querySelector("#map"), mapOptions);
}

// Ensure Google Maps initializes when the page loads
window.onload = function () {
    if (typeof google !== "undefined") initMap();
};