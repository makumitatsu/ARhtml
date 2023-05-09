var map;
var marker;
var geocoder;
function initMap() {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({
  'address': '東京都新宿区西新宿4-29' //住所
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
    map = new google.maps.Map(document.getElementById('gmap'), {
      center: results[0].geometry.location,
      zoom: 17 //ズーム
   });
  marker = new google.maps.Marker({
  position: results[0].geometry.location,
  map: map
  });
  infoWindow = new google.maps.InfoWindow({
  content: '<h4>ツールチップのタイトル</h4>'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  } else {
    alert(status);
  }
});
}