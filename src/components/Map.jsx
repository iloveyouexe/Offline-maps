import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';

function Map() {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      const result = await axios('/api/map');
      setMapData(result.data);
    };
    fetchMapData();
  }, []);

  // Need to adjust z,x,y and set coordinates for further testing

  useEffect(() => {
    if (mapData) {
      const map = L.map('map').setView(mapData.center, mapData.zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);
      mapData.markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng]).addTo(map);
      });
    }
  }, [mapData]);

  return <div id="map"></div>;
}

export default Map;
