function myMap() {
    return;
    var mapProp= {
      center:new google.maps.LatLng(38.800049679829435,-7.45592387412418),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 38.800049679829435, lng: -7.45592387412418 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  