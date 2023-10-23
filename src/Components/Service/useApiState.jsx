import { useState, useEffect } from 'react';

// Definir el hook personalizado para manejar datos de una API
function useApiState(apiUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//////////////////////////////// Ajust ///////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
 useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [apiUrl]);

  // Devolver los datos, el estado de carga y los errores
  return { data, loading, error };
}

export default useApiState;