function initMap() {
    const centerLatLng = new google.maps.LatLng(49.0232, 24.4100);
    const mapOptions = {
        center: centerLatLng,
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);
