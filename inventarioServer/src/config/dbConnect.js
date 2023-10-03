import mongoose from "mongoose";

// main().catch(err => console.log(err));

async function main() {
        mongoose.connect(process.env.DB_LINK);
        return mongoose.connection;
}

export default main;

//Sb5OSwxmFLLpsQHy