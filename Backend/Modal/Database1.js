import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  gender: String,
  nationality: String,
  residence: String,   // Country of Residence
  birth: Date,         // Date of Birth
  email: {
    type: String,
    required: true,
    unique: true
  },
  number: String,      // Phone Number

  languages: [
    {
      language: String,
      level: String
    }
  ]
});

export default mongoose.model("about", aboutSchema);