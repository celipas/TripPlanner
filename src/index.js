const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js")
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsaXBhcyIsImEiOiJjam1pNTJ2dmkwMWNxM2ttNDk4NzZub25uIn0.M8vRYfUJXZ_nIdWYlbaV_A';

const fullstackCoords = [-74.009, 40.705]
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker1 = buildMarker('hotel', fullstackCoords) //.addTo(map)
marker1.addTo(map)
// debugger;
//const newDomElement1 = document.createElement("div")
//newDomElement1.id="marker 1"
//newDomElement1.style.width = "32px";
//newDomElement1.style.height = "39px";
//newDomElement1.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//new mapboxgl.Marker(newDomElement1).setLngLat([-74.009151, 40.705086]).addTo(map)

// const newDomElement2 = document.createElement("div")
// newDomElement2.id="marker 2"



// new mapboxgl.Marker(newDomElement1).setLngLat([-74.009151, 40.705086]).addTo(map);