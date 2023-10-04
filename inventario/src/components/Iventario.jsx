import React, {useState} from "react";
import "../style/inventarioStyle.css"

import Carta from "../components/Carta"
import cajado from "../img/cajado.png"
import espada from "../img/espada.png"


function Iventario() {

  const [exibeImagem, controlaImagem] = useState(false)

  function exibirImagem(){
    controlaImagem(!exibeImagem)
  }


  
  return (
    <div  className="inventario-container">

      <ul className="inventario-lista">
        <li onClick={exibirImagem}>
          <a href="#">
            <img src={cajado}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={espada}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={espada}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={espada}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={espada}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={espada}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={cajado}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={cajado}/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={cajado}/>
          </a>
        </li>
      </ul>
      <Carta true={exibeImagem} img={cajado}/>


    </div>
  );
}

export default Iventario;
