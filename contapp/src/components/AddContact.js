import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCrudContext'


const AddContact =() => {

const [email,setEmail] = useState("")
const [name,setName] = useState("")
const{addContactHandler} = useContactsCrud()
const navigate = useNavigate()
    

   const add =(e) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
        e.preventDefault()
        if(name === "" || email === "")
        {
            alert ("All the fields are mandatory !")
            return
        }
        if (!emailRegex.test(email)) {
            alert("Invalid email format! Please use correct email format.");
            return;
        }
        addContactHandler({name, email})
        setName("")
        setEmail("")
        navigate("/")
    }
    

        return(
            <div className="main">
                <h2>Add Contact  
            <Link to="/">
            <button className="ui button blue center" style={{float: 'right'}}>Back to Contact List</button>
            </Link>
            
            </h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Thompson Ken" value={name} onChange={(e)=> setName(e.target.value)}/>                        
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="email@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>                        
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

          
            </div>
        )
    

}

export default AddContact;