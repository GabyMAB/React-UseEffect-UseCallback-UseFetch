import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => { //se crea la funcion tomando a url
  console.log("useFetch"); // imprime la palabra useFetch

  const [data, setData] = useState(null); //declara es estado de data y setdata 
  const [loading, setLoading] = useState(true); //declara el estado
  const [error, setError] = useState(null); //declara el estado

  const getData = useCallback(async () => { //crear una funcion y hara la llamada 
    try {
      const response = await fetch(url); //crea la promesa esperando la respuesta de la url
      if (!response.ok) { //si se cumple se guardan los datos 
        throw new Error("Error fetching data"); //si no se cumple nuestra un mensaje de error
      }
      const data = await response.json(); //si se cumple se guardan los datos en formato json 
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); //mensaje de que el estado ha finalizado
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};