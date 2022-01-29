import "./style.css";
import { getIPLocation } from "./getIPLocation";
import { getAQIData } from "./getAQIData";
import { displayData } from "./displayData";

const location = await getIPLocation();

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: location || [72.83333, 18.96667], // starting position [lng, lat]
  zoom: 12.5, // starting zoom
});

map.on("render", function () {
  map.resize();
});

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  placeholder: "Search for places",
  mapboxgl: mapboxgl,
});

map.addControl(geocoder);

geocoder.on("result", async (results) => {
  // console.log(results);
  const val = await getAQIData(results.result.center);
  // console.log(val);
  displayData(val);
});

const AQIData = await getAQIData(location);
// console.log(AQIData);
displayData(AQIData);
