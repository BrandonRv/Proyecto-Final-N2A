import { useState, useEffect } from 'react';

function useGeoLocation() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    const res = await fetch(link);
    const data = await res.json();
    setCurrent(data);
  };

  const handleSuccess = (data) => {
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
    fetchWeatherData(latitude, longitude);
  };

  const handleError = () => {
    console.log("Sin Permisos de Ubicacion");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { lat, long, current };
}

export default useGeoLocation;
