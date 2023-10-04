import React, { useState } from "react";
import "./style/globalStyle.css"
import Iventario from "./components/Iventario";

function App() {
  // let click = false

  // const [exibeImagem, controlaImagem] = useState(false)
  // const [apiName, setApiName] = useState("Alo");

  const link = "http://localhost:3000/items"

  // fetch(link)
  // .then(response => response.json())
  // .then(data => {
  //   // Suponha que data tenha uma propriedade 'apiName' com o nome da API
  //   data.forEach(item => {
  //     setApiName(item.nome);
  //   });
  // })
  // .catch(err => console.log(err))





  return (
    <div className="app">
      <h1 className="app-nome">Inventario</h1>
      <Iventario/>
    </div>
  );
}

export default App;
