# CarZone

A responsive car listing website — browse a catalogue of cars, filter and search them, look at full specs and a photo gallery for each one, and send an enquiry through a contact form.

It's built entirely with HTML, CSS, and vanilla JavaScript. No backend, no database — this was meant as a front-end showcase project, not a real product.

## Why I built it this way

I wanted to practice real front-end patterns without leaning on a framework — things like rendering UI from data, keeping filter state in the URL so a search is shareable, form validation, and persisting a user preference across visits. Sticking to plain HTML/CSS/JS meant I actually had to understand how these patterns work instead of getting them for free from a library.

## Tech stack

| Layer         | Tech                              | What's it for                                                 |
| ------------- | --------------------------------- | ------------------------------------------------------------- |
| Structure     | HTML5                             | 5 pages — Home, Cars, Car Details, About, Contact             |
| Styling       | CSS3 (~1,195 lines, hand-written) | Responsive layout, dark mode, card/grid components            |
| Interactivity | Vanilla JavaScript (5 modules)    | Filtering, search, sorting, validation, gallery, theme toggle |
| Data          | Static array in `data.js`         | The car listings; images pulled from Unsplash URLs            |
| Persistence   | `localStorage`                    | Remembers whether you last had dark or light mode on          |

## Pages

| Page        | File               | What's there                                                                   |
| ----------- | ------------------ | ------------------------------------------------------------------------------ |
| Home        | `index.html`       | Hero search bar + a featured cars grid pulled from `data.js`                   |
| Cars        | `cars.html`        | Full listing — search, brand/fuel filters, price range, sort, URL-synced state |
| Car Details | `car-details.html` | One car's page — image gallery with thumbnails, specs, description             |
| About       | `about.html`       | Static info page                                                               |
| Contact     | `contact.html`     | Contact form with client-side validation                                       |

## The parts I'm most glad I built

**Dynamic listings.** Car data lives as an array of objects in `data.js` — brand, model, year, price, fuel type, transmission, mileage, seats, location, a thumbnail, and a gallery. Both the Home and Cars pages render it through the same `createCarCard()` function in `main.js`, so I don't have to duplicate the same markup-building logic in two places.

**Search, filter, and sort (`cars.js`).** The Cars page has live keyword search, brand/fuel filters, a price range slider, and sorting. The part I like most: the current filter/sort state gets written into the URL itself (e.g. `cars.html?search=corolla&brand=Toyota&sort=priceLowHigh`) via the History API. That means a filtered view can be bookmarked or shared, and reloading the page brings back the same results instead of resetting.

**Car details + gallery (`car-details.js`).** Clicking a car takes you to `car-details.html?id=<id>`, which reads that id from the URL, finds the matching car, and builds the breadcrumb, gallery, and spec list from it. If an image fails to load, an `onerror` handler swaps in a local placeholder so the layout doesn't break.

**Contact form validation (`contact.js`).** Name, email (checked against a regex), phone, and message are all validated client-side before showing a success message — there's no backend for it to actually submit to, so this is as far as it goes.

**Dark mode (`main.js`).** A toggle in the nav switches themes and saves the choice to `localStorage`, so it sticks across page loads and repeat visits.

**Responsive layout.** Navigation collapses into a hamburger menu on smaller screens, and the car grid reflows across desktop and mobile.

## Scope and honest limitations

* Front-end only — no backend, no database, no API. All car data is static and bundled with the site.
* The contact form doesn't send anywhere; it validates and shows a success message, nothing more.
* Car images are hotlinked from Unsplash rather than hosted in the repo.

## What's next

* Hook the listings and contact form up to a real backend/API
* User accounts, with the ability to save/favourite listings
* Pagination, for when the catalogue gets bigger than a handful of cars

## Author

**Adna Muhammad Farooq** — Computer Science student, working toward AI and software engineering.

GitHub: [Adna-Muhammad-Farooq](https://github.com/Adna-Muhammad-Farooq)
**Email:** [shinwariadna@gmail.com](mailto:shinwariadna@gmail.com)
* Email: [adnamuhammadfarooq27@gmail.com](mailto:adnamuhammadfarooq27@gmail.com)
