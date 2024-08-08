import Contact from "../db/models/contact.js";

const appControllers = {
  getAllContacts: (req, res) => {
    Contact.find().then((contacts) => {
      res.json(contacts)
    }).catch(err => console.log(err))
  },
  addContact: (req, res) => {
    let { fullname, phone, email, category, image, note } = req.body
    let data = { fullname, phone, email, category, image, note }
    let newContact = new Contact(data)
    newContact.save().then(() => {
      Contact.find()
        .then((contacts) => {
          res.json(contacts)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  },
  deleteContact: (req, res) => {
    let { _id } = req.body
    Contact.findByIdAndDelete({ _id })
    .then(() => {
      Contact.find()
        .then((contacts) => {
          res.json(contacts)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  },
  updateContact: (req, res)=>{
let {_id, fullname, phone, email, category, image, note } = req.body
let updatedContact = { fullname, phone, email, category, image, note }
    Contact.findByIdAndUpdate({_id}, updatedContact)
    .then(() => {
      Contact.find()
        .then((contacts) => {
          res.json(contacts)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  },
  // searchContacts: (req, res)=>{
  //   let {search} = req.body
  //   Contact.find({fullname:{$regex:`^${search}`, $options: 'i'}})
  //   .then((contacts) => {
  //     res.json(contacts)
  //   }).catch(err => console.log(err))
  // }
  searchContacts: (req, res)=>{
    let {search} = req.query
    Contact.find({fullname:{$regex:`^${search}`, $options: 'i'}})
    .then((contacts) => {
      res.json(contacts)
    }).catch(err => console.log(err))
  }
}

export default appControllers