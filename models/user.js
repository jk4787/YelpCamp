const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true  //not validation but sets up an index
    }
})

UserSchema.plugin(passportLocalMongoose);   //this adds a pw and username field to schema

module.exports = mongoose.model('User', UserSchema);