import { createContext, useContext, useState } from "react";
import api from "../api/contacts"
import {v4 as uuid} from 'uuid'


const contactsCrudContext = createContext()

export function ContactsCrudContextProvider({children}){

    const [contacts,setContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    //retrieve contacts
    const retrieveContacts = async() =>{
        const response = await api.get("/contacts")
        if(response.data) setContacts(response.data)
      }


    //delete contacts
    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`)
        const newContactList = contacts.filter((contact) => {
        return contact.id !== id
        })
      setContacts(newContactList)
      }
    
    //Add Contact
      const addContactHandler = async (contact)=>{
        const request = {
          id:uuid(),
          ...contact,
        }
        const response = await api.post("/contacts", request)
        setContacts([...contacts, response.data])
      }

    //Update Contact
    const updateContactHandler = async (contact) =>{
        const response = await api.put(`/contacts/${contact.id}`, contact)
        const {id} = response.data
        setContacts(
          contacts.map((contact)=>{
          return contact.id === id ? {...response.date} : contact
        })
      )
      }

    //Search Contact
    const searchHandler =(searchTerm) => {
      setSearchTerm(searchTerm)
      if(searchTerm !== ""){
        const newContactList = contacts.filter((contact) =>{
          return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        })
        setSearchResults(newContactList)
      }
      else{
        setSearchResults(contacts)
      }
    }

      
    const value = {
        contacts,
        searchTerm,
        searchResults,
        searchHandler,
        retrieveContacts,
        removeContactHandler,
        addContactHandler,
        updateContactHandler

    }

    return <contactsCrudContext.Provider value={value}>
        {children}

    </contactsCrudContext.Provider>

}

export function useContactsCrud() {
    return useContext(contactsCrudContext)
}