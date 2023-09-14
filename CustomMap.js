import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class CustomMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  handleMapClick = (e) => {
    const { markers } = this.state;
    markers.push(e.latlng);
    this.setState({ markers });
  };

  render() {
    const { markers } = this.state;

    return (
      <MapContainer
        center={[-25.541054, -54.578975]}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        onClick={this.handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((position, index) => (
          <Marker key={index} position={position}>
            <Popup>
              Marker {index + 1} <br /> Lat: {position.lat.toFixed(6)}, Lng: {position.lng.toFixed(6)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default CustomMap;
