import React from 'react'
import { Link } from "react-router-dom";
import user from "../images/user.png"
import { useContactsCrud } from '../context/ContactsCrudContext';

const ContactCard = (props) => {

  const {id,name,email} = props.contacts;

  return (
    <div className="item">
    <img className="ui avatar image" src={user} alt="user"/>
    <div className="content">
      
      <Link to={ `/details/${id}`}
       state={{contact: props.contacts}}>
      <div className="header">{name}</div>
        <div>{email}</div>
      </Link>      
    </div>

    <div className="right floated">
    <Link 
      to={`/edit/${id}`}
      state ={{contact: props.contacts}}
    >
      <i className="edit alternate outline icon" style={{color:"blue", marginTop:"7px"}}></i>

    </Link>

      <Link 
      to={`/delete/${id}`}
      state={{contact: props.contacts}}
       >
      <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
      </Link>
    </div>
    </div>
  )
}

export default ContactCard
