import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.model("StudentUser", studentSchema)