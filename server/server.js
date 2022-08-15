const express = require("express");
const cors = require("cors")
const newUser = require("./login")
const order = require("./createOrder")
const port = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
require("./db/connection")
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())


app.use(newUser)
app.use(order)


app.listen(port, () => {
    console.log(`Server running on post ${port}`)
})