import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  constructor() {
    super();
    const MyMapComponent = props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    );
  }

  render() {
    return <div>map</div>;
  }
}

export default Map;
