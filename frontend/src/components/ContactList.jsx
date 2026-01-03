import React from "react";
import "./List.css";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="card">
      <h2>Contacts</h2>

      {contacts.map((c) => (
        <div className="contact" key={c._id}>
          <div>
            <h3>{c.name}</h3>
            <p>{c.phone}</p>
            <span>{c.email}</span>
          </div>
          <button onClick={() => onDelete(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
