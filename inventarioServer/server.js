import "dotenv/config.js"
import app from "./src/app.js";

const port = 3000;

app.listen(port, () =>{
    console.log(`Escutando na porta http://localhost:${port}`);
});

