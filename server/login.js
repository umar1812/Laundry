const express = require("express");
const router = express.Router()
const User = require("./db/model/userSchema")
const bcrypt = require("bcryptjs")


router.post("/login", async (req, res) => {
    try {
        const login = await User.findOne({ $or: [{ email: req.body.id }, { phone: req.body.id }] })
        if (login) {
            const match = await bcrypt.compare(req.body.pass, login.pass)
            const token = await login.generateToken()
            if (match) {
                res.status(200).send(token)
                console.log("logged in")
            } else {
                res.status(400).send("Invalid user")

            }
        } else {
            res.status(400).send("Invalid credentials")
        }

    } catch (err) {
        console.log("Invalid login details")
        res.send("Invalid login details")
    }
})

router.post("/register", async (req, res) => {
    console.log(req.body);
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            add: req.body.add,
            pin: req.body.pin,
            pass: req.body.pass
        })
        const newUser = await user.save();
        console.log(newUser, "User added successfully");
        res.status(201).send(newUser)

    } catch (err) {
        res.status(500).send()
        console.log(err.message + "Status code 500")
    }
})

module.exports = router;