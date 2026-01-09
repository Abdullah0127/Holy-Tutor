import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  from: String,
  to: String
}, { _id: false });

const daySchema = new mongoose.Schema({
  day: String,
  enabled: Boolean,
  slots: [slotSchema]
}, { _id: false });

const availabilitySchema = new mongoose.Schema({
  timezone: {
    type: String,
    
  },
  week: [daySchema]
});

export default mongoose.model("availability", availabilitySchema);
