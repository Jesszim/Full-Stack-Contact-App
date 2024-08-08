import { HANDLE_INPUT, ADD_CONTACT, EDIT_CONTACT, SET_CONTACTS } from "./types";

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}

export const addContact = () => {
    return {
        type: ADD_CONTACT
    }
}

export const editContact = (id) => {
    return {
        type: EDIT_CONTACT,
        payload: id
    }
}

export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}