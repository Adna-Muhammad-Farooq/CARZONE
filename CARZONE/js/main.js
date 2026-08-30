// ===================================
// MAIN.JS - Shared logic across all pages
// ===================================

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if user already chose dark mode before (saved in browser storage)
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  updateDarkModeIcon(true);
}

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save user's choice so it stays after refresh
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      updateDarkModeIcon(true);
    } else {
      localStorage.setItem("darkMode", "disabled");
      updateDarkModeIcon(false);
    }
  });
}

// Changes the moon/sun icon depending on current mode
function updateDarkModeIcon(isDark) {
  const icon = darkModeToggle.querySelector("i");
  if (isDark) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// ===== HAMBURGER MENU (Mobile Nav) =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// ===== BUILD A SINGLE CAR CARD (reused in multiple places) =====
// Takes a car object from data.js and returns an HTML string for a car card
function createCarCard(car) {
  return `
    <div class="car-card">
    <img src="${car.thumbnail}" alt="${car.brand} ${car.model} ${car.year}" loading="lazy"
         onerror="this.onerror=null; this.src='images/placeholder.svg';">
    <div class="car-card-body">
        <h3>${car.brand} ${car.model}</h3>
        <p class="car-year">${car.year} &bull; ${car.fuelType} &bull; ${car.transmission}</p>
        <p class="car-price">$${car.price.toLocaleString()}</p>
        <a href="car-details.html?id=${car.id}" class="btn-secondary">View Details</a>
    </div>
    </div>
`;
}

// ===== LOAD FEATURED CARS ON HOME PAGE =====
const featuredCarsContainer = document.getElementById("featuredCarsContainer");

if (featuredCarsContainer) {
  // Filter only cars marked as featured: true
  const featuredCars = carsData.filter(car => car.featured === true);

  // Build HTML for each featured car and inject into the page
  featuredCarsContainer.innerHTML = featuredCars
    .map(car => createCarCard(car))
    .join("");
}

// ===== HERO SEARCH BAR (Home Page) =====
const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroSearchInput = document.getElementById("heroSearchInput");

if (heroSearchBtn) {
  heroSearchBtn.addEventListener("click", function () {
    const searchTerm = heroSearchInput.value.trim();

    // Redirect to cars.html with the search term in the URL
    // cars.js (on the Cars page) will read this and filter results
    if (searchTerm !== "") {
      window.location.href = `cars.html?search=${encodeURIComponent(searchTerm)}`;
    } else {
      window.location.href = `cars.html`;
    }
  });
}
