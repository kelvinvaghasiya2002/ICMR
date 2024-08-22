import React, { useState, useEffect } from "react";
import "../Form.css";
const apiKey = import.meta.env.VITE_LOCATION_API_KEY; // Replace with your OpenCage API key

const LocationButton = ({ setter, Name, heading, error }) => {
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const [locationDetails, setLocationDetails] = useState({
    district: "",
    state: "",
  });
  const [manualEntry, setManualEntry] = useState(false);

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
            [Name]: {
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

  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "latitude" || name === "longitude") {
      setCoordinates((prev) => ({
        ...prev,
        [name]: value,
      }));

      setter((prev) => ({
        ...prev,
        [Name]: {
          ...prev[Name],
          [name]: value
        },
      }));

    } else {
      const { name, value } = e.target;
      setLocationDetails((prev) => ({
        ...prev,
        [name]: value,
      }));

      setter((prev) => ({
        ...prev,
        [Name]: {
          ...prev[Name],
          [name]: value
        },
      }));
    }

    
  };

  return (
    <div className="location-button-container">
      <h3>{heading} : Location :</h3>
      <button className="location-button" onClick={getLocation}>
        Get Current Location
      </button>
      <button
        className="location-button"
        onClick={() => setManualEntry(!manualEntry)}
      >
        Enter Manually
      </button>
      {error && <p className="error">{error}</p>}
      {coordinates.latitude && coordinates.longitude && !manualEntry && (
        <div className="coordinates-display">
          <p>Latitude: {coordinates.latitude}</p>
          <p>Longitude: {coordinates.longitude}</p>
        </div>
      )}
      {(locationDetails.district || locationDetails.state) && !manualEntry && (
        <div className="location-details-display">
          <p>District: {locationDetails.district}</p>
          <p>State: {locationDetails.state}</p>
        </div>
      )}
      {manualEntry && (
        <div className="manual-entry-fields">
          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={coordinates.latitude}
            onChange={handleManualInputChange}
          />
          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={coordinates.longitude}
            onChange={handleManualInputChange}
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={locationDetails.district}
            onChange={handleManualInputChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={locationDetails.state}
            onChange={handleManualInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default LocationButton;