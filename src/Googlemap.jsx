import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDU62aVm_meOcrEaDlJfp0AffuTa3sYKJE&callback=initMap`;
    googleMapScript.async = true;
    window.initMap = initMap;
    document.body.appendChild(googleMapScript);

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 8,
    });

    // Add any additional map functionality here
  };

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMap;
