import { useState, useEffect } from 'react';

function useApiSearch() {
  const [current, setCurrent] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [listaResult, setListaResult] = useState([]);

  const inputSearchIn = event => {
    setInputSearch(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const KEY = "51b373d3e7fd4d6bf55f3c265f7f8cdd";
      const link = `https://api.openweathermap.org/geo/1.0/direct?q=${inputSearch}&limit=5&appid=${KEY}`;
      const res = await fetch(link);
      const data = await res.json();
      setCurrent(data);

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

    getData();
  }, [inputSearch]);

  return { inputSearch, inputSearchIn, listaResult, current };
}

export default useApiSearch;
