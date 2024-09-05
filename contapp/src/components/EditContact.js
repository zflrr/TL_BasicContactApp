import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCrudContext'


const EditContact = () => {

    
    const location = useLocation()
    const {id,name,email} = location.state.contact
    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const{updateContactHandler} = useContactsCrud()
    const navigate = useNavigate()


    const update =(e) =>{
        
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(newName === "" || newEmail === "")
        {
            alert ("All the fields are mandatory !")
            return
        }
        if (!emailRegex.test(newEmail)) {
            alert("Invalid email format! Please use correct email format.");
            return;
        }
        updateContactHandler({id, name:newName, email:newEmail})
        setNewName("")
        setNewEmail("")
        navigate("/")
    }
    
return(
            <div className="main">
                <h2>Edit Contact  
            <Link to="/">
            <button className="ui button blue center" style={{float: 'right'}}>Back to Contact List</button>
            </Link>
            
            </h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={newName} onChange={(e)=> setNewName(e.target.value)}/>                        
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={newEmail} onChange={(e)=> setNewEmail( e.target.value)}/>                        
                    </div>
                    <button className="ui button blue">Update</button>
                </form>

          
            </div>
        )
    

}

export default EditContact;