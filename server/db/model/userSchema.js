const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String
        }
    }]
})

userSchema.pre("save", async function (next) {
    if (this.isModified("pass")) {
        this.pass = await bcrypt.hash(this.pass, 4);
    }
    next()
})

userSchema.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ email: this.email }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token })
        await this.save()
        return token;
    } catch (err) {
        console.log(err.message)
    }
}
const User = mongoose.model("User", userSchema);
module.exports = User;