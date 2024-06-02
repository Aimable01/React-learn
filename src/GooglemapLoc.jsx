import React, { useEffect, useState } from "react";

const LocationMap = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {coordinates && (
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDU62aVm_meOcrEaDlJfp0AffuTa3sYKJE&center=${coordinates.lat},${coordinates.lng}&zoom=15`}
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default LocationMap;
