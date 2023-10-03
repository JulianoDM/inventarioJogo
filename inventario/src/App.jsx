import img from "./img/espada.png";
import cajado from "./img/cajado.png"
import React, { useState } from "react";

function App() {
  let click = false

  const [exibeImagem, controlaImagem] = useState(false)
  const [apiName, setApiName] = useState("Alo");

  const link = "http://localhost:3000/items"

  fetch(link)
  .then(response => response.json())
  .then(data => {
    // Suponha que data tenha uma propriedade 'apiName' com o nome da API
    data.forEach(item => {
      setApiName(item.nome);
    });
  })
  .catch(err => console.log(err))


    const item = {
      nome:"Escalibur", 
      img:img
    }



  return (
    <div className="App">
      <label htmlFor="inventario">Escolha um tipo de item</label>
      <select id="inventario" name="fruta">
        <option value="armaCorpo">Armas Corpo a corpo</option>
        <option value="armaDistancia">Armas a Distância</option>
        <option value="armaMagia">Magias</option>
      </select>

      <section className="inventario-container">
        <ul>
          <li className="inventario-item">{apiName}</li>
          {/* <li className="inventario-item" onClick={exibeNomeItem}>{item2.nome}</li> */}
        </ul>

        <div className="inventario-item-img">
          {exibeImagem ? <img  src={item.img} alt="Item selecionado" /> : <div></div>}
          
          <span>Nome do item</span>
        </div>
      </section>

      <script></script>
    </div>
  );
}

export default App;
