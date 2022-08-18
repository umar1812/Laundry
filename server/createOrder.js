const express = require("express")
const order = require("./db/model/orderSchema")
const User = require("./db/model/userSchema")
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const router = express.Router()

router.post("/create", async (req, res) => {
    if (req.headers.authorization) {
        try {
            let sum = parseInt(0)
            for (let i = 0; i < req.body.producttype.length; i++) {
                sum += req.body.producttype[i].count
            }
            const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            try {
                const data = await User.find({ email: email.email });
                console.log(`The data is -- ${data[0].email}`)
                const orders = await order.create({ userid: req.body.orderid, email: data[0].email, producttype: req.body.producttype, items: sum, datetime: req.body.datetime, subtotal: req.body.subtotal });
                console.log(`Order is -- ${orders}`)
                res.status(200).send("successfully order created")
            } catch (err) {
                console.log(err.message)
            }




        } catch (err) {
            res.status(403).send("User Not Authorized")
        }
    } else {
        res.status(400).send("Missing Authorization token")
    }
})

router.get('/history', (req, res) => {
    if (req.headers.authorization) {
        try {
            const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            // console.log(email.email)
            order.find({ email: email.email }).then((orders) => {
                res.status(200).send(orders);
            })
        } catch (err) {
            res.status(403).send("User Not Authorized")
        }
    } else {
        res.status(400).send("Missing Authorization token")
    }
});


router.delete("/cancel/:id", (req, res) => {
    order.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200).send("Order Cancelled Sucessfully")
    }).catch((err) => {
        res.status(400).send(err)
    });
});


module.exports = router