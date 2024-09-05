import React from 'react';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext'


const DeleteConfirm = () => {


  const location = useLocation()
  const {id, name} = location.state.contact
  const{removeContactHandler} = useContactsCrud()
  const navigate = useNavigate()

    const handleDelete = () => {
      removeContactHandler(id)
      navigate("/")
    }
    
  return (
    <div className="ui segment">
        <div className="ui container center aligned">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete contact "{name}" ?</p>
      <Link to="/">
      <button className="ui button red" onClick={handleDelete} >Yes</button>
      </Link>
      <Link to="/">
      <button className="ui button green" >No</button>
      </Link>
    </div>
    </div>
 
  );
};

export default DeleteConfirm;
