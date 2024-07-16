import React, { useState } from 'react';
// import './LocationButton.css';
import '../Form.css'

const LocationButton = ({ setter, name, heading }) => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [locationDetails, setLocationDetails] = useState({ district: '', state: '' });
  const apiKey = 'APIKYEOVERHERE'; // Replace with your OpenCage API key

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
          setter((prev) => {
            return {
              ...prev, [name] : { "latitude" : latitude , "longitude" : longitude }
            }
          })
          fetchLocationDetails(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
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
          district: components.county || '',
          state: components.state || '',
        });
      } else {
        console.error('No results found.');
      }
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  return (
    <div className="location-button-container">
      <h3>{heading} : Location :</h3>
      <button className="location-button" onClick={getLocation}>
        Get Current Location
      </button>
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