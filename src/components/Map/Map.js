import React, {useState} from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow  } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "640px",
};

const center = {
  lat: 49.84,
  lng: 24.0,
};

const iconPath =
  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z";

const apiKey = "AIzaSyDVWdDcS5Wr5fal-WOKXdPv3A8B-kF2ii8"

 
const Map = ({ organizationList, activeOrganization }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {organizationList.map((organization) => (
          <Marker
            icon={{
              path: iconPath,
              fillColor:
                activeOrganization == organization.key ? "red" : "blue",
              fillOpacity: 0.9,
              scale: 2,
              strokeWeight: 1,
            }}
            key={organization.key}
            position={{
              lat: organization.location.lat,
              lng: organization.location.lon,
            }}
            onClick={() => handleActiveMarker(organization.key)}
          >
            {activeMarker === organization.key &&  
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{organization.name}</div>
            </InfoWindow>
            }
          </Marker>
        ))}
      </GoogleMap>
    )
  );
}

export default Map;
