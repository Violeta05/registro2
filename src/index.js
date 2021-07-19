import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var [nombre, setNome] = useState("");
  var [fecha, setData] = useState("");
  

  function enviar(evt) {
    console.log("Nombre:", nombre);
    console.log("Fecha:", fecha);
    
  }

  return (
    <div>
      <h1>Formulario</h1>
      <p>
        Nombre:
        <input placeholder="Nombre" onChange={evt => setNome(evt.target.value)} />
      </p>
      <p>
        Fecha:
        <input placeholder="Fecha" onChange={evt => setData(evt.target.value)} />
      </p>
     
      <button onClick={enviar}>Registrar</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
