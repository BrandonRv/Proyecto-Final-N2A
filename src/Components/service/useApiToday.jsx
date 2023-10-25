import { useState, useEffect } from 'react';

function useApiToday() {
  const [latitude1, setLatitude1] = useState(null);
  const [longitude1, setLongitude1] = useState(null);
  const [current, setCurrent] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
   
    const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude == undefined ? "4.60971" : latitude}&lon=${longitude == undefined ? "-74.08175" : longitude}&appid=${KEY}`;
    const res = await fetch(link);
    const data = await res.json();
    console.log(data)
    setCurrent(data);
  };

  const handleSuccess = (data) => {
    const { latitude, longitude } = data.coords;
    fetchWeatherData(latitude, longitude);
  };

  const handleError = () => {
    window.alert("Sin Permisos de Ubicacion");
    fetchWeatherData()
  };

  useEffect(() => {
   
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  console.log("useToday Lat " + latitude1)
  console.log("useToday Long " + longitude1)

  }, [latitude1, longitude1]);
  return { setLatitude1, setLongitude1, current };
}

export default useApiToday;
