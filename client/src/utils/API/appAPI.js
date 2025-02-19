import axios from 'axios'
import store from '../../redux/store'
import { setContacts } from '../../redux/actions'

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

const appAPI = {
  getAllContacts: async ()=>{
    const response = await axios.get(`${REACT_APP_BASE_URL}/`)
    if (response.status === 200){
      let contacts = response.data
      store.dispatch(setContacts(contacts))
    }
  },
   addContact: async (newContact)=> {
     const response = await axios.post(`${REACT_APP_BASE_URL}/addcontact`, newContact)
     if (response.status === 200){
      let contacts = response.data
      store.dispatch(setContacts(contacts))
    }
   },
   deleteContact: async (_id) => {
    const response = await axios.delete(`${REACT_APP_BASE_URL}/deletecontact`, {data:{ _id}})
    if (response.status === 200){
      let contacts = response.data
      store.dispatch(setContacts(contacts))
    }
   },
   updateContact: async (updatedContact) => {
    const response = await axios.patch(`${REACT_APP_BASE_URL}/updatecontact`, updatedContact)
    if (response.status === 200){
      let contacts = response.data
      store.dispatch(setContacts(contacts))
    }
},
// searchContact: async (search) => {
//   const response = await axios.post(`${REACT_APP_BASE_URL}/searchcontact`, {search})
//   if (response.status === 200){
//     let contacts = response.data
//     store.dispatch(setContacts(contacts))
//   }
// },
searchContact: async (search) => {
  const response = await axios.get(`${REACT_APP_BASE_URL}/searchcontact?search=${search}`)
  if (response.status === 200){
    let contacts = response.data
    store.dispatch(setContacts(contacts))
  }
}
}

export default appAPI