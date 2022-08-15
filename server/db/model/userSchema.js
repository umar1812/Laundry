const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        },
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
            type: String,
            required: true
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
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token })
        await this.save()
        return token;
    } catch (err) {
        console.log(err.message)
    }
}
const User = mongoose.model("User", userSchema);
module.exports = User;