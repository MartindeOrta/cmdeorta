

function geoFindMe() {
//esta funcion una vez obteniza la localizacion se hace algo
function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    //esta es la llamada al paquete mapa 
 L.mapquest.key = '78wA64iZpyBG06J2W18UqdOvTyl0dgaP';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [latitude, longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 13
});

//estas lineas crean un punto en el mapa 
L.marker([latitude, longitude], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'a'
    })
  })
  .bindPopup('aquí estas')
  .addTo(map);


  //estas lineas colocan en el mapa botonoes de control
map.addControl(L.mapquest.control({ position: 'bottomright' }));
//las siguentes lineas agregan al mapa un input tipo texto para buscar lugares
// let searchControl = L.mapquest.searchControl({
//     className: '',
//     hoverMarker: {
//       icon: 'marker',
//       iconOptions: {
//         size: 'sm',
//         primaryColor: '#333333',
//         secondaryColor: '#333333'
//       }
//     },
//     search: {
//       sort: 'relevance',
//       pageSize: 20
//     },
//     searchInput: {
//       searchAheadOptions: {
//         limit: 6,
//         collection: 'address,adminArea,airport,poi,category,franchise'
//       },
//       compactResults: true,
//       placeholderText: 'Search',
//       clearTitle: 'Clear search'
//     },
//     searchLayer: {
//       buffer: 256,
//       collisionMargin: 2,
//       marker: {
//         icon: 'via',
//         iconOptions: {
//           primaryColor: '#ffffff',
//           secondaryColor: '#333333',
//           size: 'lg'
//         },
//         popupEnabled: true
//       },
//       paddingTopLeft: [420, 20],
//       paddingBottomRight: [20, 20],
//       searchResponse: {},
//       updateResultsOnMapMove: true
//     }
//   }).addTo(map);
  //estas lines agregan un boton que controla el tipo de mapa satelite o comun
  map.addControl(L.mapquest.satelliteControl());
  
}
//esta funcion controla el error en la funcion success
function error() {
   console.log("error en la carga del mapa")
  }
//1 aca se pregunta cuanto si el navegador o dispositivo tiene geolocalizacion
  if (!navigator.geolocation) {
    
  } else {
    //aca se optiene la localizacion y se pregunta que se hace con ella 
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
  
  
  
    //aca se llama a la funcion para que la aplicacion comience con el mapa
geoFindMe()
//aca se asigna la funcion al boton para que se actualice
  document.querySelector('#find-me').addEventListener('click', geoFindMe);