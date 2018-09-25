const mapboxgl = require("mapbox-gl");
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsaXBhcyIsImEiOiJjam1pNTJ2dmkwMWNxM2ttNDk4NzZub25uIn0.M8vRYfUJXZ_nIdWYlbaV_A';
debugger;
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});