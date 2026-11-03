const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({

    street: String,
    city: String,
    state: String,
    zip: String,
    country: String


})
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String
    },
    FullName: {
        firstName: { type: String, required: true },
        lastName:  { type: String, required: true }
    },
    role: {
        type: String,
        enum: ['user', 'seller'],
        default: 'user'
    },
    addresses: [
        addressSchema
    ]
})

const userModel = new mongoose.model("user", userSchema)

module.exports = userModel