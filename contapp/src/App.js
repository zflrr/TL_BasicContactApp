import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import {v4 as uuid} from 'uuid'
import api from '../src/api/contacts'
import ContactDetail from './components/ContactDetail';
import DeleteConfirm from './components/DeleteConfirm';
import EditContact from './components/EditContact';
import { ContactsCrudContextProvider } from './context/ContactsCrudContext';

function App() {

  return (
    <div className="ui container" style={{paddingTop: '70px',}} >
      <Router>
      <Header/>
      <ContactsCrudContextProvider>
      <Routes>

      <Route 
        path="/"
        exact
        element={<ContactList/>}
      />

      <Route
        path="/add"
        element = {<AddContact/>}

      />

      <Route
        path="/edit/:id"
        element = {<EditContact/>}
      />
      
      <Route 
          path="/delete/:id"
          element = {<DeleteConfirm/>}  
        /> 

      <Route path="/details/:id" element={<ContactDetail/>}/> 

      </Routes>
      </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
