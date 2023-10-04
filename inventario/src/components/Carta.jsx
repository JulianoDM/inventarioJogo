import React, { useState } from "react";
import "../style/cartaStyle.css"
import cajado from "../img/cajado.png"

function Carta(props){
    const [mostraItem, controlaItem] = useState(false);

    function exibeImagem(){
        controlaItem(!mostraItem)
    }

    console.log(props);

    return(
        <div className="carta-container">
            <div className="carta">
                {props.true ?<img src={props.img}/> : <div></div>}
            </div>
           { props.true ? <div className="carta-descricao">
                <div className="carta-descricao-titulo">
                    <h2>Espada Dragonica</h2>
                    <span>Arma de curta distância</span>
                </div>
                <h3>ATAQUE:15</h3>
                <h3>DEFESA:0</h3>
                <h3>Magia:Fogo</h3>
                <p><strong>História:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis, laborum officiis soluta harum reiciendis accusamus a! Ullam doloribus beatae tenetur dolorum in quos corporis tempore officiis quisquam? Inventore, necessitatibus!</p>
            </div>: <div></div>}
            
        </div>
    )
}

export default Carta;