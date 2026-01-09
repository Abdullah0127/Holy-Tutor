import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  hafiz: {
    type: String,   // "Hafiz" or "Offline"
   
  },
  teaching: {
    type: String   // Teaching experience
  },
  qirat: {
    type: String   // Qira'at styles
  },
  recitation: {
    type: String   // Recitation level
  },
  recitationAudio: {
    type: String   // File path or URL
  }
});

export default mongoose.model("qualification", qualificationSchema);