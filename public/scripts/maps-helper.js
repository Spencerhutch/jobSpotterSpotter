
function findLocalEstablishments(map, lat, lng, onItemClicked) {
  var request = {
    location: new google.maps.LatLng(lat,lng),
    radius: '100',
    type: ['establishment']
  };

  return new Promise((resolve, reject) => {
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      // console.log('results: ', results)
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        /*
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          // console.log('Place: ', place)
          const marker = new google.maps.Marker({
            position: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            map: map
          });
        }
        */
        const items = results.filter((item) => {
          return item.types.includes('establishment')
        })
        resolve(items)
      }
    })
  })
}