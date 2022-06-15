let latitude = 37.0902, longitude = -95.7129;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#amber")

// Create a Mount Rushmore, South Dakota and add it to the map.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([-103.4591, 43.8791])
	.addTo(map);

var img2 = document.querySelector("#gateway")
// Create a Grand Canyon, Arizona and add it to the map.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([-112.1401, 36.0544])
	.addTo(map);

var img3 = document.querySelector("#gate")
// Create a Statue of Liberty and add it to the map.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([-74.0445, 40.6892])
	.addTo(map);


var img4 = document.querySelector("#lotus")

// Create a Washington Memorial and add it to the map.
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([-77.0353, 38.8895])
	.addTo(map);


//Create a Henry Ford Museuem and add it to the map.
var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([-83.232681, 42.302895])
	.addTo(map);