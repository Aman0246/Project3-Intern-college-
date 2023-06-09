const { default: mongoose } = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    fullName: {
      type: String,
      required: true
    },
    logoLink: {
      type: String,
      required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  });
  
  const CollegeModel = mongoose.model('college model', collegeSchema);
  
  module.exports = {CollegeModel}
// { name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }