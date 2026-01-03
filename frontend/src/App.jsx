import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./index.css";

const API = "https://github.com/anchal-gupta-28/Contact-manager.git";

function App() {
  const [contacts, setContacts] = useState([]);

  // Load contacts from MongoDB
  useEffect(() => {
    axios.get(API).then((res) => setContacts(res.data));
  }, []);

  // Add contact
  const addContact = async (contact) => {
    const res = await axios.post(API, contact);
    setContacts([...contacts, res.data]);
  };

  // Delete contact
  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    setContacts(contacts.filter((c) => c._id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Contact Manager</h1>
        <p>Manage your contacts professionally</p>
      </header>

      <main className="container">
        <ContactForm onAdd={addContact} />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </main>
    </div>
  );
}

export default App;
