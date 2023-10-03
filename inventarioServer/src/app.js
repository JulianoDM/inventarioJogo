import express from "express";
import main from "./config/dbConnect.js";
import cors from "cors";
import item from "./models/Items.js";
// import { json } from 'express/lib/response';

const conexao = await main();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});


const app = express();

app.use(express.json(), cors());


app.get("/", (req, res) => {
  res.status(200).json({filme:'Banana Assassina'});
});

app.get('/items', async (req,res)  =>{
    const pegaItems = await item.find({})
    res.status(200).json(pegaItems);
});

export default app;
