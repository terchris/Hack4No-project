// initializing basemap
var google = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                         {id: 'google-maps', attribution: '&copy; <a href="https://www.google.com/" target="_blank">Google Maps</a> contributors'}),
    osm    = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                         {id: 'OSM-maps', attribution: '&copy; <a href="http://openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'});

var markers = L.layerGroup();
var /*marker1 = L.marker([59.916425, 10.750357]).bindPopup('person1').addTo(markers),
    marker2 = L.marker([59.917436, 10.752170]).bindPopup('person2').addTo(markers),
    marker3 = L.marker([59.917549, 10.754445]).bindPopup('person3').addTo(markers),*/
    marker4 = L.marker([59.918646, 10.757353]).bindPopup('destination').addTo(markers);

var map = L.map('map', {
  center: [59.917436, 10.752170],
  zoom: 16,
  layers: [google, markers]
});

// initializing layer control
var baseMaps = {
  'Google Maps': google,
  'OpenStreetMap ': osm
};
var overlayMaps = {
  'Markers': markers
};

var control = L.control.layers(baseMaps, overlayMaps, {position: 'bottomright'}).addTo(map);


var searchControl = L.esri.Geocoding.geosearch().addTo(map);

searchControl.on('results', function(data) {
  //results.clearLayers();
  for (var i = data.results.length - 1; i >= 0; i--) {
    markers.addLayer(L.marker(data.results[i].latlng));
  }
});



// https://www.vegvesen.no/ruteplan/routingservice_v1_0/routingservice/solve?stops=255705,6596507;241697,6596651&returnDirections=true&returnGeometry=true&format=json

// https://www.vegvesen.no/ruteplan/routingservice_v1_0/routingservice/solve?stops=255705,6596507;241697,6596651&returnDirections=true&returnGeometry=true&format=json

/*
$.get("https://www.vegvesen.no/ruteplan/routingservice_v1_0/routingservice/solve?stops=255705,6596507;241697,6596651&returnDirections=true&returnGeometry=true&format=json", function(data, status) {
  alert("Data: " + data + "\nStatus: " + status);
});
*/
