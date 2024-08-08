// const express = require('express')  ----- oldschool
import express from "express"
import cors from 'cors'
import dbConnect from "./db/index.js"
import router from "./routes/appRoutes.js"


const app = express()  // creates http server

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)


dbConnect(app)