import { useState, useEffect } from 'react';

function useGeoLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [current, setCurrent] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude == undefined ? "4.60971" : latitude}&lon=${longitude == undefined ? "-74.08175" : longitude}&appid=${KEY}`;
    const res = await fetch(link);
    const data = await res.json();
    setCurrent(data);
  };

  const handleSuccess = (data) => {
    const { latitude, longitude } = data.coords;
    fetchWeatherData(latitude, longitude);
  };

  const handleError = () => {
    console.log("Sin Permisos de Ubicacion");
    fetchWeatherData()
  };

  useEffect(() => {
   
    if(latitude === null && longitude === null) { 
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      fetchWeatherData(latitude, longitude)
      console.log(latitude)
      console.log(longitude)
    }

  }, [latitude, longitude]);

  return { setLatitude, setLongitude, current };
}

export default useGeoLocation;
