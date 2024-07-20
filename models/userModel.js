const  mongoose  = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_name: { type: String, required: true },
    email_id: { type: String,required: true,unique:true },
    mobile_no: { type: String, required: true },
    user_type: { type: String, required: true },
    password: { type: String, required: true }
});
const userModel = mongoose.model("user", userSchema)

module.exports = userModel;