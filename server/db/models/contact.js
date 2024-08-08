import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
fullname:{
  type: String,
  required: true
},
phone: {
  type: String,
},
email: {
  type: String 
},
category:{
  type: String
},
note:{
  type: String
},
image:{
  type: String
},
})

const Contact = mongoose.model("Contact", contactSchema)

export default Contact