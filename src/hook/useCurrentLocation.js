import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser.');
        return;
      }

      const successHandler = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      };

      const errorHandler = (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('User denied the request for Geolocation.');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            setError('The request to get user location timed out.');
            break;
          case error.UNKNOWN_ERROR:
            setError('An unknown error occurred.');
            break;
          default:
            setError('An unknown error occurred.');
        }
      };

      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    };

    getLocation();
  }, []);

  return { location, error };
};

export default useCurrentLocation;
