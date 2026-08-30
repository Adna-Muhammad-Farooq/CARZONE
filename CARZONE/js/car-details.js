// ===================================
// CAR-DETAILS.JS - Logic for single car page
// ===================================

// ===== GET CAR ID FROM URL =====
// Example: car-details.html?id=3
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get("id"));

// Find the matching car from our data
const car = carsData.find(c => c.id === carId);

// ===== IF NO CAR FOUND, SHOW A MESSAGE AND STOP =====
if (!car) {
  document.getElementById("detailsPage").innerHTML = `
    <p style="text-align:center; padding: 60px 20px; font-size: 1.2rem;">
      Car not found. <a href="cars.html">Go back to Cars page</a>.
    </p>
  `;
} else {

  // ===== BREADCRUMB =====
  document.getElementById("breadcrumbCurrent").textContent = `${car.brand} ${car.model}`;
  document.title = `${car.brand} ${car.model} - CarZone`;

  // ===== IMAGE GALLERY =====
  const mainImage = document.getElementById("mainImage");
  const thumbnailRow = document.getElementById("thumbnailRow");

  mainImage.src = car.gallery[0];
  mainImage.alt = `${car.brand} ${car.model} (${car.year})`;
  mainImage.onerror = function () {
    this.onerror = null;
    this.src = "images/placeholder.svg";
  };

  thumbnailRow.innerHTML = car.gallery
    .map((img, index) => `
      <img src="${img}" alt="${car.brand} ${car.model} view ${index + 1}" 
           class="thumbnail ${index === 0 ? 'active' : ''}" 
           data-index="${index}" loading="lazy"
           onerror="this.onerror=null; this.src='images/placeholder.svg';">
    `)
    .join("");

  // Clicking a thumbnail updates the main image
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function () {
      mainImage.src = car.gallery[this.dataset.index];
      thumbnails.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // ===== CAR INFO =====
  document.getElementById("carTitle").textContent = `${car.brand} ${car.model} (${car.year})`;
  document.getElementById("carPrice").textContent = `$${car.price.toLocaleString()}`;
  document.getElementById("carDescription").textContent = car.description;

  // ===== SPECS GRID =====
  const specsGrid = document.getElementById("specsGrid");
  const specs = [
    { label: "Year", value: car.year, icon: "fa-calendar" },
    { label: "Mileage", value: `${car.mileage.toLocaleString()} km`, icon: "fa-gauge" },
    { label: "Fuel Type", value: car.fuelType, icon: "fa-gas-pump" },
    { label: "Transmission", value: car.transmission, icon: "fa-gears" },
    { label: "Seats", value: car.seats, icon: "fa-chair" },
    { label: "Location", value: car.location, icon: "fa-location-dot" }
  ];

  specsGrid.innerHTML = specs
    .map(spec => `
      <div class="spec-item">
        <i class="fa-solid ${spec.icon}"></i>
        <div>
          <p class="spec-label">${spec.label}</p>
          <p class="spec-value">${spec.value}</p>
        </div>
      </div>
    `)
    .join("");

  // ===== FAVORITE BUTTON =====
  const favoriteBtn = document.getElementById("favoriteBtn");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if this car is already favorited, update button appearance
  function updateFavoriteBtn() {
    const isFavorited = favorites.includes(car.id);
    favoriteBtn.innerHTML = isFavorited
      ? `<i class="fa-solid fa-heart"></i> Saved to Favorites`
      : `<i class="fa-regular fa-heart"></i> Save to Favorites`;
  }
  updateFavoriteBtn();

  favoriteBtn.addEventListener("click", function () {
    if (favorites.includes(car.id)) {
      favorites = favorites.filter(id => id !== car.id);
    } else {
      favorites.push(car.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoriteBtn();
  });

  // ===== CONTACT SELLER BUTTON =====
  document.getElementById("contactSellerBtn").addEventListener("click", function () {
    window.location.href = "contact.html";
  });

  // ===== EMI CALCULATOR =====
  const downPaymentInput = document.getElementById("downPayment");
  const loanTenureInput = document.getElementById("loanTenure");
  const interestRateInput = document.getElementById("interestRate");
  const emiResult = document.getElementById("emiResult");

  function calculateEMI() {
    const price = car.price;
    const downPayment = parseFloat(downPaymentInput.value) || 0;
    const tenure = parseInt(loanTenureInput.value) || 1;
    const annualRate = parseFloat(interestRateInput.value) || 0;

    const loanAmount = Math.max(price - downPayment, 0);
    const monthlyRate = annualRate / 100 / 12;

    let emi;
    if (monthlyRate === 0) {
      // No interest, simple division
      emi = loanAmount / tenure;
    } else {
      // Standard EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const factor = Math.pow(1 + monthlyRate, tenure);
      emi = (loanAmount * monthlyRate * factor) / (factor - 1);
    }

    emiResult.textContent = `$${emi.toFixed(2)}`;
  }

  // Recalculate whenever any input changes
  [downPaymentInput, loanTenureInput, interestRateInput].forEach(input => {
    input.addEventListener("input", calculateEMI);
  });

  calculateEMI(); // run once on load

  // ===== SIMILAR CARS (same brand, excluding current car) =====
  const similarCarsContainer = document.getElementById("similarCarsContainer");
  const similarCars = carsData.filter(c => c.brand === car.brand && c.id !== car.id);

  if (similarCars.length === 0) {
    similarCarsContainer.innerHTML = `<p>No similar cars found.</p>`;
  } else {
    similarCarsContainer.innerHTML = similarCars.map(c => createCarCard(c)).join("");
  }
}
