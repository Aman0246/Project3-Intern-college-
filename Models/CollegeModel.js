const { default: mongoose } = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
      type: String,
       trim:true,
      required: true,
      unique: true,
      validate: {
        validator: function(value) {
          // Regular expression to validate mobile number format
          const nameRegex =  /^[a-z ,.'-]+$/i;
          return nameRegex.test(value);
        },
        message: 'Invalid Name format'
      }
    },
    fullName: {
      type: String,
      required: true,
       trim:true,
      validate: {
        validator: function(value) {
          // Regular expression to validate mobile number format 
          const fullName = /[a-z ,.'-]*(College|University|Institute)[^,\d]*(?=,|\d)/ ;
          return fullName.test(value);
        },
        message: 'Invalid fullName format'
      }
      
    },
    logoLink: {
      type: String,
      required: true,
       trim:true,
      validate: {
        validator: function(value) {
          // Regular expression to validate mobile number format
          const logoLink =  /https?:\/\/[^\s/$.?#].[^\s]*$/
          ;
          return logoLink.test(value);
        },
        message: 'Invalid logoLink format'
      }
      },
    isDeleted: {
      type: Boolean,
      default: false
    }
  });
  
  const CollegeModel = mongoose.model('CollegeModel ', collegeSchema);
  
  module.exports = {CollegeModel}
