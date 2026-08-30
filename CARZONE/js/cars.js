// ===================================
// CARS.JS - Search, Filter, Sort logic for Cars page
// ===================================

const carsContainer = document.getElementById("carsContainer");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const fuelFilter = document.getElementById("fuelFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const sortSelect = document.getElementById("sortSelect");
const resetFilters = document.getElementById("resetFilters");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");

// ===== ON PAGE LOAD: restore filter state from the URL if present =====
// Example: cars.html?search=corolla&brand=Toyota&fuel=Petrol&price=30000&sort=priceLowHigh
const urlParams = new URLSearchParams(window.location.search);
const searchFromUrl = urlParams.get("search");
const brandFromUrl = urlParams.get("brand");
const fuelFromUrl = urlParams.get("fuel");
const priceFromUrl = urlParams.get("price");
const sortFromUrl = urlParams.get("sort");

if (searchFromUrl) {
  searchInput.value = searchFromUrl;
}

if (brandFromUrl) {
  brandFilter.value = brandFromUrl;
}

if (fuelFromUrl) {
  fuelFilter.value = fuelFromUrl;
}

if (priceFromUrl) {
  priceRange.value = priceFromUrl;
  priceValue.textContent = `$${parseInt(priceFromUrl).toLocaleString()}`;
}

if (sortFromUrl) {
  sortSelect.value = sortFromUrl;
}

// ===== KEEP THE URL IN SYNC WITH CURRENT FILTERS =====
// Lets users bookmark/share a link that restores their exact filter state
function syncFiltersToUrl() {
  const params = new URLSearchParams();

  if (searchInput.value.trim() !== "") params.set("search", searchInput.value.trim());
  if (brandFilter.value !== "all") params.set("brand", brandFilter.value);
  if (fuelFilter.value !== "all") params.set("fuel", fuelFilter.value);
  if (parseInt(priceRange.value) !== 50000) params.set("price", priceRange.value);
  if (sortSelect.value !== "default") params.set("sort", sortSelect.value);

  const queryString = params.toString();
  const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
}

// ===== MAIN FUNCTION: apply all filters + sort, then render results =====
function renderCars() {
  let filteredCars = [...carsData]; // copy of original data so we don't mutate it

  // --- Search filter (matches brand or model) ---
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm !== "") {
    filteredCars = filteredCars.filter(car =>
      car.brand.toLowerCase().includes(searchTerm) ||
      car.model.toLowerCase().includes(searchTerm)
    );
  }

  // --- Brand filter ---
  const selectedBrand = brandFilter.value;
  if (selectedBrand !== "all") {
    filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
  }

  // --- Fuel type filter ---
  const selectedFuel = fuelFilter.value;
  if (selectedFuel !== "all") {
    filteredCars = filteredCars.filter(car => car.fuelType === selectedFuel);
  }

  // --- Price filter ---
  const maxPrice = parseInt(priceRange.value);
  filteredCars = filteredCars.filter(car => car.price <= maxPrice);

  // --- Sorting ---
  const sortBy = sortSelect.value;
  if (sortBy === "priceLowHigh") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filteredCars.sort((a, b) => b.price - a.price);
  } else if (sortBy === "yearNewest") {
    filteredCars.sort((a, b) => b.year - a.year);
  }

  // --- Render results ---
  if (filteredCars.length === 0) {
    carsContainer.innerHTML = "";
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    carsContainer.innerHTML = filteredCars.map(car => createCarCard(car)).join("");
  }

  // --- Update results count text ---
  resultsCount.textContent = `Showing ${filteredCars.length} of ${carsData.length} cars`;

  // --- Keep URL shareable/bookmarkable ---
  syncFiltersToUrl();
}

// ===== EVENT LISTENERS: re-run renderCars() whenever a filter changes =====
searchInput.addEventListener("input", renderCars);
brandFilter.addEventListener("change", renderCars);
fuelFilter.addEventListener("change", renderCars);
sortSelect.addEventListener("change", renderCars);

priceRange.addEventListener("input", function () {
  priceValue.textContent = `$${parseInt(priceRange.value).toLocaleString()}`;
  renderCars();
});

// ===== RESET FILTERS BUTTON =====
resetFilters.addEventListener("click", function () {
  searchInput.value = "";
  brandFilter.value = "all";
  fuelFilter.value = "all";
  priceRange.value = 50000;
  priceValue.textContent = "$50,000";
  sortSelect.value = "default";
  renderCars();
});

// ===== INITIAL LOAD =====
renderCars();
