const { default: mongoose } = require("mongoose");

    const internSchema=new mongoose.Schema({
        name:{
            
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            validate: {
                validator: function(value) {
                  // Regular expression to validate email format
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
                // Regular expression to validate mobile number format
                const mobileRegex = /^[0-9]{10}$/;
                return mobileRegex.test(value);
              },
              message: 'Invalid mobile number format'
            }
          },
        collegeId:{
            require:true,
            type:mongoose.Types.ObjectId,
            ref:"college model",

        },
        isDeleted:{
            type:Boolean,
            default:false
        }

    })  

    const internModel= new mongoose.model("internModel",internSchema)
    module.exports={internModel}

// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}