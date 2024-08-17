import React, { useState, useEffect } from "react";
// import './LocationButton.css';
import "../Form.css";
const apiKey = import.meta.env.VITE_LOCATION_API_KEY; // Replace with your OpenCage API key

const LocationButton = ({ setter, name, heading, error }) => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [locationDetails, setLocationDetails] = useState({
    district: "",
    state: "",
  });

  // useEffect(() => {
  //   let location = localStorage.getItem("CompleteForm");
  //   if (location) {
  //     location = JSON.parse(location);
  //     setCoordinates(location?.A10 ?? "");
  //     setLocationDetails(location?.A10 ?? "");
  //   }
  // }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });

          fetchLocationDetails(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const components = data.results[0].components;
        setLocationDetails({
          district: components.county || "",
          state: components.state || "",
        });
        setter((prev) => {
          return {
            ...prev,
            [name]: {
              ...prev[name],
              district: components.county || "",
              state: components.state || "",
            },
          };
        });

        setter((prev) => {
          return {
            ...prev,
            [name]: {
              latitude: latitude,
              longitude: longitude,
              district: components.county,
              state: components.state,
            },
          };
        });
      } else {
        console.error("No results found.");
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };

  return (
    <div className="location-button-container">
      <h3>{heading} : Location :</h3>
      <button className="location-button" onClick={getLocation}>
        Get Current Location
      </button>
      {error && <p className="error">{error}</p>}
      {coordinates.latitude && coordinates.longitude && (
        <div className="coordinates-display">
          <p>Latitude: {coordinates.latitude}</p>
          <p>Longitude: {coordinates.longitude}</p>
        </div>
      )}
      {(locationDetails.district || locationDetails.state) && (
        <div className="location-details-display">
          <p>District: {locationDetails.district}</p>
          <p>State: {locationDetails.state}</p>
        </div>
      )}
    </div>
  );
};

export default LocationButton;
