import mongoose, {Schema} from "mongoose";

const itemSchema = new mongoose.Schema({
    id: {type: Schema.ObjectId},
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
},{ versionKey: false });

const item = mongoose.model("items", itemSchema);

export default item;