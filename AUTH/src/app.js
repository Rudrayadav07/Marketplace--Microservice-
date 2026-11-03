require("dotenv").config()
const express = require("express")
const connectDB = require("./db/db")
const cookieParser = require("cookie-parser")
const app = express()

connectDB()
app.use(express.json())
app.use(cookieParser())

module.exports = app