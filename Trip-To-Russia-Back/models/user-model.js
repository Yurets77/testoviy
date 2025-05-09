const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{type:String, required: true},
    surname:{type:String, required: true},
    email:{type: String, unique: true, required: true},
    telephone:{type:String, required: true},
    gender:{type:String, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},

})

module.exports = model('User', UserSchema);