function initMap() {
    const centerLatLng = new google.maps.LatLng(48.4050, 26.3450);
    const mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);

