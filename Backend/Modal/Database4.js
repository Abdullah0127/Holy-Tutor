import mongoose from "mongoose";

const specialitiesSchema = new mongoose.Schema({
    coursename:{
        type: String
    },
    agegroup:{
        type: [String]
        
    },
    oneonone:{
        type: Boolean,
        default: false
    },
    sharedclass:{
        type: Boolean,
        default: false
    },
    custompackage:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model('specialities', specialitiesSchema)