import { HANDLE_INPUT, ADD_CONTACT, EDIT_CONTACT, SET_CONTACTS } from './types'

let initialState = {
    contacts: [],
    type:'',
    search: '',
    fullname: '',
    email: '',
    phone: '',
    category: '',
    note: '',
    image:'',
    editFullname: '',
    editEmail: '',
    editPhone: '',
    editCategory: '',
    editNote: '',
    editId: '',
    editImage:''
}

// reducer is used to modify state
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ADD_CONTACT:
            let newContact = {
                fullname: state.fullname,
                email: state.email,
                phone: state.phone,
                category: state.category,
                note: state.note,
                image: state.image,
            
            }
            return {
                ...state,
                fullname: '',
                email: '',
                phone: '',
                category: '',
                note: '',
                image:'',
                contacts: [newContact, ...state.contacts]
            }
  
        case EDIT_CONTACT:

            let editContact = state.contacts.find((contact) => contact._id === action.payload)
            return {
                ...state,
                editFullname: editContact.fullname,
                editEmail: editContact.email,
                editPhone: editContact.phone,
                editCategory: editContact.category,
                editNote: editContact.note,
                editId: action.payload,
                editImage: editContact.image
            }
    
case SET_CONTACTS:
    let contacts = action.payload
    return{
        ...state,
        fullname: '',
        email: '',
        phone: '',
        category: '',
        note: '',
        image:'',
        editFullname: '',
        editEmail: '',
        editPhone: '',
        editCategory: '',
        editNote: '',
        editId: '',
        editImage:'',
        contacts: contacts
    }
        default:
            return state;
    }
}

export default reducer