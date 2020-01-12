$(document).ready(function () {

});
var map;

function initMap() {
    var sydney = new google.maps.LatLng(49.262440, -123.246231 );

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});
    
  
    var request = {
      query: 'Museum of Contemporary Art Australia',
      fields: ['name', 'geometry'],
    };
  

    //var service = new google.maps.places.PlacesService(map);

    var myPlace = {lat: 49.262440, lng:-123.246231 };
    var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location : myPlace,
                radius : 20000,
                keyword : [ 'supermarket' ]
            }, callback);
  
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    console.log(map);
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map : map,
        position : place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(
            '<div style="font-size:15px"><b>Grocery Store</b><br>'+
            'Name:&nbsp&nbsp' + place.name + '<br>' +
            'Sustainability Rating (0-10):&nbsp  ' + getRandomInt(0, 10)+ '</div>'
            );
        infowindow.open(map, this);
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function callback(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//             alert("OK");
//           for (var i = 0; i < results.length; i++) {
//               var infowindow = new google.maps.InfoWindow({
//                   content: ""
//                 });
//               var marker = new google.maps.Marker({
//                    position: results[0].geometry.location,
//                    map: map
//                });
//                marker.addListener('click', function() {
//                   infowindow.open(map, marker);
//                 });
//               //createMarker(results[0].geometry.location.latlng, "<div>helloworld</div>")
  
//               }
//           // map.setCenter(results[0].geometry.location);
//           }
// }

// function createMarker(latlng, html) {
//     var newmarker = new google.maps.Marker({
//         position: latlng,
//         map: map,
//         title: html
//     });

//     newmarker['infowindow'] = new google.maps.InfoWindow({
//             content: html
//         });

//     google.maps.event.addListener(newmarker, 'mouseover', function() {
//         this['infowindow'].open(map, this);
//     });
// }