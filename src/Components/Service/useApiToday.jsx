import { useState, useEffect } from 'react';

function useApiToday({ data, setInputLoc }) {
  const [data, setData] = useState({
    dataRecup: [],
    dataWeather: null,
    dataFore: null,
  });

  const [inputLoc, setInputLoc] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const responseLoc = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputLoc || "helsinki"}&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca`);
        const locData = await responseLoc.json();
        const [location] = locData;
        
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat || "60.6072482"}&lon=${location.lon || "21.4450425"}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
        const weatherData = await responseWeather.json();
        
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat || "60.6072482"}&lon=${location.lon || "21.4450425"}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
        const forecastData = await responseForecast.json();
        
        setData({
          dataRecup: locData,
          dataWeather: weatherData,
          dataFore: forecastData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [inputLoc]);

  return { data, setInputLoc };
}

export default useApiToday;
