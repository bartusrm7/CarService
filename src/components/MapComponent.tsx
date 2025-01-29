import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
	useEffect(() => {
		const mapElement = document.getElementById("map");

		if (mapElement && !(mapElement as any)._leaflet_id) {
			const map = L.map("map").setView([50.099552, 18.201866], 15);

			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map);

			L.marker([50.099552, 18.201866]).addTo(map).bindPopup("Your Location").openPopup();
		}
	}, []);

	return <div id='map' className='map'></div>;
};

export default MapComponent;
