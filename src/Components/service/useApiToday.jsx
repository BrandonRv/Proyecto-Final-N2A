import { useState, useEffect } from 'react';

function useApiToday() {
  const [latitude1, setLatitude1] = useState(null);
  const [longitude1, setLongitude1] = useState(null);
  const [current, setCurrent] = useState(null);

  const fetchWeatherData = async (latitude1, longitude1) => {
    const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude1 == undefined ? "4.60971" : latitude1}&lon=${longitude1 == undefined ? "-74.08175" : longitude1}&appid=${KEY}`;
    const res = await fetch(link);
    const data = await res.json();
    setCurrent(data);
  };

  const handleSuccess = (data) => {
    const { latitude1, longitude1 } = data.coords;
    fetchWeatherData(latitude1, longitude1);
  };

  const handleError = () => {
    window.alert("Sin Permisos de Ubicacion");
    fetchWeatherData()
  };

  useEffect(() => {
   
    if(latitude1 === null && longitude1 === null) { 
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      fetchWeatherData(latitude1, longitude1)
      console.log(latitude1)
      console.log(longitude1)
    }

  }, [latitude1, longitude1]);


  return { setLatitude1, setLongitude1, current };
}

export default useApiToday;
