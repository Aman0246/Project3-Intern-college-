const { default: mongoose} = require("mongoose");

    const internSchema=new mongoose.Schema({
        name:{
            
            type:String,
            trim:true,
            required:true,
            validate: {
              validator: function(value) {
                const nameRegex =  /^[a-z ,.'-]+$/i;
                return nameRegex.test(value);
              },
              message: 'Invalid Name format'
            }
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            validate: {
                validator: function(value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailRegex.test(value);
                },
                message: 'Invalid email format'
              }
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
            validate: {
              validator: function(value) {
                const mobileRegex = /^[0-9]{10}$/;
                return mobileRegex.test(value);
              },
              message: 'Invalid mobile number format'
            }
          },
        collegeId:{
            require:true,
            type:mongoose.Types.ObjectId,
            ref:"CollegeModel",
        },
        isDeleted:{
            type:Boolean,
            default:false
        }

    })  

    const InternModel= new mongoose.model("InternModel",internSchema)
    module.exports={InternModel}

// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}