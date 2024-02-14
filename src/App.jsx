import { useState } from "react";
import { useFetch } from "./hook/useFetch";

const App = () => {
  const [counter, setCounter] = useState(0); //declara el estado del contador en cero y la funcion para actualizar ese estado

  const { data, loading, error } = useFetch( // hace la llamada a la API que contendra tres valores
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) { //si esta cargando 
    return <h1>Loading...</h1>; //mostrara ese mensaje
  }

  if (error) {
    return <h1>{error}</h1>; //mostrara el mensaje de error
  }

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setCounter(counter + 1)}> {/*si no hay errores incrementara el contador */}
        incremento {counter}
      </button>
      <ul>
        {data.map((user) => ( 
          <li key={user.id}>{user.name}</li> //regresara la lista de elementos del user
        ))}
      </ul>
    </>
  );
};

export default App;
