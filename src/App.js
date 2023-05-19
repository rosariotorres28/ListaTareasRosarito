import React from "react";
import Titulo from "./components/Titulo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Subtitulo from "./components/Subtitulo"
import Formulario from "./components/Formulario";


function App() {
  return (
    <div>
      <Titulo Rosario= "Rosario"></Titulo>
      <Subtitulo></Subtitulo>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
