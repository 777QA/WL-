import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Attraction } from '@/data/attractions';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapComponentProps {
  attractions: Attraction[];
}

export default function MapComponent({ attractions }: MapComponentProps) {
  const center: [number, number] = [36.0, 118.5];

  return (
    <MapContainer
      center={center}
      zoom={7}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {attractions.map((attraction) => (
        <Marker
          key={attraction.id}
          position={[attraction.lat, attraction.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="min-w-[200px]">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-semibold text-lg mb-1">{attraction.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{attraction.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-ochre/10 text-ochre px-2 py-1 rounded-full">
                  {attraction.city}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
