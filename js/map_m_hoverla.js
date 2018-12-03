function initMap() {
    const centerLatLng = new google.maps.LatLng(48.0938, 24.3012);
    const mapOptions = {
        center: centerLatLng,
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);
