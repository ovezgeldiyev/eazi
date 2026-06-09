// Initialize Leaflet map
const map = L.map("map").setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
let osmLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }
).addTo(map);

// Alternative satellite layer
let satelliteLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution: "© Esri",
  }
);

// Sample pin locations with numbers
const pins = [
  { lat: 51.5, lng: -0.09, number: 1 },
  { lat: 51.51, lng: -0.08, number: 2 },
  { lat: 51.49, lng: -0.1, number: 3 },
  { lat: 51.505, lng: -0.095, number: 4 },
  { lat: 51.5, lng: -0.085, number: 5 },
];

// Add red circle markers with numbers
pins.forEach((pin) => {
  L.circleMarker([pin.lat, pin.lng], {
    radius: 10,
    fillColor: "#FA6F61",
    color: "#FDC9C4",
    weight: 4,
    opacity: 1,
    innerWidth: 28,
    outerWidth: 37,
    fillOpacity: 0.8,
  })
    .addTo(map)
    .bindPopup(`Pin ${pin.number}`)
    .on("click", () => console.log(`Clicked pin ${pin.number}`));
});

// Button event listeners
document
  .querySelector(".umapBanner__zoom button:first-child")
  .addEventListener("click", () => {
    map.zoomIn();
  });

document
  .querySelector(".umapBanner__zoom button:last-child")
  .addEventListener("click", () => {
    map.zoomOut();
  });

let isSatellite = false;
document.querySelector(".umapBanner__layer").addEventListener("click", () => {
  if (isSatellite) {
    map.removeLayer(satelliteLayer);
    map.addLayer(osmLayer);
  } else {
    map.removeLayer(osmLayer);
    map.addLayer(satelliteLayer);
  }
  isSatellite = !isSatellite;
});

document
  .querySelector(".umapBanner__location")
  .addEventListener("click", () => {
    map.locate({ setView: true, maxZoom: 16 });
    map.on("locationfound", (e) => {
      L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();
    });
    map.on("locationerror", () => {
      alert("Unable to find your location");
    });
  });

const updateCheckbox = document.querySelector(".umapCheck input");
let watchId = null;
updateCheckbox.addEventListener("change", () => {
  if (updateCheckbox.checked) {
    watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        map.setView([latitude, longitude], 16);
      },
      () => alert("Unable to track location"),
      { enableHighAccuracy: true }
    );
  } else if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
});
