// initializing basemap
var google = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                         {id: 'google-maps', attribution: '&copy; <a href="https://www.google.com/" target="_blank">Google Maps</a> contributors'}),
    osm    = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                         {id: 'OSM-maps', attribution: '&copy; <a href="http://openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'});

var markers = L.layerGroup();

var map = L.map('map', {
  center: [59.9127300, 10.7460900],
  zoom: 16,
  layers: [google]
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

//
$.get("https://www.vegvesen.no/ruteplan/routingservice_v1_0/routingservice/solve?stops=255705,6596507;241697,6596651&returnDirections=true&returnGeometry=true&format=json", function(data, status){
  alert("Data: " + data + "\nStatus: " + status);
});












/*
var basemLayers = [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  })
  new TileLayer({
    extent: extent,
    source: new TileWMS({
      url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
      crossOrigin: 'anonymous',
      attributions: '© <a href="http://www.geo.admin.ch/internet/geoportal/' +
      'en/home.html">Pixelmap 1:1000000 / geo.admin.ch</a>',
      params: {
        'LAYERS': 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
        'FORMAT': 'image/jpeg'
      },
      serverType: 'mapserver'
    })
  })
];

var smap = new ol.Map({
  target: 'map',
  layers: basemLayers,
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});
*/
