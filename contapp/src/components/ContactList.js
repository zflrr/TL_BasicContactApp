import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'
import { useContactsCrud } from '../context/ContactsCrudContext'

const ContactList = (props) => {
   const {contacts,retrieveContacts,searchTerm,searchResults,searchHandler} = useContactsCrud()

    useEffect(()=> {
      retrieveContacts()
    },[])

    const renderContactList = (searchTerm.length < 1 ? contacts: searchResults ).map((contacts)=>{
      return(
      <ContactCard contacts={contacts} key={contacts.id}/>
    )
    })

    const onUserSearch = (e) =>{
      searchHandler(e.target.value)
    }

  return (
    <div className="main">
      <h2>Contact List 
        <Link to="/add"><button className="ui button green" style={{float: 'right'}}>Add Contact</button> </Link>
      </h2>

    <div className="ui search">
      <div className="ui icon input">
      <input
       type="text" 
       placeholder="search contacts" 
       className="prompt" 
       value={searchTerm} 
       onChange={(e)=> onUserSearch(e)}
       />
        <i className="search icon"></i>
      </div>
    </div>


    <div className="ui celled list">
      {renderContactList.length > 0 ? renderContactList : "no contact available"}
    </div>
    
    </div>
  )
}

export default ContactList
