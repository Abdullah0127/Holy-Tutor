import mongoose, { mongo } from "mongoose";


const introSchema = new mongoose.Schema({
    Vedio:{
        type: String
    }
})

export default mongoose.model('Intro', introSchema)