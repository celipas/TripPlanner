// const mapbox = require("mapbox-gl");

// const buildMarker =  (type, corrdinates)  => {

//     let imgUrl;
//     switch (type) {
//         case 'activity':
//             imgUrl = "http://i.imgur.com/WbMOfMl.png"
//             break;
//         case 'hotel':
//             imgUrl = "http://i.imgur.com/D9574Cu.png"
//             break;
//         case 'restaurant':
//         imgUrl = "http://i.imgur.com/cqR6pUI.png"
//         break;
//         }
        
    
//         const newDomElement1 = document.createElement("div")
//         //newDomElement1.id="marker 1"
//         newDomElement1.style.width = "32px";
//         newDomElement1.style.height = "39px";
//         newDomElement1.style.backgroundImage = `url(${imgUrl})`;
//         // newDomElement1.style.backgroundImage = imgUrl;
//         return new mapbox(newDomElement1).setLngLat(corrdinates); //.addTo(map)


         
// }

// module.exports = buildMarker;

const { Marker } = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = "activities";
  }
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "contain";
  markerEl.style.width = "32px";
  markerEl.style.height = "37px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;