import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [current1, setCurrent1] = useState(null);
  const [current2, setCurrent2] = useState(null);
  const [current3, setCurrent3] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [listaResult, setListaResult] = useState([]);

  const inputSearchIn = (event) => {
    setInputSearch(event.target.value);
  };

  const mostrarResultados = () => {
    console.log("Mostrando resultados activado");
    setLatitude(current3[0]?.lat);
    setLongitude(current3[0]?.lon);
  };

  const geoPosition = async() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  const handleSuccess = (data) => {
    const { latitude, longitude } = data.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handleError = () => {
    console.log("Sin permisos de ubicación");
    window.alert("Sin Permisos de Ubicacion");
  };

  useEffect(() => {

    const fetchWeatherData = async () => {
      const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
      const link3 = `https://api.openweathermap.org/geo/1.0/direct?q=${inputSearch === undefined ? "Bogota Capital District - Municipality" : inputSearch}&limit=5&appid=${KEY}`;
      const res3 = await fetch(link3);
      const data = await res3.json();
      setLatitude(data[0]?.lat);
      setLongitude(data[0]?.lon);
      setCurrent3(data);
      const link1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude === undefined ? "4.6534649" : latitude}&lon=${longitude === undefined ? "-74.0836453" : longitude}&appid=${KEY}`;
      const res1 = await fetch(link1);
      const data1 = await res1.json();
      setCurrent1(data1);
      const link2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude === undefined ? "4.6534649" : latitude}&lon=${longitude === undefined ? "-74.0836453" : longitude}&appid=${KEY}`;
      const res2 = await fetch(link2);
      const data2 = await res2.json();
      setCurrent2(data2);
      console.log("Ciudad Actual " + current3[0]?.name)
      console.log("Real latitud 10.48801 y longitud -66.87919.")


      const results = data.map(item => {
          return (
            item.name.toLowerCase() +
            ", " +
            (item.state || "") +
            ", " +
            item.country
          );
        });
        setListaResult(results);
    };

    fetchWeatherData();
  }, [latitude, longitude, inputSearch]);

  const contextValue = {
    current1,
    mostrarResultados,
    current2,
    inputSearchIn,
    inputSearch,
    geoPosition,
    listaResult,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
