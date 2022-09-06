mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 14, // starting zoom
  projection: "globe", // display the map as a 3D globe
});

map.addControl(new mapboxgl.NavigationControl());


// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
  .setPopup(
    new mapboxgl.Popup({ offset: 25, className: "my-class", closeButton: false }).setHTML(
      `<h6>${campground.title}</h6><p>${campground.location}</p>`
    )
  )
  .setLngLat(campground.geometry.coordinates)
  .addTo(map);
