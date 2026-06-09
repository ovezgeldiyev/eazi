// const locations = [
//   {
//     id: "sell_1",
//     coords: [-12.965, 18.48], // Ottery 1
//     suburb: "Ottery",
//     price: "FULL Asking Price",
//     commission: "R 16,462",
//     days: "10 days",
//     status: "sold",
//     img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
//   },
//   {
//     id: "sell_2",
//     coords: [-13.975, 18.465], // Diep River
//     suburb: "Diep River",
//     price: "FULL Asking Price",
//     commission: "R 20,463",
//     days: "5 days",
//     status: "sold",
//     img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261015.jpg",
//   },
//   {
//     id: "sell_3",
//     coords: [-14.963, 18.473], // Ottery 2
//     suburb: "Ottery",
//     price: "R 2,250,000",
//     commission: "R 16,462",
//     days: "10 days",
//     status: "sold",
//     img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
//   },
//   {
//     id: "sell_4",
//     coords: [-15.966, 18.475], // Ottery 3
//     suburb: "Ottery",
//     price: "R 2,250,000",
//     commission: "R 16,462",
//     days: "10 days",
//     status: "sold",
//     img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
//   },
//   {
//     id: "sell_5",
//     coords: [-16.964, 18.477], // Ottery 4
//     suburb: "Ottery",
//     price: "R 2,250,000",
//     commission: "R 16,462",
//     days: "10 days",
//     status: "sold",
//     img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
//   },
// ];

// let map;

// // Custom icon for the marker
// const customIcon = L.icon({
//   iconUrl: "./images-2026/pinIcon.png", // Default icon
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [1, -34],
// });

// const activeIcon = L.icon({
//   iconUrl: "./images-2026/pinActive.png", // Active icon
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [1, -34],
// });

// // Initial map setup (hidden)
// const initialMapDiv = document.getElementById("map");
// const initialMapDivs = document.querySelectorAll(".mapBanner");
// initialMapDivs.forEach((initialMapDiv) => {
  
// })
// if (initialMapDiv) {
//   initialMapDiv.style.display = "block"; // Changed to block for modal
//   map = L.map("map", {
//     center: [-33.97, 18.47],
//     zoom: 12,
//     attributionControl: false,
//     zoomControl: false, // Disable default zoom control
//   });
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//   }).addTo(map);

//   // Add custom zoom controls on the right
//   L.control
//     .zoom({
//       position: "topright",
//     })
//     .addTo(map);
// }

// // Event listeners for cards
// const modal = document.getElementById("map-modal");
// document.querySelectorAll(".recentsItem").forEach((card) => {
//   card.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (modal) {
//       modal.style.display = "block";

//       if (map) {
//         // Remove existing markers
//         map.eachLayer((layer) => {
//           if (layer instanceof L.Marker) {
//             map.removeLayer(layer);
//           }
//         });

//         // Find the selected location based on card id or data-pid
//         const cardId = card.id || card.getAttribute("data-pid");
//         const selectedLocation = locations.find((loc) => loc.id === cardId);

//         if (selectedLocation) {
//           // Center map on selected location with a tighter zoom
//           map.setView(selectedLocation.coords, 14); // Increased zoom for closer view

//           // Add marker with custom icon and popup
//           const marker = L.marker(selectedLocation.coords, {
//             icon: customIcon,
//           }).addTo(map);
//           marker.setIcon(activeIcon);
//           const popupContent = `
//                                 <div class="mapItem">
//                                     <div class="mapItem__image">
//                                         <span>${selectedLocation.status}</span>
//                                         <img src="${selectedLocation.img}" alt="${selectedLocation.suburb}">
//                                     </div>
//                                     <div class="mapItem__inner">
//                                         <div class="mapItem__head">
//                                             <h6 class="benText">Sold For: ${selectedLocation.price}</h6>
//                                             <p><svg><use xlink:href="#locationIcon"></use></svg> ${selectedLocation.suburb}</p>
//                                         </div>
//                                         <ul>
//                                             <li><p><svg><use xlink:href="#moneysIcon"></use></svg> Commission saved: ${selectedLocation.commission}</p></li>
//                                             <li><p><svg><use xlink:href="#cardIcon"></use></svg> Sold in ${selectedLocation.days}</p></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             `;
//           marker.bindPopup(popupContent).openPopup();

//           // Toggle active state on popup click
//           marker.on("popupopen", () => {
//             marker.setIcon(activeIcon);
//           });
//           marker.on("popupclose", () => {
//             marker.setIcon(customIcon);
//           });
//         }

//         map.invalidateSize();
//       }
//     }
//   });
// });
// const modalBtn = document.getElementById("recentsBtn");
// if (modalBtn) {
//   modalBtn.addEventListener("click", (e) => {
//     modal.style.display = "block";
//     e.preventDefault();
//   });
// }

// // Close modal
// document.querySelector(".map__close").addEventListener("click", () => {
//   const modal = document.getElementById("map-modal");
//   if (modal) {
//     modal.style.display = "none";
//   }
// });

// // Basic search functionality (placeholder)
// document.querySelector(".search-input").addEventListener("input", (e) => {
//   const searchTerm = e.target.value.toLowerCase();
//   const filteredLocations = locations.filter((loc) =>
//     loc.suburb.toLowerCase().includes(searchTerm)
//   );
//   console.log("Filtered locations:", filteredLocations);
//   // Implement marker update logic as needed
// });


// === Data: corrected coordinates (Cape Town area approximations) ===
const locations = [
  {
    id: "sell_1",
    coords: [-34.0025, 18.4980], // Ottery (approx)
    suburb: "Ottery",
    price: "FULL Asking Price",
    commission: "R 16,462",
    days: "10 days",
    status: "sold",
    img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
  },
  {
    id: "sell_2",
    coords: [-34.0450, 18.4800], // Diep River (approx)
    suburb: "Diep River",
    price: "FULL Asking Price",
    commission: "R 20,463",
    days: "5 days",
    status: "sold",
    img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261015.jpg",
  },
  {
    id: "sell_3",
    coords: [-34.0080, 18.5020], // Ottery 2 (slightly different)
    suburb: "Ottery",
    price: "R 2,250,000",
    commission: "R 16,462",
    days: "10 days",
    status: "sold",
    img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
  },
  {
    id: "sell_4",
    coords: [-34.0120, 18.4950], // Ottery 3
    suburb: "Ottery",
    price: "R 2,250,000",
    commission: "R 16,462",
    days: "10 days",
    status: "sold",
    img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
  },
  {
    id: "sell_5",
    coords: [-34.0185, 18.5070], // Ottery 4
    suburb: "Ottery",
    price: "R 2,250,000",
    commission: "R 16,462",
    days: "10 days",
    status: "sold",
    img: "https://dh3yk7bgkxpyv.cloudfront.net/sr/261748.jpg",
  },
];

// === Globals ===
let bannerMap, modalMap;
const bannerMarkers = {}; // id -> L.Marker
const modalMarkers = {}; // id -> L.Marker

// === Icons (adjust paths if needed) ===
const customIcon = L.icon({
  iconUrl: "./images-2026/pinIcon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});
const activeIcon = L.icon({
  iconUrl: "./images-2026/pinActive.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});

// === Popup HTML helper ===
function makePopupHTML(loc) {
  return `
    <div class="mapItem">
      <div class="mapItem__image">
        <span>${loc.status}</span>
        <img src="${loc.img}" alt="${loc.suburb}">
      </div>
      <div class="mapItem__inner">
        <div class="mapItem__head">
          <h6 class="benText">Sold For: ${loc.price}</h6>
          <p><svg><use xlink:href="#locationIcon"></use></svg> ${loc.suburb}</p>
        </div>
        <ul>
          <li><p><svg><use xlink:href="#moneysIcon"></use></svg> Commission saved: ${loc.commission}</p></li>
          <li><p><svg><use xlink:href="#cardIcon"></use></svg> Sold in ${loc.days}</p></li>
        </ul>
      </div>
    </div>
  `;
}

// === Create map helpers ===
function createMap(container, options = {}) {
  const map = L.map(container, {
    center: options.center || [-34.01, 18.49],
    zoom: options.zoom || 12,
    attributionControl: false,
    zoomControl: options.zoomControl !== undefined ? options.zoomControl : true,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);
  return map;
}

// === Add all markers to a specific map and populate markers dict ===
function populateMarkers(map, targetDict, onClickCallback) {
  locations.forEach((loc) => {
    const m = L.marker(loc.coords, { icon: customIcon }).addTo(map);
    m.bindPopup(makePopupHTML(loc));
    // when marker clicked on banner we want to open modal and activate corresponding modal marker
    m.on("click", () => {
      if (typeof onClickCallback === "function") onClickCallback(loc);
    });
    m.locId = loc.id;
    targetDict[loc.id] = m;
    // popup open/close icon change (only local map)
    m.on("popupopen", () => m.setIcon(activeIcon));
    m.on("popupclose", () => m.setIcon(customIcon));
  });
}

// === Reset icons in a markers dict to default ===
function resetMarkerIcons(markerDict) {
  Object.values(markerDict).forEach((mk) => {
    try { mk.setIcon(customIcon); } catch (e) {}
  });
}

// === Open modal and show a specific location active (if id) ===
function openModalAndActivate(id) {
  const modal = document.getElementById("map-modal");
  if (!modal) return;
  modal.style.display = "block";

  // Ensure modal map layout is correct
  setTimeout(() => {
    if (modalMap) modalMap.invalidateSize();
    // If id provided, center and open popup on modal map
    if (id && modalMarkers[id]) {
      resetMarkerIcons(modalMarkers);
      const mm = modalMarkers[id];
      mm.setIcon(activeIcon);
      modalMap.setView(mm.getLatLng(), 14);
      mm.openPopup();
    }
  }, 200);
}

// === Initialize Banner Map ===
const bannerDiv = document.getElementById("banner-map");
if (bannerDiv) {
  bannerMap = createMap(bannerDiv, { 
    center: [-34.89, 18.50], // Better center for Ottery markers
    zoom: 12, 
    zoomControl: false 
  });

  // Custom marker creation for banner map without popups
  locations.forEach((loc) => {
    const m = L.marker(loc.coords, { icon: customIcon }).addTo(bannerMap);
    
    // No popup binding for banner map
    
    m.on("click", () => {
      // open modal and activate corresponding marker in modalMap
      openModalAndActivate(loc.id);
    });
    m.locId = loc.id;
    bannerMarkers[loc.id] = m;
    
    // No popup open/close events for banner map
  });
}


const modalDiv = document.getElementById("modal-map");
if (modalDiv) {
  modalMap = createMap(modalDiv, { 
    center: [-34.01, 18.49], 
    zoom: 12, 
    zoomControl: false // Disable default zoom control
  });

  // Add custom zoom controls on the right (like in your old code)
  L.control.zoom({
    position: "topright",
  }).addTo(modalMap);

  // populate modal markers — clicking modal marker will open its popup (and set icon)
  populateMarkers(modalMap, modalMarkers, (loc) => {
    // ensure modal marker is active when clicked (already in modal, so just set icon)
    resetMarkerIcons(modalMarkers);
    if (modalMarkers[loc.id]) {
      modalMarkers[loc.id].setIcon(activeIcon);
      modalMarkers[loc.id].openPopup();
    }
  });
}
// === recentsItem click -> open modal and activate matching marker ===
document.querySelectorAll(".recentsItem").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const cardId = card.id || card.dataset.pid;
    // Open modal and activate that id
    openModalAndActivate(cardId);
  });
});

// === recentsBtn -> open modal WITHOUT activating an item ===
const recentsBtn = document.getElementById("recentsBtn");
if (recentsBtn) {
  recentsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById("map-modal");
    if (!modal) return;
    modal.style.display = "block";
    setTimeout(() => {
      if (modalMap) {
        modalMap.invalidateSize();
        // reset icons so nothing is active
        resetMarkerIcons(modalMarkers);
      }
    }, 200);
  });
}

// === Click marker on banner should also visually set the modal marker active (handled above) ===
// When opening by id programmatically you're using openModalAndActivate(id) which sets the modal marker icon and popup

// === Close modal button ===
const closeBtn = document.querySelector(".map__close");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    const modal = document.getElementById("map-modal");
    if (modal) modal.style.display = "none";
    // reset active icons in modal
    resetMarkerIcons(modalMarkers);
  });
}

// === Simple search for modal map (filters modal markers) ===
const searchInput = document.querySelector(".search-input");
if (searchInput && modalMap) {
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    // remove all modal markers
    Object.values(modalMarkers).forEach((mk) => {
      try { modalMap.removeLayer(mk); } catch (err) {}
    });
    // empty modalMarkers then re-add filtered
    for (const k in modalMarkers) delete modalMarkers[k];

    const filtered = locations.filter((loc) =>
      loc.suburb.toLowerCase().includes(term)
    );
    populateMarkers(modalMap, modalMarkers, (loc) => {
      resetMarkerIcons(modalMarkers);
      if (modalMarkers[loc.id]) {
        modalMarkers[loc.id].setIcon(activeIcon);
        modalMarkers[loc.id].openPopup();
      }
    });
    // optionally fit map to filtered markers bounds
    if (filtered.length) {
      const latlngs = filtered.map((f) => f.coords);
      try {
        modalMap.fitBounds(latlngs, { padding: [40, 40] });
      } catch (e) {}
    }
  });
}
