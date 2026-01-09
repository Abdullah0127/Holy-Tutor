import mongoose from "mongoose";

/* ---------- Sub Schemas ---------- */

// Languages
const languageSchema = new mongoose.Schema({
  language: String,
  level: String
}, { _id: false });

// Availability
const slotSchema = new mongoose.Schema({
  from: String,
  to: String
}, { _id: false });

const daySchema = new mongoose.Schema({
  day: String,
  enabled: Boolean,
  slots: [slotSchema]
}, { _id: false });

// Courses / Specialities
const courseSchema = new mongoose.Schema({
  courseName: String,
  ageGroups: [String],
  oneOnOne: Boolean,
  sharedClass: Boolean,
  customPackage: Boolean
}, { _id: false });


/* ---------- Main Tutor Profile ---------- */

const tutorProfileSchema = new mongoose.Schema({

  /* Form 1 - About */
  name: String,
  gender: String,
  nationality: String,
  residence: String,
  birth: Date,
  email: { type: String, unique: true },
  number: String,
  languages: [languageSchema],

  /* Form 2 - Qualification */
  hafiz: String,
  teaching: String,
  qirat: String,
  recitation: String,
  recitationAudio: String,

  /* Form 3 - Availability */
  timezone: String,
  week: [daySchema],

  /* Form 4 - Specification */
  courses: [courseSchema],

  /* Form 5 - Intro Video */
  introVideo: String,

  /* Meta */
  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("TutorProfile", tutorProfileSchema);
