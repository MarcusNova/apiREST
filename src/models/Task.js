import { Schema, model } from 'mongoose';

//Aqui definimos el equema que utilizaremos con mongoose, los valores los podemos especificar unicamente con el tipo
//O tambien podemos usar un JSON que especifique cada campo
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

//Version key es para evitar un campo, el timestamp me permite ver la fecha de creacion y modificacion del objeto
//Para poderlo utilizarlo debo exportarlo como un modelo
export default model('Task', taskSchema);