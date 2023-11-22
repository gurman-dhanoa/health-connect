import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";


const libraries = ["places"];

const Analyser = ({coordinates,label}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  return (
    isLoaded &&
    <>
          <GoogleMap
            center={coordinates}
            zoom={5}
            mapContainerStyle={{ width: "100%", height: "100vh" }}
            options={{
              zoomControl:false,
              mapTypeControl:false,
              fullscreenControl:false,
              streetViewControl:false
            }}
          >
            <MarkerF position={coordinates} label={`${label}`}/>
          </GoogleMap>
    </>
  )
}

export default Analyser