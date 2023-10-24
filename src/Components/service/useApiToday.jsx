import { useState, useEffect } from 'react';

function useApiToday() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent] = useState(null);



  const fetchWeatherData = async (latitude, longitude) => {
    const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude == undefined ? "4.60971" : latitude}&lon=${longitude == undefined ? "-74.08175" : longitude}&appid=${KEY}`;
    const res = await fetch(link);
    const data = await res.json();
    setCurrent(data);
    console.log(data)
  };

  const handleSuccess = (data) => {
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
    fetchWeatherData(latitude, longitude);
  };

  const handleError = () => {
    window.alert("Sin Permisos de Ubicacion");
    fetchWeatherData()
  };


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);


  return { lat, long, current };
}

export default useApiToday;
