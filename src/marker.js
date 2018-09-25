const mapbox = require("mapbox-gl");



const buildMarker =  (type, corrdinates)  => {
    debugger;
    let imgUrl;
    switch (type) {
        case 'activity':
            imgUrl = "http://i.imgur.com/WbMOfMl.png"
            break;
        case 'hotel':
            imgUrl = "http://i.imgur.com/D9574Cu.png"
            break;
        case 'restaurant':
        imgUrl = "http://i.imgur.com/cqR6pUI.png"
        break;
        }
        
    
        const newDomElement1 = document.createElement("div")
        //newDomElement1.id="marker 1"
        newDomElement1.style.width = "32px";
        newDomElement1.style.height = "39px";
        newDomElement1.style.backgroundImage = imgUrl;
        return new mapbox.Marker(newDomElement1).setLngLat(corrdinates); //.addTo(map)


         
}

module.exports = buildMarker;