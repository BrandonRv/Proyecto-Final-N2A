import { useState, useEffect } from 'react';

function useApiState() {

  const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd"
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [current, setCurrent]= useState(null);

  useEffect(() => {
    if (lat === null && long === null) return;

    const getData = async () => {
      const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}`;
      const res = await fetch(link);
      const data = await res.json();
      
      console.log(data);
      setCurrent(data);
    }

    getData();

  }, [lat, long]);

  const handleSuccess = (data) => {
    console.log("Ubicacion Actual", data);
    const { latitude, longitude } = data.coords;
    setLat(latitude);
    setLong(longitude);
  };

  const handleError = () => {
    console.log("Sin Permisos de Ubicacion")
  }

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }

  return { handleLocation };
}

export default useApiState();