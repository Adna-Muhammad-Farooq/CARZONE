// ===== CAR DATA =====
// "thumbnail" is the local image used for car-grid cards (Home + Cars page).
// "gallery" is used for the image slider on the car-details page.
// Gallery images are hotlinked directly from Unsplash (no download needed).

const carsData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    price: 22000,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 12000,
    seats: 5,
    location: "Peshawar",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626072557464-90403d788e8d?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1746681999412-e14317fbf126?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "A reliable and fuel-efficient sedan, perfect for daily commuting with low maintenance costs."
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    price: 24500,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: 18000,
    seats: 5,
    location: "Lahore",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1687019497015-c3cdd5bc88b1?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1687019497015-c3cdd5bc88b1?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1706495100099-a25d9ddffe74?w=1200&auto=format&fit=crop&q=80",
    ],
    description: "Sporty design combined with excellent handling, a favorite among younger drivers."
  },
  {
    id: 3,
    brand: "BMW",
    model: "3 Series",
    year: 2021,
    price: 38000,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 25000,
    seats: 5,
    location: "Islamabad",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1647966008754-814349917adf?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1647966008754-814349917adf?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1759428115996-42d06c895664?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1750670950984-d4095aec9e81?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "A luxury sedan offering premium comfort, performance, and advanced technology features."
  },
  {
    id: 4,
    brand: "Audi",
    model: "A4",
    year: 2020,
    price: 34000,
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 30000,
    seats: 5,
    location: "Karachi",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1655225446996-6498fd7b9e0c?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1655225446996-6498fd7b9e0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1655126675340-682b41d024d0?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "Elegant styling and a smooth ride, built with Audi's signature quattro all-wheel drive."
  },
  {
    id: 5,
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    price: 45000,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: 5000,
    seats: 4,
    location: "Peshawar",
    featured: true,
    thumbnail:"https://images.unsplash.com/photo-1591293836027-e05b48473b67?w=1200&auto=format&fit=crop&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1591293836027-e05b48473b67?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1690235709293-6de0ba349eab?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "An iconic American muscle car delivering raw power and a thrilling driving experience."
  },
  {
    id: 6,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 42000,
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: 8000,
    seats: 5,
    location: "Lahore",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1610470832703-95d40c3fad55?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610470832703-95d40c3fad55?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1651311412157-d154a456746e?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562178235-7ba56b202338?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "A fully electric sedan with cutting-edge autopilot features and zero emissions."
  },
  {
    id: 7,
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: 27000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: 20000,
    seats: 5,
    location: "Islamabad",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1657872737697-737a2d123ef2?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1664287721774-13da4b108b18?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588440983028-d53e24fa96cc?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "A comfortable hybrid sedan offering great fuel economy without compromising on space."
  },
  {
    id: 8,
    brand: "Honda",
    model: "CR-V",
    year: 2022,
    price: 29500,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 15000,
    seats: 5,
    location: "Karachi",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1627395427294-d01af2f943ac?w=1200&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1627395427294-d01af2f943ac?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1623597780975-38ccd5030c83?w=1200&auto=format&fit=crop&q=80"
    ],
    description: "A spacious and practical SUV, ideal for families needing extra cargo room."
  }
];
